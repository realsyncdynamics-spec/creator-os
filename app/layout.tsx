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
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealSync Dynamics — The Creator OS',
    description: 'Kryptografische Content-Verifikation, KI-Automation und Creator-Tools. Made in Germany.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
