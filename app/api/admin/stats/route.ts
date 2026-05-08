import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Order } from '@/models/Order';

export const dynamic = 'force-dynamic';

export async function GET() {
  await connectDB();
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  const weekly = await Order.find({ createdAt: { $gte: weekAgo } }).lean();
  const weeklyOrders = weekly.length;
  const weeklyRevenue = weekly.reduce((sum: number, o: any) => sum + Number(o.totalAmount || 0), 0);

  return NextResponse.json({ weeklyOrders, weeklyRevenue });
}
