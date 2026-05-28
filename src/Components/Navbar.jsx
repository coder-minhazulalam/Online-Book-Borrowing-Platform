"use client";
import {  Button } from "@heroui/react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./Navlink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#063970] shadow-md">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Left Side */}
        <div className="w-full md:w-auto flex flex-row justify-between md:justify-start items-center ">

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
         <div>

         </div>
                  {/* Desktop Logo */}
          <Image
            src={logo}
            alt="BookLoop Logo"
            width={200}
            height={100}
            className="hidden object-contain md:block"
          />

          {/* Mobile Logo */}
          <Image
            src={logo}
            alt="BookLoop Logo"
            width={160}
            height={100}
            className="block object-contain md:hidden"
          />
 
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink
              href="/"  
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              href="/all-books" 
            >
              All Books
            </NavLink>
          </li>

          <li>
            <NavLink
              href="/profile" 
            >
              My Profile
            </NavLink>
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">
        <Link href='/login'>
          <Button className="rounded-full bg-yellow-400 px-6 font-semibold text-black hover:bg-yellow-300">
            Login
          </Button>
        </Link>

        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-purple-500 bg-[#063970] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-white">
            <li>
              <NavLink href="/"  >  
                Home
              </NavLink>
            </li>

            <li>
              <NavLink href="/all-books" >
                All Books
              </NavLink>
            </li>

            <li>
              <NavLink href="/profile" >
                My Profile
              </NavLink>
            </li>

               <Link href='/login'>
                            <Button className="mt-2 rounded-full bg-yellow-400 font-semibold text-black">
              Login
            </Button>
               </Link>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;