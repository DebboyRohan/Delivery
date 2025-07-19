import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// GET: one product + its variants
export async function GET(
  _req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const product = await prisma.product.findUnique({
      where: { id: params.productId },
      include: { Variant: true },
    });
    if (!product) {
      return NextResponse.json(
        { error: "Product not found." },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  } catch (e) {
    return NextResponse.json(
      { error: "Error fetching product." },
      { status: 500 }
    );
  }
}

// PUT: update a product, same rule (only price or variants, not both)
export async function PUT(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { userId, sessionClaims } = await auth();
  if (!userId || sessionClaims?.metadata?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const { name, price } = await req.json();

  if (!name)
    return NextResponse.json({ error: "Name is required." }, { status: 400 });

  // You CANNOT update variants through PUT here; only set price or name
  // (variant add/remove is through /products/[pid]/variants or /variants/[vid])

  // Enforce price/variant rule: only update price if product has no variants
  const existing = await prisma.product.findUnique({
    where: { id: params.productId },
    include: { Variant: true },
  });
  if (!existing) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }
  if (existing.Variant.length > 0 && price) {
    return NextResponse.json(
      { error: "Cannot set product price when variants exist." },
      { status: 400 }
    );
  }

  try {
    const updated = await prisma.product.update({
      where: { id: params.productId },
      data: {
        name,
        price: existing.Variant.length ? null : price,
        updatedAt: new Date(),
      },
      include: { Variant: true },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Product update failed" },
      { status: 500 }
    );
  }
}

// DELETE: only admin, deletes product and cascading variants
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { userId, sessionClaims } = await auth();
  if (!userId || sessionClaims?.metadata?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  try {
    await prisma.product.delete({
      where: { id: params.productId },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }
}
