"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Plus, Pen, Trash, ArrowLeft, ArrowRight } from "lucide-react";
import AddInventoryModal from "./AddInventoryModal";

function asMoney(n: number | string) {
  return Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function InventorySection() {
  const [inventories, setInventories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const pageSize = 20;

  function fetchInventories() {
    setLoading(true);
    fetch(
      `/api/inventory?page=${page}&pageSize=${pageSize}&search=${encodeURIComponent(
        search
      )}`
    )
      .then((r) => r.json())
      .then((data) => {
        setInventories(data.inventories || []);
        setTotal(data.total || 0);
      })
      .catch((err) => console.error("Failed to load inventory:", err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchInventories();
  }, [page, search]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inventory record?"))
      return;

    try {
      const res = await fetch(`/api/inventory/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchInventories();
      } else {
        alert("Failed to delete inventory record");
      }
    } catch (error) {
      alert("Error deleting inventory record");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Inventory Records</h2>
        <Input
          placeholder="Search inventory..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="max-w-xs"
        />
      </div>

      <div className="bg-white border rounded-xl shadow overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Variant</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Cost/Unit</TableHead>
              <TableHead>Total Cost</TableHead>
              <TableHead>Dealer</TableHead>
              <TableHead>Date Received</TableHead>
              <TableHead>Added By</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8">
                  Loading...
                </TableCell>
              </TableRow>
            ) : inventories.length ? (
              inventories.map((inventory) => (
                <TableRow key={inventory.id}>
                  <TableCell className="font-medium">
                    {inventory.Product?.name || "Unknown"}
                  </TableCell>
                  <TableCell>{inventory.Variant?.name || "N/A"}</TableCell>
                  <TableCell>{inventory.quantityAdded}</TableCell>
                  <TableCell>₹{asMoney(inventory.costPerUnit)}</TableCell>
                  <TableCell className="font-semibold">
                    ₹
                    {asMoney(
                      Number(inventory.costPerUnit) * inventory.quantityAdded
                    )}
                  </TableCell>
                  <TableCell>{inventory.dealer}</TableCell>
                  <TableCell>
                    {new Date(inventory.dateReceived).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{inventory.User?.name || "Unknown"}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() =>
                          (window.location.href = `/treasurer/inventory/${inventory.id}`)
                        }
                      >
                        <Pen className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(inventory.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8">
                  No inventory records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center px-4 py-3 border-t">
          <span className="text-sm text-gray-500">
            Page {page} of {totalPages} ({total} total records)
          </span>
          <div className="flex gap-1">
            <Button
              size="icon"
              variant="ghost"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <Button
        className="fixed bottom-8 right-8 rounded-full shadow-lg z-50"
        size="icon"
        style={{ width: 56, height: 56 }}
        onClick={() => setAddModalOpen(true)}
      >
        <Plus className="w-8 h-8" />
      </Button>

      <AddInventoryModal
        open={addModalOpen}
        onOpenChange={setAddModalOpen}
        onSuccess={fetchInventories}
      />
    </div>
  );
}
