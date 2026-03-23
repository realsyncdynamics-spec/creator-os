// components/RealSyncAppHub.tsx
import React from "react";
import "../styles/RealSyncAppHub.css";

const apps = [
  { name: "RealSync Optimus", slug: "optimus", claim: "Digitale Echtheit mit einem Klick", description: "KI-gestutzte Content-Verifikation mit Ed25519-Signaturen und C2PA-2.3-Compliance." },
  { name: "RealSync Studio", slug: "studio", claim: "Vom Rohschnitt zum Release", description: "Professionelles Video-Editing mit KI-Schnitt, Auto-Captions und Multi-Plattform-Export." },
  { name: "RealSync Automate", slug: "automate", claim: "Deine Marketing-Pipeline auf Autopilot", description: "Marketing-Automation mit KI-Workflows, Social-Media-Scheduling und integrierten Analytics." },
  { name: "RealSync Deepfake Guard", slug: "deepfake-guard", claim: "Deepfakes stoppen, Vertrauen sichern", description: "Echtzeit-Deepfake-Erkennung mit neuronaler Analyse und Blockchain-Verifikation." },
  { name: "RealSync Chain", slug: "chain", claim: "Urheberrecht, das sich selbst beweist", description: "Blockchain-Timestamping und dezentrale Urheberrechts-Registrierung fur deine Inhalte." },
  { name: "RealSync Analytics", slug: "analytics", claim: "Alle Zahlen. Ein Dashboard.", description: "Echtzeit-Dashboards mit Cross-Plattform-Metriken und tiefen Audience-Insights." },
  { name: "RealSync Design", slug: "design", claim: "Thumbnails, die klicken", description: "KI-Design-Tools fur Thumbnails, Cover-Art und konsistente Brand-Kits." },
  { name: "RealSync Monetize", slug: "monetize", claim: "Mehr Umsatz, weniger Chaos", description: "Einnahmen-Management mit Stripe-Integration, Abo-Modellen und Creator-Payouts." },
  { name: "RealSync Outreach", slug: "outreach", claim: "Die richtige Brand zur richtigen Zeit", description: "KI-gestutztes E-Mail-Marketing und Brand-Collaboration-Management." },
  { name: "RealSync Connect", slug: "connect", claim: "Alle Plattformen. Eine API.", description: "Multi-Plattform-API-Hub fur YouTube, TikTok, Instagram und LinkedIn." },
  { name: "RealSync Planner", slug: "planner", claim: "Dein Content-Kalender mit KI", description: "Content-Kalender mit KI-Scheduling und Trend-Vorhersage." },
  { name: "RealSync Sites", slug: "sites", claim: "Landingpages in Creator-Tempo", description: "Landing-Page-Builder mit SEO-Optimierung und Custom Domains." },
  { name: "RealSync Ads", slug: "ads", claim: "Ads, die sich selbst optimieren", description: "KI-optimierte Werbekampagnen mit automatischem A/B-Testing." },
  { name: "RealSync Vault", slug: "vault", claim: "Dein Tresor fur Kreativitat", description: "Verschlusselter Cloud-Speicher mit Versionierung und Sharing." },
  { name: "RealSync AI Writer", slug: "ai-writer", claim: "Texte in Creator-Geschwindigkeit", description: "KI-Textgenerierung fur Skripte, Beschreibungen und Social-Media-Posts." },
  { name: "RealSync Clips", slug: "clips", claim: "Highlights aus jedem Longform", description: "Automatische Highlight-Clips aus Langform-Videos mit KI." },
  { name: "RealSync Mobile", slug: "mobile", claim: "Creator OS in deiner Tasche", description: "Native iOS- und Android-App mit Zugriff auf alle Tools unterwegs." },
  { name: "RealSync Audio", slug: "audio", claim: "Audio-Studio fur Creator", description: "Podcast-Produktion mit KI-Transkription, Noise-Cancelling und Distribution." },
];

const RealSyncAppHub: React.FC = () => {
  const radius = 200;

  return (
    <section className="rsd-app-hub">
      <div className="rsd-app-hub-inner">

        {/* ---- STARGATE EYE CENTER ---- */}
        <a className="rsd-center-button" href="/creator-os">
          <div className="rsd-stargate-eye">
            {/* Rotating rings */}
            <div className="rsd-ring-1" />
            <div className="rsd-ring-2" />
            <div className="rsd-ring-3" />
            {/* Iris + Pupil */}
            <div className="rsd-iris" />
            <div className="rsd-pupil" />
          </div>
          {/* Label below eye */}
          <div className="rsd-center-label">
            <div className="rsd-center-logo"><span>RealSync Dynamics</span></div>
            <span className="rsd-center-text">Gesamte Infrastruktur</span>
          </div>
        </a>

        {/* ---- APP BUTTONS ---- */}
        {apps.map((app, index) => {
          const angle = (2 * Math.PI * index) / apps.length;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <a
              key={app.slug}
              className="rsd-app-button"
              href={`/apps/${app.slug}`}
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <span className="rsd-app-name">{app.name}</span>
              <div className="rsd-app-overlay">
                <div className="rsd-app-overlay-inner">
                  <div className="rsd-app-claim">{app.claim}</div>
                  <div className="rsd-app-description">{app.description}</div>
                </div>
              </div>
            </a>
          );
        })}

      </div>
    </section>
  );
};

export default RealSyncAppHub;
