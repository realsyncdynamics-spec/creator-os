// app/layout.tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/RealSyncAppHub.css';

export const metadata: Metadata = {
  title: 'RealSync Creator OS',
  description: 'Die vollstaendige Infrastruktur fuer Creator.',
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
