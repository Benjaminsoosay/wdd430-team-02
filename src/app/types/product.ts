export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  artisan: string;          // Artisan name
  artisanId: string;        // Artisan ID (matches sellerId)
  rating: number;           // Average rating (0-5)
  reviewCount: number;      // Number of reviews
  stock: number;
  createdAt: Date;
  featured: boolean;        // Featured on homepage
  tags?: string[];          // Searchable tags
}

// Legacy support for existing code
export interface ProductWithSeller extends Product {
  sellerName: string;
}

// For creating a new product
export interface CreateProductInput {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  artisanId: string;
  stock: number;
  tags?: string[];
}

// For updating a product
export interface UpdateProductInput extends Partial<CreateProductInput> {
  id: string;
}

// Product filters
export interface ProductFilters {
  category?: string;
  artisanId?: string;
  minPrice?: number;
  maxPrice?: number;
  featured?: boolean;
  search?: string;
  sortBy?: 'price' | 'rating' | 'newest' | 'popularity';
  sortOrder?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

// Product category with count
export interface ProductCategory {
  name: string;
  count: number;
  icon?: string;
}

// Product listing response
export interface ProductListResponse {
  products: Product[];
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}