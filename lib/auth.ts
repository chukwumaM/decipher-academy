import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'dev-secret';

export function signAdminToken(payload: { username: string }) {
  return jwt.sign(payload, secret, { expiresIn: '2d' });
}

export function verifyAdminToken(token?: string) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret) as { username: string };
  } catch {
    return null;
  }
}
