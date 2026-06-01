"use client";
import { Button } from "@heroui/react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Menu, X, LogOut, User } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./Navlink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = authClient.useSession();



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Sign-OUT
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
    setShowDropdown(false);
  };
  // 

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#063970] shadow-md">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Left Side */}
        <div className="w-full md:w-auto flex flex-row justify-between md:justify-start items-center">
          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

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

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/all-books">All Books</NavLink>
          </li>
          {session && (
            <li>
              <NavLink href="/my-profile">My Profile</NavLink>
            </li>
          )}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {session ? (

            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition rounded-full px-3 py-1.5"
              >
                {session.user?.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-yellow-400"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center">
                    <span className="text-black font-bold text-sm">
                      {session.user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </span>
                  </div>
                )}
                <span className="text-white text-sm font-medium max-w-[100px] truncate">
                  {session.user?.name || "User"}
                </span>
              </button>

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 top-12 bg-white rounded-2xl shadow-xl py-2 w-44 z-50 border border-gray-100">
                  <Link
                    href="/my-profile"
                    onClick={() => setShowDropdown(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <User size={14} />
                    My Profile
                  </Link>
                  <div className="h-px bg-gray-100 my-1" />
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 text-left"
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button className="rounded-full bg-white/10 border border-white/30 px-5 font-semibold text-white hover:bg-white/20 transition">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="rounded-full bg-yellow-400 px-5 font-semibold text-black hover:bg-yellow-300 transition">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-purple-500 bg-[#063970] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-white">
            <li>
              <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink href="/all-books" onClick={() => setIsMenuOpen(false)}>All Books</NavLink>
            </li>
            {session && (
              <li>
                <NavLink href="/my-profile" onClick={() => setIsMenuOpen(false)}>My Profile</NavLink>
              </li>
            )}

            <div className="flex flex-col gap-2 pt-2">
              {session ? (
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 text-red-400 text-sm font-medium"
                >
                  <LogOut size={14} /> Sign Out
                </button>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full rounded-full border border-white/30 font-semibold text-white bg-white/10">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full mt-1 rounded-full bg-yellow-400 font-semibold text-black">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;