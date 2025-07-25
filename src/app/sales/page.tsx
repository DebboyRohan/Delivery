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
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Pen, BookPlus, ArrowLeft, ArrowRight, Package } from "lucide-react";
import clsx from "clsx";
import { AddOrderModal } from "./AddOrderModal";

const TABS = [
  { key: "myorders", label: "My Orders" },
  { key: "delivered", label: "Delivered" },
  { key: "undelivered", label: "Undelivered" },
  { key: "cancelled", label: "Cancelled" },
];

function asMoney(n: number | string): string {
  return Number(n).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

interface RemainingInventoryItem {
  id: string;
  quantity: number;
  Product: {
    id: string;
    name: string;
  };
  Variant?: {
    id: string;
    name: string;
  } | null;
}

export default function OrdersPage() {
  const [tab, setTab] = useState("myorders");
  const [orders, setOrders] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState({
    totalOrderAmount: 0,
    totalOrderCount: 0,
  });
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("createdAt:desc");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [remainingInventory, setRemainingInventory] = useState<
    RemainingInventoryItem[]
  >([]);
  const [inventoryLoading, setInventoryLoading] = useState(true);
  const pageSize = 15;
  const [addOpen, setAddOpen] = useState(false);

  // Fetch remaining inventory
  useEffect(() => {
    setInventoryLoading(true);
    fetch("/api/remaining-inventory")
      .then((res) => res.json())
      .then((data) => {
        setRemainingInventory(data || []);
        setInventoryLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching inventory:", error);
        setInventoryLoading(false);
      });
  }, [addOpen]); // Refresh when modal closes (in case new order was added)

  // Fetch orders
  useEffect(() => {
    setLoading(true);
    fetch(
      `/api/orders?tab=${tab}&search=${encodeURIComponent(
        search
      )}&sort=${sort}&page=${page}&pageSize=${pageSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders ?? []);
        setTotal(data.total ?? 0);
        setAnalytics(
          data.analytics ?? { totalOrderAmount: 0, totalOrderCount: 0 }
        );
        setLoading(false);
      });
  }, [tab, search, sort, page, addOpen]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  function handleSort(col: string) {
    const [curCol, curDir] = sort.split(":");
    if (col === curCol) setSort(`${col}:${curDir === "asc" ? "desc" : "asc"}`);
    else setSort(`${col}:asc`);
    setPage(1);
  }

  // Get low stock items (quantity <= 5)
  const lowStockItems = remainingInventory.filter((item) => item.quantity <= 5);

  return (
    <div className="max-w-7xl mx-auto px-4 pb-24 pt-8 relative">
      {/* Remaining Inventory Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Current Inventory Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          {inventoryLoading ? (
            <div className="text-center py-8 text-muted-foreground">
              Loading inventory...
            </div>
          ) : remainingInventory.length > 0 ? (
            <>
              {/* Low Stock Alert */}
              {lowStockItems.length > 0 && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">
                    ⚠️ Low Stock Alert ({lowStockItems.length} items)
                  </h4>
                  <div className="text-sm text-red-700">
                    {lowStockItems.map((item) => (
                      <span key={item.id} className="mr-3">
                        {item.Product.name}{" "}
                        {item.Variant?.name && `(${item.Variant.name})`}:{" "}
                        {item.quantity}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Inventory Table */}
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product</TableHead>
                      <TableHead>Variant</TableHead>
                      <TableHead className="text-center">
                        Available Quantity
                      </TableHead>
                      <TableHead className="text-center">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {remainingInventory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">
                          {item.Product.name}
                        </TableCell>
                        <TableCell>{item.Variant?.name || "Default"}</TableCell>
                        <TableCell className="text-center font-semibold">
                          {item.quantity}
                        </TableCell>
                        <TableCell className="text-center">
                          <span
                            className={clsx(
                              "px-2 py-1 rounded-full text-xs font-medium",
                              item.quantity <= 0
                                ? "bg-red-100 text-red-800"
                                : item.quantity <= 5
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            )}
                          >
                            {item.quantity <= 0
                              ? "Out of Stock"
                              : item.quantity <= 5
                              ? "Low Stock"
                              : "In Stock"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No inventory data available. Add some inventory to get started.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Orders Section */}
      <Tabs
        value={tab}
        onValueChange={(v) => {
          setTab(v);
          setPage(1);
        }}
      >
        <TabsList>
          {TABS.map((t) => (
            <TabsTrigger key={t.key} value={t.key}>
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {TABS.map((tabMeta) => (
          <TabsContent key={tabMeta.key} value={tabMeta.key}>
            {tabMeta.key === "myorders" && (
              <div className="mb-4 flex flex-wrap gap-6 items-center">
                <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900 p-6 shadow space-y-2">
                  <div className="text-muted-foreground text-sm">
                    All Orders Amount
                  </div>
                  <div className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">
                    ₹{asMoney(analytics.totalOrderAmount ?? 0)}
                  </div>
                  <div className="mt-1 text-xs text-gray-400">
                    Total Orders: {analytics.totalOrderCount ?? 0}
                  </div>
                </div>
              </div>
            )}
            <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
              <Input
                placeholder="Search…"
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
                    <TableHead
                      onClick={() => handleSort("userName")}
                      className={clsx(
                        "cursor-pointer",
                        sort.startsWith("userName:") && "font-bold"
                      )}
                    >
                      Customer
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort("phone")}
                      className={clsx(
                        "cursor-pointer",
                        sort.startsWith("phone:") && "font-bold"
                      )}
                    >
                      Phone
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort("hall")}
                      className={clsx(
                        "cursor-pointer",
                        sort.startsWith("hall:") && "font-bold"
                      )}
                    >
                      Hall
                    </TableHead>
                    <TableHead
                      onClick={() => handleSort("deliveryDate")}
                      className={clsx(
                        "cursor-pointer",
                        sort.startsWith("deliveryDate:") && "font-bold"
                      )}
                    >
                      Date
                    </TableHead>
                    <TableHead className="text-center">Total</TableHead>
                    <TableHead className="text-center">Paid</TableHead>
                    <TableHead className="text-center">Remaining</TableHead>
                    <TableHead>Status</TableHead>
                    {tabMeta.key === "myorders" && <TableHead />}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell
                        colSpan={9}
                        className="text-center py-14 text-lg text-muted-foreground"
                      >
                        Loading…
                      </TableCell>
                    </TableRow>
                  ) : orders.length ? (
                    orders.map((order: any) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.userName}</TableCell>
                        <TableCell className="text-sm">{order.phone}</TableCell>
                        <TableCell>{order.hall}</TableCell>
                        <TableCell>
                          {order.deliveryDate &&
                            new Date(order.deliveryDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          ₹{asMoney(order.totalAmount ?? 0)}
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          ₹{asMoney(order.totalPaid ?? 0)}
                        </TableCell>
                        <TableCell className="text-center font-medium">
                          ₹
                          {asMoney(
                            Number(order.totalAmount ?? 0) -
                              Number(order.totalPaid ?? 0)
                          )}
                        </TableCell>
                        <TableCell>
                          <OrderStatusBadge status={order.deliveryStatus} />
                        </TableCell>
                        {tabMeta.key === "myorders" && (
                          <TableCell>
                            <Button
                              type="button"
                              size="icon"
                              variant="ghost"
                              onClick={() =>
                                (window.location.href = `/sales/${order.id}`)
                              }
                              title="Edit Order"
                            >
                              <Pen className="w-5 h-5" />
                            </Button>
                          </TableCell>
                        )}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={9}
                        className="text-center py-14 text-lg text-muted-foreground"
                      >
                        No orders found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <div className="flex justify-between items-center px-4 py-3 border-t">
                <span className="text-sm text-muted-foreground">
                  Page {page} of {totalPages}
                </span>
                <div className="flex gap-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  >
                    <ArrowLeft />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  >
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            <Button
              className="fixed bottom-8 right-8 rounded-full shadow-lg z-50"
              size="icon"
              variant="secondary"
              style={{ width: 56, height: 56 }}
              onClick={() => setAddOpen(true)}
            >
              <BookPlus className="w-8 h-8 text-[#2a836a]" />
            </Button>
            <AddOrderModal open={addOpen} onOpenChange={setAddOpen} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function OrderStatusBadge({ status }: { status: string }) {
  const map = {
    PENDING: "bg-yellow-100 text-yellow-800",
    DELIVERED: "bg-green-100 text-green-800",
    CANCELLED: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`rounded px-2 py-1 text-xs font-bold ${
        map[status as keyof typeof map] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status.replace(/_/g, " ")}
    </span>
  );
}
