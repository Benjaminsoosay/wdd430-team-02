export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: 'pottery' | 'jewelry' | 'textiles' | 'woodwork' | 'other';
  sellerId: string;
  sellerName: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProductDTO {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: Product['category'];
  sellerId: string;
  sellerName: string;
  stock: number;
}