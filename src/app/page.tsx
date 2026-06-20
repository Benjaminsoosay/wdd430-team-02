'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  seller: string;
  rating: number;
  reviews: number;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real product data with images
    const featuredProducts: Product[] = [
      {
        id: '1',
        name: 'Handmade Leather Wallet',
        description: 'Premium quality full-grain leather wallet with RFID protection.',
        price: 49.99,
        category: 'Accessories',
        image: '/products/wallet.svg',
        seller: 'Artisan Leather Co.',
        rating: 4.8,
        reviews: 12
      },
      {
        id: '2',
        name: 'Organic Cotton T-Shirt',
        description: 'Eco-friendly 100% organic cotton t-shirt. Breathable and comfortable.',
        price: 29.99,
        category: 'Clothing',
        image: '/products/tshirt.svg',
        seller: 'EcoWear',
        rating: 4.5,
        reviews: 8
      },
      {
        id: '3',
        name: 'Handcrafted Wooden Bowl',
        description: 'Beautiful hand-turned wooden bowl made from sustainable maple wood.',
        price: 65.00,
        category: 'Home Decor',
        image: '/products/bowl.svg',
        seller: 'WoodArt Studio',
        rating: 4.9,
        reviews: 15
      },
      {
        id: '4',
        name: 'Artisan Coffee Mug Set',
        description: 'Set of 4 handmade ceramic coffee mugs with unique glazing patterns.',
        price: 39.99,
        category: 'Kitchen',
        image: '/products/mug.svg',
        seller: 'Clay Creations',
        rating: 4.7,
        reviews: 10
      }
    ];
    
    setProducts(featuredProducts);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading featured products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Artisan Marketplace</h1>
          <p className="text-xl mb-8">Discover unique handcrafted products from talented artisans</p>
          <Link 
            href="/products" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder-product.svg';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold text-xl"></span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <Link 
                    href={/products/}
                    className="mt-3 block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
