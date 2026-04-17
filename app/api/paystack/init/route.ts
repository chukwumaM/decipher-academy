import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { amount, email, reference } = await req.json();
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) return NextResponse.json({ message: 'Missing PAYSTACK_SECRET_KEY' }, { status: 400 });

  const response = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ amount: Math.round(Number(amount) * 100), email, reference })
  });

  const data = await response.json();
  return NextResponse.json({ url: data?.data?.authorization_url });
}
