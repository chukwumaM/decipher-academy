import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.warn('MONGODB_URI is not set. Database operations will fail until configured.');
}

let cached = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!uri) throw new Error('Missing MONGODB_URI');

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { dbName: process.env.MONGODB_DB || 'wendy_luxury' });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
