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

type Variant = {
  id: string;
  name: string;
  variantPrice: string | number | null;
};
type Product = {
  id: string;
  name: string;
  price: string | number | null;
  Variant: Variant[];
};
type OrderItemForm = {
  productId: string;
  variantId: string | null;
  quantity: number;
  amountPaid: number;
  discount: number;
};

const HALLS = [
  "ABV",
  "Azad",
  "BCRoy",
  "BRH",
  "Gokhale",
  "HJB",
  "JCB",
  "Nehru",
  "LBS",
  "LLR",
  "MMM",
  "MS",
  "MT",
  "SNVH",
  "PDFBlock",
  "Patel",
  "RK",
  "RaniLaxmiBai",
  "RP",
  "SAM",
  "SBP1",
  "SBP2",
  "SNIG",
  "VSRC1",
  "VSRC2",
  "VidyaSagar",
  "ZakirHussain",
  "Radar",
];

const safePrice = (val: string | number | null | undefined) =>
  val == null || val === "" ? 0 : Number(val);

export function AddOrderModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (b: boolean) => void;
}) {
  const { user } = useUser();

  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [hall, setHall] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [items, setItems] = useState<OrderItemForm[]>([
    { productId: "", variantId: null, quantity: 1, amountPaid: 0, discount: 0 },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setLoadingProducts(true);
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => setProducts(data.products ?? data ?? []))
      .finally(() => setLoadingProducts(false));
  }, [open]);

  useEffect(() => {
    if (user) setUserName(user.fullName || user.firstName || "");
  }, [user]);

  const getLineTotal = (item: OrderItemForm) => {
    const prod = products.find((p) => p.id === item.productId);
    if (!prod) return 0;
    if (prod.Variant.length > 0) {
      const v = prod.Variant.find((x) => x.id === item.variantId);
      return (v ? safePrice(v.variantPrice) : 0) * item.quantity;
    }
    return safePrice(prod.price) * item.quantity;
  };

  const totalValue = items.reduce((acc, item) => acc + getLineTotal(item), 0);
  const totalPaid = items.reduce((acc, item) => acc + item.amountPaid, 0);
  const totalDiscount = items.reduce((acc, item) => acc + item.discount, 0);

  const handleChangeItem = (
    idx: number,
    key: keyof OrderItemForm,
    value: string | number | null
  ) => {
    setItems((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [key]: value } : item))
    );
  };

  const handleAddItem = () =>
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

  const handleRemoveItem = (idx: number) =>
    setItems((prev) =>
      prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev
    );

  function validate(): string | null {
    if (!userName.trim() || !phone.trim() || !hall.trim() || !deliveryDate)
      return "All fields are required";
    if (!items.length) return "At least one product required";
    for (const [i, item] of items.entries()) {
      const prod = products.find((p) => p.id === item.productId);
      if (!prod) return `Select a valid product for row ${i + 1}`;
      if (prod.Variant.length > 0 && !item.variantId)
        return `Select a variant for ${prod.name}`;
      if (!(item.quantity && item.quantity > 0))
        return "Quantity must be at least 1 for all items";
    }
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    const err = validate();
    if (err) {
      setFormError(err);
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        userName: userName.trim(),
        phone: phone.trim(),
        hall,
        deliveryDate,
        OrderItem: items.map((it) => ({
          productId: it.productId,
          variantId: !it.variantId ? null : it.variantId,
          quantity: Number(it.quantity),
          amountPaid: Number(it.amountPaid),
          discount: Number(it.discount),
        })),
      };
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok)
        return setFormError(result.error ?? "Unknown error occurred");
      setUserName(user?.fullName || user?.firstName || "");
      setPhone("");
      setHall("");
      setDeliveryDate("");
      setItems([
        {
          productId: "",
          variantId: null,
          quantity: 1,
          amountPaid: 0,
          discount: 0,
        },
      ]);
      onOpenChange(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-white text-black rounded-xl border-neutral-200 max-w-6xl w-full shadow-2xl"
        style={{ minWidth: 900 }}
      >
        <DialogHeader>
          <DialogTitle className="text-black text-2xl font-bold tracking-tight">
            Add Order
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="block font-semibold text-sm text-neutral-800">
                Customer Name
              </label>
              <Input
                className="bg-white text-black border-neutral-300 px-3 py-2 rounded"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                autoFocus
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="block font-semibold text-sm text-neutral-800">
                Phone
              </label>
              <Input
                className="bg-white text-black border-neutral-300 px-3 py-2 rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="block font-semibold text-sm text-neutral-800">
                Hall
              </label>
              <select
                value={hall}
                onChange={(e) => setHall(e.target.value)}
                className="bg-white text-black border-neutral-300 rounded px-3 py-2 w-full"
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
            <div className="flex flex-col gap-1">
              <label className="block font-semibold text-sm text-neutral-800">
                Delivery Date
              </label>
              <Input
                type="date"
                className="bg-white text-black border-neutral-300 px-3 py-2 rounded"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <div className="font-medium text-base mb-2">
              Products & Payment Details
            </div>
            {loadingProducts ? (
              <div className="text-neutral-500 text-center my-6">
                Loading products…
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item, idx) => {
                  const prod = products.find(
                    (p) => p.id === item.productId
                  ) || { Variant: [] };
                  const selectedVariant =
                    prod.Variant.length > 0 &&
                    item.variantId &&
                    prod.Variant.find((v) => v.id === item.variantId);
                  const priceEach =
                    prod.Variant.length > 0
                      ? safePrice(selectedVariant?.variantPrice)
                      : safePrice(prod.price);
                  const lineTotal = priceEach * (item.quantity || 0);

                  return (
                    <div
                      key={idx}
                      className="border border-neutral-300 bg-neutral-50 rounded-lg px-4 py-3 grid grid-cols-8 gap-2 items-center"
                    >
                      <select
                        value={item.productId}
                        className="bg-white text-black border-neutral-300 rounded px-2 py-1 col-span-2"
                        onChange={(e) =>
                          handleChangeItem(idx, "productId", e.target.value)
                        }
                        required
                      >
                        <option value="">Select Product</option>
                        {products.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                      {prod.Variant?.length > 0 && (
                        <select
                          value={item.variantId || ""}
                          className="bg-white text-black border-neutral-300 rounded px-2 py-1 col-span-2"
                          onChange={(e) =>
                            handleChangeItem(idx, "variantId", e.target.value)
                          }
                          required
                        >
                          <option value="">Select Variant</option>
                          {prod.Variant.map((v) => (
                            <option key={v.id} value={v.id}>
                              {v.name} (₹{safePrice(v.variantPrice)})
                            </option>
                          ))}
                        </select>
                      )}
                      <Input
                        type="number"
                        min={1}
                        className="bg-white text-black border-neutral-300 rounded"
                        value={item.quantity}
                        onChange={(e) =>
                          handleChangeItem(
                            idx,
                            "quantity",
                            Math.max(1, Number(e.target.value))
                          )
                        }
                        required
                        placeholder="Qty"
                      />
                      <div className="text-xs text-center">
                        ₹{lineTotal.toFixed(2)}
                      </div>
                      <Input
                        type="number"
                        min={0}
                        className="bg-white text-black border-neutral-300 rounded"
                        value={item.amountPaid}
                        onChange={(e) =>
                          handleChangeItem(
                            idx,
                            "amountPaid",
                            Number(e.target.value)
                          )
                        }
                        placeholder="Paid"
                      />
                      <Input
                        type="number"
                        min={0}
                        className="bg-white text-black border-neutral-300 rounded"
                        value={item.discount}
                        onChange={(e) =>
                          handleChangeItem(
                            idx,
                            "discount",
                            Number(e.target.value)
                          )
                        }
                        placeholder="Discount"
                      />
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        disabled={items.length <= 1}
                        onClick={() => handleRemoveItem(idx)}
                        aria-label="Remove this product/variant"
                      >
                        <Trash className="w-4 h-4 text-neutral-700" />
                      </Button>
                    </div>
                  );
                })}
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={handleAddItem}
                  className="self-start mt-1 border-neutral-400 text-black font-medium bg-neutral-100 hover:bg-neutral-200"
                >
                  <Plus className="mr-1 w-4 h-4" /> Add Product
                </Button>
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="block font-semibold text-sm text-neutral-800">
                Total Amount
              </label>
              <Input
                className="bg-white text-black border-neutral-300 rounded px-3 py-2 font-bold text-right"
                value={totalValue.toFixed(2)}
                tabIndex={-1}
                readOnly
                disabled
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="block font-semibold text-sm text-neutral-800">
                Total Paid
              </label>
              <Input
                className="bg-white text-black border-neutral-300 rounded px-3 py-2 font-bold text-right"
                value={totalPaid.toFixed(2)}
                tabIndex={-1}
                readOnly
                disabled
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="block font-semibold text-sm text-neutral-800">
                Remaining
              </label>
              <Input
                className="bg-white text-black border-neutral-300 rounded px-3 py-2 font-bold text-right"
                value={(totalValue - totalPaid).toFixed(2)}
                tabIndex={-1}
                readOnly
                disabled
              />
            </div>
          </div>
          {formError && (
            <div className="text-red-600 font-semibold mt-2 text-center">
              {formError}
            </div>
          )}
          <DialogFooter className="mt-6 flex gap-2">
            <Button
              type="submit"
              disabled={submitting}
              className="bg-neutral-900 text-white border-black hover:bg-black transition min-w-[110px] font-bold"
            >
              {submitting ? "Adding…" : "Add Order"}
            </Button>
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                onClick={() => onOpenChange(false)}
                className="border-neutral-400 text-neutral-700 bg-neutral-100 hover:bg-neutral-200"
              >
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
