import React, { useEffect, useState } from "react"
// import "./styles.css"
import { NavBar } from "./NavBar/NavBar"
import { Logo } from "./Logo/Logo"
import { MobileMenu } from "./MobileMenu/MobileMenu"
import { UserButton } from "./UserButton/UserButton"
import { useScreenSize } from "../../hooks/useScreenSize"

export function Header() {

  const screenSize = useScreenSize(); 

  return (
    <header className=" text-white absolute flex justify-between items-center h-[10vh] w-full px-12 py-[5vw] z-10">
      <Logo />
      <div className="flex gap-4">
        {screenSize > 720 ? <NavBar /> : <MobileMenu />}
        <UserButton />
      </div>
    </header>
  )
}