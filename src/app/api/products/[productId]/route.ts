import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET product details (with variants)
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

// PUT product
export async function PUT(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { name, price } = await req.json();
  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  try {
    const updated = await prisma.product.update({
      where: { id: params.productId },
      data: {
        name,
        price,
        updatedAt: new Date(),
      },
      include: { Variant: true },
    });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }
}

// DELETE product
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    await prisma.product.delete({
      where: { id: params.productId },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }
}
