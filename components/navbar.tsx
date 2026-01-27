"use client";

import React, { useState } from "react";
import Link from "next/link"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative">
            <div className="w-full py-3 px-4 flex items-center justify-between md:justify-start md:gap-6">
                {/* Home link - always visible */}
                <Link href="/" className="btn btn-primary text-red-500">
                    Lumina
                </Link>

                {/* Hamburger menu for small screens and below */}
                <button
                    onClick={toggleDropdown}
                    className="md:hidden flex flex-col space-y-1 p-2"
                    aria-label="Toggle menu"
                >
                    <span className="block w-6 h-0.5 bg-red-500"></span>
                    <span className="block w-6 h-0.5 bg-red-500"></span>
                    <span className="block w-6 h-0.5 bg-red-500"></span>
                </button>

                {/* Desktop horizontal links (md and above) */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/services" className="btn btn-primary text-red-500">
                        Services
                    </Link>
                    <Link href="/about" className="btn btn-primary text-red-500">
                        About Us
                    </Link>
                    <Link href="/contact" className="btn btn-primary text-red-500">
                        Contact
                    </Link>
                </div>

                {/* Mobile dropdown menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
                        <div className="py-2">
                            <Link
                                href="/services"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 