import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Order } from '@/models/Order';
import { Product } from '@/models/Product';
import { appendOrderToSheet } from '@/lib/googleSheets';

function expectedDelivery(state: string, deliveryType: string, pickupDay?: string) {
  if (deliveryType === 'pickup') return `Pickup on ${pickupDay || 'Tuesday / Thursday / Saturday'}`;
  return state === 'Lagos' ? 'Delivery within 24 hours' : 'Delivery in 3–5 working days';
}

export async function GET() {
  await connectDB();
  const orders = await Order.find({}).sort({ createdAt: -1 }).lean();
  return NextResponse.json(orders);
}

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();

  for (const item of body.items || []) {
    await Product.findByIdAndUpdate(item._id, { $inc: { quantity: -Number(item.qty || 1) } });
  }

  const order = await Order.create({
    ...body,
    expectedDeliveryTime: expectedDelivery(body.state, body.deliveryType, body.pickupDay)
  });

  await appendOrderToSheet({
    name: body.customerName,
    phone: body.phoneNumber,
    items: (body.items || []).map((i: any) => `${i.name} x${i.qty}`).join(', '),
    total: body.totalAmount,
    deliveryType: body.deliveryType,
    deliveryDate: order.expectedDeliveryTime
  });

  return NextResponse.json(order, { status: 201 });
}
