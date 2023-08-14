import React from "react";
import { Product } from "@prisma/client";

interface CartItemProps {
  product: Product;
  amount: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, amount }) => {
  return (
    <div className="flex justify-between items-center">
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div className="flex justify-center">Amount: {amount}</div>
    </div>
  );
};

export default CartItem;
