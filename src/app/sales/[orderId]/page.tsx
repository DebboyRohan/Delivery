"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash, Save } from "lucide-react";

// Helper for formatting money
function asMoney(n: number | string) {
  return Number(n).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

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

// ONLY use for fallback price in NEW items before user selects any
function safePrice(val: any) {
  return val == null || val === "" ? 0 : Number(val);
}

export default function OrderPage() {
  const { orderId } = useParams();
  const router = useRouter();

  const [products, setProducts] = useState<any[]>([]);
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // --- Data load ---
  useEffect(() => {
    if (!orderId) return;
    Promise.all([
      fetch("/api/products").then((r) => r.json()),
      fetch(`/api/orders/${orderId}`).then((r) => r.json()),
    ]).then(([prodRes, orderRes]) => {
      setProducts(prodRes.products ?? prodRes ?? []);
      if (orderRes?.error) setErrorMsg(orderRes.error);
      else if (orderRes) {
        setOrder({
          userName: orderRes.userName || "",
          phone: orderRes.phone || "",
          hall: orderRes.hall || "",
          deliveryDate: orderRes.deliveryDate?.slice(0, 10) || "",
          amountRecieved: orderRes.amountRecieved || "",
          items: (orderRes.OrderItem || []).map((oi: any) => ({
            id: oi.id,
            productId: oi.productId,
            variantId: oi.variantId,
            quantity: oi.quantity,
            // Use "historic" price if present
            unitPrice: oi.unitPrice ?? null,
            totalPrice: oi.totalPrice ?? null,
          })),
          alternatePhone: orderRes.alternatePhone || "",
          roll: orderRes.roll || "",
          additionalInfo: orderRes.additionalInfo || "",
        });
      }
      setLoading(false);
    });
  }, [orderId]);

  const normVariantId = (id: string | null | undefined) =>
    id === "" || id == null ? null : id;

  // --- TRUE total value: Use sum of OrderItem.totalPrice (historic, if available) ---
  const totalValue =
    order?.items?.reduce((sum: number, item: any) => {
      // Use historic value if present
      if (item.totalPrice != null && !isNaN(Number(item.totalPrice))) {
        return sum + Number(item.totalPrice);
      }
      // fallback: calculate from current product/variant for new/unfilled items
      const prod = products.find((p) => p.id === item.productId);
      if (!prod) return sum;
      if (prod.Variant?.length) {
        const v = prod.Variant.find((v: any) => v.id === item.variantId);
        return sum + safePrice(v?.variantPrice) * (item.quantity || 1);
      }
      return sum + safePrice(prod?.price) * (item.quantity || 1);
    }, 0) ?? 0;

  // --- Per-line display using historic price if present
  function lineTotal(item: any) {
    if (item.totalPrice != null && !isNaN(Number(item.totalPrice))) {
      return asMoney(item.totalPrice);
    }
    const prod = products.find((p) => p.id === item.productId);
    if (!prod) return "-";
    if (prod.Variant?.length) {
      const v = prod.Variant.find((v: any) => v.id === item.variantId);
      return asMoney(safePrice(v?.variantPrice) * (item.quantity || 1));
    }
    return asMoney(safePrice(prod?.price) * (item.quantity || 1));
  }
  // Show unit price locked at order-time if present, otherwise fallback to product/variant price
  function lineUnit(item: any) {
    if (item.unitPrice != null && !isNaN(Number(item.unitPrice))) {
      return asMoney(item.unitPrice);
    }
    const prod = products.find((p) => p.id === item.productId);
    if (!prod) return "-";
    if (prod.Variant?.length) {
      const v = prod.Variant.find((v: any) => v.id === item.variantId);
      return asMoney(safePrice(v?.variantPrice));
    }
    return asMoney(safePrice(prod?.price));
  }

  const handleChangeItem = (idx: number, key: string, val: any) => {
    setOrder((old: any) => ({
      ...old,
      items: old.items.map((it: any, i: number) =>
        i === idx ? { ...it, [key]: val } : it
      ),
    }));
  };
  const handleAddItem = () =>
    setOrder((old: any) => ({
      ...old,
      items: [...old.items, { productId: "", variantId: null, quantity: 1 }],
    }));
  const handleRemoveItem = (idx: number) =>
    setOrder((old: any) => ({
      ...old,
      items: old.items.filter((_: any, i: number) => i !== idx),
    }));

  // --- Save handler: If items are empty, delete order!
  const handleSave = async () => {
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!order.userName || !order.phone || !order.hall || !order.deliveryDate) {
      setErrorMsg("All fields are required.");
      return;
    }

    if (!order.items.length) {
      await handleDelete();
      return;
    }

    for (const item of order.items) {
      const prod = products.find((p) => p.id === item.productId);
      if (!prod) {
        setErrorMsg("Pick a product for all items");
        return;
      }
      if (prod.Variant?.length > 0 && !item.variantId) {
        setErrorMsg(`Select a variant for ${prod.name}`);
        return;
      }
      if (!item.quantity || item.quantity < 1) {
        setErrorMsg("Quantity should be ≥ 1 for all items");
        return;
      }
    }
    setSaving(true);
    try {
      const apiPayload = {
        userName: order.userName,
        phone: order.phone,
        hall: order.hall,
        deliveryDate: order.deliveryDate,
        amountRecieved: Number(order.amountRecieved || 0),
        alternatePhone: order.alternatePhone,
        roll: order.roll,
        additionalInfo: order.additionalInfo,
        OrderItem: order.items.map((item: any) => ({
          id: item.id,
          productId: item.productId,
          variantId: normVariantId(item.variantId),
          quantity: Number(item.quantity) || 1,
        })),
      };

      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apiPayload),
      });
      const resp = await res.json();
      if (!res.ok) {
        setErrorMsg(resp.error ?? "Error saving order");
      } else {
        setSuccessMsg("Order updated!");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this order?")) return;
    setDeleting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await fetch(`/api/orders/${orderId}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data?.error ?? "Error deleting order");
      } else {
        setSuccessMsg("Order deleted!");
        setTimeout(() => router.push("/sales"), 300);
      }
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <p className="text-center py-12 text-lg text-gray-700">
        Loading order...
      </p>
    );
  }

  if (errorMsg && !order) {
    return (
      <p className="text-center py-12 text-red-600 font-semibold">{errorMsg}</p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-6 bg-white text-black rounded-lg shadow-md">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight">
          {order.userName}
        </h1>
        <div className="flex space-x-3">
          <Button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            <Save className="h-5 w-5" />
            <span>{saving ? "Saving…" : "Save"}</span>
          </Button>
          <Button
            onClick={handleDelete}
            disabled={deleting}
            variant="destructive"
            className="flex items-center space-x-2 px-4 py-2 rounded"
          >
            <Trash className="h-5 w-5" />
            <span>{deleting ? "Deleting…" : "Delete"}</span>
          </Button>
        </div>
      </header>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="grid gap-6"
        autoComplete="off"
      >
        {/* Info grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Customer Name
            </label>
            <Input
              type="text"
              value={order.userName}
              onChange={(e) =>
                setOrder((old: any) => ({ ...old, userName: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Phone
            </label>
            <Input
              type="tel"
              value={order.phone}
              onChange={(e) =>
                setOrder((old: any) => ({ ...old, phone: e.target.value }))
              }
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Hall
            </label>
            <select
              value={order.hall}
              onChange={(e) =>
                setOrder((old: any) => ({ ...old, hall: e.target.value }))
              }
              className="w-full border rounded px-3 py-2"
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
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Delivery Date
            </label>
            <Input
              type="date"
              value={order.deliveryDate}
              onChange={(e) =>
                setOrder((old: any) => ({
                  ...old,
                  deliveryDate: e.target.value,
                }))
              }
              required
            />
          </div>
        </div>

        {/* Product line items */}
        <div>
          <h2 className="text-gray-900 font-semibold mb-2">
            Products & Variants
          </h2>
          <div className="space-y-4">
            {order.items.map((item: any, idx: number) => {
              const prod = products.find((p) => p.id === item.productId) || {
                Variant: [],
              };
              // For new/edited items (no price yet): show live preview
              const displayUnit = lineUnit(item);
              const displayLineTotal = lineTotal(item);

              return (
                <div
                  key={idx}
                  className="border border-gray-300 rounded-lg p-4 flex flex-wrap items-center gap-4"
                >
                  <select
                    value={item.productId}
                    onChange={(e) =>
                      handleChangeItem(idx, "productId", e.target.value)
                    }
                    required
                    className="min-w-[140px] border rounded px-2 py-1"
                  >
                    <option value="">Select Product</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  {prod.Variant.length > 0 && (
                    <select
                      value={item.variantId || ""}
                      onChange={(e) =>
                        handleChangeItem(idx, "variantId", e.target.value)
                      }
                      required
                      className="min-w-[140px] border rounded px-2 py-1"
                    >
                      <option value="">Select Variant</option>
                      {prod.Variant.map((v: any) => (
                        <option key={v.id} value={v.id}>
                          {v.name} (₹{asMoney(v.variantPrice)})
                        </option>
                      ))}
                    </select>
                  )}
                  <Input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleChangeItem(
                        idx,
                        "quantity",
                        Math.max(1, Number(e.target.value))
                      )
                    }
                    required
                    className="w-20 border rounded px-2 py-1 text-center"
                  />
                  <span className="ml-2 text-xs font-semibold text-gray-700">
                    Price: ₹{displayUnit}
                    {"  ×  "}
                    {item.quantity} = <b>₹{displayLineTotal}</b>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(idx)}
                    aria-label="Remove item"
                    className="ml-auto text-red-600 hover:text-red-800"
                  >
                    <Trash size={20} />
                  </button>
                </div>
              );
            })}
            <Button
              type="button"
              onClick={handleAddItem}
              variant="outline"
              className="mt-1"
            >
              <Plus size={16} className="mr-1" />
              Add Another Product
            </Button>
          </div>
        </div>

        {/* Amounts */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Amount Received
            </label>
            <Input
              type="number"
              min={0}
              value={order.amountRecieved}
              onChange={(e) =>
                setOrder((old: any) => ({
                  ...old,
                  amountRecieved: e.target.value,
                }))
              }
              placeholder="₹"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Total Amount
            </label>
            <Input
              type="text"
              value={`₹${asMoney(totalValue)}`}
              readOnly
              disabled
              className="bg-gray-100 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Optional additional info */}
        <div>
          <label className="block mb-1 font-semibold text-gray-900">
            Additional Info
          </label>
          <textarea
            value={order.additionalInfo || ""}
            onChange={(e) =>
              setOrder((old: any) => ({
                ...old,
                additionalInfo: e.target.value,
              }))
            }
            rows={3}
            className="w-full border rounded p-2 resize-none"
            placeholder="Add notes for delivery, etc."
          />
        </div>

        {/* Messages */}
        {errorMsg && (
          <div className="text-red-700 font-semibold text-center">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="text-green-700 font-semibold text-center">
            {successMsg}
          </div>
        )}

        {/* Submit and Delete buttons */}
        <div className="flex justify-between mt-6">
          <Button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 bg-black text-white rounded font-semibold flex items-center gap-2"
          >
            <Save size={20} />
            {saving ? "Saving..." : "Save Changes"}
          </Button>
          <Button
            onClick={handleDelete}
            disabled={deleting}
            variant="destructive"
            className="px-6 py-2 rounded font-semibold flex items-center gap-2"
          >
            <Trash size={20} />
            {deleting ? "Deleting..." : "Delete Order"}
          </Button>
        </div>
      </form>
    </div>
  );
}
