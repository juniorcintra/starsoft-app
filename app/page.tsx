"use client";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./types";
import api from "./_services/api";

export default function Home() {
  const queryInfo = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return api.get<Product[]>("/products").then((d) => d.data);
    },
  });
  console.log("🚀 ~ queryInfo:", queryInfo);
  return <h1>Home</h1>;
}
