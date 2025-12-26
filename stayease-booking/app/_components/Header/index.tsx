"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Click ngoài dropdown đóng
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="bg-[#C3DFE3] shadow-md px-6 py-4 flex items-center justify-between relative z-50">
            {/* Logo */}
            <Link href="/">
                <img src="/img/logo.png" alt="LockWind Logo" className="rounded-md h-12" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-6 text-[#143944] font-medium">
                <Link href="/">Home</Link>
                <Link href="/inspiration">Inspiration</Link>
                <Link href="/listings">Listings</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>

                {/* Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                    >
                        List Now
                    </button>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                            <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
                            <Link href="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</Link>
                        </div>
                    )}
                </div>

                {/* Login Button */}
                <Link
                    href="/login"
                    className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Login
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="text-[#335765] font-bold text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <nav className="absolute top-full left-0 w-full bg-[#C3DFE3] flex flex-col gap-4 p-4 md:hidden z-40">
                    <Link href="/">Home</Link>
                    <Link href="/inspiration">Inspiration</Link>
                    <Link href="/listings">Listings</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Login
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
