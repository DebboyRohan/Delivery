import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { DeliveryStatus } from "@prisma/client";

const allowedStatuses: DeliveryStatus[] = [
  "PENDING",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
  "CANCELLED",
  "NOT_AVAILABLE",
];

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ orderItemId: string }> }
) {
  // Await params before accessing properties
  const { orderItemId } = await context.params;

  try {
    const body = await req.json();
    const { status } = body;

    if (!status || !allowedStatuses.includes(status as DeliveryStatus)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    // Get the order item with its order
    const orderItem = await prisma.orderItem.findUnique({
      where: { id: orderItemId },
      include: { Order: true },
    });

    if (!orderItem) {
      return NextResponse.json(
        { error: "Order item not found" },
        { status: 404 }
      );
    }

    // Update the order item status
    await prisma.orderItem.update({
      where: { id: orderItemId },
      data: { deliveryStatus: status as DeliveryStatus },
    });

    // Get all order items for this order to check if all are delivered
    const allOrderItems = await prisma.orderItem.findMany({
      where: { orderId: orderItem.orderId },
    });

    // Update the current item status in memory for the check
    const updatedItems = allOrderItems.map((item) =>
      item.id === orderItemId
        ? { ...item, deliveryStatus: status as DeliveryStatus }
        : item
    );

    // Check if all items are now delivered
    const allItemsDelivered = updatedItems.every(
      (item) => item.deliveryStatus === "DELIVERED"
    );

    // Update order status accordingly
    const newOrderStatus: DeliveryStatus = allItemsDelivered
      ? "DELIVERED"
      : "PENDING";

    // Only update if order status needs to change
    if (orderItem.Order.deliveryStatus !== newOrderStatus) {
      await prisma.order.update({
        where: { id: orderItem.orderId },
        data: { deliveryStatus: newOrderStatus },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating order item:", error);
    return NextResponse.json(
      { error: "Could not update status" },
      { status: 500 }
    );
  }
}
