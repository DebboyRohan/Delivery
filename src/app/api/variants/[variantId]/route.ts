import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// PUT: update variant
export async function PUT(
  req: NextRequest,
  { params }: { params: { variantId: string } }
) {
  const { name, variantPrice } = await req.json();
  if (!name || !variantPrice) {
    return NextResponse.json(
      { error: "Name and price required" },
      { status: 400 }
    );
  }
  try {
    const updated = await prisma.variant.update({
      where: { id: params.variantId },
      data: { name, variantPrice },
    });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Variant not found" }, { status: 404 });
  }
}

// DELETE: delete variant
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { variantId: string } }
) {
  try {
    await prisma.variant.delete({ where: { id: params.variantId } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Variant not found" }, { status: 404 });
  }
}
