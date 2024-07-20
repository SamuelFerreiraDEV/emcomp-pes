import React from "react"
import { NavItem } from "./NavItem/NavItem"
// import "./styles.css"
import { navItems } from "@/utils/data";

export function NavBar() {

  return (
    <nav className="flex gap-6 justify-evenly items-center">
      <ul className="flex gap-6 justify-evenly items-center">
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