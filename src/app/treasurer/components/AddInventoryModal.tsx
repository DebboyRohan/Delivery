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

export default function AddInventoryModal({
  open,
  onOpenChange,
  onSuccess,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}) {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [quantityAdded, setQuantityAdded] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [dealer, setDealer] = useState("");
  const [dateReceived, setDateReceived] = useState(
    new Date().toISOString().split("T")[0]
  );
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
  const hasVariants = selectedProd?.Variant?.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !selectedProduct ||
      !quantityAdded ||
      !costPerUnit ||
      !dealer ||
      !dateReceived
    ) {
      setError("All fields are required");
      return;
    }

    if (hasVariants && !selectedVariant) {
      setError("Please select a variant");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: selectedProduct,
          variantId: hasVariants
            ? selectedVariant
            : selectedProd?.Variant[0]?.id || "",
          quantityAdded: Number(quantityAdded),
          costPerUnit: Number(costPerUnit),
          dealer,
          dateReceived,
        }),
      });

      if (response.ok) {
        onSuccess();
        onOpenChange(false);
        // Reset form
        setSelectedProduct("");
        setSelectedVariant("");
        setQuantityAdded("");
        setCostPerUnit("");
        setDealer("");
        setDateReceived(new Date().toISOString().split("T")[0]);
      } else {
        const data = await response.json();
        setError(data.error || "Failed to add inventory");
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
          <DialogTitle>Add Inventory</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Product</label>
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

          {hasVariants && (
            <div>
              <label className="block text-sm font-medium mb-1">Variant</label>
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
              <label className="block text-sm font-medium mb-1">Quantity</label>
              <Input
                type="number"
                min="1"
                value={quantityAdded}
                onChange={(e) => setQuantityAdded(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Cost/Unit
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
            <label className="block text-sm font-medium mb-1">Dealer</label>
            <Input
              value={dealer}
              onChange={(e) => setDealer(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
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

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Adding..." : "Add Inventory"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
