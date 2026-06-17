import { Seller } from '../../types/seller';

export const sellers: Seller[] = [
  {
    id: 'seller1',
    name: 'Emma Thompson',
    email: 'emma@handcraftedhaven.com',
    bio: 'Emma has been working with clay for over 15 years. Her pieces are inspired by nature and the changing seasons. She believes that each piece tells a story and brings joy to everyday life.',
    avatar: '/images/emma.jpg',
    location: 'Portland, OR',
    joinDate: new Date('2023-06-01'),
    specialties: ['Pottery', 'Ceramics', 'Sculpture'],
    rating: 4.8,
    totalSales: 127,
    socialLinks: {
      instagram: '@emmapottery',
      etsy: 'emmapottery.etsy.com',
    },
  },
  {
    id: 'seller2',
    name: 'Michael Chen',
    email: 'michael@handcraftedhaven.com',
    bio: 'Michael is a woodworker who focuses on sustainable materials and timeless design. He sources reclaimed wood and uses traditional joinery techniques to create pieces that last generations.',
    avatar: '/images/michael.jpg',
    location: 'Seattle, WA',
    joinDate: new Date('2023-08-15'),
    specialties: ['Woodworking', 'Furniture', 'Home Decor'],
    rating: 4.9,
    totalSales: 89,
    socialLinks: {
      instagram: '@michaelwoodworks',
      website: 'michaelwoodworks.com',
    },
  },
  {
    id: 'seller3',
    name: 'Sophia Liu',
    email: 'sophia@handcraftedhaven.com',
    bio: 'Sophia is a jewelry maker who finds inspiration in nature and geometry. She works primarily with sterling silver and semi-precious stones to create modern, elegant pieces.',
    avatar: '/images/sophia.jpg',
    location: 'San Francisco, CA',
    joinDate: new Date('2023-09-10'),
    specialties: ['Jewelry', 'Metalwork', 'Gemstones'],
    rating: 4.7,
    totalSales: 56,
    socialLinks: {
      instagram: '@sophiajewelry',
      pinterest: 'sophiajewelry',
    },
  },
  {
    id: 'seller4',
    name: 'Elena Rodriguez',
    email: 'elena@handcraftedhaven.com',
    bio: 'Elena is a textile artist who weaves stories into her work. She uses natural fibers and traditional techniques passed down through generations of her family.',
    avatar: '/images/elena.jpg',
    location: 'Santa Fe, NM',
    joinDate: new Date('2023-07-20'),
    specialties: ['Textiles', 'Weaving', 'Natural Dyes'],
    rating: 4.6,
    totalSales: 43,
    socialLinks: {
      instagram: '@elenatextiles',
      website: 'elenatextiles.com',
    },
  },
  {
    id: 'seller5',
    name: 'James Kim',
    email: 'james@handcraftedhaven.com',
    bio: 'James is a craftsman who works with leather and wood. His pieces combine functionality with beauty, creating items that are meant to be used and cherished.',
    avatar: '/images/james.jpg',
    location: 'Austin, TX',
    joinDate: new Date('2023-10-01'),
    specialties: ['Leather', 'Woodworking', 'Bags', 'Accessories'],
    rating: 4.8,
    totalSales: 34,
    socialLinks: {
      instagram: '@jamescrafts',
      etsy: 'jamescrafts.etsy.com',
    },
  },
  {
    id: 'seller6',
    name: 'Lisa Wang',
    email: 'lisa@handcraftedhaven.com',
    bio: 'Lisa creates hand-poured candles and natural skincare products. She uses only organic ingredients and essential oils to create products that are good for you and the planet.',
    avatar: '/images/lisa.jpg',
    location: 'Boulder, CO',
    joinDate: new Date('2023-11-05'),
    specialties: ['Candles', 'Skincare', 'Natural Products'],
    rating: 4.5,
    totalSales: 78,
    socialLinks: {
      instagram: '@lisawellness',
      website: 'lisawellness.com',
    },
  },
  {
    id: 'seller7',
    name: 'Ama Mensah',
    email: 'ama@handcraftedhaven.com',
    bio: 'Ama is a basket weaver from Ghana. She uses traditional techniques and natural materials to create functional art that celebrates her heritage.',
    avatar: '/images/ama.jpg',
    location: 'Accra, Ghana',
    joinDate: new Date('2023-12-01'),
    specialties: ['Basketry', 'Rattan', 'Natural Fibers'],
    rating: 4.9,
    totalSales: 22,
    socialLinks: {
      instagram: '@amabaskets',
      website: 'amabaskets.com',
    },
  },
  {
    id: 'seller8',
    name: 'Marco Ferrari',
    email: 'marco@handcraftedhaven.com',
    bio: 'Marco is a master glassblower from Italy. He creates stunning glass art using techniques that have been passed down for generations. Each piece is unique and full of life.',
    avatar: '/images/marco.jpg',
    location: 'Venice, Italy',
    joinDate: new Date('2024-01-15'),
    specialties: ['Glass', 'Sculpture', 'Vases', 'Art'],
    rating: 4.9,
    totalSales: 15,
    socialLinks: {
      instagram: '@marcoglass',
      website: 'marcoglass.com',
    },
  },
];

// ============================================
// Seller CRUD Operations
// ============================================

export async function getAllSellers(): Promise<Seller[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sellers), 100);
  });
}

export async function getSellerById(id: string): Promise<Seller | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sellers.find(seller => seller.id === id)), 100);
  });
}

export async function getSellersBySpecialty(specialty: string): Promise<Seller[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sellers.filter(seller => 
        seller.specialties.some(s => s.toLowerCase() === specialty.toLowerCase())
      ));
    }, 100);
  });
}

export async function getTopRatedSellers(limit: number = 5): Promise<Seller[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sorted = [...sellers].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      resolve(sorted.slice(0, limit));
    }, 100);
  });
}

export async function getFeaturedSellers(): Promise<Seller[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Return sellers with rating >= 4.8
      resolve(sellers.filter(seller => (seller.rating || 0) >= 4.8));
    }, 100);
  });
}

export async function searchSellers(query: string): Promise<Seller[]> {
  return new Promise((resolve) => {
    const lowerQuery = query.toLowerCase();
    const results = sellers.filter(seller =>
      seller.name.toLowerCase().includes(lowerQuery) ||
      seller.bio.toLowerCase().includes(lowerQuery) ||
      seller.location.toLowerCase().includes(lowerQuery) ||
      seller.specialties.some(s => s.toLowerCase().includes(lowerQuery))
    );
    setTimeout(() => resolve(results), 100);
  });
}

export async function getSellerCount(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sellers.length), 100);
  });
}

export async function getSellerProductCount(sellerId: string, productCount: number): Promise<number> {
  return new Promise((resolve) => {
    // This would normally count products from the products table
    // For now, return a placeholder based on the seller's totalSales
    const seller = sellers.find(s => s.id === sellerId);
    setTimeout(() => resolve(seller?.totalSales || 0), 100);
  });
}