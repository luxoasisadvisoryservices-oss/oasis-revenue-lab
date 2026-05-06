'use client'

export default function TowerStrategy() {
  const signals = [
    {
      label: 'Booking pace within the tower',
      body: 'We track how fast units in your specific building are being booked — not just the area. Tower-level pace tells a different story than market-wide data.',
    },
    {
      label: 'Competitor pricing inside the building',
      body: 'Your closest competitors are not across town — they are two floors above you. We monitor them directly.',
    },
    {
      label: 'Unit type comparisons',
      body: 'A 1BR pool view and a 1BR city view in the same tower have different demand curves. We price them accordingly.',
    },
    {
      label: 'Local demand fluctuations',
      body: 'Events, viewings, and booking surges often hit individual towers before they register at the area level. We catch them early.',
    },
  ]

  return (
    <section
      id="tower-strategy"
      style={{
        background: 'var(--color-bg)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '40%',
          height: '100%',
          backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(196,150,50,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '72px',
            alignItems: 'start',
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: copy */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }} />
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                }}
              >
                Tower Micro-Market Strategy
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(30px, 3.5vw, 50px)',
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
                margin: '0 0 20px',
              }}
            >
              Your real competition is two floors above you.
            </h2>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
                margin: '0 0 20px',
              }}
            >
              In markets like Dubai Marina, JBR, and Downtown, properties compete directly with other listings inside the same building. Generic area-based pricing misses this entirely.
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'var(--color-text-secondary)',
                margin: '0 0 36px',
              }}
            >
              Oasis Revenue Lab applies a <strong style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>tower-level revenue strategy</strong> — analysing demand and pricing trends within your specific building, not just your neighbourhood. This granularity consistently generates stronger results.
            </p>

            {/* Towers we know */}
            <div
              style={{
                padding: '20px 24px',
                background: 'var(--color-surface-muted)',
                border: '1px solid var(--color-border)',
                borderRadius: '10px',
              }}
            >
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-muted)',
                  margin: '0 0 12px',
                }}
              >
                Markets we operate in directly
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['JBR — Murjan', 'JBR — Rimal', 'Dubai Marina', 'Downtown Dubai', 'Business Bay', 'Palm Jumeirah'].map(
                  (area) => (
                    <span
                      key={area}
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        padding: '5px 12px',
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border-strong)',
                        borderRadius: '20px',
                        color: 'var(--color-text-secondary)',
                      }}
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right: signals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {signals.map((signal, i) => (
              <div
                key={signal.label}
                style={{
                  display: 'flex',
                  gap: '16px',
                  padding: '22px 24px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    background: 'var(--color-surface-muted)',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: 'var(--color-accent)',
                    fontWeight: 500,
                    marginTop: '2px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      margin: '0 0 5px',
                    }}
                  >
                    {signal.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: 'var(--color-text-secondary)',
                      margin: 0,
                    }}
                  >
                    {signal.body}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom callout */}
            <div
              style={{
                padding: '18px 22px',
                background: 'var(--color-dark)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" style={{ flexShrink: 0 }}>
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)',
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                This micro-market approach consistently outperforms generic area-based pricing — particularly in high-density towers like JBR and Marina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
