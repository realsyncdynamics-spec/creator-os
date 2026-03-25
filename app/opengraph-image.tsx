import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #05060f 0%, #0a1628 30%, #111b33 50%, #0a1628 70%, #05060f 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(245, 197, 66, 0.08) 0%, transparent 60%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, #f5c542, #e6a817)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              borderRadius: '12px',
            }}
          >
            RS
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: '#f5c542',
            letterSpacing: '-1px',
            display: 'flex',
          }}
        >
          RealSync Dynamics
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 12,
            color: '#8899bb',
            display: 'flex',
          }}
        >
          The Creator OS
        </div>
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: 40,
            fontSize: 18,
            color: '#556688',
          }}
        >
          <span style={{ display: 'flex' }}>C2PA 2.3</span>
          <span style={{ display: 'flex' }}>Deepfake Detection</span>
          <span style={{ display: 'flex' }}>KI-Automation</span>
          <span style={{ display: 'flex' }}>Made in Germany</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
