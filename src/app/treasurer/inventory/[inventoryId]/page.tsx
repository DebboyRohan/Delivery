"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EditInventoryPage() {
  const { inventoryId } = useParams<{ inventoryId: string }>();
  const router = useRouter();
  const [inventory, setInventory] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form fields
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [quantityAdded, setQuantityAdded] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [dealer, setDealer] = useState("");
  const [dateReceived, setDateReceived] = useState("");

  useEffect(() => {
    Promise.all([
      fetch(`/api/inventory/${inventoryId}`),
      fetch("/api/products"),
    ])
      .then(([invRes, prodRes]) => Promise.all([invRes.json(), prodRes.json()]))
      .then(([invData, prodData]) => {
        if (invData.error) {
          setError(invData.error);
        } else {
          setInventory(invData);
          setSelectedProduct(invData.productId);
          setSelectedVariant(invData.variantId);
          setQuantityAdded(invData.quantityAdded.toString());
          setCostPerUnit(invData.costPerUnit.toString());
          setDealer(invData.dealer);
          setDateReceived(invData.dateReceived.split("T")[0]);
        }
        setProducts(prodData.products || prodData || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, [inventoryId]);

  const selectedProd = products.find((p) => p.id === selectedProduct);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !selectedProduct ||
      !selectedVariant ||
      !quantityAdded ||
      !costPerUnit ||
      !dealer ||
      !dateReceived
    ) {
      setError("All fields are required");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`/api/inventory/${inventoryId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: selectedProduct,
          variantId: selectedVariant,
          quantityAdded: Number(quantityAdded),
          costPerUnit: Number(costPerUnit),
          dealer,
          dateReceived,
        }),
      });

      if (response.ok) {
        router.push("/treasurer");
      } else {
        const data = await response.json();
        setError(data.error || "Failed to update inventory");
      }
    } catch (error) {
      setError("Network error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto py-10">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error && !inventory) {
    return (
      <div className="max-w-2xl mx-auto py-10">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={() => router.push("/treasurer")}>
          ← Back
        </Button>
        <h1 className="text-2xl font-bold">Edit Inventory</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg border"
      >
        <div>
          <label className="block text-sm font-medium mb-2">Product</label>
          <select
            value={selectedProduct}
            onChange={(e) => {
              setSelectedProduct(e.target.value);
              setSelectedVariant("");
            }}
            className="w-full border rounded px-3 py-2"
            required
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
            <label className="block text-sm font-medium mb-2">Variant</label>
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <Input
              type="number"
              min="1"
              value={quantityAdded}
              onChange={(e) => setQuantityAdded(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Cost per Unit
            </label>
            <Input
              type="number"
              min="0"
              step="0.01"
              value={costPerUnit}
              onChange={(e) => setCostPerUnit(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Dealer</label>
          <Input
            value={dealer}
            onChange={(e) => setDealer(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Date Received
          </label>
          <Input
            type="date"
            value={dateReceived}
            onChange={(e) => setDateReceived(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        <div className="flex gap-4">
          <Button type="submit" disabled={submitting}>
            {submitting ? "Saving..." : "Save Changes"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/treasurer")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
