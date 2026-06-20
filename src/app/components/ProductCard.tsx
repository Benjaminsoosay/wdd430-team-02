'use client';

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

  // Map product names to local SVG files
  const getImagePath = (name: string) => {
    const imageMap: { [key: string]: string } = {
      'Handmade Leather Wallet': '/products/wallet.svg',
      'Organic Cotton T-Shirt': '/products/tshirt.svg',
      'Handcrafted Wooden Bowl': '/products/bowl.svg',
      'Artisan Coffee Mug Set': '/products/mug.svg',
      'Bamboo Sunglasses': '/products/sunglasses.svg',
      'Handwoven Wool Blanket': '/products/blanket.svg',
    };
    return imageMap[name] || product.image;
  };

  const imageSrc = getImagePath(product.name);

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white h-full flex flex-col">
      <div className="relative h-48 bg-gray-100 flex-shrink-0">
        {!imgError ? (
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
            <span className="text-gray-500 text-4xl">📷</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-600 font-bold"></span>
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
