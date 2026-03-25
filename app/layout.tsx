// app/layout.tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/RealSyncAppHub.css';

export const metadata: Metadata = {
  title: 'RealSync Dynamics — The Creator OS',
  description: 'Kryptografische Content-Verifikation, KI-Automation und Creator-Tools in einer Plattform. Ed25519-Signaturen, C2PA 2.3, Deepfake-Erkennung und Blockchain-Timestamping. Made in Germany.',
  openGraph: {
    title: 'RealSync Dynamics — The Creator OS',
    description: 'Kryptografische Content-Verifikation, KI-Automation und Creator-Tools in einer Plattform. Made in Germany.',
    url: 'https://www.realsyncdynamics.de',
    siteName: 'RealSync Dynamics',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RealSync Dynamics — The Creator OS',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealSync Dynamics — The Creator OS',
    description: 'Kryptografische Content-Verifikation, KI-Automation und Creator-Tools. Made in Germany.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: '#05060f',
          color: '#fff',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        }}
      >
        {children}
      </body>
    </html>
  );
}
