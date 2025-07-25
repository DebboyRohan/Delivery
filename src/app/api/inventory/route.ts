import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { addInventoryStock } from "@/lib/inventory-helpers";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "20", 10);
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    // Build where clause for search
    let where: any = {};
    if (search.trim()) {
      where = {
        OR: [
          { Product: { name: { contains: search, mode: "insensitive" } } },
          { Variant: { name: { contains: search, mode: "insensitive" } } },
          { dealer: { contains: search, mode: "insensitive" } },
        ],
      };
    }

    const [inventories, total] = await Promise.all([
      prisma.inventory.findMany({
        where,
        include: {
          Product: true,
          Variant: true,
          User: {
            select: {
              name: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take,
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
    console.error("Error fetching inventory:", error);
    return NextResponse.json(
      { error: "Could not fetch inventory" },
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

    if (
      !productId ||
      !quantityAdded ||
      !costPerUnit ||
      !dealer ||
      !dateReceived
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const inventory = await prisma.inventory.create({
      data: {
        productId,
        variantId: variantId || null,
        quantityAdded: Number(quantityAdded),
        costPerUnit: Number(costPerUnit),
        dealer,
        dateReceived: new Date(dateReceived),
        createdById: user.id,
      },
      include: {
        Product: true,
        Variant: true,
        User: {
          select: {
            name: true,
          },
        },
      },
    });

    // Update remaining inventory
    await addInventoryStock(
      productId,
      variantId || null,
      Number(quantityAdded)
    );

    return NextResponse.json(inventory, { status: 201 });
  } catch (error) {
    console.error("Error creating inventory:", error);
    return NextResponse.json(
      { error: "Could not create inventory entry" },
      { status: 500 }
    );
  }
}
