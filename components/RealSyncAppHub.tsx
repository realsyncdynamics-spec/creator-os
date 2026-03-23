'use client';
import React, { useState } from "react";
import "../styles/RealSyncAppHub.css";

interface App {
  name: string;
  slug: string;
  claim: string;
  description: string;
  icon: string;
  url: string;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const DOMAIN = 'realsyncdynamics.com';

const apps: App[] = [
  { name: "RealSync Optimus", slug: "optimus", claim: "Digitale Echtheit mit einem Klick", description: "KI-gest\u00fctzte Verifikation deiner Inhalte.", icon: "\ud83d\udd10", url: 'https://optimus.' + DOMAIN },
  { name: "RealSync Studio", slug: "studio", claim: "Vom Rohschnitt zum Release", description: "Dein All-in-One Editing-Studio.", icon: "\ud83c\udfac", url: 'https://studio.' + DOMAIN },
  { name: "RealSync Automate", slug: "automate", claim: "Deine Marketing-Pipeline auf Autopilot", description: "Automatisierte Workflows f\u00fcr Creator.", icon: "\u26a1", url: 'https://automate.' + DOMAIN },
  { name: "RealSync Deepfake Guard", slug: "deepfake-guard", claim: "Deepfakes stoppen", description: "KI-Detektion f\u00fcr manipulierte Medien.", icon: "\ud83d\udee1\ufe0f", url: 'https://deepfake-guard.' + DOMAIN },
  { name: "RealSync Chain", slug: "chain", claim: "Urheberrecht beweist sich selbst", description: "Blockchain-Zertifikate f\u00fcr deine Werke.", icon: "\u26d3\ufe0f", url: 'https://chain.' + DOMAIN },
  { name: "RealSync Analytics", slug: "analytics", claim: "Alle Zahlen. Ein Dashboard.", description: "Creator-Performance auf einen Blick.", icon: "\ud83d\udcca", url: 'https://analytics.' + DOMAIN },
  { name: "RealSync Design", slug: "design", claim: "Thumbnails, die klicken", description: "KI-Design f\u00fcr maximale CTR.", icon: "\ud83c\udfa8", url: 'https://design.' + DOMAIN },
  { name: "RealSync Monetize", slug: "monetize", claim: "Mehr Umsatz, weniger Chaos", description: "Monetarisierung leicht gemacht.", icon: "\ud83d\udcb0", url: 'https://monetize.' + DOMAIN },
  { name: "RealSync Outreach", slug: "outreach", claim: "Die richtige Brand zur richtigen Zeit", description: "Automatisiertes Brand-Partnering.", icon: "\ud83e\udd1d", url: 'https://outreach.' + DOMAIN },
  { name: "RealSync Clips", slug: "clips", claim: "Shorts die viral gehen", description: "Auto-Clip-Generator aus Longform.", icon: "\u2702\ufe0f", url: 'https://clips.' + DOMAIN },
  { name: "RealSync Mobile", slug: "mobile", claim: "Creator-Power in deiner Tasche", description: "Mobile-App f\u00fcr unterwegs.", icon: "\ud83d\udcf1", url: 'https://mobile.' + DOMAIN },
  { name: "RealSync Audio", slug: "audio", claim: "Sound der \u00fcberzeugt", description: "KI-Audiomaster f\u00fcr Podcasts & Videos.", icon: "\ud83c\udfb5", url: 'https://audio.' + DOMAIN },
  { name: "RealSync Planner", slug: "planner", claim: "Nie wieder Content-L\u00fccken", description: "Intelligenter Content-Kalender.", icon: "\ud83d\udcc5", url: 'https://planner.' + DOMAIN },
  { name: "RealSync Connect", slug: "connect", claim: "Deine Community, deine Regeln", description: "Community-Hub f\u00fcr Creator.", icon: "\ud83c\udf10", url: 'https://connect.' + DOMAIN },
  { name: "RealSync Sites", slug: "sites", claim: "Creator-Website in Minuten", description: "KI-Website-Builder f\u00fcr Creator.", icon: "\ud83c\udf0d", url: 'https://sites.' + DOMAIN },
];

const ORBIT_POSITIONS = [
  { angle: -60, radius: 340 }, { angle: -30, radius: 300 }, { angle: 0, radius: 320 },
  { angle: 30, radius: 300 }, { angle: 60, radius: 340 }, { angle: 90, radius: 360 },
  { angle: 120, radius: 340 }, { angle: 150, radius: 300 }, { angle: 180, radius: 320 },
  { angle: 210, radius: 300 }, { angle: 240, radius: 340 }, { angle: 270, radius: 360 },
  { angle: 300, radius: 340 }, { angle: 330, radius: 300 }, { angle: 350, radius: 320 },
];

export default function RealSyncAppHub() {
  const [activeApp, setActiveApp] = useState<App | null>(null);
  const [agentOpen, setAgentOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: 'Hallo! Ich bin dein RealSync AI Agent. Welche App m\u00f6chtest du erkunden?' }
  ]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', text: input };
    setMessages(function(prev) { return [...prev, userMsg]; });
    const currentInput = input;
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer pplx-placeholder' },
        body: JSON.stringify({
          model: 'sonar',
          messages: [
            { role: 'system', content: 'Du bist der RealSync AI Agent. Antworte auf Deutsch, kurz und hilfreich.' },
            ...messages.map(function(m) { return { role: m.role, content: m.text }; }),
            { role: 'user', content: currentInput }
          ]
        })
      });
      const data = await res.json();
      const reply: string = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) ? data.choices[0].message.content : 'Keine Antwort.';
      setMessages(function(prev) { return [...prev, { role: 'assistant', text: reply }]; });
    } catch (_err) {
      setMessages(function(prev) { return [...prev, { role: 'assistant', text: 'Verbindungsfehler.' }]; });
    }
    setLoading(false);
  };

  return (
    <div className="hub-wrapper">
      <div className="hub-container">
        <div className="stargate-center" onClick={function() { setAgentOpen(true); }} title="RealSync AI Agent">
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

        {apps.map(function(app, i) {
          const pos = ORBIT_POSITIONS[i % ORBIT_POSITIONS.length];
          const rad = (pos.angle * Math.PI) / 180;
          const x = Math.cos(rad) * pos.radius;
          const y = Math.sin(rad) * pos.radius;
          const isActive = activeApp !== null && activeApp.slug === app.slug;
          return (
            <a
              key={app.slug}
              className={isActive ? 'app-node active' : 'app-node'}
              style={{ transform: 'translate(' + x + 'px, ' + y + 'px)' }}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={function(e) { e.preventDefault(); setActiveApp(isActive ? null : app); }}
              aria-label={app.name}
            >
              <span className="app-node-icon">{app.icon}</span>
              <span className="app-node-name">{app.name.replace('RealSync ', '')}</span>
            </a>
          );
        })}
      </div>

      {activeApp !== null && (
        <div className="app-detail-card">
          <span className="app-detail-icon">{activeApp.icon}</span>
          <h2>{activeApp.name}</h2>
          <p className="app-claim">{activeApp.claim}</p>
          <p className="app-desc">{activeApp.description}</p>
          <div className="app-detail-actions">
            <a href={activeApp.url} target="_blank" rel="noopener noreferrer" className="btn-primary">App \u00f6ffnen</a>
            <button className="btn-secondary" onClick={function() { setActiveApp(null); }}>Schlie\u00dfen</button>
          </div>
        </div>
      )}

      {agentOpen && (
        <div className="agent-panel" role="dialog" aria-label="RealSync AI Agent">
          <div className="agent-header">
            <span className="agent-logo">\ud83e\udd16</span>
            <span>RealSync AI Agent</span>
            <button className="agent-close" onClick={function() { setAgentOpen(false); }}>\u2715</button>
          </div>
          <div className="agent-messages">
            {messages.map(function(m, i) {
              return (
                <div key={i} className={'agent-msg ' + m.role}>
                  <span>{m.text}</span>
                </div>
              );
            })}
            {loading && <div className="agent-msg assistant"><span>...</span></div>}
          </div>
          <div className="agent-input-row">
            <input
              className="agent-input"
              value={input}
              onChange={function(e) { setInput(e.target.value); }}
              onKeyDown={function(e: React.KeyboardEvent<HTMLInputElement>) { if (e.key === 'Enter') { sendMessage(); } }}
              placeholder="Frag den AI Agent..."
            />
            <button className="agent-send" onClick={sendMessage}>\u27a4</button>
          </div>
        </div>
      )}
    </div>
  );
}
