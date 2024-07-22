import React, { useEffect, useState } from "react";
// import "./styles.css"
import { NavBar } from "./NavBar/NavBar";
import { Logo } from "./Logo/Logo";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { UserButton } from "./UserButton/UserButton";
import { useScreenSize } from "../../hooks/useScreenSize";

export function Header() {
  const screenSize = useScreenSize();

  return (
    <header className="absolute z-10 flex h-[10vh] w-full items-center justify-between px-[5vw] py-12 text-white">
      <Logo />
      <div className="flex gap-4">
        {screenSize > 720 ? <NavBar /> : <MobileMenu />}
        <UserButton />
      </div>
    </header>
  );
}
