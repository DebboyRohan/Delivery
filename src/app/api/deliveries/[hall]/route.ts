import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import type { Hall, DeliveryStatus } from "@prisma/client";

async function getHallParam(params: any): Promise<Hall> {
  if (typeof params.then === "function") params = await params;
  return params.hall as Hall;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { hall: string } }
) {
  const hall = await getHallParam(params);

  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date(todayStart);
  todayEnd.setDate(todayEnd.getDate() + 1);

  // Fetch only orders that have at least one PENDING item for today
  const orders = await prisma.order.findMany({
    where: {
      hall,
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
          deliveryStatus: "PENDING", // Only include PENDING items
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
      // Since we already filtered for PENDING items, all items here are PENDING
      remainingAmount += Number(item.totalPrice) - Number(item.amountPaid);
    }
  }

  return NextResponse.json({ orders, remainingAmount });
}
