import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { Plus, Trash } from "lucide-react";
import { HALLS } from "@/types/enums";

// Strict type definitions
interface Variant {
  id: string;
  name: string;
  variantPrice: number;
}

interface Product {
  id: string;
  name: string;
  price?: number | null;
  Variant?: Variant[]; // This can be undefined
}

interface OrderItemForm {
  productId: string;
  variantId: string | null;
  quantity: number;
  amountPaid: number;
  discount: number;
}

interface APIProduct {
  id: string;
  name: string;
  price?: string | number | null;
  Variant?: Array<{
    id: string;
    name: string;
    variantPrice: string | number;
  }>;
}

// Robust price conversion that handles all possible types
const safePrice = (val: string | number | null | undefined): number => {
  if (val === null || val === undefined || val === "") return 0;
  if (typeof val === "number") return isNaN(val) ? 0 : val;
  const num = parseFloat(String(val));
  return isNaN(num) ? 0 : num;
};

// Convert API product to local product type
const normalizeProduct = (apiProduct: APIProduct): Product => {
  return {
    id: apiProduct.id,
    name: apiProduct.name || "Unknown Product",
    price: apiProduct.price ? safePrice(apiProduct.price) : null,
    Variant: (apiProduct.Variant || []).map((v) => ({
      id: v.id,
      name: v.name || "Unknown Variant",
      variantPrice: safePrice(v.variantPrice),
    })),
  };
};

export function AddOrderModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (b: boolean) => void;
}) {
  const { user } = useUser();

  // State management
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [hall, setHall] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [alternatePhone, setAlternatePhone] = useState("");
  const [roll, setRoll] = useState("");
  const [items, setItems] = useState<OrderItemForm[]>([
    { productId: "", variantId: null, quantity: 1, amountPaid: 0, discount: 0 },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Load products when modal opens
  useEffect(() => {
    if (!open) return;

    setLoadingProducts(true);
    setFormError(null);

    fetch("/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Raw API response:", data);
        const apiProducts = data.products ?? data ?? [];
        const normalizedProducts = apiProducts.map(normalizeProduct);
        console.log("Normalized products:", normalizedProducts);
        setProducts(normalizedProducts);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setFormError("Failed to load products. Please try again.");
      })
      .finally(() => setLoadingProducts(false));
  }, [open]);

  // Set default user name
  useEffect(() => {
    if (user) {
      setUserName(user.fullName || user.firstName || "");
    }
  }, [user]);

  // Calculate line total for an item
  const getLineTotal = (item: OrderItemForm): number => {
    try {
      const prod = products.find((p) => p.id === item.productId);
      if (!prod) return 0;

      const quantity = Math.max(0, item.quantity || 0);

      // Check if product has variants with proper null safety
      if (
        prod.Variant &&
        Array.isArray(prod.Variant) &&
        prod.Variant.length > 0
      ) {
        const variant = prod.Variant.find((v) => v.id === item.variantId);
        return variant ? variant.variantPrice * quantity : 0;
      }

      return (prod.price || 0) * quantity;
    } catch (error) {
      console.error("Error calculating line total:", error);
      return 0;
    }
  };

  // Calculate totals
  const totalValue = items.reduce((acc, item) => acc + getLineTotal(item), 0);
  const totalPaid = items.reduce(
    (acc, item) => acc + Math.max(0, item.amountPaid || 0),
    0
  );
  const totalDiscount = items.reduce(
    (acc, item) => acc + Math.max(0, item.discount || 0),
    0
  );
  const totalRemaining = Math.max(0, totalValue - totalPaid);

  // Handle item changes
  const handleChangeItem = (
    idx: number,
    key: keyof OrderItemForm,
    value: string | number | null
  ) => {
    try {
      setItems((prev) =>
        prev.map((item, i) => {
          if (i !== idx) return item;

          let processedValue = value;

          // Type-specific processing
          if (key === "quantity") {
            processedValue = Math.max(1, Number(value) || 1);
          } else if (key === "amountPaid" || key === "discount") {
            processedValue = Math.max(0, Number(value) || 0);
          }

          return { ...item, [key]: processedValue };
        })
      );
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // Add new item
  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        productId: "",
        variantId: null,
        quantity: 1,
        amountPaid: 0,
        discount: 0,
      },
    ]);
  };

  // Remove item
  const handleRemoveItem = (idx: number) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((_, i) => i !== idx));
  };

  // Form validation
  const validate = (): string | null => {
    try {
      // Basic field validation
      if (!userName.trim()) return "Customer name is required";
      if (!phone.trim()) return "Phone number is required";
      if (!hall) return "Hall selection is required";
      if (!deliveryDate) return "Delivery date is required";

      // Phone validation
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone.replace(/\D/g, ""))) {
        return "Please enter a valid 10-digit phone number";
      }

      // Date validation
      const selectedDate = new Date(deliveryDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        return "Delivery date cannot be in the past";
      }

      // Items validation
      if (!items.length) return "At least one product is required";

      for (const [i, item] of items.entries()) {
        const prod = products.find((p) => p.id === item.productId);
        if (!prod) return `Please select a product for item ${i + 1}`;

        // Check if product has variants with proper null safety
        if (
          prod.Variant &&
          Array.isArray(prod.Variant) &&
          prod.Variant.length > 0 &&
          !item.variantId
        ) {
          return `Please select a variant for ${prod.name}`;
        }

        if (!item.quantity || item.quantity < 1) {
          return `Quantity must be at least 1 for item ${i + 1}`;
        }

        if (item.amountPaid < 0) {
          return `Amount paid cannot be negative for item ${i + 1}`;
        }

        if (item.discount < 0) {
          return `Discount cannot be negative for item ${i + 1}`;
        }
      }

      return null;
    } catch (error) {
      console.error("Validation error:", error);
      return "Validation failed. Please check your inputs.";
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const validationError = validate();
    if (validationError) {
      setFormError(validationError);
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        userName: userName.trim(),
        phone: phone.trim(),
        hall,
        deliveryDate,
        additionalInfo: additionalInfo.trim() || undefined,
        alternatePhone: alternatePhone.trim() || undefined,
        roll: roll.trim() || undefined,
        OrderItem: items.map((item) => ({
          productId: item.productId,
          variantId: item.variantId || null,
          quantity: Number(item.quantity),
          amountPaid: Number(item.amountPaid || 0),
          discount: Number(item.discount || 0),
        })),
      };

      console.log("Submitting payload:", payload);

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || `HTTP ${response.status}: Failed to create order`
        );
      }

      console.log("Order created successfully:", result);

      // Reset form
      resetForm();
      onOpenChange(false);
    } catch (error) {
      console.error("Submit error:", error);
      setFormError(
        error instanceof Error ? error.message : "Failed to create order"
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Reset form to initial state
  const resetForm = () => {
    setUserName(user?.fullName || user?.firstName || "");
    setPhone("");
    setHall("");
    setDeliveryDate("");
    setAdditionalInfo("");
    setAlternatePhone("");
    setRoll("");
    setItems([
      {
        productId: "",
        variantId: null,
        quantity: 1,
        amountPaid: 0,
        discount: 0,
      },
    ]);
    setFormError(null);
  };

  // Handle modal close
  const handleClose = () => {
    if (!submitting) {
      resetForm();
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="bg-white text-black rounded-xl border-neutral-200 max-w-6xl w-full shadow-2xl max-h-[95vh] overflow-y-auto"
        style={{ minWidth: 900 }}
      >
        <DialogHeader>
          <DialogTitle className="text-black text-2xl font-bold tracking-tight">
            Add New Order
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block font-semibold text-sm text-neutral-800">
                Customer Name *
              </label>
              <Input
                className="bg-white text-black border-neutral-300"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter customer name"
                required
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <label className="block font-semibold text-sm text-neutral-800">
                Phone Number *
              </label>
              <Input
                className="bg-white text-black border-neutral-300"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10-digit phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block font-semibold text-sm text-neutral-800">
                Hall *
              </label>
              <select
                value={hall}
                onChange={(e) => setHall(e.target.value)}
                className="w-full bg-white text-black border border-neutral-300 rounded px-3 py-2"
                required
              >
                <option value="">Select Hall</option>
                {HALLS.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-semibold text-sm text-neutral-800">
                Delivery Date *
              </label>
              <Input
                type="date"
                className="bg-white text-black border-neutral-300"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block font-semibold text-sm text-neutral-800">
                Alternate Phone
              </label>
              <Input
                className="bg-white text-black border-neutral-300"
                value={alternatePhone}
                onChange={(e) => setAlternatePhone(e.target.value)}
                placeholder="Optional alternate number"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-semibold text-sm text-neutral-800">
                Roll Number
              </label>
              <Input
                className="bg-white text-black border-neutral-300"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                placeholder="Student roll number"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2">
            <label className="block font-semibold text-sm text-neutral-800">
              Additional Information
            </label>
            <textarea
              className="w-full bg-white text-black border border-neutral-300 rounded px-3 py-2 resize-none"
              rows={2}
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Any special instructions or notes..."
            />
          </div>

          {/* Products Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg text-neutral-800">
                Products & Payment Details
              </h3>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={handleAddItem}
                className="border-neutral-400 text-black font-medium bg-neutral-100 hover:bg-neutral-200"
              >
                <Plus className="mr-1 w-4 h-4" /> Add Product
              </Button>
            </div>

            {loadingProducts ? (
              <div className="text-center py-8 text-neutral-500">
                Loading products...
              </div>
            ) : (
              <>
                {/* Column Headers */}
                <div className="hidden md:grid grid-cols-8 gap-2 px-4 py-2 bg-neutral-100 rounded text-xs font-semibold text-neutral-700">
                  <span className="col-span-2">Product</span>
                  <span className="col-span-2">Variant</span>
                  <span>Qty</span>
                  <span>Total</span>
                  <span>Paid</span>
                  <span>Action</span>
                </div>

                {/* Product Items */}
                <div className="space-y-3">
                  {items.map((item, idx) => {
                    const prod = products.find((p) => p.id === item.productId);

                    // Safe variant checking with proper null safety
                    const hasVariants =
                      prod?.Variant &&
                      Array.isArray(prod.Variant) &&
                      prod.Variant.length > 0;
                    const selectedVariant =
                      hasVariants && item.variantId
                        ? prod.Variant!.find((v) => v.id === item.variantId)
                        : null;

                    const unitPrice = hasVariants
                      ? selectedVariant?.variantPrice || 0
                      : prod?.price || 0;

                    const lineTotal = unitPrice * (item.quantity || 0);

                    return (
                      <div
                        key={idx}
                        className="border border-neutral-300 bg-neutral-50 rounded-lg p-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-8 gap-3 items-center">
                          {/* Product Selection */}
                          <div className="md:col-span-2">
                            <label className="block md:hidden text-xs font-medium text-neutral-700 mb-1">
                              Product
                            </label>
                            <select
                              value={item.productId}
                              onChange={(e) => {
                                handleChangeItem(
                                  idx,
                                  "productId",
                                  e.target.value
                                );
                                handleChangeItem(idx, "variantId", null);
                              }}
                              className="w-full bg-white text-black border border-neutral-300 rounded px-2 py-1"
                              required
                            >
                              <option value="">Select Product</option>
                              {products.map((p) => (
                                <option key={p.id} value={p.id}>
                                  {p.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Variant Selection */}
                          <div className="md:col-span-2">
                            <label className="block md:hidden text-xs font-medium text-neutral-700 mb-1">
                              Variant
                            </label>
                            {hasVariants ? (
                              <select
                                value={item.variantId || ""}
                                onChange={(e) =>
                                  handleChangeItem(
                                    idx,
                                    "variantId",
                                    e.target.value || null
                                  )
                                }
                                className="w-full bg-white text-black border border-neutral-300 rounded px-2 py-1"
                                required
                              >
                                <option value="">Select Variant</option>
                                {prod?.Variant?.map((v) => (
                                  <option key={v.id} value={v.id}>
                                    {v.name} (₹{v.variantPrice.toFixed(2)})
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <div className="text-xs text-neutral-500 px-2 py-1 bg-neutral-100 rounded border">
                                {prod ? "No variants" : "Select product first"}
                              </div>
                            )}
                          </div>

                          {/* Quantity */}
                          <div>
                            <label className="block md:hidden text-xs font-medium text-neutral-700 mb-1">
                              Quantity
                            </label>
                            <Input
                              type="number"
                              min={1}
                              value={item.quantity}
                              onChange={(e) =>
                                handleChangeItem(
                                  idx,
                                  "quantity",
                                  Number(e.target.value)
                                )
                              }
                              className="bg-white text-black border-neutral-300"
                              required
                            />
                          </div>

                          {/* Line Total */}
                          <div>
                            <label className="block md:hidden text-xs font-medium text-neutral-700 mb-1">
                              Total
                            </label>
                            <div className="text-sm font-medium text-center py-2">
                              ₹{lineTotal.toFixed(2)}
                            </div>
                          </div>

                          {/* Amount Paid */}
                          <div>
                            <label className="block md:hidden text-xs font-medium text-neutral-700 mb-1">
                              Paid
                            </label>
                            <Input
                              type="number"
                              min={0}
                              step="0.01"
                              value={item.amountPaid}
                              onChange={(e) =>
                                handleChangeItem(
                                  idx,
                                  "amountPaid",
                                  Number(e.target.value)
                                )
                              }
                              className="bg-white text-black border-neutral-300"
                              placeholder="0"
                            />
                          </div>

                          {/* Remove Button */}
                          <div className="flex justify-center">
                            <Button
                              type="button"
                              size="icon"
                              variant="ghost"
                              disabled={items.length <= 1}
                              onClick={() => handleRemoveItem(idx)}
                              className="text-red-600 hover:text-red-800 hover:bg-red-50"
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
            <h3 className="font-semibold text-lg text-neutral-800 mb-3">
              Order Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-sm text-neutral-600">Total Amount</div>
                <div className="text-xl font-bold text-neutral-900">
                  ₹{totalValue.toFixed(2)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Total Paid</div>
                <div className="text-xl font-bold text-green-600">
                  ₹{totalPaid.toFixed(2)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Total Discount</div>
                <div className="text-xl font-bold text-blue-600">
                  ₹{totalDiscount.toFixed(2)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-neutral-600">Remaining</div>
                <div
                  className={`text-xl font-bold ${
                    totalRemaining > 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  ₹{totalRemaining.toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {formError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="text-red-800 font-medium text-sm">
                {formError}
              </div>
            </div>
          )}

          {/* Form Actions */}
          <DialogFooter className="space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={submitting}
              className="border-neutral-400 text-neutral-700"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting || loadingProducts}
              className="bg-neutral-900 text-white hover:bg-black font-medium min-w-[120px]"
            >
              {submitting ? "Creating..." : "Create Order"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
