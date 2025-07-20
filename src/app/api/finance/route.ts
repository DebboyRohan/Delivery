import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import {
  FINANCE_EXPENSE_TYPES,
  isValidFinanceExpenseType,
  type FinanceExpenseType,
} from "@/types/enums";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "20", 10);
  const typeParam = searchParams.get("type");
  const skip = (page - 1) * pageSize;

  try {
    // Build where clause with proper type checking
    const where: any = {};
    if (typeParam && isValidFinanceExpenseType(typeParam)) {
      where.type = typeParam;
    }

    const [expenses, total, summary] = await Promise.all([
      prisma.financeExpense.findMany({
        where,
        include: {
          Product: true,
          Variant: true,
          User: true,
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: pageSize,
      }),
      prisma.financeExpense.count({ where }),
      prisma.financeExpense.aggregate({
        where,
        _sum: { value: true },
        _count: { id: true },
      }),
    ]);

    return NextResponse.json({
      expenses,
      total,
      summary: {
        totalAmount: Number(summary._sum.value || 0),
        totalCount: summary._count.id || 0,
      },
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("Finance GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch expenses" },
      { status: 500 }
    );
  }
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

  try {
    const { type, description, value, productId, variantId, quantity } =
      await req.json();

    if (!type || !description || value === undefined || value === null) {
      return NextResponse.json(
        { error: "Type, description, and value are required" },
        { status: 400 }
      );
    }

    // Validate type enum
    if (!isValidFinanceExpenseType(type)) {
      return NextResponse.json(
        { error: `Type must be one of: ${FINANCE_EXPENSE_TYPES.join(", ")}` },
        { status: 400 }
      );
    }

    // Validate numeric values
    const numericValue = Number(value);
    if (isNaN(numericValue) || numericValue < 0) {
      return NextResponse.json(
        { error: "Value must be a valid positive number" },
        { status: 400 }
      );
    }

    // Prepare data for creation
    const expenseData: any = {
      type: type as FinanceExpenseType,
      description: description.trim(),
      value: numericValue,
      createdById: user.id,
    };

    // Only add product/variant if they're provided and not empty strings
    if (productId && productId.trim() !== "") {
      expenseData.productId = productId.trim();
    }

    if (variantId && variantId.trim() !== "") {
      expenseData.variantId = variantId.trim();
    }

    if (quantity !== undefined && quantity !== null && quantity !== "") {
      const numericQuantity = Number(quantity);
      if (!isNaN(numericQuantity) && numericQuantity > 0) {
        expenseData.quantity = numericQuantity;
      }
    }

    // Validate product/variant existence if provided
    if (expenseData.productId) {
      const productExists = await prisma.product.findUnique({
        where: { id: expenseData.productId },
      });
      if (!productExists) {
        return NextResponse.json(
          { error: "Invalid product ID" },
          { status: 400 }
        );
      }
    }

    if (expenseData.variantId) {
      const variantExists = await prisma.variant.findUnique({
        where: { id: expenseData.variantId },
      });
      if (!variantExists) {
        return NextResponse.json(
          { error: "Invalid variant ID" },
          { status: 400 }
        );
      }
    }

    const expense = await prisma.financeExpense.create({
      data: expenseData,
      include: {
        Product: true,
        Variant: true,
        User: true,
      },
    });

    return NextResponse.json(expense, { status: 201 });
  } catch (error) {
    console.error("Finance POST error:", error);
    return NextResponse.json(
      { error: "Failed to create expense" },
      { status: 500 }
    );
  }
}
