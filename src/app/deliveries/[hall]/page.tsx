"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const DELIVERY_STATUSES = [
  "PENDING",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
  "CANCELLED",
  "NOT_AVAILABLE",
] as const;

function statusDisplay(s: string) {
  switch (s) {
    case "PENDING":
      return "Pending";
    case "OUT_FOR_DELIVERY":
      return "Out for Delivery";
    case "DELIVERED":
      return "Delivered";
    case "CANCELLED":
      return "Cancelled";
    case "NOT_AVAILABLE":
      return "Not Available";
    default:
      return s;
  }
}

function asMoney(n: number | string) {
  return Number(n || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function DeliveriesHallPage() {
  const { hall } = useParams<{ hall: string }>();
  const router = useRouter();
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingItemId, setUpdatingItemId] = useState<string | null>(null);
  const [itemEditing, setItemEditing] = useState<{ [id: string]: string }>({});
  const [overallRemainingAmount, setOverallRemainingAmount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  function fetchOrders() {
    setLoading(true);
    setError(null);

    console.log("Fetching pending orders for hall:", hall);

    fetch(`/api/deliveries/${encodeURIComponent(hall)}`)
      .then((r) => {
        console.log("Fetch response status:", r.status);
        return r.json();
      })
      .then((d) => {
        console.log("Fetch response data:", d);
        if (d.error) {
          setError(d.error);
        } else {
          setOrders(d.orders ?? []);
          setOverallRemainingAmount(d.remainingAmount ?? 0);
          setItemEditing({});
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load orders");
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    if (hall) {
      fetchOrders();
    }
  }, [hall]);

  const onItemStatusSelect = (itemId: string, value: string) => {
    console.log("Status selected for item:", itemId, "status:", value);
    setItemEditing((e) => ({ ...e, [itemId]: value }));
  };

  const handleItemStatusUpdate = async (
    orderItemId: string,
    status: string
  ) => {
    console.log("=== Frontend Update ===");
    console.log("OrderItemId:", orderItemId);
    console.log("Status:", status);

    setUpdatingItemId(orderItemId);
    setError(null);

    try {
      const url = `/api/deliveries/update-item`;
      console.log("Fetching URL:", url);

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderItemId, status }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const result = await response.json();
      console.log("Parsed JSON:", result);

      if (result.success) {
        console.log("Update successful!");
        // Revalidate by fetching fresh data
        fetchOrders();
      } else {
        setError(result.error || "Update failed");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError(`Error: ${err instanceof Error ? err.message : "Unknown"}`);
    } finally {
      setUpdatingItemId(null);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-10">
        <div className="text-center text-gray-600 py-12">
          Loading pending orders...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-10">
        <div className="text-center text-red-600 py-12">
          <div className="font-bold">Error:</div>
          <div className="mt-2">{error}</div>
          <Button onClick={fetchOrders} className="mt-4">
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => router.push("/deliveries")}
      >
        ← Back
      </Button>
      <h2 className="text-2xl mb-2 font-bold text-black">
        {decodeURIComponent(hall)} Hall - Pending Deliveries
      </h2>
      <div className="mb-8 text-md text-gray-700 font-semibold">
        Total Pending Amount:{" "}
        <span className="text-black text-lg">
          ₹{asMoney(overallRemainingAmount)}
        </span>
      </div>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500 py-12">
          🎉 No pending deliveries for today in this hall!
          <br />
          <span className="text-sm">All orders have been completed.</span>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => {
            // Calculate remaining amount for this order (only pending items)
            const orderRemainingAmount =
              order.OrderItem?.reduce((sum: number, item: any) => {
                const itemRemaining =
                  Number(item.totalPrice || 0) - Number(item.amountPaid || 0);
                return sum + Math.max(0, itemRemaining);
              }, 0) || 0;

            return (
              <div
                key={order.id}
                className="bg-white border border-gray-300 p-6 rounded-lg shadow flex flex-col gap-3"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div className="font-bold text-lg">
                      {order.userName}{" "}
                      <span className="font-normal text-gray-500">
                        ({order.phone})
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      <b>Order Total:</b> ₹{asMoney(order.totalAmount || 0)}{" "}
                      &nbsp;|&nbsp;<b>Total Paid:</b> ₹
                      {asMoney(order.totalPaid || 0)} &nbsp;|&nbsp;
                      <b>Pending Amount:</b> ₹{asMoney(orderRemainingAmount)}
                      <br />
                      <b>Date:</b> {order.deliveryDate?.slice(0, 10)}{" "}
                      &nbsp;|&nbsp;<b>Order Status:</b>{" "}
                      <span
                        className={`px-2 py-1 rounded text-xs font-bold ${
                          order.deliveryStatus === "DELIVERED"
                            ? "bg-green-100 text-green-800"
                            : order.deliveryStatus === "PENDING"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.deliveryStatus === "OUT_FOR_DELIVERY"
                            ? "bg-blue-100 text-blue-800"
                            : order.deliveryStatus === "CANCELLED"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {statusDisplay(order.deliveryStatus)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Pending Items: ({order.OrderItem?.length || 0})
                  </h4>
                  <div className="flex flex-col gap-3">
                    {order.OrderItem?.map((oi: any) => {
                      const editStatus =
                        itemEditing[oi.id] ?? oi.deliveryStatus;
                      const itemRemaining = Math.max(
                        0,
                        Number(oi.totalPrice || 0) - Number(oi.amountPaid || 0)
                      );

                      return (
                        <div
                          key={oi.id}
                          className="flex gap-3 items-center border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50"
                        >
                          <div className="flex-1">
                            <div className="font-medium">
                              {oi.Product?.name || "Unknown Product"}
                              {oi.Variant && <> / {oi.Variant.name}</>}
                            </div>
                            <div className="text-xs text-gray-500">
                              Qty: {oi.quantity} × ₹
                              {asMoney(Number(oi.unitPrice || 0))} = ₹
                              {asMoney(oi.totalPrice || 0)} | Paid: ₹
                              {asMoney(oi.amountPaid || 0)} |{" "}
                              <span className="font-semibold text-purple-700">
                                Remaining: ₹{asMoney(itemRemaining)}
                              </span>
                            </div>
                          </div>

                          <select
                            value={editStatus}
                            onChange={(e) =>
                              onItemStatusSelect(oi.id, e.target.value)
                            }
                            disabled={updatingItemId === oi.id}
                            className="p-2 border rounded bg-white text-black font-semibold min-w-[140px]"
                          >
                            {DELIVERY_STATUSES.map((s) => (
                              <option key={s} value={s}>
                                {statusDisplay(s)}
                              </option>
                            ))}
                          </select>

                          <Button
                            onClick={() =>
                              handleItemStatusUpdate(oi.id, editStatus)
                            }
                            disabled={updatingItemId === oi.id}
                            className="px-4 py-2 bg-black text-white"
                          >
                            {updatingItemId === oi.id
                              ? "Updating..."
                              : "Update"}
                          </Button>
                        </div>
                      );
                    }) || []}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
