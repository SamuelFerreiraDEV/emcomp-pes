import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "/components/ui/navigation-menu";
import { navItems } from "@/utils/data";
import React from "react";

export function MobileMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex h-fit items-center bg-theme text-sm text-white">
            MENU
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex flex-col items-start gap-4 text-nowrap p-6 text-sm text-theme">
            {navItems.map((item) => (
              <NavigationMenuLink href={item.href} key={item.text}>
                {item.text}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
