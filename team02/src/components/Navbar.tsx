"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-bold text-xl text-amber-800">Handcrafted Haven</Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            ☰
          </button>
          <div className="hidden md:flex space-x-4">
            <Link href="/products" className="hover:text-amber-600">Products</Link>
            <Link href="/sellers" className="hover:text-amber-600">Artisans</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
