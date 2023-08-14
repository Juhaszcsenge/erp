import React, { useState } from "react";
import { Product } from "@prisma/client";
import axios from "axios";

interface ProductItemProps {
  product: Product;
  refetch: () => {};
}

const handleAddToCart = async (
  id: number,
  amount: number = 1,
  refetch: () => {}
) => {
  await axios.post("/api/cart", {
    productId: id,
    amount: amount,
  });
  refetch();
};

const ProductItem: React.FC<ProductItemProps> = ({ product, refetch }) => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex justify-between items-center">
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div className="flex justify-center">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border-2 border-indigo-600"
        />
      </div>
      <button
        onClick={() => handleAddToCart(product.id, amount, refetch)}
        type="button"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductItem;
