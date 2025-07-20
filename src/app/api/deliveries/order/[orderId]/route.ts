import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import {
  DELIVERY_STATUSES,
  isValidDeliveryStatus,
  type DeliveryStatus,
} from "@/types/enums";

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await context.params;
  const { status } = await req.json();

  if (!isValidDeliveryStatus(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { OrderItem: true },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // If setting to DELIVERED, ensure all items are delivered
    if (status === "DELIVERED") {
      const undeliveredItems = order.OrderItem.filter(
        (item) => item.deliveryStatus !== "DELIVERED"
      );

      if (undeliveredItems.length > 0) {
        return NextResponse.json(
          {
            error:
              "Cannot mark order as delivered. Some items are not delivered yet.",
          },
          { status: 400 }
        );
      }
    }

    await prisma.order.update({
      where: { id: orderId },
      data: { deliveryStatus: status },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Could not update order status" },
      { status: 500 }
    );
  }
}
