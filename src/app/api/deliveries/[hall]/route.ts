import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Hall, DeliveryStatus, isValidHall } from "@/types/enums";

// Type definitions based on your Prisma schema
interface OrderItemWithProduct {
  id: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  amountPaid: number;
  discount: number;
  deliveryStatus: DeliveryStatus;
  Product: { name: string } | null;
  Variant: { name: string } | null;
}

interface OrderWithItems {
  id: string;
  userName: string;
  phone: string;
  alternatePhone: string | null;
  roll: string | null;
  hall: Hall;
  deliveryDate: Date;
  totalAmount: number;
  totalPaid: number;
  totalDiscount: number;
  additionalInfo: string | null;
  deliveryStatus: DeliveryStatus;
  createdAt: Date;
  updatedAt: Date;
  OrderItem: OrderItemWithProduct[];
}

interface APIResponse {
  success: boolean;
  orders: OrderWithItems[];
  remainingAmount: number;
  hall: string;
  date: string;
  updatedOrdersCount: number;
}

interface ErrorResponse {
  error: string;
  details?: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ hall: string }> } // Changed: params is now a Promise
): Promise<NextResponse<APIResponse | ErrorResponse>> {
  try {
    // **FIX**: Await the params before accessing properties
    const { hall } = await params;
    const decodedHall = decodeURIComponent(hall);

    // Validate hall parameter
    if (!isValidHall(decodedHall)) {
      return NextResponse.json(
        { error: "Invalid hall parameter" },
        { status: 400 }
      );
    }

    const today = new Date();
    const todayStr: string = today.toISOString().split("T")[0];

    console.log(
      `Fetching deliveries for hall: ${decodedHall}, date: ${todayStr}`
    );

    // Update pending orders from ALL previous days to today
    const updateResult = await prisma.order.updateMany({
      where: {
        hall: decodedHall as Hall,
        deliveryDate: {
          lt: new Date(`${todayStr}T00:00:00.000Z`),
        },
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
        deliveryDate: new Date(`${todayStr}T00:00:00.000Z`),
      },
    });

    console.log(
      `Updated ${updateResult.count} pending orders from previous days to ${todayStr}`
    );

    // Fetch today's orders for the specific hall
    const orders = await prisma.order.findMany({
      where: {
        hall: decodedHall as Hall,
        deliveryDate: {
          gte: new Date(`${todayStr}T00:00:00.000Z`),
          lt: new Date(`${todayStr}T23:59:59.999Z`),
        },
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
      include: {
        OrderItem: {
          where: {
            deliveryStatus: "PENDING",
          },
          include: {
            Product: {
              select: {
                name: true,
              },
            },
            Variant: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    console.log(
      `Found ${orders.length} orders with pending items for hall: ${decodedHall} on ${todayStr}`
    );

    // Type-safe calculation with proper Decimal handling
    const overallRemainingAmount: number = orders.reduce(
      (totalRemaining: number, order) => {
        const orderRemaining: number = order.OrderItem.reduce(
          (orderSum: number, item) => {
            const totalPrice = Number(item.totalPrice);
            const amountPaid = Number(item.amountPaid);
            const itemRemaining = Math.max(0, totalPrice - amountPaid);
            return orderSum + itemRemaining;
          },
          0
        );
        return totalRemaining + orderRemaining;
      },
      0
    );

    const response: APIResponse = {
      success: true,
      orders: orders.map((order) => ({
        ...order,
        totalAmount: Number(order.totalAmount),
        totalPaid: Number(order.totalPaid),
        totalDiscount: Number(order.totalDiscount),
        OrderItem: order.OrderItem.map((item) => ({
          ...item,
          unitPrice: Number(item.unitPrice),
          totalPrice: Number(item.totalPrice),
          amountPaid: Number(item.amountPaid),
          discount: Number(item.discount),
        })),
      })),
      remainingAmount: overallRemainingAmount,
      hall: decodedHall,
      date: todayStr,
      updatedOrdersCount: updateResult.count,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching deliveries for hall:", error);

    const errorResponse: ErrorResponse = {
      error: "Failed to fetch deliveries",
      details: error instanceof Error ? error.message : "Unknown error",
    };

    return NextResponse.json(errorResponse, { status: 500 });
  }
}
