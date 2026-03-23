// app/page.tsx
import RealSyncAppHub from '../components/RealSyncAppHub';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', background: 'radial-gradient(ellipse at 50% 50%, #0a0a2e 0%, #050515 40%, #010108 100%)', color: '#fff', fontFamily: "'Inter', sans-serif" }}>
      <section style={{ textAlign: 'center', padding: '4rem 2rem 1rem' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem', background: 'linear-gradient(135deg, #c4b5fd, #67e8f9, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          RealSync Creator OS
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '560px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
          Die vollstaendige Infrastruktur fuer Creator &mdash; Verifikation, Monetarisierung, Automation und mehr.
        </p>
      </section>
      <RealSyncAppHub />
    </main>
  );
}
