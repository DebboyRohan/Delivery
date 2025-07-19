import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// PUT: update a variant
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ variantId: string }> }
) {
  const { variantId } = await context.params;
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
  try {
    const updated = await prisma.variant.update({
      where: { id: variantId },
      data: { name, variantPrice },
    });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Variant not found" }, { status: 404 });
  }
}

// DELETE: remove a variant
export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ variantId: string }> }
) {
  const { variantId } = await context.params;
  const { userId, sessionClaims } = await auth();
  if (!userId || sessionClaims?.metadata?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  try {
    await prisma.variant.delete({ where: { id: variantId } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Variant not found" }, { status: 404 });
  }
}
