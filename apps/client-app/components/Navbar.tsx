"use client"
import React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@repo/ui/navigation-menu"

const Navbar = () => {
  return (
    <nav className='shadow'>
      <div className='flex justify-between items-center px-28 py-5'>
        <h1 className='text-3xl text-blue-700'>Payment</h1>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/login' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <p className='text-lg font-semibold text-primary'>Login</p>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

export default Navbar
