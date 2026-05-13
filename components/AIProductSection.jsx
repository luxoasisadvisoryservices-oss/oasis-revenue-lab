'use client'

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Daily Monitoring',
    description: 'Every listing reviewed automatically each morning. Pricing health, occupancy risk, booking pace, and floor exposure — checked before your coffee.',
    color: '#4ade80',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Demand Signals',
    description: 'Booking window trends, market pickup velocity, and seasonal demand — surfaced before your competitors react.',
    color: '#c49632',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Pricing Alerts',
    description: 'Floor price hit too frequently? Demand spiking? Rate structure exposed? Clear actionable alerts — before it costs you revenue.',
    color: '#f59e0b',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Revenue Intelligence',
    description: 'ADR trajectory, RevPAR performance, and where revenue is being left on the table — across every listing in your portfolio.',
    color: '#818cf8',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Portfolio Visibility',
    description: 'Multiple listings synthesised into one daily briefing. No context switching. No missed signals. Full portfolio awareness in one message.',
    color: '#4ade80',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Floor Price Protection',
    description: 'Hardcoded floor logic in every recommendation. The agent never suggests a price below your minimum — protecting profitability automatically.',
    color: '#c49632',
  },
]

export default function AIProductSection() {
  const openWA = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I would like to learn more about the AI Revenue Agent')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  return (
    <section id="features" style={{
      background: 'linear-gradient(180deg, #111820 0%, #faf8f5 6%)',
      padding: '100px 0 80px',
      position: 'relative',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
        .feature-card {
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.1) !important;
          border-color: rgba(196,150,50,0.3) !important;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ maxWidth: '640px', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '20px' }}>
            <div style={{ width: '5px', height: '5px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632' }}>The AI Revenue Agent</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 20px' }}>
            Intelligence that works<br />while you sleep.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: '#5a5248', margin: 0, maxWidth: '520px' }}>
            The AI Revenue Agent runs every morning — monitoring listings, reading signals, and delivering clear recommendations directly to your Telegram. No dashboards. No manual checking. Just decisions made easier.
          </p>
        </div>

        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card"
              style={{
                background: 'white',
                border: '1px solid #e8dfd0',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${feature.color}40, transparent)` }} />
              <div style={{
                width: '42px', height: '42px',
                background: `${feature.color}12`,
                border: `1px solid ${feature.color}25`,
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px',
                color: feature.color,
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 8px' }}>{feature.title}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={{
          padding: '24px 28px',
          background: 'linear-gradient(135deg, #0d1520, #1a2535)',
          borderRadius: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '16px',
          border: '1px solid rgba(196,150,50,0.15)',
          boxShadow: '0 8px 32px rgba(13,21,32,0.12)',
        }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.6)', margin: 0, maxWidth: '560px', lineHeight: 1.6 }}>
            Delivered via Telegram every morning at 9:45am GST. The agent never changes your prices — intelligence and recommendations only.
          </p>
          <button
            onClick={openWA}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '11px 22px',
              background: 'linear-gradient(135deg, #c49632, #a87d22)',
              color: 'white', borderRadius: '8px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
              border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              boxShadow: '0 4px 16px rgba(196,150,50,0.3)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,150,50,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(196,150,50,0.3)' }}
          >
            Learn More About the Agent
          </button>
        </div>
      </div>
    </section>
  )
}
