import { getAllSellers } from '../../../lib/db/sellers';
import { NextResponse } from 'next/server';

export async function GET() {
  const sellers = await getAllSellers();
  return NextResponse.json({ sellers, total: sellers.length });
}