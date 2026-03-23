// components/RealSyncAppHub.tsx
import React, { useState } from "react";
import "../styles/RealSyncAppHub.css";

const apps = [
  { name: "RealSync Optimus", slug: "optimus", claim: "Digitale Echtheit mit einem Klick", description: "KI-gestützte Verifikation deiner Inhalte.", icon: "🔐" },
  { name: "RealSync Studio", slug: "studio", claim: "Vom Rohschnitt zum Release", description: "Dein All-in-One Editing-Studio.", icon: "🎬" },
  { name: "RealSync Automate", slug: "automate", claim: "Deine Marketing-Pipeline auf Autopilot", description: "Automatisierte Workflows für Creator.", icon: "⚡" },
  { name: "RealSync Deepfake Guard", slug: "deepfake-guard", claim: "Deepfakes stoppen, Vertrauen stärken", description: "KI-Detektion für manipulierte Medien.", icon: "🛡️" },
  { name: "RealSync Chain", slug: "chain", claim: "Urheberrecht, das sich selbst beweist", description: "Blockchain-Zertifikate für deine Werke.", icon: "⛓️" },
  { name: "RealSync Analytics", slug: "analytics", claim: "Alle Zahlen. Ein Dashboard.", description: "Creator-Performance auf einen Blick.", icon: "📊" },
  { name: "RealSync Design", slug: "design", claim: "Thumbnails, die klicken", description: "KI-Design für maximale CTR.", icon: "🎨" },
  { name: "RealSync Monetize", slug: "monetize", claim: "Mehr Umsatz, weniger Chaos", description: "Monetarisierung leicht gemacht.", icon: "💰" },
  { name: "RealSync Outreach", slug: "outreach", claim: "Die richtige Brand zur richtigen Zeit", description: "Automatisiertes Brand-Partnering.", icon: "🤝" },
  { name: "RealSync Clips", slug: "clips", claim: "Shorts die viral gehen", description: "Auto-Clip-Generator aus Longform.", icon: "✂️" },
  { name: "RealSync Mobile", slug: "mobile", claim: "Creator-Power in deiner Tasche", description: "Vollständige Mobile-App für unterwegs.", icon: "📱" },
  { name: "RealSync Audio", slug: "audio", claim: "Sound der überzeugt", description: "KI-Audiomaster für Podcasts & Videos.", icon: "🎵" },
  { name: "RealSync Planner", slug: "planner", claim: "Nie wieder Content-Lücken", description: "Intelligenter Content-Kalender.", icon: "📅" },
  { name: "RealSync Connect", slug: "connect", claim: "Deine Community, deine Regeln", description: "Community-Hub für Creator.", icon: "🌐" },
  { name: "RealSync Sites", slug: "sites", claim: "Deine Creator-Website in Minuten", description: "KI-Website-Builder für Creator.", icon: "🌍" },
];

const ORBIT_POSITIONS = [
  { angle: -60, radius: 340 }, { angle: -30, radius: 300 }, { angle: 0, radius: 320 },
  { angle: 30, radius: 300 }, { angle: 60, radius: 340 }, { angle: 90, radius: 360 },
  { angle: 120, radius: 340 }, { angle: 150, radius: 300 }, { angle: 180, radius: 320 },
  { angle: 210, radius: 300 }, { angle: 240, radius: 340 }, { angle: 270, radius: 360 },
  { angle: 300, radius: 340 }, { angle: 330, radius: 300 }, { angle: 350, radius: 320 },
];

type Message = { role: 'user' | 'assistant'; text: string };

export default function RealSyncAppHub() {
  const [activeApp, setActiveApp] = useState<typeof apps[0] | null>(null);
  const [agentOpen, setAgentOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Hallo! Ich bin dein RealSync AI Agent. Welche App möchtest du erkunden oder womit kann ich dir helfen?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer pplx-placeholder' },
        body: JSON.stringify({
          model: 'sonar',
          messages: [
            { role: 'system', content: 'Du bist der RealSync AI Agent. Du hilfst Creatorn, die RealSync Creator OS Apps zu nutzen. Antworte auf Deutsch, kurz und hilfreich.' },
            ...messages.map(m => ({ role: m.role, content: m.text })),
            { role: 'user', content: input }
          ]
        })
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || 'Ich konnte keine Antwort generieren.';
      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: 'Verbindungsfehler. Bitte versuche es erneut.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="hub-wrapper">
      <div className="hub-container">
        {/* Stargate Eye Center */}
        <div className="stargate-center" onClick={() => setAgentOpen(true)} title="RealSync AI Agent öffnen">
          <div className="stargate-ring ring-1"></div>
          <div className="stargate-ring ring-2"></div>
          <div className="stargate-ring ring-3"></div>
          <div className="stargate-ring ring-4"></div>
          <div className="stargate-eye">
            <div className="eye-iris">
              <div className="eye-pupil">
                <div className="eye-glow"></div>
              </div>
            </div>
          </div>
          <div className="stargate-label">AI Agent</div>
        </div>

        {/* App Nodes */}
        {apps.map((app, i) => {
          const pos = ORBIT_POSITIONS[i % ORBIT_POSITIONS.length];
          const rad = (pos.angle * Math.PI) / 180;
          const x = Math.cos(rad) * pos.radius;
          const y = Math.sin(rad) * pos.radius;
          return (
            <button
              key={app.slug}
              className={`app-node ${activeApp?.slug === app.slug ? 'active' : ''}`}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              onClick={() => setActiveApp(activeApp?.slug === app.slug ? null : app)}
              aria-label={app.name}
            >
              <span className="app-node-icon">{app.icon}</span>
              <span className="app-node-name">{app.name.replace('RealSync ', '')}</span>
            </button>
          );
        })}
      </div>

      {/* App Detail Card */}
      {activeApp && (
        <div className="app-detail-card">
          <span className="app-detail-icon">{activeApp.icon}</span>
          <h2>{activeApp.name}</h2>
          <p className="app-claim">{activeApp.claim}</p>
          <p className="app-desc">{activeApp.description}</p>
          <div className="app-detail-actions">
            <a href={`/apps/${activeApp.slug}`} className="btn-primary">App öffnen</a>
            <button className="btn-secondary" onClick={() => setActiveApp(null)}>Schließen</button>
          </div>
        </div>
      )}

      {/* Perplexity AI Agent Chat */}
      {agentOpen && (
        <div className="agent-panel" role="dialog" aria-label="RealSync AI Agent">
          <div className="agent-header">
            <span className="agent-logo">🤖</span>
            <span>RealSync AI Agent</span>
            <button className="agent-close" onClick={() => setAgentOpen(false)} aria-label="Schließen">✕</button>
          </div>
          <div className="agent-messages">
            {messages.map((m, i) => (
              <div key={i} className={`agent-msg ${m.role}`}>
                <span>{m.text}</span>
              </div>
            ))}
            {loading && <div className="agent-msg assistant"><span>...</span></div>}
          </div>
          <div className="agent-input-row">
            <input
              className="agent-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Frag den AI Agent..."
              aria-label="Nachricht eingeben"
            />
            <button className="agent-send" onClick={sendMessage} aria-label="Senden">➤</button>
          </div>
        </div>
      )}
    </div>
  );
}
