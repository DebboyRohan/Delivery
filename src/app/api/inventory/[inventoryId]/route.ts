import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import {
  addInventoryStock,
  subtractInventoryStock,
} from "@/lib/inventory-helpers";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ inventoryId: string }> }
) {
  const { inventoryId } = await context.params;

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
  context: { params: Promise<{ inventoryId: string }> }
) {
  const { inventoryId } = await context.params;
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  try {
    // Get the existing inventory record first
    const existingInventory = await prisma.inventory.findUnique({
      where: { id: inventoryId },
    });

    if (!existingInventory) {
      return NextResponse.json(
        { error: "Inventory not found" },
        { status: 404 }
      );
    }

    const {
      productId,
      variantId,
      quantityAdded,
      costPerUnit,
      dealer,
      dateReceived,
    } = await req.json();

    // Calculate the difference in quantity
    const oldQuantity = existingInventory.quantityAdded;
    const newQuantity = Number(quantityAdded);
    const quantityDifference = newQuantity - oldQuantity;

    // Update the inventory record
    const inventory = await prisma.inventory.update({
      where: { id: inventoryId },
      data: {
        productId,
        variantId: variantId || null,
        quantityAdded: newQuantity,
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

    // Update remaining inventory based on the difference
    if (quantityDifference > 0) {
      await addInventoryStock(productId, variantId || null, quantityDifference);
    } else if (quantityDifference < 0) {
      await subtractInventoryStock(
        productId,
        variantId || null,
        Math.abs(quantityDifference)
      );
    }

    return NextResponse.json(inventory);
  } catch (error) {
    console.error("Error updating inventory:", error);
    return NextResponse.json(
      { error: "Failed to update inventory" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ inventoryId: string }> }
) {
  const { inventoryId } = await context.params;

  try {
    // Get the inventory record before deleting
    const inventory = await prisma.inventory.findUnique({
      where: { id: inventoryId },
    });

    if (!inventory) {
      return NextResponse.json(
        { error: "Inventory not found" },
        { status: 404 }
      );
    }

    // Delete the inventory record
    await prisma.inventory.delete({
      where: { id: inventoryId },
    });

    // Subtract the quantity from remaining inventory
    await subtractInventoryStock(
      inventory.productId,
      inventory.variantId,
      inventory.quantityAdded
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting inventory:", error);
    return NextResponse.json(
      { error: "Failed to delete inventory" },
      { status: 500 }
    );
  }
}
