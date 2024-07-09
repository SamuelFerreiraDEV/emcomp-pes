import React from "react"
// import "./styles.css"
import { NavBar } from "./NavBar/NavBar"
import { Logo } from "./Logo/Logo"

export function Header() {
  return (
    <header className="text-white absolute flex justify-between items-center h-[10vh] w-full px-12 py-[5vw] z-10">
      <Logo />
      <NavBar />
    </header>
  )
}