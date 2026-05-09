'use client'

export default function DataToolsSection() {
  const tools = [
    {
      name: 'PriceLabs',
      badge: 'Expert Ecosystem',
      description: 'Pricing engine, market data, and neighbourhood intelligence. We configure and manage PriceLabs strategies daily on live portfolios.',
      status: 'Live',
      statusColor: '#4ade80',
    },
    {
      name: 'Hostaway',
      badge: 'Live integration',
      description: 'PMS and booking data pipeline. Booking outcomes are tracked automatically via Hostaway — no manual input from clients.',
      status: 'Live',
      statusColor: '#4ade80',
    },
    {
      name: 'Airbtics',
      badge: 'Market intelligence',
      description: 'Forward pacing data and Dubai neighbourhood market IDs. Used to surface demand signals ahead of the booking window.',
      status: 'Active',
      statusColor: '#4ade80',
    },
    {
      name: 'Brave Search',
      badge: 'Market context',
      description: 'Real-time web intelligence for events, news, and demand signals that affect Dubai STR pricing but do not appear in booking data.',
      status: 'Active',
      statusColor: '#4ade80',
    },
    {
      name: 'Anthropic Claude',
      badge: 'AI engine',
      description: 'The intelligence layer that synthesises all data sources into clear, actionable daily briefings. Not a chatbot — a revenue reasoning engine.',
      status: 'Live',
      statusColor: '#4ade80',
    },
    {
      name: 'Telegram',
      badge: 'Delivery channel',
      description: 'Daily briefings delivered directly to your phone at 9:45am GST. No dashboards to log into. No apps to install. Just a message.',
      status: 'Live',
      statusColor: '#4ade80',
    },
  ]

  return (
    <section id="data-tools" style={{ background: '#faf8f5', padding: '100px 0' }}>
      <style>{`
        @media (max-width: 768px) {
          .tools-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ maxWidth: '600px', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>How We Build Intelligence</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 16px' }}>
            Real data sources. No black box.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            Every signal in the daily briefing comes from a real data source. We tell you what we use, why we use it, and what it tells us. These are the tools live in production today.
          </p>
        </div>

        <div className="tools-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {tools.map((tool) => (
            <div
              key={tool.name}
              style={{ background: 'white', border: '1px solid #e8dfd0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#d5c5aa'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e8dfd0'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 2px' }}>{tool.name}</p>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#c49632', fontWeight: 500 }}>{tool.badge}</span>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, padding: '4px 10px', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '20px', color: tool.statusColor, whiteSpace: 'nowrap' }}>
                  {tool.status}
                </span>
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>{tool.description}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: '20px 24px', background: '#f4f0e8', border: '1px solid #d5c5aa', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a8076" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: '2px' }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, color: '#5a5248', margin: 0, lineHeight: 1.65 }}>
            <strong style={{ fontWeight: 500, color: '#1a1a1a' }}>Transparency note:</strong> These are the tools live in production today on our own listings and initial client accounts. Integration depth varies by client setup. We never overclaim connectivity — we deliver intelligence from what is available and clearly communicate what is missing.
          </p>
        </div>

      </div>
    </section>
  )
}
