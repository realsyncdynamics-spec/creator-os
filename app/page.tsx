// app/page.tsx
import RealSyncAppHub from '../components/RealSyncAppHub';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: '#05060f', color: '#fff', fontFamily: 'Inter, sans-serif' }}>
      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '5rem 2rem 2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          RealSync Creator OS
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#9fa6c0', maxWidth: '560px', margin: '0 auto 2rem' }}>
          Die vollstaendige Infrastruktur fuer Creator &mdash; Verifikation, Monetarisierung, Automation und mehr.
        </p>
        <a
          href="/creator-os"
          style={{
            display: 'inline-block',
            background: '#2424ff',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
          }}
        >
          Alle Apps entdecken
        </a>
      </section>

      {/* App Hub */}
      <RealSyncAppHub />

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '3rem 2rem', color: '#5a6080', fontSize: '0.85rem' }}>
        &copy; {new Date().getFullYear()} RealSyncDynamics &mdash; realsyncdynamics.de
      </footer>
    </main>
  );
}
