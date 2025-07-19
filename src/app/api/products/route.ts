import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// GET: all products + their variants, newest first
export async function GET(req: NextRequest) {
  const products = await prisma.product.findMany({
    include: { Variant: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(products);
}

// POST: create product (either price or variants)
export async function POST(req: NextRequest) {
  const { userId, sessionClaims } = await auth();
  if (!userId || sessionClaims?.metadata?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }
  try {
    const { name, price, variants } = await req.json();
    if (!name)
      return NextResponse.json(
        { error: "Product name is required" },
        { status: 400 }
      );

    const filteredVariants = Array.isArray(variants)
      ? variants.filter(
          (v: any) => !!v?.name?.trim() && !!v?.variantPrice?.toString().trim()
        )
      : [];

    // Must not have both price and variants
    if (
      (filteredVariants.length > 0 && price) ||
      (filteredVariants.length === 0 && !price)
    ) {
      return NextResponse.json(
        { error: "Provide either a product price *or* variants, not both." },
        { status: 400 }
      );
    }

    const data: any = { name };

    if (filteredVariants.length > 0) {
      data.price = null;
      data.Variant = {
        create: filteredVariants.map((v: any) => ({
          name: v.name,
          variantPrice: v.variantPrice,
        })),
      };
    } else {
      data.price = price;
    }

    const product = await prisma.product.create({
      data,
      include: { Variant: true },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to create product" },
      { status: 500 }
    );
  }
}
