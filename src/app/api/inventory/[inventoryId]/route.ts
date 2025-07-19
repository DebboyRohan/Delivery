import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

async function getInventoryId(params: any): Promise<string> {
  if (typeof params.then === "function") params = await params;
  return params.inventoryId;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { inventoryId: string } }
) {
  const inventoryId = await getInventoryId(params);

  try {
    const inventory = await prisma.inventory.findUnique({
      where: { id: inventoryId },
      include: {
        Product: true,
        Variant: true,
        User: true,
      },
    });

    if (!inventory) {
      return NextResponse.json(
        { error: "Inventory not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(inventory);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch inventory" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { inventoryId: string } }
) {
  const inventoryId = await getInventoryId(params);
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
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

    const inventory = await prisma.inventory.update({
      where: { id: inventoryId },
      data: {
        productId,
        variantId,
        quantityAdded: Number(quantityAdded),
        costPerUnit: Number(costPerUnit),
        dealer,
        dateReceived: new Date(dateReceived),
      },
      include: {
        Product: true,
        Variant: true,
        User: true,
      },
    });

    return NextResponse.json(inventory);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update inventory" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { inventoryId: string } }
) {
  const inventoryId = await getInventoryId(params);

  try {
    await prisma.inventory.delete({
      where: { id: inventoryId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete inventory" },
      { status: 500 }
    );
  }
}
