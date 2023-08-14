"use client";

import { useCartProducts } from "@/hooks/useCartProducts";
import React from "react";

const Cart = () => {
  const { cartProducts } = useCartProducts();

  return (
    <div>
      Cart
      <span className="">{cartProducts ? cartProducts.length : 0}</span>
    </div>
  );
};

export default Cart;
