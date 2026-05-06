'use client'

export default function ConsultancySection() {
  const pillars = [
    {
      number: '01',
      title: 'Real operator experience',
      body: 'This is built from active STR operations — not theory. Every signal and recommendation comes from a framework tested on live listings in one of the most competitive short-term rental markets in the world.',
    },
    {
      number: '02',
      title: 'Strategic pricing logic',
      body: 'Floor-price discipline. Profit over occupancy. Open pricing philosophy. These are not settings to toggle — they are strategic positions that require judgment. That is what consultancy brings.',
    },
    {
      number: '03',
      title: 'Market interpretation',
      body: 'AI reads data. A real operator reads context. Geopolitical shifts, local events, seasonal anomalies, and comp-set behaviour all shape pricing decisions that no algorithm fully captures alone.',
    },
    {
      number: '04',
      title: 'Revenue architecture',
      body: 'Pricing is one layer. We also look at rate structure, length-of-stay restrictions, discount logic, and the relationship between occupancy and margin — across your whole portfolio.',
    },
  ]

  return (
    <section
      id="consultancy"
      style={{
        background: 'var(--color-dark)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(ellipse at 90% 10%, rgba(196,150,50,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
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
                Real Revenue Consultancy
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(30px, 3.5vw, 48px)',
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                color: 'white',
                margin: '0 0 24px',
              }}
            >
              This is not software. It is a revenue system built by someone who actually operates.
            </h2>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.6)',
                margin: '0 0 32px',
              }}
            >
              Generic automation tools give you charts. Oasis Revenue Lab gives you interpretation, judgment, and a clear direction. The consultancy layer is what separates intelligence from noise.
            </p>

            <div
              style={{
                padding: '20px 24px',
                background: 'rgba(196,150,50,0.08)',
                border: '1px solid rgba(196,150,50,0.2)',
                borderRadius: '10px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '19px',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.85)',
                  margin: '0 0 8px',
                  lineHeight: 1.5,
                }}
              >
                Pricing tools give you data. We give you a position.
              </p>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: 'var(--color-accent)',
                  margin: 0,
                  letterSpacing: '0.08em',
                }}
              >
                — Oasis Revenue Lab
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '12px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(196,150,50,0.25)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '12px',
                    color: 'var(--color-accent)',
                    opacity: 0.7,
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  {pillar.number}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: 'white',
                      margin: '0 0 6px',
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '13px',
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.55)',
                      margin: 0,
                    }}
                  >
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
