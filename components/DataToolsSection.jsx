'use client'

const tools = [
  {
    name: 'PriceLabs',
    badge: 'Expert Ecosystem',
    description: 'Pricing engine, market data, and neighbourhood intelligence. We configure and manage PriceLabs strategies daily on live portfolios.',
    status: 'Live',
    color: '#4ade80',
    icon: '📊',
  },
  {
    name: 'Hostaway',
    badge: 'Live integration',
    description: 'PMS and booking data pipeline. Booking outcomes are tracked automatically via Hostaway — no manual input from clients.',
    status: 'Live',
    color: '#4ade80',
    icon: '🏨',
  },
  {
    name: 'Airbtics',
    badge: 'Market intelligence',
    description: 'Forward pacing data and Dubai neighbourhood market IDs. Used to surface demand signals ahead of the booking window.',
    status: 'Active',
    color: '#4ade80',
    icon: '📈',
  },
  {
    name: 'Brave Search',
    badge: 'Market context',
    description: 'Real-time web intelligence for events, news, and demand signals that affect Dubai STR pricing but do not appear in booking data.',
    status: 'Active',
    color: '#4ade80',
    icon: '🔍',
  },
  {
    name: 'Anthropic Claude',
    badge: 'AI engine',
    description: 'The intelligence layer that synthesises all data sources into clear, actionable daily briefings. Not a chatbot — a revenue reasoning engine.',
    status: 'Live',
    color: '#818cf8',
    icon: '🧠',
  },
  {
    name: 'Telegram',
    badge: 'Delivery channel',
    description: 'Daily briefings delivered directly to your phone at 9:45am GST. No dashboards to log into. No apps to install. Just a message.',
    status: 'Live',
    color: '#4ade80',
    icon: '💬',
  },
]

export default function DataToolsSection() {
  return (
    <section id="data-tools" style={{
      background: 'linear-gradient(180deg, #faf8f5 0%, #faf8f5 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .tools-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
        .tool-card {
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.1) !important;
          border-color: rgba(196,150,50,0.3) !important;
        }
      `}</style>

      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(196,150,50,0.04) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(60px)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ maxWidth: '600px', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '20px' }}>
            <div style={{ width: '5px', height: '5px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632' }}>How We Build Intelligence</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 16px' }}>
            Real data sources.<br />No black box.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: '#5a5248', margin: 0 }}>
            Every signal in the daily briefing comes from a real data source. These are the tools live in production today — on our own listings and initial client accounts.
          </p>
        </div>

        <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="tool-card"
              style={{
                background: 'white',
                border: '1px solid #e8dfd0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${tool.color}50, transparent)` }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px',
                    background: `${tool.color}12`,
                    border: `1px solid ${tool.color}25`,
                    borderRadius: '9px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px',
                  }}>
                    {tool.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 2px' }}>{tool.name}</p>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#c49632', fontWeight: 500 }}>{tool.badge}</span>
                  </div>
                </div>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '10px', fontWeight: 600,
                  padding: '3px 10px',
                  background: `${tool.color}12`,
                  border: `1px solid ${tool.color}25`,
                  borderRadius: '20px',
                  color: tool.color,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  {tool.status}
                </span>
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>{tool.description}</p>
            </div>
          ))}
        </div>

        <div style={{
          padding: '18px 24px',
          background: '#f4f0e8',
          border: '1px solid #d5c5aa',
          borderRadius: '10px',
          display: 'flex', alignItems: 'flex-start', gap: '12px',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a8076" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: '1px' }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, color: '#5a5248', margin: 0, lineHeight: 1.65 }}>
            <strong style={{ fontWeight: 500, color: '#1a1a1a' }}>Transparency note:</strong> These are the tools live in production today. Integration depth varies by client setup. We never overclaim connectivity — we deliver intelligence from what is available and clearly communicate what is missing.
          </p>
        </div>

      </div>
    </section>
  )
}
