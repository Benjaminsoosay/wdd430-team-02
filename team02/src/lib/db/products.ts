import { Product, CreateProductDTO } from '@/types/product';

// Mock database - replace with Prisma/MongoDB later
let products: Product[] = [
  {
    id: '1',
    name: 'Handmade Ceramic Mug',
    price: 35,
    description: 'Beautiful hand-thrown ceramic mug with earthy glaze.',
    imageUrl: '/images/mug.jpg',
    category: 'pottery',
    sellerId: 'seller1',
    sellerName: 'Emily Ceramics',
    stock: 15,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Woven Wall Hanging',
    price: 65,
    description: 'Macrame wall hanging made with natural cotton fibers.',
    imageUrl: '/images/woven.jpg',
    category: 'textiles',
    sellerId: 'seller2',
    sellerName: 'Textile Arts',
    stock: 5,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const productDB = {
  getAll: (): Product[] => {
    return products;
  },

  getById: (id: string): Product | undefined => {
    return products.find(p => p.id === id);
  },

  getByCategory: (category: Product['category']): Product[] => {
    return products.filter(p => p.category === category);
  },

  getBySeller: (sellerId: string): Product[] => {
    return products.filter(p => p.sellerId === sellerId);
  },

  create: (data: CreateProductDTO): Product => {
    const newProduct: Product = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    products.push(newProduct);
    return newProduct;
  },

  update: (id: string, data: Partial<CreateProductDTO>): Product | null => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    products[index] = {
      ...products[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    return products[index];
  },

  delete: (id: string): boolean => {
    const initialLength = products.length;
    products = products.filter(p => p.id !== id);
    return products.length < initialLength;
  },

  search: (query: string): Product[] => {
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.sellerName.toLowerCase().includes(lowerQuery)
    );
  },
};