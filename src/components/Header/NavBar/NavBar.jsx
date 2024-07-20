import React from "react";
import { NavItem } from "./NavItem/NavItem";
// import "./styles.css"
import { navItems } from "@/utils/data";

export function NavBar() {
  return (
    <nav className="flex items-center justify-evenly gap-6">
      <ul className="flex items-center justify-evenly gap-6">
        {navItems.map(({ href, text }) => (
          <NavItem href={href} text={text} key={href} />
        ))}
      </ul>
    </nav>
  );
}
