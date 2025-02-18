"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Coffee, Instagram, Mail } from "lucide-react";
import demo from "../../public/work/demo.jpg"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={demo}
          alt="Logo"
          width={50}
          height={50}
        />
      </div>

      {/* Menu */}
      <div className="flex space-x-6 items-end text-clr1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" >Portfolio</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem >
              <Link href="/portfolio/illustration" className="text-clr1">Illustration</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/portfolio/comics" className="text-clr1">Comics</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/portfolio/character-design" className="text-clr1">Character Design</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Link href="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link href="/newsletter">
          <Button variant="ghost">Newsletter</Button>
        </Link>
        <Link href="/shop">
          <Button variant="ghost">Shop</Button>
        </Link>
        <Instagram color="#895a2c"/>
        <Mail color="#895a2c"/>
        <Coffee color="#895a2c" />
      </div>
    </nav>
  );
}
