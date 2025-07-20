import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {
  DELIVERY_STATUSES,
  isValidDeliveryStatus,
  type DeliveryStatus,
} from "@/types/enums";

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

    if (!isValidDeliveryStatus(status)) {
      return NextResponse.json(
        {
          error: `Invalid status. Must be one of: ${DELIVERY_STATUSES.join(
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

    // Update the order item status
    await prisma.orderItem.update({
      where: { id: orderItemId },
      data: { deliveryStatus: status },
    });

    // Get all order items for this order to check if all are delivered
    const allOrderItems = await prisma.orderItem.findMany({
      where: { orderId: orderItem.orderId },
    });

    // Check if all items are now delivered
    const allItemsDelivered = allOrderItems.every((item) =>
      item.id === orderItemId
        ? status === "DELIVERED"
        : item.deliveryStatus === "DELIVERED"
    );

    // Update order status accordingly
    const newOrderStatus: DeliveryStatus = allItemsDelivered
      ? "DELIVERED"
      : "PENDING";

    if (orderItem.Order.deliveryStatus !== newOrderStatus) {
      await prisma.order.update({
        where: { id: orderItem.orderId },
        data: { deliveryStatus: newOrderStatus },
      });
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
