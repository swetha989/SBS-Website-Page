'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from "next/image"
import { Menu, ChevronDown } from 'lucide-react'
// import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { RainbowButton } from '@/components/ui/rainbow-button'

type NavItem = {
  name: string
    href: string
    dropdown?: NavItem[]
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Products',
    href: '/products',
  },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Contact Us', href: '/contact' },
]

const Navbar = () => {  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#69a8e4] shadow-md w-full">
    <div className="max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-800"><Image src="/sbs-logo.jpg" width={73} height={73} alt="SBS" objectFit='cover' /></Link>
            </div>
            <div className="items-center justify-center w-full hidden md:flex">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  item.dropdown ? (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                        {item.name} <ChevronDown className="inline-block ml-1 h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.dropdown.map((subItem) => (
                          <DropdownMenuItem key={subItem.name}>
                            <Link href={subItem.href} className="w-full">
                              {subItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
          {/* <Button>Contact</Button> */}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="space-y-1">
                  <div className="text-gray-600 px-3 py-2 rounded-md text-base font-medium">
                    {item.name}
                  </div>
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium pl-6"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            {/* <Button className="w-full mt-4">Contact</Button> */}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

