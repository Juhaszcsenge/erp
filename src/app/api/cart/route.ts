import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const requestBody: { productId: number; amount: number } =
    await request.json();

  const existingProduct = await prisma.cartProduct.findFirst({
    where: { productId: requestBody.productId },
  });

  if (existingProduct) {
    const cartProduct = await prisma.cartProduct.update({
      where: {
        productId: existingProduct.productId,
      },
      data: { amount: existingProduct.amount + requestBody.amount },
    });
    return NextResponse.json(cartProduct);
  } else {
    const cartProduct = await prisma.cartProduct.create({
      data: {
        productId: requestBody.productId,
        amount: requestBody.amount,
      },
    });
    return NextResponse.json(cartProduct);
  }
}

export async function GET(request: Request) {
  const cartProducts = await prisma.cartProduct.findMany({
    select: {
      id: true,
      product: true,
      amount: true,
    },
  });

  return NextResponse.json(cartProducts);
}
