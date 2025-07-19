import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "15", 10);
  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const tab = searchParams.get("tab") || "myorders";
  const search = searchParams.get("search") ?? "";
  const sort = searchParams.get("sort") ?? "createdAt:desc";
  const [sortField, sortDir] = sort.split(":");
  const orderBy = { [sortField]: sortDir === "asc" ? "asc" : "desc" };

  let where: any = {};
  const { userId } = await auth();

  if (tab === "myorders" && userId) {
    const referalUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    });
    if (referalUser) where.referalId = referalUser.id;
  }
  if (tab === "delivered") where.deliveryStatus = "DELIVERED";
  if (tab === "undelivered")
    where.deliveryStatus = {
      in: ["PENDING", "OUT_FOR_DELIVERY", "NOT_AVAILABLE"],
    };
  if (tab === "cancelled") where.deliveryStatus = "CANCELLED";
  if (search.trim()) {
    where.OR = [
      { userName: { contains: search, mode: "insensitive" } },
      { phone: { contains: search, mode: "insensitive" } },
      { hall: { contains: search, mode: "insensitive" } },
      { roll: { contains: search, mode: "insensitive" } },
    ];
  }

  const [orders, total, analyticsRaw] = await Promise.all([
    prisma.order.findMany({
      where,
      include: {
        OrderItem: { include: { Product: true, Variant: true } },
        User: true,
      },
      skip,
      take,
      orderBy,
    }),
    prisma.order.count({ where }),
    tab === "myorders"
      ? prisma.order.aggregate({
          where,
          _sum: { totalPaid: true },
          _count: { id: true },
        })
      : null,
  ]);

  return NextResponse.json({
    orders,
    total,
    analytics:
      tab === "myorders"
        ? {
            totalOrderAmount: analyticsRaw?._sum?.totalPaid ?? 0,
            totalOrderCount: analyticsRaw?._count?.id ?? 0,
          }
        : undefined,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  });
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 403 });
  }

  const body = await req.json();
  const {
    userName,
    phone,
    hall,
    deliveryDate,
    additionalInfo,
    alternatePhone,
    roll,
    OrderItem,
  } = body;

  if (
    !userName ||
    !phone ||
    !hall ||
    !deliveryDate ||
    !Array.isArray(OrderItem) ||
    !OrderItem.length
  ) {
    return NextResponse.json(
      { error: "Required fields missing" },
      { status: 400 }
    );
  }

  // Helper to get current price
  async function getCurrentPrice(
    productId: string,
    variantId?: string | null
  ): Promise<number> {
    if (variantId) {
      const variant = await prisma.variant.findUnique({
        where: { id: variantId },
        select: { variantPrice: true },
      });
      return Number(variant?.variantPrice ?? 0);
    }
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { price: true },
    });
    return Number(product?.price ?? 0);
  }

  try {
    // Calculate totals
    let totalAmount = 0;
    let totalPaid = 0;
    let totalDiscount = 0;

    const orderItemsWithPrice = await Promise.all(
      OrderItem.map(async (item: any) => {
        const unitPrice = await getCurrentPrice(
          item.productId,
          item.variantId || null
        );
        const itemTotalPrice = unitPrice * (Number(item.quantity) || 1);
        const itemPaid = Number(item.amountPaid || 0);
        const itemDiscount = Number(item.discount || 0);

        totalAmount += itemTotalPrice;
        totalPaid += itemPaid;
        totalDiscount += itemDiscount;

        return {
          productId: item.productId,
          variantId: item.variantId || null,
          quantity: Number(item.quantity) || 1,
          unitPrice,
          totalPrice: itemTotalPrice,
          amountPaid: itemPaid,
          discount: itemDiscount,
        };
      })
    );

    const order = await prisma.order.create({
      data: {
        userName,
        phone,
        alternatePhone: alternatePhone ? String(alternatePhone) : null,
        roll: roll ? String(roll) : null,
        hall,
        deliveryDate: new Date(deliveryDate),
        totalAmount,
        totalPaid,
        totalDiscount,
        additionalInfo: additionalInfo ?? null,
        referalId: user.id,
        OrderItem: {
          create: orderItemsWithPrice,
        },
      },
      include: {
        OrderItem: { include: { Product: true, Variant: true } },
        User: true,
      },
    });
    return NextResponse.json(order, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "Could not create order" },
      { status: 500 }
    );
  }
}
