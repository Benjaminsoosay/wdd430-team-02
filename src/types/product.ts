export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  artisan: string;
  artisanId: string;
  rating: number;
  reviewCount: number;
  stock: number;
  createdAt: Date;
  featured: boolean;
  tags?: string[];
}
