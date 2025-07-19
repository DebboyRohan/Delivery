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
import { Pen, BookPlus, ArrowLeft, ArrowRight } from "lucide-react";
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
  const pageSize = 15;
  const [addOpen, setAddOpen] = useState(false);

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

  return (
    <div className="max-w-6xl mx-auto px-4 pb-24 pt-8 relative">
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
    OUT_FOR_DELIVERY: "bg-blue-100 text-blue-800",
    DELIVERED: "bg-green-100 text-green-800",
    CANCELLED: "bg-red-100 text-red-800",
    NOT_AVAILABLE: "bg-gray-100 text-gray-800",
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
