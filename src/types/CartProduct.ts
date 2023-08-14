import { Product } from "@prisma/client";

export interface CartProduct {
  id: number;
  product: Product;
  amount: number;
}
