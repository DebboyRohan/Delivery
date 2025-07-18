import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// POST: add variant to product
export async function POST(
  req: NextRequest,
  { params }: { params: { productId: string } }
) {
  const { name, variantPrice } = await req.json();
  if (!name || !variantPrice) {
    return NextResponse.json(
      { error: "Name and price required" },
      { status: 400 }
    );
  }
  try {
    const variant = await prisma.variant.create({
      data: { name, variantPrice, productId: params.productId },
    });
    return NextResponse.json(variant, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create variant" },
      { status: 400 }
    );
  }
}
