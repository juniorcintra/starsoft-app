import { Product } from "@/app/types";
import Image from "next/image";
import React from "react";
import "./styles.scss";

import ETH from "@/public/eth.png";
import Trash from "@/public/trash.png";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "@/app/_store/slices/item.slice";
import { RootState } from "@/app/_store/store";

interface CartItemProps {
  item: Product;
}

export default function CartItem({ item }: CartItemProps) {
  const { items } = useSelector((state: RootState) => state.itemReducer);

  const dispatch = useDispatch();

  const handleAddQuantity = () => {
    const updatedItems = items.map((i: Product) =>
      i.id === item.id
        ? {
            ...i,
            quantidade: i.quantidade + 1,
            total: (i.quantidade + 1) * i.price,
          }
        : i
    );
    dispatch(setItems(updatedItems));
  };

  const handleRemoveQuantity = () => {
    if (item.quantidade > 1) {
      const updatedItems = items.map((i: Product) =>
        i.id === item.id
          ? {
              ...i,
              quantidade: i.quantidade - 1,
              total: (i.quantidade - 1) * i.price,
            }
          : i
      );
      dispatch(setItems(updatedItems));
    }
  };

  const handleRemoveItem = () => {
    const updatedItems = items.filter((i: Product) => i.id !== item.id); // Remove o item baseado no id
    dispatch(setItems(updatedItems)); // Atualiza o estado
  };

  return (
    <div className="cartItem">
      <Image
        className="imageCart"
        src={item.image}
        alt={item.name}
        width={161}
        height={161}
      />
      <div className="infoCart">
        <span className="title">{item.name}</span>
        <span className="description">{item.description}</span>
        <span className="price">
          <Image src={ETH} alt="ETH logo" />
          {item.total} ETH
        </span>
        <div className="divActions">
          <div className="divIncrement">
            <span className="pointer" onClick={handleRemoveQuantity}>
              -
            </span>
            <span>{item.quantidade}</span>
            <span className="pointer" onClick={handleAddQuantity}>
              +
            </span>
          </div>
          <Image
            className="pointer"
            src={Trash}
            alt="Trash logo"
            onClick={handleRemoveItem}
          />
        </div>
      </div>
    </div>
  );
}
