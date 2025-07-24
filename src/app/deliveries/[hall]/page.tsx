"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DELIVERY_STATUSES } from "@/types/enums";

function statusDisplay(s: string) {
  switch (s) {
    case "PENDING":
      return "Pending";
    case "DELIVERED":
      return "Delivered";
    case "CANCELLED":
      return "Cancelled";
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
  const [showQRModal, setShowQRModal] = useState(false);

  function fetchOrders() {
    setLoading(true);
    setError(null);

    fetch(`/api/deliveries/${encodeURIComponent(hall)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) {
          setError(d.error);
        } else {
          setOrders(d.orders ?? []);
          setOverallRemainingAmount(d.remainingAmount ?? 0);
          setItemEditing({});
        }
      })
      .catch((err) => {
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
    setItemEditing((e) => ({ ...e, [itemId]: value }));
  };

  const handleItemStatusUpdate = async (
    orderItemId: string,
    status: string
  ) => {
    setUpdatingItemId(orderItemId);
    setError(null);

    try {
      const response = await fetch(`/api/deliveries/update-item`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderItemId, status }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        fetchOrders();
      } else {
        setError(result.error || "Update failed");
      }
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : "Unknown"}`);
    } finally {
      setUpdatingItemId(null);
    }
  };

  const handleQRModalClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowQRModal(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading deliveries...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <div className="text-red-500 mb-4 text-lg font-medium">Error</div>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button onClick={fetchOrders} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Clean Header */}
        <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/deliveries")}
                className="p-2 hover:bg-gray-100"
              >
                ← Back
              </Button>
            </div>

            <h1 className="text-xl font-semibold text-gray-900 mb-1">
              {decodeURIComponent(hall)}
            </h1>

            {/* Hall Remaining Amount */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Pending Amount</span>
              <span className="text-lg font-bold text-red-600">
                ₹{asMoney(overallRemainingAmount)}
              </span>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="px-4 py-4">
          {orders.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-2">✓</div>
              <p className="text-gray-500">No pending deliveries</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => {
                const orderRemainingAmount =
                  order.OrderItem?.reduce((sum: number, item: any) => {
                    const itemRemaining =
                      Number(item.totalPrice || 0) -
                      Number(item.amountPaid || 0);
                    return sum + Math.max(0, itemRemaining);
                  }, 0) || 0;

                return (
                  <div
                    key={order.id}
                    className="bg-white rounded-lg border border-gray-100 overflow-hidden"
                  >
                    {/* Customer Header */}
                    <div className="px-4 py-3 border-b border-gray-50">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {order.userName}
                          </h3>
                          <p className="text-sm text-gray-500">{order.phone}</p>
                        </div>

                        {/* Order Remaining Amount */}
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Pending</div>
                          <div className="text-lg font-semibold text-red-600">
                            ₹{asMoney(orderRemainingAmount)}
                          </div>
                        </div>
                      </div>

                      {/* Order Status & Date */}
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-gray-500">
                          {order.deliveryDate?.slice(0, 10)}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.deliveryStatus === "DELIVERED"
                              ? "bg-green-100 text-green-700"
                              : order.deliveryStatus === "PENDING"
                              ? "bg-amber-100 text-amber-700"
                              : order.deliveryStatus === "CANCELLED"
                              ? "bg-red-100 text-red-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {statusDisplay(order.deliveryStatus)}
                        </span>
                      </div>
                    </div>

                    {/* Items List */}
                    <div className="divide-y divide-gray-50">
                      {order.OrderItem?.map((oi: any) => {
                        const editStatus =
                          itemEditing[oi.id] ?? oi.deliveryStatus;
                        const itemRemaining = Math.max(
                          0,
                          Number(oi.totalPrice || 0) -
                            Number(oi.amountPaid || 0)
                        );

                        return (
                          <div key={oi.id} className="p-4">
                            {/* Product Info */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 text-sm">
                                  {oi.Product?.name || "Unknown Product"}
                                  {oi.Variant && (
                                    <span className="text-gray-500">
                                      {" "}
                                      / {oi.Variant.name}
                                    </span>
                                  )}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1">
                                  Qty: {oi.quantity}
                                </p>
                              </div>

                              {/* Item Remaining Amount */}
                              <div className="text-right ml-4">
                                <span className="text-sm font-semibold text-red-600">
                                  ₹{asMoney(itemRemaining)}
                                </span>
                              </div>
                            </div>

                            {/* Status Update Controls */}
                            <div className="space-y-2">
                              <select
                                value={editStatus}
                                onChange={(e) =>
                                  onItemStatusSelect(oi.id, e.target.value)
                                }
                                disabled={updatingItemId === oi.id}
                                className="w-full p-2.5 text-sm border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                className="w-full h-10 bg-gray-900 hover:bg-black text-white font-medium"
                              >
                                {updatingItemId === oi.id
                                  ? "Updating..."
                                  : "Update"}
                              </Button>
                            </div>
                          </div>
                        );
                      }) || []}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Floating QR Button */}
      <button
        onClick={() => setShowQRModal(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-all duration-200 active:scale-95"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="8"
            height="8"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="13"
            y="3"
            width="8"
            height="8"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect
            x="3"
            y="13"
            width="8"
            height="8"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
          />
          <rect x="5" y="5" width="4" height="4" fill="currentColor" />
          <rect x="15" y="5" width="4" height="4" fill="currentColor" />
          <rect x="5" y="15" width="4" height="4" fill="currentColor" />
          <rect x="13" y="13" width="3" height="3" fill="currentColor" />
          <rect x="17" y="13" width="4" height="4" fill="currentColor" />
          <rect x="13" y="17" width="8" height="4" fill="currentColor" />
        </svg>
      </button>

      {/* QR Modal */}
      {showQRModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleQRModalClose}
        >
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-900">
                QR Code
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <img
                  src="/deliveryQR.png"
                  alt="QR Code"
                  className="w-full h-auto max-w-64 mx-auto"
                />
              </div>
              <p className="text-sm text-gray-500 mt-4">Tap outside to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
