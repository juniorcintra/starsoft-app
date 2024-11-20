"use client";

import React from "react";
import CartItem from "../_components/CartItem";
import { RootState } from "../_store/store";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../types";

import "./styles.scss";

import Back from "@/public/back.png";
import ETH from "@/public/eth.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { unsetItems } from "../_store/slices/item.slice";

export default function Cart() {
  const { items } = useSelector((state: RootState) => state.itemReducer);

  const cartTotal = items.reduce((acc, item: Product) => acc + item.total, 0);

  const router = useRouter();

  const dispatch = useDispatch();

  const handleFinish = () => {
    dispatch(unsetItems());
    router.push("/");
  };

  return (
    <main className="cart">
      <div className="contentCart">
        <div className="headerCart">
          <Image
            className="backBtn"
            src={Back}
            alt="back button"
            onClick={() => router.push("/")}
          />
          <span className="titleCart">Mochila de compras</span>
          <span></span>
        </div>
        <div className="itemList">
          {items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
        <div className="divTotal">
          <span>TOTAL</span>
          <span className="price">
            <Image src={ETH} alt="ETH logo" />
            {cartTotal} ETH
          </span>
        </div>
        <button className="btnDefault" onClick={handleFinish}>
          Finalizar compra
        </button>
      </div>
    </main>
  );
}
