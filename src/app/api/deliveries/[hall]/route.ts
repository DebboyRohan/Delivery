import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import type { Hall, DeliveryStatus } from "@prisma/client";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ hall: string }> }
) {
  // Await params before accessing properties
  const { hall } = await context.params;

  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date(todayStart);
  todayEnd.setDate(todayEnd.getDate() + 1);

  try {
    const orders = await prisma.order.findMany({
      where: {
        hall: hall as Hall,
        deliveryDate: { gte: todayStart, lt: todayEnd },
      },
      include: {
        OrderItem: { include: { Product: true, Variant: true } },
        User: true,
      },
      orderBy: { deliveryDate: "asc" },
    });

    // Calculate remaining amount: sum of (totalPrice - amountPaid) for undelivered items
    let remainingAmount = 0;
    for (const order of orders) {
      for (const item of order.OrderItem) {
        if (item.deliveryStatus !== "DELIVERED") {
          remainingAmount += Number(item.totalPrice) - Number(item.amountPaid);
        }
      }
    }

    return NextResponse.json({ orders, remainingAmount });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
