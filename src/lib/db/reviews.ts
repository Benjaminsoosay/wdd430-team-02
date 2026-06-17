import { Review } from '../../types/review';

export const reviews: Review[] = [
  // Product 1: Handcrafted Ceramic Mug
  {
    id: 'rev1',
    productId: '1',
    userId: 'user1',
    userName: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely love this mug! The craftsmanship is excellent and it feels great in hand. The glaze is beautiful and makes my morning coffee even better.',
    createdAt: new Date('2024-03-01'),
  },
  {
    id: 'rev2',
    productId: '1',
    userId: 'user2',
    userName: 'David Wilson',
    rating: 4,
    comment: 'Beautiful design. Shipping was fast too. Only downside is it\'s a bit smaller than I expected.',
    createdAt: new Date('2024-03-10'),
  },
  {
    id: 'rev3',
    productId: '1',
    userId: 'user3',
    userName: 'Emily Chen',
    rating: 5,
    comment: 'Perfect gift! My friend loved it. The packaging was beautiful and the mug is even prettier in person.',
    createdAt: new Date('2024-03-15'),
  },

  // Product 2: Wooden Serving Board
  {
    id: 'rev4',
    productId: '2',
    userId: 'user4',
    userName: 'Michael Brown',
    rating: 5,
    comment: 'Incredible quality! The wood grain is stunning and it\'s the perfect size for charcuterie. Highly recommend!',
    createdAt: new Date('2024-02-20'),
  },
  {
    id: 'rev5',
    productId: '2',
    userId: 'user5',
    userName: 'Jessica Martinez',
    rating: 4,
    comment: 'Beautiful board. Great for entertaining. Would have given 5 stars if it came with care instructions.',
    createdAt: new Date('2024-02-28'),
  },

  // Product 3: Woven Wall Hanging
  {
    id: 'rev6',
    productId: '3',
    userId: 'user6',
    userName: 'Anna White',
    rating: 5,
    comment: 'Stunning piece! Adds so much warmth to my living room. The craftsmanship is incredible.',
    createdAt: new Date('2024-01-25'),
  },
  {
    id: 'rev7',
    productId: '3',
    userId: 'user7',
    userName: 'Robert Taylor',
    rating: 4,
    comment: 'Very well made. Colors are true to the photos. Took a while to hang but worth it.',
    createdAt: new Date('2024-02-01'),
  },

  // Product 4: Sterling Silver Ring
  {
    id: 'rev8',
    productId: '4',
    userId: 'user8',
    userName: 'Amanda Lee',
    rating: 5,
    comment: 'Beautiful ring! Fits perfectly and the hammered texture is unique. Have received many compliments.',
    createdAt: new Date('2024-03-05'),
  },
  {
    id: 'rev9',
    productId: '4',
    userId: 'user9',
    userName: 'Thomas Garcia',
    rating: 3,
    comment: 'Nice design but runs a bit small. Had to return for a larger size. Customer service was helpful though.',
    createdAt: new Date('2024-03-12'),
  },

  // Product 5: Leather Journal
  {
    id: 'rev10',
    productId: '5',
    userId: 'user10',
    userName: 'Olivia Davis',
    rating: 5,
    comment: 'Perfect journal! The leather is soft and smells amazing. The paper quality is excellent too.',
    createdAt: new Date('2024-02-22'),
  },
  {
    id: 'rev11',
    productId: '5',
    userId: 'user1',
    userName: 'Sarah Johnson',
    rating: 4,
    comment: 'Great gift for writers. The leather strap keeps it secure. Would buy again.',
    createdAt: new Date('2024-03-01'),
  },

  // Product 6: Soy Wax Candle Set
  {
    id: 'rev12',
    productId: '6',
    userId: 'user2',
    userName: 'David Wilson',
    rating: 5,
    comment: 'Best candles I\'ve ever bought! The scents are perfect and the burn is clean and even.',
    createdAt: new Date('2024-03-15'),
  },
  {
    id: 'rev13',
    productId: '6',
    userId: 'user4',
    userName: 'Michael Brown',
    rating: 4,
    comment: 'Nice set. Love the Lavender & Vanilla scent. The ceramic containers are reusable.',
    createdAt: new Date('2024-03-18'),
  },

  // Product 7: Handwoven Basket
  {
    id: 'rev14',
    productId: '7',
    userId: 'user5',
    userName: 'Jessica Martinez',
    rating: 5,
    comment: 'Gorgeous basket! Perfect for storing blankets. Well-made and beautiful natural colors.',
    createdAt: new Date('2024-03-20'),
  },

  // Product 8: Glass Blown Vase
  {
    id: 'rev15',
    productId: '8',
    userId: 'user6',
    userName: 'Anna White',
    rating: 5,
    comment: 'Stunning piece of art! The colors are mesmerizing. Worth every penny.',
    createdAt: new Date('2024-04-05'),
  },
  {
    id: 'rev16',
    productId: '8',
    userId: 'user8',
    userName: 'Amanda Lee',
    rating: 5,
    comment: 'Beautiful vase. Even more gorgeous in person. A true conversation starter.',
    createdAt: new Date('2024-04-10'),
  },
  {
    id: 'rev17',
    productId: '8',
    userId: 'user3',
    userName: 'Emily Chen',
    rating: 4,
    comment: 'Very unique. Shipping was carefully packaged. Only downside is price is a bit high.',
    createdAt: new Date('2024-04-15'),
  },
];

// ============================================
// Review CRUD Operations
// ============================================

export async function getReviewsByProduct(productId: string): Promise<Review[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviews.filter(review => review.productId === productId));
    }, 100);
  });
}

export async function getReviewsByUser(userId: string): Promise<Review[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviews.filter(review => review.userId === userId));
    }, 100);
  });
}

export async function getReviewById(id: string): Promise<Review | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviews.find(review => review.id === id));
    }, 100);
  });
}

export async function getAllReviews(): Promise<Review[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(reviews), 100);
  });
}

export async function getAverageRating(productId: string): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productReviews = reviews.filter(r => r.productId === productId);
      if (productReviews.length === 0) {
        resolve(0);
        return;
      }
      const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
      resolve(sum / productReviews.length);
    }, 100);
  });
}

export async function getRatingDistribution(productId: string): Promise<{ [key: number]: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productReviews = reviews.filter(r => r.productId === productId);
      const distribution: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      productReviews.forEach(r => {
        distribution[r.rating] = (distribution[r.rating] || 0) + 1;
      });
      resolve(distribution);
    }, 100);
  });
}

export async function getRecentReviews(limit: number = 5): Promise<Review[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sorted = [...reviews].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      resolve(sorted.slice(0, limit));
    }, 100);
  });
}

export async function addReview(
  productId: string,
  userId: string,
  userName: string,
  rating: number,
  comment: string
): Promise<Review> {
  const newReview: Review = {
    id: `rev${reviews.length + 1}`,
    productId,
    userId,
    userName,
    rating,
    comment,
    createdAt: new Date(),
  };
  reviews.push(newReview);
  return new Promise((resolve) => {
    setTimeout(() => resolve(newReview), 100);
  });
}

export async function getReviewCount(productId: string): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviews.filter(r => r.productId === productId).length);
    }, 100);
  });
}