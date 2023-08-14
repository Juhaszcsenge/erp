import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
    },
  });

  return NextResponse.json(products);
}
