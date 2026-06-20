'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  seller: string;
  rating: number;
}

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState<{id: string, user: string, comment: string, date: string}[]>([]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const products: Product[] = [
    { id: '1', name: 'Handmade Leather Wallet', price: 49.99, category: 'Accessories', description: 'Premium leather wallet with RFID protection', seller: 'Artisan Leather Co.', rating: 4.8 },
    { id: '2', name: 'Organic Cotton T-Shirt', price: 29.99, category: 'Clothing', description: 'Eco-friendly 100% organic cotton t-shirt', seller: 'EcoWear', rating: 4.5 },
    { id: '3', name: 'Handcrafted Wooden Bowl', price: 65.00, category: 'Home Decor', description: 'Beautiful hand-turned wooden bowl', seller: 'WoodArt Studio', rating: 4.9 },
    { id: '4', name: 'Artisan Coffee Mug Set', price: 39.99, category: 'Kitchen', description: 'Set of 4 handmade ceramic coffee mugs', seller: 'Clay Creations', rating: 4.7 },
    { id: '5', name: 'Bamboo Sunglasses', price: 79.99, category: 'Accessories', description: 'Eco-friendly sunglasses with polarized lenses', seller: 'EcoVision', rating: 4.6 },
    { id: '6', name: 'Handwoven Wool Blanket', price: 120.00, category: 'Home Decor', description: 'Warm merino wool blanket', seller: 'Weaving Heritage', rating: 4.9 },
  ];

  useEffect(() => {
    const found = products.find(p => p.id === params.id);
    setProduct(found || null);
    setLoading(false);
  }, [params.id]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (review.trim()) {
      const newReview = {
        id: Date.now().toString(),
        user: 'Anonymous User',
        comment: review,
        date: new Date().toLocaleDateString()
      };
      setReviews([newReview, ...reviews]);
      setReview('');
      setReviewSubmitted(true);
      setTimeout(() => setReviewSubmitted(false), 3000);
    }
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!product) return <div className="text-center py-10">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-2">Category: {product.category}</p>
        <p className="text-2xl font-bold text-blue-600 mb-4">${product.price.toFixed(2)}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-sm text-gray-500 mb-4">Sold by: {product.seller}</p>
        <div className="flex items-center mb-6">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="ml-1 font-semibold">{product.rating}</span>
          <span className="ml-2 text-gray-500">({reviews.length} reviews)</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Reviews & Ratings</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold mb-3">Write a Review</h3>
            <form onSubmit={handleSubmitReview}>
              <textarea 
                className="w-full p-3 border rounded-lg mb-3"
                rows={3}
                placeholder="Share your experience with this product..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Submit Review
              </button>
              {reviewSubmitted && (
                <p className="text-green-600 mt-2">Review submitted successfully!</p>
              )}
            </form>
          </div>
          
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet. Be the first to review!</p>
          ) : (
            <div className="space-y-4">
              {reviews.map((r) => (
                <div key={r.id} className="border-b pb-4">
                  <div className="flex items-center mb-1">
                    <span className="font-semibold">{r.user}</span>
                    <span className="ml-3 text-gray-500 text-sm">{r.date}</span>
                  </div>
                  <p className="text-gray-700">{r.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
