import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { isValidHall } from "@/types/enums";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ hall: string }> }
) {
  const { hall } = await context.params;

  // Validate hall parameter using helper function
  if (!isValidHall(hall)) {
    return NextResponse.json({ error: "Invalid hall" }, { status: 400 });
  }

  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date(todayStart);
  todayEnd.setDate(todayEnd.getDate() + 1);

  try {
    const orders = await prisma.order.findMany({
      where: {
        hall: hall,
        deliveryDate: { gte: todayStart, lt: todayEnd },
        OrderItem: {
          some: {
            deliveryStatus: "PENDING",
          },
        },
      },
      include: {
        OrderItem: {
          where: {
            deliveryStatus: "PENDING",
          },
          include: { Product: true, Variant: true },
        },
        User: true,
      },
      orderBy: { deliveryDate: "asc" },
    });

    // Calculate remaining amount: sum of (totalPrice - amountPaid) for PENDING items only
    let remainingAmount = 0;
    for (const order of orders) {
      for (const item of order.OrderItem) {
        remainingAmount += Number(item.totalPrice) - Number(item.amountPaid);
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
