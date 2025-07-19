import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await context.params;
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      OrderItem: { include: { Product: true, Variant: true } },
      User: true,
    },
  });
  if (!order)
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  return NextResponse.json(order);
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await context.params;
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 403 });

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: { OrderItem: true },
  });
  if (!order || order.referalId !== user.id)
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  const {
    userName,
    phone,
    hall,
    deliveryDate,
    additionalInfo,
    alternatePhone,
    roll,
    OrderItem: newOrderItems,
  } = await req.json();

  if (!Array.isArray(newOrderItems) || newOrderItems.length === 0) {
    await prisma.orderItem.deleteMany({ where: { orderId } });
    await prisma.order.delete({ where: { id: orderId } });
    return NextResponse.json({ success: true, deleted: true });
  }

  const existingItemIds = (order.OrderItem ?? []).map((oi) => oi.id);
  const newItemIds = newOrderItems
    .filter((oi: any) => oi.id)
    .map((oi: any) => oi.id);
  const itemsToDelete = existingItemIds.filter(
    (id) => !newItemIds.includes(id)
  );

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
    if (itemsToDelete.length) {
      await prisma.orderItem.deleteMany({
        where: { id: { in: itemsToDelete } },
      });
    }

    let totalAmount = 0;
    let totalPaid = 0;
    let totalDiscount = 0;

    for (const oi of newOrderItems) {
      const unitPrice = await getCurrentPrice(
        oi.productId,
        oi.variantId || null
      );
      const itemTotalPrice = unitPrice * (Number(oi.quantity) || 1);
      const itemPaid = Number(oi.amountPaid || 0);
      const itemDiscount = Number(oi.discount || 0);

      totalAmount += itemTotalPrice;
      totalPaid += itemPaid;
      totalDiscount += itemDiscount;

      if (oi.id) {
        await prisma.orderItem.update({
          where: { id: oi.id },
          data: {
            productId: oi.productId,
            variantId: oi.variantId || null,
            quantity: Number(oi.quantity) || 1,
            unitPrice,
            totalPrice: itemTotalPrice,
            amountPaid: itemPaid,
            discount: itemDiscount,
          },
        });
      } else {
        await prisma.orderItem.create({
          data: {
            orderId,
            productId: oi.productId,
            variantId: oi.variantId || null,
            quantity: Number(oi.quantity) || 1,
            unitPrice,
            totalPrice: itemTotalPrice,
            amountPaid: itemPaid,
            discount: itemDiscount,
          },
        });
      }
    }

    const updated = await prisma.order.update({
      where: { id: orderId },
      data: {
        userName,
        phone,
        hall,
        deliveryDate: new Date(deliveryDate),
        totalAmount,
        totalPaid,
        totalDiscount,
        additionalInfo: additionalInfo ?? null,
        alternatePhone: alternatePhone ? String(alternatePhone) : null,
        roll: roll ? String(roll) : null,
      },
      include: {
        OrderItem: { include: { Product: true, Variant: true } },
        User: true,
      },
    });
    return NextResponse.json(updated);
  } catch (e) {
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await context.params;
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 403 });

  const order = await prisma.order.findUnique({ where: { id: orderId } });
  if (!order || order.referalId !== user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    await prisma.orderItem.deleteMany({ where: { orderId } });
    await prisma.order.delete({ where: { id: orderId } });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Could not delete order" },
      { status: 500 }
    );
  }
}
