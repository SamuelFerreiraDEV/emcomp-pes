import React from "react"
// import "./styles.css"
import { NavBar } from "./NavBar/NavBar"
import { Logo } from "./Logo/Logo"
import { MobileMenu } from "./MobileMenu/MobileMenu"
import { UserButton } from "./UserButton/UserButton"

export function Header() {
  return (
    <header className=" text-white absolute flex justify-between items-center h-[10vh] w-full px-12 py-[5vw] z-10">
      <Logo />
      <div className="flex gap-4">
        <NavBar />
      <MobileMenu />
        <UserButton />
      </div>
    </header>
  )
}