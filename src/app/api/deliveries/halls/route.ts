import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const now = new Date();
    const todayStart = new Date(now);
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date(todayStart);
    todayEnd.setDate(todayEnd.getDate() + 1);

    console.log(
      `Checking and updating delivery dates for today: ${
        todayStart.toISOString().split("T")[0]
      }`
    );

    // **FIRST**: Update all pending orders from previous days to today
    // This ensures orders from July 26th (or any previous day) get moved to July 27th
    const updateResult = await prisma.order.updateMany({
      where: {
        // All orders before today's start
        deliveryDate: {
          lt: todayStart,
        },
        // Only update orders that have pending items
        OR: [
          { deliveryStatus: "PENDING" },
          {
            OrderItem: {
              some: {
                deliveryStatus: "PENDING",
              },
            },
          },
        ],
      },
      data: {
        deliveryDate: todayStart,
      },
    });

    console.log(
      `Updated ${updateResult.count} pending orders from previous days to today`
    );

    // **THEN**: Get all halls that have pending deliveries for today
    // (This now includes the updated orders from previous days)
    const orders = await prisma.order.findMany({
      where: {
        deliveryDate: {
          gte: todayStart,
          lt: todayEnd,
        },
        OrderItem: {
          some: {
            deliveryStatus: {
              in: ["PENDING"],
            },
          },
        },
      },
      select: { hall: true },
      distinct: ["hall"],
    });

    const halls = orders.map((o) => o.hall);

    console.log(
      `Found ${halls.length} halls with pending deliveries for today:`,
      halls
    );

    return NextResponse.json({
      halls,
      updatedOrdersCount: updateResult.count,
      date: todayStart.toISOString().split("T")[0],
    });
  } catch (error) {
    console.error("Error fetching halls with pending deliveries:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch halls",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
