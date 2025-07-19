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

// Helper to extract orderItemId from params (Next.js 15+ compatibility)
async function getOrderItemId(params: any): Promise<string> {
  if (typeof params.then === "function") params = await params;
  return params.orderItemId;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { orderItemId: string } }
) {
  try {
    const orderItemId = await getOrderItemId(params);

    const orderItem = await prisma.orderItem.findUnique({
      where: { id: orderItemId },
      include: {
        Product: true,
        Variant: true,
        Order: true,
      },
    });

    if (!orderItem) {
      return NextResponse.json(
        { error: "Order item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(orderItem);
  } catch (error) {
    console.error("GET orderItem error:", error);
    return NextResponse.json(
      { error: "Failed to fetch order item" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { orderItemId: string } }
) {
  try {
    const orderItemId = await getOrderItemId(params);
    console.log("=== OrderItem Update API ===");
    console.log("OrderItemId:", orderItemId);

    // Parse request body
    const body = await request.json();
    console.log("Request body:", body);

    const { status } = body;

    // Validate status
    if (!status) {
      return NextResponse.json(
        { error: "Status is required" },
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
    console.error("PUT orderItem error:", error);
    return NextResponse.json(
      {
        error: `Server error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { orderItemId: string } }
) {
  try {
    const orderItemId = await getOrderItemId(params);

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

    // Delete the order item
    await prisma.orderItem.delete({
      where: { id: orderItemId },
    });

    // Check if this was the last item in the order
    const remainingItems = await prisma.orderItem.count({
      where: { orderId: orderItem.orderId },
    });

    // If no items remain, optionally delete the order too
    if (remainingItems === 0) {
      await prisma.order.delete({
        where: { id: orderItem.orderId },
      });
      return NextResponse.json({
        success: true,
        orderItemDeleted: true,
        orderDeleted: true,
        message: "Order item and empty order deleted",
      });
    }

    return NextResponse.json({
      success: true,
      orderItemDeleted: true,
      orderDeleted: false,
      remainingItems,
    });
  } catch (error) {
    console.error("DELETE orderItem error:", error);
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
