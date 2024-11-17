import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#FCF9F7] bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between p-4 md:hidden">
        <Link href="/" className="hover:text-[#C6754D]">
          <div className="relative h-[50px] w-[50px]">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="border-none bg-transparent">
            <Button variant="outline" size="icon">
              <Menu className="bg-transparent" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href="/about" className="hover:text-[#C6754D]">
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/teams" className="hover:text-[#C6754D]">
                Teams
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/service" className="hover:text-[#C6754D]">
                Service
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/contact" className="hover:text-[#C6754D]">
                Contact
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="container mx-auto hidden items-center justify-center gap-20 py-7 md:flex">
        <Link href="/about" className="hover:text-[#C6754D]">
          About
        </Link>
        <Link href="/teams" className="hover:text-[#C6754D]">
          Teams
        </Link>
        <Link href="/" className="hover:text-[#C6754D]">
          <div className="relative h-[70px] w-[70px]">
            <Image
              src="/logo.svg"
              alt="logo"
              fill
              objectFit="cover"
              className="object-cover"
            />
          </div>
        </Link>
        <Link href="/service" className="hover:text-[#C6754D]">
          Services
        </Link>
        <Link href="/contact" className="hover:text-[#C6754D]">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
