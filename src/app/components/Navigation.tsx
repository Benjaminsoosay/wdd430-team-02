'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Artisan Marketplace
        </Link>
        <div className="flex space-x-4">
          <Link href="/products" className="hover:text-gray-300">
            Shop
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/sellers/signup" className="hover:text-gray-300">
            Become a Seller
          </Link>
        </div>
      </div>
    </nav>
  );
}
