import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const remainingInventory = await prisma.remainingInventory.findMany({
      include: {
        Product: {
          select: {
            id: true,
            name: true,
          },
        },
        Variant: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: [{ Product: { name: "asc" } }, { Variant: { name: "asc" } }],
    });

    return NextResponse.json(remainingInventory);
  } catch (error) {
    console.error("Error fetching remaining inventory:", error);
    return NextResponse.json(
      { error: "Could not fetch remaining inventory" },
      { status: 500 }
    );
  }
}
