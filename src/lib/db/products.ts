﻿import { Product } from '../../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Handcrafted Ceramic Mug',
    description: 'Beautiful hand-thrown ceramic mug with earthy glaze. Perfect for your morning coffee or tea.',
    price: 34.99,
    image: '/images/mug.jpg',
    category: 'Pottery',
    artisan: 'Emma Thompson',
    artisanId: 'seller1',
    rating: 4.8,
    reviewCount: 24,
    stock: 15,
    createdAt: new Date('2024-01-15'),
    featured: true,
    tags: ['ceramic', 'mug', 'handmade', 'pottery'],
  },
  {
    id: '2',
    name: 'Wooden Serving Board',
    description: 'Hand-carved wooden serving board made from reclaimed walnut. Perfect for charcuterie and entertaining.',
    price: 89.99,
    image: '/images/board.jpg',
    category: 'Woodworking',
    artisan: 'Michael Chen',
    artisanId: 'seller2',
    rating: 4.9,
    reviewCount: 18,
    stock: 8,
    createdAt: new Date('2024-02-10'),
    featured: true,
    tags: ['wooden', 'serving board', 'walnut', 'handmade'],
  },
  {
    id: '3',
    name: 'Woven Wall Hanging',
    description: 'Textile art piece hand-woven with natural cotton and wool. Adds warmth and texture to any room.',
    price: 124.99,
    image: '/images/wall-hanging.jpg',
    category: 'Textiles',
    artisan: 'Elena Rodriguez',
    artisanId: 'seller1',
    rating: 4.7,
    reviewCount: 12,
    stock: 5,
    createdAt: new Date('2024-01-20'),
    featured: true,
    tags: ['woven', 'wall hanging', 'textile', 'decor'],
  },
  {
    id: '4',
    name: 'Sterling Silver Ring',
    description: 'Handcrafted sterling silver ring with a unique organic hammered texture. Individually crafted.',
    price: 68.00,
    image: '/images/ring.jpg',
    category: 'Jewelry',
    artisan: 'Sophia Liu',
    artisanId: 'seller3',
    rating: 4.6,
    reviewCount: 9,
    stock: 12,
    createdAt: new Date('2024-03-01'),
    featured: false,
    tags: ['silver', 'ring', 'jewelry', 'handmade'],
  },
  {
    id: '5',
    name: 'Leather Journal',
    description: 'Handcrafted leather journal with rustic stitching and recycled paper pages. Develops a beautiful patina over time.',
    price: 42.50,
    image: '/images/journal.jpg',
    category: 'Leather',
    artisan: 'James Kim',
    artisanId: 'seller2',
    rating: 4.5,
    reviewCount: 15,
    stock: 20,
    createdAt: new Date('2024-02-20'),
    featured: false,
    tags: ['leather', 'journal', 'handmade', 'stationery'],
  },
  {
    id: '6',
    name: 'Soy Wax Candle Set',
    description: 'Set of three hand-poured soy wax candles in ceramic vessels. Natural essential oils and cotton wicks.',
    price: 38.00,
    image: '/images/candles.jpg',
    category: 'Candles',
    artisan: 'Lisa Wang',
    artisanId: 'seller3',
    rating: 4.4,
    reviewCount: 21,
    stock: 10,
    createdAt: new Date('2024-03-10'),
    featured: false,
    tags: ['candles', 'soy wax', 'scented', 'handmade'],
  },
];

export async function getAllProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 100);
  });
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.find(product => product.id === id)), 100);
  });
}

export async function getProductsByArtisan(artisanId: string): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(product => product.artisanId === artisanId)), 100);
  });
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.featured)), 100);
  });
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(product => product.category === category)), 100);
  });
}

export async function searchProducts(query: string): Promise<Product[]> {
  return new Promise((resolve) => {
    const lowerQuery = query.toLowerCase();
    const results = products.filter(product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.artisan.toLowerCase().includes(lowerQuery) ||
      product.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
    setTimeout(() => resolve(results), 100);
  });
}

export async function getCategories(): Promise<string[]> {
  return new Promise((resolve) => {
    const categories = [...new Set(products.map(p => p.category))];
    setTimeout(() => resolve(categories), 100);
  });
}