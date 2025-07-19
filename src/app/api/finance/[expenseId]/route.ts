import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

async function getExpenseId(params: any): Promise<string> {
  if (typeof params.then === "function") params = await params;
  return params.expenseId;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { expenseId: string } }
) {
  const expenseId = await getExpenseId(params);

  try {
    const expense = await prisma.financeExpense.findUnique({
      where: { id: expenseId },
      include: {
        Product: true,
        Variant: true,
        User: true,
      },
    });

    if (!expense) {
      return NextResponse.json({ error: "Expense not found" }, { status: 404 });
    }

    return NextResponse.json(expense);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch expense" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { expenseId: string } }
) {
  const expenseId = await getExpenseId(params);
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { type, description, value, productId, variantId, quantity } =
      await req.json();

    const expense = await prisma.financeExpense.update({
      where: { id: expenseId },
      data: {
        type,
        description,
        value: Number(value),
        productId: productId || null,
        variantId: variantId || null,
        quantity: quantity ? Number(quantity) : null,
      },
      include: {
        Product: true,
        Variant: true,
        User: true,
      },
    });

    return NextResponse.json(expense);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update expense" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { expenseId: string } }
) {
  const expenseId = await getExpenseId(params);

  try {
    await prisma.financeExpense.delete({
      where: { id: expenseId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete expense" },
      { status: 500 }
    );
  }
}
