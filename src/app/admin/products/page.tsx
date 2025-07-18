"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Pen } from "lucide-react";
import clsx from "clsx";

type Variant = {
  id?: string;
  name: string;
  variantPrice: string;
};

type Product = {
  id: string;
  name: string;
  price: string | null;
  Variant: Variant[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Form states for product
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [variants, setVariants] = useState<Variant[]>([
    { name: "", variantPrice: "" },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const router = useRouter();

  // Fetch products on mount and after add
  useEffect(() => {
    setLoading(true);
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data.products ?? data ?? []);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [modalOpen]); // refetch after modal closes

  // Modal: Add/Remove variants handlers
  const handleVariantChange = (
    idx: number,
    key: "name" | "variantPrice",
    value: string
  ) => {
    setVariants((prev) => {
      const updated = [...prev];
      updated[idx][key] = value;
      return updated;
    });
  };
  const handleAddVariant = () =>
    setVariants((prev) => [...prev, { name: "", variantPrice: "" }]);
  const handleRemoveVariant = (idx: number) => {
    setVariants((prev) =>
      prev.length === 1 ? prev : prev.filter((_, i) => i !== idx)
    );
  };

  // True if at least one (non-empty) variant is set
  const hasVariants = variants.some(
    (v) => v.name.trim() && v.variantPrice.toString().trim()
  );

  // Add Product handler
  async function handleAddProduct(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);
    setSubmitting(true);

    if (!productName) {
      setFormError("Product Name is required.");
      setSubmitting(false);
      return;
    }

    // Validation: Either price (no variants), or variants (no price)
    if (hasVariants && productPrice) {
      setFormError("Cannot provide both price and variants.");
      setSubmitting(false);
      return;
    }
    if (!hasVariants && !productPrice) {
      setFormError("Either price or a variant is required.");
      setSubmitting(false);
      return;
    }

    const filteredVariants = variants.filter(
      (v) => v.name.trim() && v.variantPrice.toString().trim()
    );

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: productName,
          price: hasVariants ? undefined : productPrice,
          variants: filteredVariants,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText || "Could not add product");
      }
      // Reset fields and close modal
      setProductName("");
      setProductPrice("");
      setVariants([{ name: "", variantPrice: "" }]);
      setModalOpen(false);
    } catch (e: any) {
      setFormError(e?.message || "Unexpected error");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <div>Loading products...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Products</h1>
        <Button
          variant="default"
          className="rounded-full px-5 text-xl"
          onClick={() => setModalOpen(true)}
        >
          +
        </Button>
      </div>
      <div className="rounded-xl border overflow-x-auto bg-white shadow">
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead className="w-14 text-center"></TableHead>
              <TableHead className="text-left font-semibold">Name</TableHead>
              <TableHead className="text-center font-semibold">Price</TableHead>
              <TableHead className="text-left font-semibold">
                Variants
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  No products found.
                </TableCell>
              </TableRow>
            ) : (
              products.map((product) => (
                <TableRow
                  key={product.id}
                  className={clsx(
                    "hover:bg-muted/70 group transition cursor-pointer"
                  )}
                >
                  <TableCell className="text-center align-middle">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/admin/products/${product.id}`);
                      }}
                      title="Edit product"
                      className="opacity-70 group-hover:opacity-100"
                    >
                      <Pen className="w-5 h-5" />
                    </Button>
                  </TableCell>
                  <TableCell className="font-medium text-base">
                    {product.name}
                  </TableCell>
                  <TableCell className="text-center font-medium">
                    {product.price != null && product.price !== "" ? (
                      <span className="text-emerald-700">₹{product.price}</span>
                    ) : (
                      <span className="text-gray-400 italic select-none">
                        See variants
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {product.Variant && product.Variant.length > 0 ? (
                      product.Variant.map((v) => (
                        <span
                          key={v.name}
                          className="inline-block rounded bg-muted px-2 py-1 mr-2 mb-1 text-xs font-semibold text-gray-700"
                        >
                          {v.name}:{" "}
                          <span className="text-emerald-600 font-bold">
                            ₹{v.variantPrice}
                          </span>
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-400 italic select-none">
                        No variants
                      </span>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Add Product Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label className="block mb-1">Product Name</label>
              <Input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
                placeholder="E.g. Chips"
                autoFocus
              />
            </div>
            <div>
              <label className="block mb-1">Product Price</label>
              <Input
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                type="number"
                min="0"
                step="0.01"
                placeholder="E.g. 30"
                required={!hasVariants}
                disabled={hasVariants}
                className={
                  hasVariants ? "bg-gray-100 text-gray-400 opacity-70" : ""
                }
              />
              {hasVariants && (
                <div className="text-xs text-gray-500">
                  Disabled when variants are provided
                </div>
              )}
            </div>
            <div className="mt-4 border-t pt-3">
              <div className="font-semibold mb-2">Variants (optional):</div>
              {variants.map((variant, idx) => (
                <div key={idx} className="flex gap-2 mb-2 items-center">
                  <Input
                    value={variant.name}
                    onChange={(e) =>
                      handleVariantChange(idx, "name", e.target.value)
                    }
                    placeholder="Variant name (e.g. Regular)"
                  />
                  <Input
                    value={variant.variantPrice}
                    onChange={(e) =>
                      handleVariantChange(idx, "variantPrice", e.target.value)
                    }
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Variant price"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => handleRemoveVariant(idx)}
                    disabled={variants.length === 1}
                    title="Remove this variant"
                  >
                    –
                  </Button>
                  {idx === variants.length - 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleAddVariant}
                      title="Add variant"
                    >
                      +
                    </Button>
                  )}
                </div>
              ))}
            </div>
            {formError && <div className="text-red-500">{formError}</div>}
            <DialogFooter>
              <Button type="submit" disabled={submitting}>
                {submitting ? "Adding..." : "Add Product"}
              </Button>
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
