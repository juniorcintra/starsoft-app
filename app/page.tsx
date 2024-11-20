"use client";

import { useQuery } from "@tanstack/react-query";
import api from "./_services/api";
import { Product } from "./types";
import CardItem from "./_components/CardItem";

export default function Home() {
  const queryInfo = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      return api.get("/products").then((d) => d.data.data);
    },
  });

  return (
    <main className="home">
      <div className="content">
        {queryInfo?.data?.map((item, index) => (
          <CardItem key={index} item={item} />
        ))}
      </div>
    </main>
  );
}
