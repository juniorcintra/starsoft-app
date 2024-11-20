import React from "react";

import "./styles.scss";
import Image from "next/image";

import Logo from "@/public/logo.png";
import Bag from "@/public/bag.png";

export default function Header() {
  return (
    <header className="header">
      <Image src={Logo} alt="Logo StartSoft" />
      <div className="cartCount">
        <Image src={Bag} alt="Bag Cart" />
        <span className="text">0</span>
      </div>
    </header>
  );
}
