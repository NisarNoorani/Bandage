'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">
                    <Link href="/">Brand</Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-500 transition">
                        Home
                    </Link>
                    <Link href="/shop" className="text-gray-700 hover:text-blue-500 transition">
                        Shop
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-500 transition">
                        About
                    </Link>
                    <Link href="/blog" className="text-gray-700 hover:text-blue-500 transition">
                        Blog
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-500 transition">
                        Contact
                    </Link>
                    <a href="/login" className="text-gray-700 hover:text-blue-500 transition">
                        Login / Register
                    </a>
                </div>


                {/* Hamburger Menu (Mobile) */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="md:hidden bg-white shadow-lg text-gray-600 flex flex-col items-center space-y-4 py-4">
                    <li>
                        <Link href="/" className="hover:bg-sky-200 transition px-10 py-3 rounded w-full text-center ">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop" className="hover:bg-sky-200 transition px-10 py-3 rounded w-full text-center">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:bg-sky-200 transition px-10 py-3 rounded w-full text-center">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:bg-sky-200 transition px-10 py-3 rounded w-full text-center">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:bg-sky-200 transition px-10 py-3 rounded w-full text-center">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a href="/login" className="hover:bg-sky-200 transition px-4 py-3 rounded w-full text-center">
                            Login / Register
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
