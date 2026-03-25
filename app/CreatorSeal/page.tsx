import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CreatorSeal - Kryptografische Content-Verifikation | RealSync Dynamics',
  description: 'C2PA 2.3 Content-Verifikation, Ed25519-Signaturen, Deepfake-Erkennung und Blockchain-Timestamping. Schuetze deine Inhalte mit CreatorSeal.',
  openGraph: {
    title: 'CreatorSeal - Content-Verifikation',
    description: 'C2PA 2.3, Ed25519-Signaturen, Deepfake-Erkennung. Made in Germany.',
    url: 'https://www.realsyncdynamics.de/CreatorSeal',
    siteName: 'RealSync Dynamics',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CreatorSeal - Content-Verifikation',
    description: 'C2PA 2.3, Ed25519-Signaturen, Deepfake-Erkennung. Made in Germany.',
  },
};

export default function CreatorSealPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #05060f 0%, #0a1628 50%, #05060f 100%)',
        color: '#fff',
        fontFamily: 'Inter, system-ui, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Hero */}
      <header
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '80px 24px 40px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '9999px',
            border: '1px solid rgba(245, 197, 66, 0.3)',
            color: '#f5c542',
            fontSize: '14px',
            marginBottom: '24px',
          }}
        >
          C2PA 2.3 COMPLIANT
        </div>
        <h1
          style={{
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.1,
            margin: '0 0 24px',
            background: 'linear-gradient(135deg, #f5c542 0%, #e6a817 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          CreatorSeal
        </h1>
        <p
          style={{
            fontSize: '20px',
            color: '#8899bb',
            maxWidth: '640px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}
        >
          Kryptografische Content-Verifikation mit Ed25519-Signaturen,
          C2PA 2.3 Compliance, Deepfake-Erkennung und Blockchain-Timestamping.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#features"
            style={{
              padding: '14px 32px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #f5c542, #e6a817)',
              color: '#000',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            Features entdecken
          </a>
          <a
            href="/"
            style={{
              padding: '14px 32px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '16px',
              textDecoration: 'none',
            }}
          >
            Zurueck zum OS
          </a>
        </div>
      </header>

      {/* Features */}
      <section
        id="features"
        style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '60px 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}
      >
        {[
          {
            icon: '🔏',
            title: 'Ed25519-Signaturen',
            desc: 'Kryptografische Signierung jedes Content-Stuecks mit Ed25519 fuer manipulationssichere Urheberschaft.',
          },
          {
            icon: '📋',
            title: 'C2PA 2.3 Compliance',
            desc: 'Vollstaendig konform mit dem Content Provenance Standard — bereit fuer den EU AI Act.',
          },
          {
            icon: '🛡️',
            title: 'Deepfake Detection',
            desc: 'KI-gestuetzte Echtzeit-Erkennung von manipulierten Inhalten mit 98% Genauigkeit.',
          },
          {
            icon: '⛓️',
            title: 'Blockchain Timestamping',
            desc: 'Unveraenderlicher Zeitstempel auf Polygon — dein Beweis der Urheberschaft.',
          },
          {
            icon: '🌐',
            title: 'Creator Page',
            desc: 'Oeffentlich verlinkbares, verifizierbares Profil mit Trust Score als Social Proof.',
          },
          {
            icon: '📊',
            title: 'Trust Score',
            desc: 'Automatisch berechneter Vertrauenswert basierend auf Verifikationshistorie und Content-Integritaet.',
          },
        ].map((feature, i) => (
          <div
            key={i}
            style={{
              padding: '32px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>{feature.icon}</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px', color: '#f5c542' }}>
              {feature.title}
            </h3>
            <p style={{ fontSize: '15px', color: '#8899bb', lineHeight: 1.6, margin: 0 }}>
              {feature.desc}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          width: '100%',
          maxWidth: '800px',
          padding: '60px 24px 80px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}>
          Bereit fuer Content-Verifikation?
        </h2>
        <p style={{ color: '#8899bb', marginBottom: '32px', fontSize: '18px' }}>
          Schuetze deine Inhalte mit kryptografischer Sicherheit.
        </p>
        <a
          href="/"
          style={{
            padding: '16px 40px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #f5c542, #e6a817)',
            color: '#000',
            fontWeight: 700,
            fontSize: '18px',
            textDecoration: 'none',
          }}
        >
          Jetzt starten
        </a>
      </section>
    </div>
  );
}
