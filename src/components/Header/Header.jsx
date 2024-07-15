import React from "react"
// import "./styles.css"
import { NavBar } from "./NavBar/NavBar"
import { Logo } from "./Logo/Logo"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../../components/ui/navigation-menu"

export function Header() {
  return (
    <header className=" text-white absolute flex justify-between items-center h-[10vh] w-full px-12 py-[5vw] z-10">
      <Logo />
      <NavBar />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>MENU</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col">
              <NavigationMenuLink>Link</NavigationMenuLink>
              <NavigationMenuLink>Link</NavigationMenuLink>
              <NavigationMenuLink>Link</NavigationMenuLink>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}