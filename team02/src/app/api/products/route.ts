import { NextRequest, NextResponse } from 'next/server';
import { productDB } from '@/lib/db/products';
import { CreateProductDTO } from '@/types/product';

// GET /api/products - Get all products
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const sellerId = searchParams.get('sellerId');
  const search = searchParams.get('search');

  try {
    let products;
    
    if (category) {
      products = productDB.getByCategory(category as any);
    } else if (sellerId) {
      products = productDB.getBySeller(sellerId);
    } else if (search) {
      products = productDB.search(search);
    } else {
      products = productDB.getAll();
    }

    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST /api/products - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body: CreateProductDTO = await request.json();
    
    // Validation
    if (!body.name || !body.price || !body.sellerId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newProduct = productDB.create(body);
    return NextResponse.json({ success: true, product: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}