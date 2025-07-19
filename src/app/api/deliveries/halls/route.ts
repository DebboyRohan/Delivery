import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date(todayStart);
  todayEnd.setDate(todayEnd.getDate() + 1);

  const orders = await prisma.order.findMany({
    where: {
      deliveryDate: { gte: todayStart, lt: todayEnd },
      OrderItem: {
        some: {
          deliveryStatus: {
            in: ["PENDING", "OUT_FOR_DELIVERY", "NOT_AVAILABLE"],
          },
        },
      },
    },
    select: { hall: true },
    distinct: ["hall"],
  });

  return NextResponse.json({ halls: orders.map((o) => o.hall) });
}
