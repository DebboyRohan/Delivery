import prisma from "@/lib/prisma";

export async function updateRemainingInventory(
  productId: string,
  variantId: string | null,
  quantityChange: number
) {
  try {
    const existing = await prisma.remainingInventory.findFirst({
      where: {
        productId,
        variantId: variantId,
      },
    });

    if (existing) {
      // Update existing record
      await prisma.remainingInventory.update({
        where: { id: existing.id },
        data: {
          quantity: Math.max(0, existing.quantity + quantityChange),
          updatedAt: new Date(),
        },
      });
    } else if (quantityChange > 0) {
      // Create new record only if adding inventory
      await prisma.remainingInventory.create({
        data: {
          productId,
          variantId,
          quantity: quantityChange,
        },
      });
    }
  } catch (error) {
    console.error("Error updating remaining inventory:", error);
  }
}

export async function addInventoryStock(
  productId: string,
  variantId: string | null,
  quantity: number
) {
  await updateRemainingInventory(productId, variantId, quantity);
}

export async function subtractInventoryStock(
  productId: string,
  variantId: string | null,
  quantity: number
) {
  await updateRemainingInventory(productId, variantId, -quantity);
}

export async function handleOrderItemStatusChange(
  productId: string,
  variantId: string | null,
  quantity: number,
  oldStatus: string,
  newStatus: string
) {
  // If changing from CANCELLED to PENDING/DELIVERED, subtract from inventory
  if (
    oldStatus === "CANCELLED" &&
    (newStatus === "PENDING" || newStatus === "DELIVERED")
  ) {
    await subtractInventoryStock(productId, variantId, quantity);
  }
  // If changing from PENDING/DELIVERED to CANCELLED, add back to inventory
  else if (
    (oldStatus === "PENDING" || oldStatus === "DELIVERED") &&
    newStatus === "CANCELLED"
  ) {
    await addInventoryStock(productId, variantId, quantity);
  }
}
