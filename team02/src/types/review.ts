export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  createdAt: string;
}

export interface CreateReviewDTO {
  productId: string;
  rating: number;
  comment: string;
}

export interface ProductWithRating {
  averageRating: number;
  totalReviews: number;
  ratings: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}