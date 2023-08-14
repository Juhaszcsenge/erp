import axios from "axios";
import { CartProduct } from "@/types/CartProduct";
import { useQuery } from "@tanstack/react-query";

async function fetchCartProducts() {
  const response = await axios.get("/api/cart");

  return response.data as CartProduct[];
}

export const useCartProducts = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ["CartProducts"],
    queryFn: async () => fetchCartProducts(),
    keepPreviousData: true,
  });

  return {
    isLoading,
    isError,
    error,
    cartProducts: data as CartProduct[],
    isFetching,
    isPreviousData,
    isRefetching,
    refetch,
  };
};
