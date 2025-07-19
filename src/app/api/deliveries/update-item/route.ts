import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { DeliveryStatus } from "@prisma/client";

const allowedStatuses: DeliveryStatus[] = [
  "PENDING",
  "OUT_FOR_DELIVERY",
  "DELIVERED",
  "CANCELLED",
  "NOT_AVAILABLE",
];

export async function PUT(request: NextRequest) {
  try {
    const { orderItemId, status } = await request.json();

    console.log("Update request:", { orderItemId, status });

    if (!orderItemId || !status) {
      return NextResponse.json(
        { error: "Missing orderItemId or status" },
        { status: 400 }
      );
    }

    if (!allowedStatuses.includes(status as DeliveryStatus)) {
      return NextResponse.json(
        {
          error: `Invalid status. Must be one of: ${allowedStatuses.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    // Find the order item
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

    console.log(
      "Found order item:",
      orderItem.id,
      "for order:",
      orderItem.orderId
    );

    // Update the order item status
    await prisma.orderItem.update({
      where: { id: orderItemId },
      data: { deliveryStatus: status as DeliveryStatus },
    });

    console.log("Updated order item status to:", status);

    // Get all order items for this order to check if all are delivered
    const allOrderItems = await prisma.orderItem.findMany({
      where: { orderId: orderItem.orderId },
    });

    // Check if all items are now delivered (including the one we just updated)
    const allItemsDelivered = allOrderItems.every(
      (item) =>
        item.id === orderItemId
          ? status === "DELIVERED" // Use the new status for the current item
          : item.deliveryStatus === "DELIVERED" // Use existing status for other items
    );

    console.log("All items delivered:", allItemsDelivered);

    // Update order status based on item completion
    let newOrderStatus: DeliveryStatus;

    if (allItemsDelivered) {
      newOrderStatus = "DELIVERED";
    } else {
      // If any item is not delivered, keep order as PENDING (or maintain current status if not DELIVERED)
      newOrderStatus =
        orderItem.Order.deliveryStatus === "DELIVERED"
          ? "PENDING"
          : orderItem.Order.deliveryStatus;
    }

    // Only update order status if it needs to change
    if (orderItem.Order.deliveryStatus !== newOrderStatus) {
      await prisma.order.update({
        where: { id: orderItem.orderId },
        data: { deliveryStatus: newOrderStatus },
      });
      console.log(
        "Updated order status from",
        orderItem.Order.deliveryStatus,
        "to",
        newOrderStatus
      );
    }

    return NextResponse.json({
      success: true,
      orderItemId,
      newItemStatus: status,
      orderStatus: newOrderStatus,
      allItemsDelivered,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      {
        error: `Server error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    );
  }
}
