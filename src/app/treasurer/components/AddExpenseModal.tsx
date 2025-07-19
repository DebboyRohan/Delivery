"use client";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AddExpenseModal({
  open,
  onOpenChange,
  onSuccess,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}) {
  const [products, setProducts] = useState<any[]>([]);
  const [type, setType] = useState("GENERAL");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [quantity, setQuantity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      fetch("/api/products")
        .then((r) => r.json())
        .then((data) => setProducts(data.products || data || []))
        .catch(() => setError("Failed to load products"));
    }
  }, [open]);

  const selectedProd = products.find((p) => p.id === selectedProduct);
  const showProductFields = type === "PURCHASE";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!type || !description || !value) {
      setError("Type, description, and value are required");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/finance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          description,
          value: Number(value),
          productId: selectedProduct || null,
          variantId: selectedVariant || null,
          quantity: quantity ? Number(quantity) : null,
        }),
      });

      if (response.ok) {
        onSuccess();
        onOpenChange(false);
        // Reset form
        setType("GENERAL");
        setDescription("");
        setValue("");
        setSelectedProduct("");
        setSelectedVariant("");
        setQuantity("");
      } else {
        const data = await response.json();
        setError(data.error || "Failed to add expense");
      }
    } catch (error) {
      setError("Network error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="GENERAL">General</option>
              <option value="PURCHASE">Purchase</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Enter description..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <Input
              type="number"
              min="0"
              step="0.01"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
              placeholder="₹0.00"
            />
          </div>

          {showProductFields && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Product (Optional)
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => {
                    setSelectedProduct(e.target.value);
                    setSelectedVariant("");
                  }}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="">Select Product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              {selectedProd?.Variant?.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Variant
                  </label>
                  <select
                    value={selectedVariant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  >
                    <option value="">Select Variant</option>
                    {selectedProd.Variant.map((variant: any) => (
                      <option key={variant.id} value={variant.id}>
                        {variant.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">
                  Quantity (Optional)
                </label>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter quantity..."
                />
              </div>
            </>
          )}

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Adding..." : "Add Expense"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
