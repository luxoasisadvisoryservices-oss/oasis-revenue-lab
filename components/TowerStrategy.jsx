'use client'

export default function TowerStrategy() {
  const signals = [
    {
      number: '01',
      label: 'Booking pace within the tower',
      body: 'We track how fast units in your specific building are being booked — not just the area. Tower-level pace tells a different story than market-wide data.',
      color: '#4ade80',
    },
    {
      number: '02',
      label: 'Competitor pricing inside the building',
      body: 'Your closest competitors are not across town — they are two floors above you. We monitor them directly.',
      color: '#c49632',
    },
    {
      number: '03',
      label: 'Unit type comparisons',
      body: 'A 1BR pool view and a 1BR city view in the same tower have different demand curves. We price them accordingly.',
      color: '#818cf8',
    },
    {
      number: '04',
      label: 'Local demand fluctuations',
      body: 'Events, viewings, and booking surges often hit individual towers before they register at the area level. We catch them early.',
      color: '#f59e0b',
    },
  ]

  return (
    <section id="tower-strategy" style={{
      background: 'linear-gradient(180deg, #faf8f5 0%, #faf8f5 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .tower-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        .signal-card {
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .signal-card:hover {
          transform: translateX(6px);
          border-color: rgba(196,150,50,0.3) !important;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08) !important;
        }
      `}</style>

      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(196,150,50,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div className="tower-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '20px' }}>
              <div style={{ width: '5px', height: '5px', background: '#c49632', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632' }}>Tower Micro-Market Strategy</span>
            </div>

            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 20px' }}>
              Your real competition<br />is two floors above you.
            </h2>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: '#5a5248', margin: '0 0 20px' }}>
              In markets like Dubai Marina, JBR, and Downtown, properties compete directly with other listings inside the same building. Generic area-based pricing misses this entirely.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: '#5a5248', margin: '0 0 36px' }}>
              Oasis Revenue Lab applies a <strong style={{ fontWeight: 600, color: '#1a1a1a' }}>tower-level revenue strategy</strong> — analysing demand and pricing trends within your specific building, not just your neighbourhood.
            </p>

            <div style={{
              padding: '20px 24px',
              background: 'white',
              border: '1px solid #e8dfd0',
              borderRadius: '14px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #c49632, transparent)' }} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8a8076', margin: '0 0 12px' }}>Markets we operate in directly</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['JBR — Murjan', 'JBR — Rimal', 'Dubai Marina', 'Downtown Dubai', 'Business Bay', 'Palm Jumeirah'].map((area) => (
                  <span
                    key={area}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      padding: '5px 12px',
                      background: '#f4f0e8',
                      border: '1px solid #d5c5aa',
                      borderRadius: '20px',
                      color: '#5a5248',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#ede8df'; e.currentTarget.style.borderColor = '#c49632'; e.currentTarget.style.color = '#1a1a1a' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#f4f0e8'; e.currentTarget.style.borderColor = '#d5c5aa'; e.currentTarget.style.color = '#5a5248' }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {signals.map((signal) => (
              <div
                key={signal.label}
                className="signal-card"
                style={{
                  display: 'flex', gap: '20px',
                  padding: '20px 22px',
                  background: 'white',
                  border: '1px solid #e8dfd0',
                  borderRadius: '14px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: `linear-gradient(180deg, ${signal.color}, transparent)` }} />
                <div style={{ flexShrink: 0 }}>
                  <span style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '24px',
                    fontWeight: 300,
                    color: signal.color,
                    opacity: 0.7,
                    lineHeight: 1,
                  }}>{signal.number}</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 5px' }}>{signal.label}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>{signal.body}</p>
                </div>
              </div>
            ))}

            <div style={{
              padding: '18px 22px',
              background: 'linear-gradient(135deg, #0d1520, #1a2535)',
              borderRadius: '14px',
              display: 'flex', alignItems: 'center', gap: '12px',
              border: '1px solid rgba(196,150,50,0.15)',
              boxShadow: '0 8px 24px rgba(13,21,32,0.12)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>
                Tower-level intelligence consistently outperforms generic area-based pricing — particularly in high-density towers like JBR and Marina.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
