import { getAllProducts } from '@/lib/db/products';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json({ products, total: products.length });
}