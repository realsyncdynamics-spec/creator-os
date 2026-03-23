// app/api/qr/route.ts
import { NextRequest } from 'next/server';
import QRCode from 'qrcode';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  const format = searchParams.get('format') ?? 'svg';

  if (!url) {
    return new Response(JSON.stringify({ error: 'Missing url param' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try { new URL(url); } catch {
    return new Response(JSON.stringify({ error: 'Invalid URL' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const cache = 'public, max-age=86400, stale-while-revalidate=3600';

  if (format === 'png') {
    // Use Web Streams API - compatible with Next.js Edge/Node runtime
    const dataUrl = await QRCode.toDataURL(url, {
      errorCorrectionLevel: 'M',
      margin: 1,
      scale: 6,
    });
    // dataUrl = "data:image/png;base64,..."
    const base64 = dataUrl.split(',')[1];
    const binaryStr = atob(base64);
    const bytes = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) {
      bytes[i] = binaryStr.charCodeAt(i);
    }
    return new Response(bytes.buffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': 'attachment; filename="qr.png"',
        'Cache-Control': cache,
      },
    });
  }

  const svg = await QRCode.toString(url, {
    type: 'svg',
    errorCorrectionLevel: 'M',
    margin: 1,
  });

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': cache,
    },
  });
}
