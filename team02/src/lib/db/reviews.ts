import { Review, CreateReviewDTO, ProductWithRating } from '@/types/review';

let reviews: Review[] = [
  {
    id: 'rev1',
    productId: '1',
    userId: 'user1',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely beautiful mug! The craftsmanship is amazing.',
    createdAt: '2024-03-15T10:00:00Z',
  },
  {
    id: 'rev2',
    productId: '1',
    userId: 'user2',
    userName: 'Mike Thompson',
    rating: 4,
    comment: 'Great quality, shipping was fast.',
    createdAt: '2024-03-10T14:30:00Z',
  },
];

export const reviewDB = {
  getByProductId: (productId: string): Review[] => {
    return reviews.filter(r => r.productId === productId);
  },

  getProductRating: (productId: string): ProductWithRating => {
    const productReviews = reviews.filter(r => r.productId === productId);
    const totalReviews = productReviews.length;
    
    const ratings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    let sum = 0;
    
    productReviews.forEach(review => {
      ratings[review.rating as keyof typeof ratings