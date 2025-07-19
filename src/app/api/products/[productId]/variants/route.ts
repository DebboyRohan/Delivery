import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// POST: add variant to an existing product (must have no price)
export async function POST(
  req: NextRequest,
  context: { params: Promise<{ productId: string }> }
) {
  const { productId } = await context.params;
  const { userId, sessionClaims } = await auth();
  if (!userId || sessionClaims?.metadata?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  const { name, variantPrice } = await req.json();
  if (!name || !variantPrice) {
    return NextResponse.json(
      { error: "Name and price required" },
      { status: 400 }
    );
  }
  // Ensure product exists and does not have price set
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  if (product.price !== null) {
    return NextResponse.json(
      {
        error:
          "Cannot add variant to a product with a price. Remove price first.",
      },
      { status: 400 }
    );
  }
  try {
    const variant = await prisma.variant.create({
      data: { name, variantPrice, productId },
    });
    return NextResponse.json(variant, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create variant" },
      { status: 400 }
    );
  }
}
