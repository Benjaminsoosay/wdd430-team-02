// src/app/components/ProductCard.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

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

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative h-56 bg-gray-100">
        {!imgError ? (
          <img
            src={product.image || '/placeholder-product.svg'}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
            <span className="ml-1 text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-1">by {product.seller}</p>
      </div>
    </div>
  );
}