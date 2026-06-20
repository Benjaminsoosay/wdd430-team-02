import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: '1',
      name: 'Handmade Leather Wallet',
      description: 'Premium quality full-grain leather wallet with RFID protection. Handcrafted by skilled artisans using traditional techniques.',
      price: 49.99,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&auto=format',
      seller: 'Artisan Leather Co.',
      rating: 4.8,
      reviews: 12
    },
    {
      id: '2',
      name: 'Organic Cotton T-Shirt',
      description: 'Eco-friendly 100% organic cotton t-shirt. Breathable, comfortable, and ethically sourced for everyday wear.',
      price: 29.99,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format',
      seller: 'EcoWear',
      rating: 4.5,
      reviews: 8
    },
    {
      id: '3',
      name: 'Handcrafted Wooden Bowl',
      description: 'Beautiful hand-turned wooden bowl made from sustainable maple wood. Perfect for serving or as a decorative piece.',
      price: 65.00,
      category: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop&auto=format',
      seller: 'WoodArt Studio',
      rating: 4.9,
      reviews: 15
    },
    {
      id: '4',
      name: 'Artisan Coffee Mug Set',
      description: 'Set of 4 handmade ceramic coffee mugs with unique glazing patterns. Microwave and dishwasher safe.',
      price: 39.99,
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop&auto=format',
      seller: 'Clay Creations',
      rating: 4.7,
      reviews: 10
    },
    {
      id: '5',
      name: 'Bamboo Sunglasses',
      description: 'Eco-friendly sunglasses made from sustainable bamboo with polarized UV400 lenses for optimal eye protection.',
      price: 79.99,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&auto=format',
      seller: 'EcoVision',
      rating: 4.6,
      reviews: 7
    },
    {
      id: '6',
      name: 'Handwoven Wool Blanket',
      description: 'Warm and cozy blanket handwoven from premium merino wool. Available in multiple natural colors.',
      price: 120.00,
      category: 'Home Decor',
      image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc4?w=400&h=400&fit=crop&auto=format',
      seller: 'Weaving Heritage',
      rating: 4.9,
      reviews: 20
    }
  ];

  return NextResponse.json(products);
}
