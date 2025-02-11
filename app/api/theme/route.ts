import { NextResponse } from 'next/server';
import { getCachedTheme, setCachedTheme } from '@/lib/cache';

export async function GET() {
  const theme = await getCachedTheme();
  return NextResponse.json({ theme });
}

export async function POST(request: Request) {
  const { theme } = await request.json();
  await setCachedTheme(theme);
  return NextResponse.json({ success: true });
} 