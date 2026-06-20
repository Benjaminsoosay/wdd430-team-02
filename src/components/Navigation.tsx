// src/app/components/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          ShopName
        </Link>
        <div className="flex space-x-4">
          <Link 
            href="/products" 
            className={`hover:text-gray-300 ${pathname === '/products' ? 'text-blue-400' : ''}`}
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-gray-300 ${pathname === '/about' ? 'text-blue-400' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/sellers/signup" 
            className={`hover:text-gray-300 ${pathname === '/sellers/signup' ? 'text-blue-400' : ''}`}
          >
            Become a Seller
          </Link>
        </div>
      </div>
    </nav>
  );
}