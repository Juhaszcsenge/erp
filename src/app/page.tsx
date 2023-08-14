"use client";

import ProductItem from "@/components/ProductItem";
import CartItem from "@/components/CartItem";
import { useProducts } from "@/hooks/useProducts";
import { useCartProducts } from "@/hooks/useCartProducts";

export default function Home() {
  const { products } = useProducts();
  const { cartProducts, refetch } = useCartProducts();

  return (
    <main className="">
      {cartProducts &&
        cartProducts.map((cartProduct) => (
          <CartItem
            key={cartProduct.id}
            product={cartProduct.product}
            amount={cartProduct.amount}
          />
        ))}
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} refetch={refetch} />
        ))}
    </main>
  );
}
