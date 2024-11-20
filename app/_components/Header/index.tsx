"use client";

import React from "react";

import "./styles.scss";
import Image from "next/image";

import Logo from "@/public/logo.png";
import Bag from "@/public/bag.png";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_store/store";
import { useRouter } from "next/navigation";

export default function Header() {
  const { items } = useSelector((state: RootState) => state.itemReducer);

  const router = useRouter();

  return (
    <header className="header">
      <Image src={Logo} alt="Logo StartSoft" />
      <div className="cartCount" onClick={() => router.push("/cart")}>
        <Image src={Bag} alt="Bag Cart" />
        <span className="text">{items.length}</span>
      </div>
    </header>
  );
}
