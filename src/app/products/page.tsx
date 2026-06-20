'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Handmade Leather Wallet',
        description: 'Premium quality full-grain leather wallet with RFID protection.',
        price: 49.99,
        category: 'Accessories',
        image: '/placeholder-product.svg',
        seller: 'Artisan Leather Co.',
        rating: 4.8,
        reviews: 12
      },
      {
        id: '2',
        name: 'Organic Cotton T-Shirt',
        description: 'Eco-friendly 100% organic cotton t-shirt.',
        price: 29.99,
        category: 'Clothing',
        image: '/placeholder-product.svg',
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
        image: '/placeholder-product.svg',
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
        image: '/placeholder-product.svg',
        seller: 'Clay Creations',
        rating: 4.7,
        reviews: 10
      },
      {
        id: '5',
        name: 'Bamboo Sunglasses',
        description: 'Eco-friendly sunglasses made from sustainable bamboo.',
        price: 79.99,
        category: 'Accessories',
        image: '/placeholder-product.svg',
        seller: 'EcoVision',
        rating: 4.6,
        reviews: 7
      },
      {
        id: '6',
        name: 'Handwoven Wool Blanket',
        description: 'Warm and cozy blanket handwoven from premium merino wool.',
        price: 120.00,
        category: 'Home Decor',
        image: '/placeholder-product.svg',
        seller: 'Weaving Heritage',
        rating: 4.9,
        reviews: 20
      }
    ];
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
    const uniqueCategories = Array.from(new Set(mockProducts.map((p: Product) => p.category)));
    setCategories(uniqueCategories);
    setLoading(false);
  }, []);

  useEffect(() => {
    let filtered = [...products];
    if (selectedCategory) filtered = filtered.filter(p => p.category === selectedCategory);
    if (minPrice) filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
    if (maxPrice) filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));
    if (searchTerm) {
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });
    setFilteredProducts(filtered);
  }, [products, selectedCategory, minPrice, maxPrice, searchTerm, sortBy]);

  if (loading) return <div className="text-center py-10">Loading products...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="p-2 border rounded"
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
          <select 
            className="p-2 border rounded" 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <input 
              type="number" 
              placeholder="Min $" 
              className="w-1/2 p-2 border rounded"
              value={minPrice} 
              onChange={(e) => setMinPrice(e.target.value)} 
            />
            <input 
              type="number" 
              placeholder="Max $" 
              className="w-1/2 p-2 border rounded"
              value={maxPrice} 
              onChange={(e) => setMaxPrice(e.target.value)} 
            />
          </div>
          <select 
            className="p-2 border rounded" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Sort by Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link href={"/products/" + product.id} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
