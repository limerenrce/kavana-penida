// components/Navbar.js

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = ({ isScrolled, isMenuOpen, setIsMenuOpen }) => {
  const pathname = usePathname();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 bg-[#f9f4ea] w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-gradient-to-tr from-green-900 to-green-800 shadow-md text-[#f9f4ea] backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      <Link href="/" className="flex items-center">
        <Image
          width={130}
          height={100}
          src={`${isScrolled ? "/nobg-logo-invert.png" : "/nobg-logo.png"}`}
          alt="Kavana Penida Logo"  
        />
      </Link>

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={i}
              href={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-[#f9f4ea]" : "text-[#1a5654]"
              } ${
                isActive ? "font-bold" : ""
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-[#f9f4ea]" : "bg-[#1a5654]"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </Link>
          );
        })}
        {/* <button
          className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
            isScrolled ? "text-[#f9f4ea]" : "text-[#1a5654]"
          } transition-all`}
        >
          Book Now
        </button> */}
      </div>

      <div className="hidden md:flex items-center gap-4">
        {/* <svg
          className={`h-6 w-6 text-[#1a5654] transition-all duration-500 ${
            isScrolled ? "invert" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg> */}
        <Link href="#booking">
          <button
            className={`px-4 py-2 rounded-full font-semibold  ml-4 transition-all duration-500 sm:w-auto shadow-md ${
              isScrolled
                ? "bg-[#f9f4ea] text-[#1a5654] hover:bg-green-900 hover:text-[#f9f4ea]"
                : "bg-[#1a5654] text-[#f9f4ea] hover:bg-[#1d6461]  "
            }`}
          >
            Book Now
          </button>
        </Link>
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#1a5654] text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {navLinks.map((link, i) => (
          <Link key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>
        ))}

        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
          Book Now
        </button>

        {/* <button className="bg-[#f9f4ea] text-[#1a5654] px-8 py-2.5 rounded-full transition-all duration-500">
          Login
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
