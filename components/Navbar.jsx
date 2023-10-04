"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="sticky top-0 z-20 bg-slate-100 w-full mx-auto items-center shadow-lg p-6">
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

                    {/* <div className="lg:hidden ">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2002/svg">

                                {isMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M2.293 4.293a1 1 0 011.414 0L12 13.586l8.293-8.293a1 1 0 111.414 1.414L13.414 15l8.293 8.293a1 1 0 01-1.414 1.414L12 16.414l-8.293 8.293a1 1 0 01-1.414-1.414L10.586 15 2.293 6.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                ) : (
                                    <path fillRule="evenodd" 
                                    d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 5a1 1 0 100 2h14a1 1 0 100-2H4a1 1 0 000 0zm0 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" 
                                    clipRule="evenodd" />)}
                            </svg>
                        </button>
                    </div> */}
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:flex-row lg:items-center lg:space-x-8 mt-4 lg:mt-0`}>
                    <ul className="flex flex-col  lg:gap-8 lg:flex-row lg:items-center font-mono space-y-4 lg:space-y-0">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Catalogue</Link>
                        </li>
                        <li>
                            <Link href="/">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
