export interface Seller {
  id: string;
  userId: string;
  shopName: string;
  bio: string;
  story: string;
  avatarUrl: string;
  bannerUrl: string;
  location: string;
  joinDate: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    website?: string;
  };
}

export interface CreateSellerDTO {
  shopName: string;
  bio: string;
  story: string;
  location: string;
}