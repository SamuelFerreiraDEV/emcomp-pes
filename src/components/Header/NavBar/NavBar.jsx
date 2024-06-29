import React from "react"
import { NavItem } from "./NavItem/NavItem"
import "./styles.css"
import { UserButton } from "./UserButton/UserButton"

export function NavBar() {

  const navItems = [
    {
      href: "/",
      text: "HOME"
    },
    {
      href: "/sobre",
      text: "SOBRE NÓS"
    },
    {
      href: "/noticias",
      text: "NOTÍCIAS E EVENTOS"
    },
    {
      href: "/tccs",
      text: "TCCS"
    },
    {
      href: "/parcerias",
      text: "PARCERIAS"
    },
    {
      href: "/contatos",
      text: "CONTATOS"
    },
    {
      href: "/pigmaker",
      text: "PIGMAKER"
    }
  ]

  return (
    <nav>
      <ul>
        {navItems.map(
          ({ href, text }) => (
            <NavItem 
              href={href}
              text={text}
              key={href}
            />
          ))}
      </ul>
      <UserButton />
    </nav>
  )
}