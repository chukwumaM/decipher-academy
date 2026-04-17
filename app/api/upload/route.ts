import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File | null;
  if (!file) return NextResponse.json({ message: 'No file' }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
  const filePath = path.join(process.cwd(), 'public', 'uploads', filename);
  await writeFile(filePath, buffer);

  return NextResponse.json({ url: `/uploads/${filename}` });
}
