import axios from "axios";
import { Product } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

async function fetchProducts() {
  const response = await axios.get("/api/products");

  return response.data as Product[];
}

export const useProducts = () => {
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
    queryKey: ["products"],
    queryFn: async () => fetchProducts(),
    keepPreviousData: true,
  });

  return {
    isLoading,
    isError,
    error,
    products: data as Product[],
    isFetching,
    isPreviousData,
    isRefetching,
    refetch,
  };
};
