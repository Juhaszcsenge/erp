"use client";

import ProductItem from "@/components/ProductItem";
import CartItem from "@/components/CartItem";
import { useProducts } from "@/hooks/useProducts";
import { useCartProducts } from "@/hooks/useCartProducts";

export default function Home() {
  const { products } = useProducts();
  const { cartProducts, refetch } = useCartProducts();
  const cartTotal = cartProducts.reduce((accumulator, cartProduct) => {
    return cartProduct.product.price * cartProduct.amount + accumulator;
  }, 0);

  return (
    <main className="">
      {cartProducts && (
        <div className="bg-slate-700 text-white p-4 m-4">
          <h2 className="text-xl mb-4">Cart</h2>
          {cartProducts.map((cartProduct) => (
            <CartItem
              key={cartProduct.id}
              product={cartProduct.product}
              amount={cartProduct.amount}
            />
          ))}
          <p className="text-end text-lg">Összesen: {cartTotal}</p>
        </div>
      )}
      {products &&
        products.map((product) => (
          <ProductItem key={product.id} product={product} refetch={refetch} />
        ))}
    </main>
  );
}
