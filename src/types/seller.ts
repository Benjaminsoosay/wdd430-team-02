export interface Seller {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  location: string;
  joinDate: Date;
  specialties: string[];
  rating?: number;
  totalSales?: number;
}
