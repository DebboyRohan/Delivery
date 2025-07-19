"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Plus, Pen, Trash, ArrowLeft, ArrowRight } from "lucide-react";
import AddExpenseModal from "./AddExpenseModal";

function asMoney(n: number | string) {
  return Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function FinanceSection() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [summary, setSummary] = useState({ totalAmount: 0, totalCount: 0 });
  const [typeFilter, setTypeFilter] = useState("");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const pageSize = 20;

  function fetchExpenses() {
    setLoading(true);
    const typeParam = typeFilter ? `&type=${typeFilter}` : "";
    fetch(`/api/finance?page=${page}&pageSize=${pageSize}${typeParam}`)
      .then((r) => r.json())
      .then((data) => {
        setExpenses(data.expenses || []);
        setTotal(data.total || 0);
        setSummary(data.summary || { totalAmount: 0, totalCount: 0 });
      })
      .catch((err) => console.error("Failed to load expenses:", err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchExpenses();
  }, [page, typeFilter]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this expense?")) return;

    try {
      const res = await fetch(`/api/finance/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchExpenses();
      } else {
        alert("Failed to delete expense");
      }
    } catch (error) {
      alert("Error deleting expense");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-600">
            Total Transactions
          </h3>
          <p className="text-2xl font-bold text-blue-600">
            {summary.totalCount}
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-600">Total Amount</h3>
          <p className="text-2xl font-bold text-green-600">
            ₹{asMoney(summary.totalAmount)}
          </p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-600">
            Average Transaction
          </h3>
          <p className="text-2xl font-bold text-purple-600">
            ₹
            {asMoney(
              summary.totalCount > 0
                ? Number(summary.totalAmount) / summary.totalCount
                : 0
            )}
          </p>
        </div>
      </div>

      <Tabs value={typeFilter} onValueChange={setTypeFilter}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="">All</TabsTrigger>
            <TabsTrigger value="PURCHASE">Purchases</TabsTrigger>
            <TabsTrigger value="GENERAL">General</TabsTrigger>
          </TabsList>
          <Button onClick={() => setAddModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Expense
          </Button>
        </div>

        <TabsContent value={typeFilter || ""}>
          <div className="bg-white border rounded-xl shadow overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Added By</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8">
                      Loading...
                    </TableCell>
                  </TableRow>
                ) : expenses.length ? (
                  expenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell>
                        {new Date(expense.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded text-xs font-bold ${
                            expense.type === "PURCHASE"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {expense.type}
                        </span>
                      </TableCell>
                      <TableCell>{expense.description}</TableCell>
                      <TableCell>
                        {expense.Product?.name || "N/A"}
                        {expense.Variant && ` / ${expense.Variant.name}`}
                      </TableCell>
                      <TableCell>{expense.quantity || "N/A"}</TableCell>
                      <TableCell className="font-semibold">
                        ₹{asMoney(expense.value)}
                      </TableCell>
                      <TableCell>{expense.User?.name || "Unknown"}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() =>
                              (window.location.href = `/treasurer/finance/${expense.id}`)
                            }
                          >
                            <Pen className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleDelete(expense.id)}
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
                    <TableCell colSpan={8} className="text-center py-8">
                      No expenses found
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
        </TabsContent>
      </Tabs>

      <AddExpenseModal
        open={addModalOpen}
        onOpenChange={setAddModalOpen}
        onSuccess={fetchExpenses}
      />
    </div>
  );
}
