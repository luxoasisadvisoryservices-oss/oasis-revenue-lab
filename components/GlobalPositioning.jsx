'use client'

export default function GlobalPositioning() {
  const markets = [
    { city: 'Dubai', region: 'UAE', status: 'Live', note: 'Home market — JBR, Downtown, Business Bay' },
    { city: 'Abu Dhabi', region: 'UAE', status: 'Expanding', note: 'GCC regional expansion' },
    { city: 'Riyadh / KSA', region: 'Saudi Arabia', status: 'On Horizon', note: 'High-growth STR market' },
    { city: 'European Markets', region: 'EU / UK', status: 'Planned', note: 'Scalable product architecture' },
  ]

  return (
    <section
      id="global"
      style={{
        background: 'var(--color-dark)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 10% 80%, rgba(196,150,50,0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 20%, rgba(196,150,50,0.04) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left */}
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
                Global Positioning
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(30px, 3.5vw, 50px)',
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'white',
                margin: '0 0 24px',
              }}
            >
              Built from real Dubai operations. Designed for wider markets.
            </h2>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.6)',
                margin: '0 0 20px',
              }}
            >
              Dubai's short-term rental market is high-pressure, high-competition, and heavily data-driven. Building and operating here creates a system resilient enough to work anywhere.
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.6)',
                margin: '0 0 36px',
              }}
            >
              The AI Revenue Agent is built on a productized architecture—designed to onboard operators across markets without rebuilding from scratch.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { value: 'Dubai', label: 'Home market' },
                { value: 'GCC', label: 'Regional expansion path' },
                { value: 'Global', label: 'Product architecture' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      fontSize: '28px',
                      fontWeight: 500,
                      color: 'var(--color-accent)',
                      margin: '0 0 4px',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.4)',
                      margin: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: market list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {markets.map((market, i) => (
              <div
                key={market.city}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  background: i === 0 ? 'rgba(196,150,50,0.08)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${i === 0 ? 'rgba(196,150,50,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: '12px',
                  gap: '16px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = i === 0 ? 'rgba(196,150,50,0.08)' : 'rgba(255,255,255,0.03)')
                }
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: 'white',
                      margin: '0 0 3px',
                    }}
                  >
                    {market.city}
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.4)',
                        marginLeft: '8px',
                        fontWeight: 400,
                      }}
                    >
                      {market.region}
                    </span>
                  </p>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.4)',
                      margin: 0,
                    }}
                  >
                    {market.note}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 500,
                    padding: '4px 10px',
                    borderRadius: '20px',
                    whiteSpace: 'nowrap',
                    background:
                      market.status === 'Live'
                        ? 'rgba(74,222,128,0.1)'
                        : market.status === 'Expanding'
                        ? 'rgba(196,150,50,0.12)'
                        : 'rgba(255,255,255,0.06)',
                    color:
                      market.status === 'Live'
                        ? '#4ade80'
                        : market.status === 'Expanding'
                        ? 'var(--color-accent)'
                        : 'rgba(255,255,255,0.4)',
                    border: `1px solid ${
                      market.status === 'Live'
                        ? 'rgba(74,222,128,0.2)'
                        : market.status === 'Expanding'
                        ? 'rgba(196,150,50,0.25)'
                        : 'rgba(255,255,255,0.1)'
                    }`,
                  }}
                >
                  {market.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
