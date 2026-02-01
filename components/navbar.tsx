"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    "relative text-black transition-colors hover:text-sun " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 " +
    "after:bg-sun after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-white/90 ">
      <div className="mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-24">
        <div
          className="
        flex items-center justify-between w-full
        min-h-[64px]
        sm:min-h-[72px]
        md:min-h-[90px]
        lg:min-h-[120px]
        xl:min-h-[250px]
      "
        >
          {/* Logo */}
          <Link
            href="/"
            className="
          font-bold text-2xl
          sm:text-[4vh]
          text-black hover:text-sun transition-colors
        "
          >
            Lumina
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className="w-7 h-0.5 bg-black"></span>
            <span className="w-7 h-0.5 bg-black"></span>
            <span className="w-7 h-0.5 bg-black"></span>
          </button>

          {/* Desktop links */}
          <div
            className="
          hidden sm:flex items-center
          gap-8
          md:gap-10
          lg:gap-12
          xl:gap-16
          text-lg
          sm:text-[3vh]
        "
          >
            <Link href="/services" className={navLinkClass}>
              Services
            </Link>
            <Link href="/about" className={navLinkClass}>
              About Us
            </Link>
            <Link href="/contact" className={navLinkClass}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
