import { headers } from 'next/headers';

async function generateFingerprint(): Promise<string> {
  const headersList = await headers();
  const ip = headersList.get('x-forwarded-for')?.split(',')[0] || '';
  return Buffer.from(ip).toString('base64');
}

const memoryCache = new Map<string, { value: string, timestamp: number }>();

export async function getCachedTheme(): Promise<string> {
  const fingerprint = await generateFingerprint();
  const cached = memoryCache.get(fingerprint);
  
  if (cached && (Date.now() - cached.timestamp) < 1000 * 60 * 60 * 24 * 30) {
    return cached.value;
  }
  
  return 'dark'; // default theme
}

export async function setCachedTheme(theme: string): Promise<void> {
  const fingerprint = await generateFingerprint();
  memoryCache.set(fingerprint, {
    value: theme,
    timestamp: Date.now()
  });
} 