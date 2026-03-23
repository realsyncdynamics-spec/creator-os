// app/api/qr/route.ts
import { NextRequest, NextResponse } from 'next/server';
import QRCode from 'qrcode';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');
  const format = searchParams.get('format') ?? 'svg';

  if (!url) {
    return NextResponse.json({ error: 'Missing url param' }, { status: 400 });
  }

  try { new URL(url); } catch {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  const cache = 'public, max-age=86400, stale-while-revalidate=3600';

  if (format === 'png') {
    // toBuffer gibt Node Buffer zurueck - als Uint8Array an NextResponse uebergeben
    const nodeBuffer = await QRCode.toBuffer(url, {
      errorCorrectionLevel: 'M',
      margin: 1,
      scale: 6,
    });
    const uint8 = new Uint8Array(nodeBuffer.buffer, nodeBuffer.byteOffset, nodeBuffer.byteLength);
    return new NextResponse(uint8, {
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

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': cache,
    },
  });
}
