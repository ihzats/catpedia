"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed top-0 z-20 bg-slate-100 w-full mx-auto items-center shadow-lg p-6">
            <div className="container flex flex-col lg:flex-row justify-between w-full">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <Link href="/">
                        <h1 className="font-pacifico text-teal-400 uppercase font-bold text-2xl">
                            Catpedia
                        </h1>
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`${isMenuOpen ? 'rotate-90' : ''
                                } text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600`}
                        >
                            <svg
                                className="h-6 w-6 fill-current transition-transform"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.293 5.293a1 1 0 011.414 0L10 10.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:flex-row lg:items-center lg:space-x-8 mt-4 lg:mt-0`}>
                    <ul className="flex flex-col  lg:gap-8 lg:flex-row lg:items-center font-mono space-y-4 lg:space-y-0">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/Catpage">Catalogue</Link>
                        </li>
                        <li>
                            <Link href="/">Shop</Link>
                        </li>
                        <li>
                            <Link href="/">Contact Us</Link>
                        </li>
                    </ul>
                    <div className="mt-6 lg:mt-0">
                        <Link href="/" className="bg-black text-white px-5 py-2 rounded-lg hover:bg-teal-500">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
