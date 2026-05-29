"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-haven-background border-b-2 border-haven-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-haven-primary rounded-lg flex items-center justify-center text-white font-bold text-lg transform group-hover:scale-110 transition-transform">
              HC
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-2xl font-bold font-heading text-haven-primary">
                Handcrafted<span className="text-haven-accent">Haven</span>
              </h1>
              <p className="text-xs text-haven-accent">Artisan Marketplace</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/products" 
              className="text-haven-text font-medium hover:text-haven-primary transition-colors duration-200 relative group"
            >
              Shop
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-haven-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/sellers" 
              className="text-haven-text font-medium hover:text-haven-primary transition-colors duration-200 relative group"
            >
              Artisans
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-haven-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-haven-secondary transition-colors"
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 text-haven-primary transform transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in fade-in duration-200">
            <Link 
              href="/products" 
              className="block px-4 py-2 text-haven-text hover:bg-haven-secondary rounded-lg transition-colors"
            >
              Shop Products
            </Link>
            <Link 
              href="/sellers" 
              className="block px-4 py-2 text-haven-text hover:bg-haven-secondary rounded-lg transition-colors"
            >
              Meet Artisans
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
