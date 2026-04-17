import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';

export async function GET(req: NextRequest) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const featured = searchParams.get('featured');
  const query: any = {};
  if (category) query.category = category;
  if (featured === 'true') query.featured = true;
  const products = await Product.find(query).sort({ createdAt: -1 }).lean();
  return NextResponse.json(products.map((p: any) => ({ ...p, stockStatus: p.quantity > 0 ? 'In Stock' : 'Out of Stock' })));
}

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();
  const product = await Product.create(body);
  return NextResponse.json(product, { status: 201 });
}
