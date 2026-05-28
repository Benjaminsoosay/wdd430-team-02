import { Seller, CreateSellerDTO } from '@/types/seller';

let sellers: Seller[] = [
  {
    id: 'seller1',
    userId: 'user1',
    shopName: 'Emily Ceramics',
    bio: 'Potter with 10 years of experience',
    story: 'I started making pottery in my garage. Now I share my passion with the world.',
    avatarUrl: '/avatars/emily.jpg',
    bannerUrl: '/banners/emily.jpg',
    location: 'Portland, OR',
    joinDate: '2024-01-15',
    socialLinks: { instagram: '@emilyceramics' },
  },
  {
    id: 'seller2',
    userId: 'user2',
    shopName: 'Textile Arts',
    bio: 'Creating beautiful woven art',
    story: 'Textiles run in my family for generations.',
    avatarUrl: '/avatars/textile.jpg',
    bannerUrl: '/banners/textile.jpg',
    location: 'Asheville, NC',
    joinDate: '2024-02-01',
    socialLinks: { instagram: '@textilearts' },
  },
];

export const sellerDB = {
  getAll: (): Seller[] => sellers,
  
  getById: (id: string): Seller | undefined => sellers.find(s => s.id === id),
  
  getByUserId: (userId: string): Seller | undefined => sellers.find(s => s.userId === userId),
  
  create: (userId: string, data: CreateSellerDTO): Seller => {
    const newSeller: Seller = {
      id: `seller${Date.now()}`,
      userId,
      ...data,
      avatarUrl: '/avatars/default.jpg',
      bannerUrl: '/banners/default.jpg',
      joinDate: new Date().toISOString().split('T')[0],
      socialLinks: {},
    };
    sellers.push(newSeller);
    return newSeller;
  },
  
  update: (id: string, data: Partial<CreateSellerDTO>): Seller | null => {
    const index = sellers.findIndex(s => s.id === id);
    if (index === -1) return null;
    sellers[index] = { ...sellers[index], ...data };
    return sellers[index];
  },
};