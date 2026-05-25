import { Review, CreateReviewDTO, ProductWithRating } from "@/types/review";

const reviews: Review[] = [
  {
    id: "rev1",
    productId: "1",
    userId: "user1",
    userName: "Sarah Johnson",
    rating: 5,
    comment: "Absolutely beautiful mug! The craftsmanship is amazing.",
    createdAt: "2024-03-15T10:00:00Z",
  },

  {
    id: "rev2",
    productId: "1",
    userId: "user2",
    userName: "Mike Thompson",
    rating: 4,
    comment: "Great quality, shipping was fast.",
    createdAt: "2024-03-10T14:30:00Z",
  },
];

export const reviewDB = {

  getByProductId: (productId: string): Review[] => {
    return reviews.filter((review) => review.productId === productId);
  },

  getProductRating: (productId: string): ProductWithRating => {

    const productReviews = reviews.filter(
      (review) => review.productId === productId
    );

    const totalReviews = productReviews.length;

    const ratings = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    let sum = 0;

    productReviews.forEach((review) => {
      ratings[review.rating as keyof typeof ratings]++;
      sum += review.rating;
    });

    return {
      averageRating:
        totalReviews > 0 ? sum / totalReviews : 0,
      totalReviews,
      ratings,
    };
  },

  create: (data: CreateReviewDTO): Review => {

    const newReview: Review = {
      id: `rev${reviews.length + 1}`,
      productId: data.productId,
      userId: "user-demo",
      userName: "Demo User",
      rating: data.rating,
      comment: data.comment,
      createdAt: new Date().toISOString(),
    };

    reviews.push(newReview);

    return newReview;
  },
};