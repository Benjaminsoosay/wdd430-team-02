import { NextRequest, NextResponse } from 'next/server';
import { sellerDB } from '@/lib/db/sellers';

export async function GET() {
  const sellers = sellerDB.getAll();
  return NextResponse.json({ success: true, sellers });
}