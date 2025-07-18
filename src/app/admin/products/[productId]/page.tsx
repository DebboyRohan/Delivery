"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, Check, X, PlusCircle } from "lucide-react";

// --- Types ---
type Variant = {
  id: string;
  name: string;
  variantPrice: string;
};
type Product = {
  id: string;
  name: string;
  price: string | null;
  Variant: Variant[];
};

// --- Page ---
export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams<{ productId: string }>();
  const productId = params.productId;

  // Product State
  const [product, setProduct] = useState<Product | null>(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Variants: editing state
  const [variantEdit, setVariantEdit] = useState<{
    [id: string]: { name: string; variantPrice: string; editing: boolean };
  }>({});
  const [newVariant, setNewVariant] = useState({ name: "", variantPrice: "" });
  const [addingVariant, setAddingVariant] = useState(false);

  // Fetch product on mount and refresh
  const fetchProduct = () => {
    if (!productId) return;
    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
        setName(data.name);
        setPrice(data.price ?? "");
        // Setup variant edit mapping
        if (Array.isArray(data.Variant)) {
          const ve: typeof variantEdit = {};
          data.Variant.forEach((v) => {
            ve[v.id] = {
              name: v.name,
              variantPrice: v.variantPrice,
              editing: false,
            };
          });
          setVariantEdit(ve);
        }
      });
  };
  useEffect(fetchProduct, [productId]);

  // --- Product Edit/Save/Delete
  async function handleProductUpdate(e: React.FormEvent) {
    e.preventDefault();
    setEditing(true);
    setError(null);
    try {
      // If product has variants, do NOT allow price change!
      const body: { name: string; price?: string } = { name };
      if (!product?.Variant?.length) body.price = price;
      const res = await fetch(`/api/products/${productId}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok)
        throw new Error((await res.json()).error || "Failed to update");
      fetchProduct();
    } catch (e: any) {
      setError(e?.message || "Error updating product.");
    } finally {
      setEditing(false);
    }
  }
  async function handleDeleteProduct() {
    if (!confirm("Are you sure you want to delete this product?")) return;
    setError(null);
    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error((await res.json()).error || "Delete failed");
      router.push("/admin/products");
    } catch (e: any) {
      setError(e?.message || "Error deleting product.");
    }
  }

  // --- Variants: edit, save, delete
  function startEditVariant(id: string) {
    setVariantEdit((prev) => ({
      ...prev,
      [id]: { ...prev[id], editing: true },
    }));
  }
  function cancelEditVariant(id: string) {
    if (!product) return;
    const v = product.Variant.find((v) => v.id === id);
    setVariantEdit((prev) => ({
      ...prev,
      [id]: {
        name: v?.name ?? "",
        variantPrice: v?.variantPrice ?? "",
        editing: false,
      },
    }));
  }
  function setVariantValue(
    id: string,
    key: "name" | "variantPrice",
    value: string
  ) {
    setVariantEdit((prev) => ({
      ...prev,
      [id]: { ...prev[id], [key]: value },
    }));
  }
  async function saveVariant(id: string) {
    setError(null);
    const { name, variantPrice } = variantEdit[id];
    if (!name || !variantPrice) {
      setError("Both variant name and price required");
      return;
    }
    try {
      const res = await fetch(`/api/variants/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, variantPrice }),
      });
      if (!res.ok) throw new Error("Failed to update variant");
      setVariantEdit((prev) => ({
        ...prev,
        [id]: { name, variantPrice, editing: false },
      }));
      fetchProduct();
    } catch (e: any) {
      setError(e.message || "Error saving variant");
    }
  }
  async function deleteVariant(id: string) {
    if (!confirm("Delete this variant?")) return;
    setError(null);
    try {
      const res = await fetch(`/api/variants/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete variant");
      fetchProduct();
    } catch (e: any) {
      setError(e.message || "Error deleting variant");
    }
  }

  // --- Add Variant
  async function handleAddVariant(e: React.FormEvent) {
    e.preventDefault();
    if (!newVariant.name || !newVariant.variantPrice) {
      setError("Variant name and price required");
      return;
    }
    try {
      const res = await fetch(`/api/products/${productId}/variants`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newVariant),
      });
      if (!res.ok)
        throw new Error((await res.json()).error || "Failed to add variant");
      setNewVariant({ name: "", variantPrice: "" });
      setAddingVariant(false);
      fetchProduct();
    } catch (e: any) {
      setError(e.message || "Error adding variant");
    }
  }

  // --- UI ---
  if (!product) return <div>Loading...</div>;
  const hasVariants = product.Variant && product.Variant.length > 0;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Product Details</h1>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() =>
              document.getElementById("product-form")?.scrollIntoView()
            }
            title="Edit"
          >
            <Pencil className="w-5 h-5" />
          </Button>
          <Button
            type="button"
            variant="destructive"
            size="icon"
            onClick={handleDeleteProduct}
            title="Delete"
          >
            <Trash2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
      {/* --- Product Edit Form --- */}
      <form
        id="product-form"
        onSubmit={handleProductUpdate}
        className="space-y-4 bg-white rounded-xl p-6 shadow border"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Price
          </label>
          <Input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            min="0"
            step="0.01"
            disabled={hasVariants}
            placeholder={
              hasVariants ? "Disabled: see variants" : "Product price"
            }
            className={
              hasVariants ? "bg-gray-100 text-gray-400 opacity-90" : ""
            }
          />
          {hasVariants && (
            <span className="text-xs text-gray-500">
              Disabled when variants exist. Delete all variants to edit product
              price.
            </span>
          )}
        </div>
        <Button type="submit" disabled={editing}>
          {editing ? "Saving..." : "Save Changes"}
        </Button>
      </form>

      {/* --- Variants Section --- */}
      <div className="mt-10">
        <div className="flex items-center mb-3 gap-2">
          <span className="text-lg font-semibold">Variants</span>
          <Button
            type="button"
            size="icon"
            variant="outline"
            onClick={() => {
              setAddingVariant((v) => !v);
              setError(null);
            }}
            title="Add new variant"
          >
            <PlusCircle className="w-5 h-5" />
          </Button>
        </div>
        {addingVariant && (
          <form className="flex gap-2 mb-4" onSubmit={handleAddVariant}>
            <Input
              value={newVariant.name}
              onChange={(e) =>
                setNewVariant((v) => ({ ...v, name: e.target.value }))
              }
              placeholder="Variant name"
              required
            />
            <Input
              value={newVariant.variantPrice}
              onChange={(e) =>
                setNewVariant((v) => ({ ...v, variantPrice: e.target.value }))
              }
              type="number"
              step="0.01"
              min="0"
              placeholder="Price"
              required
            />
            <Button size="sm" type="submit">
              Add
            </Button>
            <Button
              size="sm"
              type="button"
              variant="secondary"
              onClick={() => setAddingVariant(false)}
            >
              Cancel
            </Button>
          </form>
        )}
        {/* Variants Table */}
        {product.Variant?.length > 0 ? (
          <div className="space-y-3">
            {product.Variant.map((variant) => {
              const ve = variantEdit[variant.id] || {
                name: variant.name,
                variantPrice: variant.variantPrice,
                editing: false,
              };
              return (
                <div
                  key={variant.id}
                  className="bg-muted/60 border rounded flex items-center gap-2 px-3 py-2"
                >
                  {ve.editing ? (
                    <>
                      <Input
                        className="w-1/4"
                        value={ve.name}
                        onChange={(e) =>
                          setVariantValue(variant.id, "name", e.target.value)
                        }
                        required
                      />
                      <Input
                        className="w-1/4"
                        value={ve.variantPrice}
                        onChange={(e) =>
                          setVariantValue(
                            variant.id,
                            "variantPrice",
                            e.target.value
                          )
                        }
                        type="number"
                        step="0.01"
                        min="0"
                        required
                      />
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => saveVariant(variant.id)}
                        title="Save"
                      >
                        <Check />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => cancelEditVariant(variant.id)}
                        title="Cancel"
                      >
                        <X />
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="w-1/4 font-semibold">{variant.name}</div>
                      <div className="w-1/4 text-emerald-700 font-bold">
                        ₹{variant.variantPrice}
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => startEditVariant(variant.id)}
                        aria-label="Edit"
                        title="Edit"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => deleteVariant(variant.id)}
                        aria-label="Delete"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-gray-400 italic mt-2">
            No variants (simple product, price on product).
          </div>
        )}
      </div>
      {error && <div className="text-red-500 mt-6">{error}</div>}
    </div>
  );
}
