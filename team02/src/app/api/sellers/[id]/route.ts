import { NextRequest, NextResponse } from 'next/server';
import { sellerDB } from '@/lib/db/sellers';
import { productDB } from '@/lib/db/products';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const seller = sellerDB.getById(id);
  
  if (!seller) {
    return NextResponse.json({ success: false, error: 'Seller not found' }, { status: 404 });
  }
  
  const products = productDB.getBySeller(id);
  
  return NextResponse.json({ success: true, seller, products });
}