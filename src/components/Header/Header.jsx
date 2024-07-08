import React from "react"
import "./styles.css"
import { NavBar } from "./NavBar/NavBar"
import { Logo } from "./Logo/Logo"

export function Header() {
  return (
    <header>
      <Logo />
      <NavBar />
    </header>
  )
}