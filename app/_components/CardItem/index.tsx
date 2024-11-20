import { Product } from "@/app/types";
import Image from "next/image";
import React from "react";
import "./styles.scss";

import ETH from "@/public/eth.png";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "@/app/_store/slices/item.slice";
import { RootState } from "@/app/_store/store";

interface CardItemProps {
  item: Product;
}

export default function CardItem({ item }: CardItemProps) {
  const { items } = useSelector((state: RootState) => state.itemReducer);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const existingItem = items.find((i: Product) => i.id === item.id);

    if (existingItem) {
      const updatedItems = items.map((i: Product) =>
        i.id === item.id
          ? {
              ...i,
              quantidade: i?.quantidade + 1,
              total: (i?.quantidade + 1) * i.price,
            }
          : i
      );
      dispatch(setItems(updatedItems));
    } else {
      const newItem = {
        ...item,
        quantidade: 1,
        total: item.price,
      };
      dispatch(setItems([...items, newItem]));
    }
  };

  return (
    <div className="card">
      <Image
        className="imageCard"
        src={item.image}
        alt={item.name}
        width={296}
        height={258}
      />
      <div className="infoCard">
        <span className="title">{item.name}</span>
        <span className="description">{item.description}</span>
        <span className="price">
          <Image src={ETH} alt="ETH logo" />
          {item.price} ETH
        </span>
        <button className="btnDefault" onClick={handleAddItem}>
          comprar
        </button>
      </div>
    </div>
  );
}
