import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Product } from '@/models/Product';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const body = await req.json();
  const product = await Product.findByIdAndUpdate(params.id, body, { new: true });
  return NextResponse.json(product);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ ok: true });
}
