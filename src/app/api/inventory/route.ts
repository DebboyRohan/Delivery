import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "20", 10);
  const search = searchParams.get("search") || "";
  const skip = (page - 1) * pageSize;

  try {
    // Build where clause for search
    const where: any = {};
    if (search.trim()) {
      where.OR = [
        { Product: { name: { contains: search, mode: "insensitive" } } },
        { Variant: { name: { contains: search, mode: "insensitive" } } },
        { dealer: { contains: search, mode: "insensitive" } },
      ];
    }

    const [inventories, total] = await Promise.all([
      prisma.inventory.findMany({
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
      prisma.inventory.count({ where }),
    ]);

    return NextResponse.json({
      inventories,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("Inventory GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch inventory" },
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
    const {
      productId,
      variantId,
      quantityAdded,
      costPerUnit,
      dealer,
      dateReceived,
    } = await req.json();

    // Validate required fields
    if (
      !productId ||
      !quantityAdded ||
      !costPerUnit ||
      !dealer ||
      !dateReceived
    ) {
      return NextResponse.json(
        {
          error:
            "Product, quantity, cost per unit, dealer, and date are required",
        },
        { status: 400 }
      );
    }

    // Validate numeric values
    const numericQuantity = Number(quantityAdded);
    const numericCost = Number(costPerUnit);

    if (isNaN(numericQuantity) || numericQuantity <= 0) {
      return NextResponse.json(
        { error: "Quantity must be a positive number" },
        { status: 400 }
      );
    }

    if (isNaN(numericCost) || numericCost <= 0) {
      return NextResponse.json(
        { error: "Cost per unit must be a positive number" },
        { status: 400 }
      );
    }

    // Validate date
    const parsedDate = new Date(dateReceived);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid date format" },
        { status: 400 }
      );
    }

    // Check if product exists
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { Variant: true },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 400 });
    }

    // Prepare inventory data
    const inventoryData: any = {
      productId,
      quantityAdded: numericQuantity,
      costPerUnit: numericCost,
      dealer: dealer.trim(),
      dateReceived: parsedDate,
      createdById: user.id,
    };

    // Handle variant logic
    if (product.Variant && product.Variant.length > 0) {
      // Product has variants - variantId is required
      if (!variantId || variantId.trim() === "") {
        return NextResponse.json(
          { error: "This product requires a variant selection" },
          { status: 400 }
        );
      }

      // Validate that the variant belongs to this product
      const validVariant = product.Variant.find((v) => v.id === variantId);
      if (!validVariant) {
        return NextResponse.json(
          { error: "Invalid variant for this product" },
          { status: 400 }
        );
      }

      inventoryData.variantId = variantId;
    } else {
      // Product has no variants - create a default variant if variantId is provided
      if (variantId && variantId.trim() !== "") {
        const variant = await prisma.variant.findUnique({
          where: { id: variantId },
        });
        if (!variant) {
          return NextResponse.json(
            { error: "Invalid variant ID" },
            { status: 400 }
          );
        }
        inventoryData.variantId = variantId;
      }
      // If no variantId provided for a product without variants, that's fine
      // The database schema allows variantId to be null
    }

    const inventory = await prisma.inventory.create({
      data: inventoryData,
      include: {
        Product: true,
        Variant: true,
        User: true,
      },
    });

    return NextResponse.json(inventory, { status: 201 });
  } catch (error) {
    console.error("Inventory creation error:", error);
    return NextResponse.json(
      { error: "Failed to create inventory record" },
      { status: 500 }
    );
  }
}
