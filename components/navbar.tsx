"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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

          {/* Mobile dropdown */}
          <div
            className={`
            sm:hidden
            absolute top-full left-0 w-full
            bg-white shadow-lg
            overflow-hidden
            transition-all duration-300 ease-out
            ${isOpen ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
          `}
          >
            <div className="flex flex-col items-center gap-6 py-6">
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-sun"
              >
                Services
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-sun"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-sun"
              >
                Contact
              </Link>
            </div>
          </div>

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
