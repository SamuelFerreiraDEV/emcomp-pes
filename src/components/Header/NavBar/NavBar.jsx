import React from "react"
import { NavItem } from "./NavItem/NavItem"
import "./styles.css"

export function NavBar() {

  const navItems = [
    {
      href: "/",
      text: "Home"
    },
    {
      href: "/sobre",
      text: "Sobre Nós"
    },
    {
      href: "/noticias",
      text: "Notícias"
    },
    {
      href: "/tccs",
      text: "TCCS"
    },
    {
      href: "/parcerias",
      text: "Parcerias"
    },
    {
      href: "/contatos",
      text: "Contatos"
    },
    {
      href: "/pigmaker",
      text: "Pigmaker"
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
    </nav>
  )
}