"use client";

import { useCartProducts } from "@/hooks/useCartProducts";
import React from "react";

const Cart = () => {
  const { cartProducts } = useCartProducts();
  const cartTotal = cartProducts.reduce((accumulator, cartProduct) => {
    return cartProduct.product.price * cartProduct.amount + accumulator;
  }, 0);
  const totalAmount = cartProducts.reduce((accumulator, cartProduct) => {
    return cartProduct.amount + accumulator;
  }, 0);

  return (
    <div>
      Cart
      <br />
      <span className="">
        {cartProducts ? `${cartTotal}Ft (${totalAmount})` : "(0)"}
      </span>
    </div>
  );
};

export default Cart;
