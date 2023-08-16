import React from "react";
import { Product } from "@prisma/client";

interface CartItemProps {
  product: Product;
  amount: number;
}

const CartItem: React.FC<CartItemProps> = ({ product, amount }) => {
  return (
    <div className="flex justify-between items-center whitespace-nowrap">
      <h3 className="flex-1">{product.name}</h3>
      <span className="flex-1 text-sm text-end">{product.price}</span>
      <span className="flex-1 text-sm text-end">{amount} db</span>
      <span className="flex-1 text-sm text-end">
        {product.price * amount} Ft
      </span>
    </div>
  );
};

export default CartItem;
