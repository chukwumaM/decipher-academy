import { NextRequest, NextResponse } from 'next/server';
import { signAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const validUser = process.env.ADMIN_USERNAME || 'admin';
  const validPass = process.env.ADMIN_PASSWORD || 'admin123';

  if (username !== validUser || password !== validPass) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const token = signAdminToken({ username });
  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin_token', token, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production' });
  return res;
}
