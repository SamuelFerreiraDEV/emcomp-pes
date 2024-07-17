import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../../../components/ui/navigation-menu"
import { navItems } from "../../../utils/data"
import React from "react"

export function MobileMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-theme text-white">MENU</NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col gap-4 text-theme text-sm text-nowrap p-6 items-start">
            {/* <NavigationMenuLink href='/'>HOME</NavigationMenuLink>
            <NavigationMenuLink>SOBRE NÓS</NavigationMenuLink>
            <NavigationMenuLink>NOTÍCIAS</NavigationMenuLink>
            <NavigationMenuLink>TCCS</NavigationMenuLink>
            <NavigationMenuLink>PARCERIAS</NavigationMenuLink>
            <NavigationMenuLink>CONTATOS</NavigationMenuLink>
            <NavigationMenuLink>PIGMAKER</NavigationMenuLink> */}
            {navItems.map((item) => (
              <NavigationMenuLink href={item.href} key={item.text}>{item.text}</NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}