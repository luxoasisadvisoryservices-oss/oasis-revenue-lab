'use client'

export default function HybridSection() {
  const tiers = [
    {
      id: 'ai',
      label: 'AI-Only',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v3M21 21l-6-6m0 0l6-6m-6 6H9" />
        </svg>
      ),
      description: 'Daily AI-powered briefings and pricing recommendations delivered to your Telegram or Slack. You make the final call.',
      includes: [
        'Daily intelligence briefing',
        'Floor price monitoring',
        'Demand signal alerts',
        'Booking pace analysis',
        'Portfolio health overview',
      ],
      best: 'Best for: operators who understand pricing and want automated intelligence.',
      accent: false,
    },
    {
      id: 'hybrid',
      label: 'Hybrid',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: 'AI monitoring combined with direct consultancy access. The full revenue management experience—productized and scalable.',
      includes: [
        'Everything in AI-Only',
        'Direct advisory access',
        'Strategic pricing reviews',
        'Revenue architecture support',
        'Market interpretation calls',
        'Monthly performance review',
      ],
      best: 'Best for: operators who want AI efficiency and human judgment working together.',
      accent: true,
    },
    {
      id: 'consultancy',
      label: 'Consultancy',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      description: 'Strategic revenue consulting without the AI agent. Direct access to real operator expertise for pricing structure, strategy, and portfolio decisions.',
      includes: [
        'Pricing structure review',
        'Revenue strategy sessions',
        'Floor price architecture',
        'Rate structure analysis',
        'Market positioning advice',
      ],
      best: 'Best for: operators who already have data tools and need strategic guidance.',
      accent: false,
    },
  ]

  return (
    <section
      id="hybrid"
      style={{
        background: 'var(--color-surface-muted)',
        padding: '100px 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 64px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
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
              How It Works
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              margin: '0 0 16px',
            }}
          >
            AI + real expertise. Choose the combination that fits.
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'var(--color-text-secondary)',
              margin: 0,
            }}
          >
            Every operator is different. You can start with AI-only and upgrade over time, or come in at the hybrid level from day one.
          </p>
        </div>

        {/* Tier cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {tiers.map((tier) => (
            <div
              key={tier.id}
              style={{
                background: tier.accent ? 'var(--color-dark)' : 'var(--color-surface)',
                border: `1.5px solid ${tier.accent ? 'rgba(196,150,50,0.3)' : 'var(--color-border)'}`,
                borderRadius: '14px',
                padding: '32px',
                boxShadow: tier.accent
                  ? '0 8px 32px rgba(13,21,32,0.12)'
                  : 'var(--shadow-card)',
                position: 'relative',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = tier.accent
                  ? '0 16px 48px rgba(13,21,32,0.18)'
                  : 'var(--shadow-card-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = tier.accent
                  ? '0 8px 32px rgba(13,21,32,0.12)'
                  : 'var(--shadow-card)'
              }}
            >
              {tier.accent && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '24px',
                    background: 'var(--color-accent)',
                    padding: '4px 12px',
                    borderRadius: '0 0 8px 8px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'white',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Recommended
                </div>
              )}

              <div
                style={{
                  color: tier.accent ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  marginBottom: '16px',
                }}
              >
                {tier.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '24px',
                  fontWeight: 500,
                  color: tier.accent ? 'white' : 'var(--color-text-primary)',
                  margin: '0 0 10px',
                }}
              >
                {tier.label}
              </h3>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: tier.accent ? 'rgba(255,255,255,0.65)' : 'var(--color-text-secondary)',
                  margin: '0 0 24px',
                }}
              >
                {tier.description}
              </p>

              <ul style={{ listStyle: 'none', margin: '0 0 24px', padding: 0 }}>
                {tier.includes.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      marginBottom: '8px',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={tier.accent ? 'var(--color-accent)' : 'var(--color-accent)'}
                      strokeWidth="2.5"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        color: tier.accent ? 'rgba(255,255,255,0.75)' : 'var(--color-text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: tier.accent ? 'rgba(255,255,255,0.4)' : 'var(--color-text-muted)',
                  margin: '0 0 20px',
                  fontStyle: 'italic',
                }}
              >
                {tier.best}
              </p>

              <a
                href="https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Oasis%20Revenue%20Lab"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '11px 0',
                  borderRadius: '8px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  background: tier.accent ? 'var(--color-accent)' : 'transparent',
                  color: tier.accent ? 'white' : 'var(--color-text-primary)',
                  border: tier.accent ? 'none' : '1.5px solid var(--color-border-strong)',
                }}
                onMouseEnter={(e) => {
                  if (tier.accent) {
                    e.currentTarget.style.background = 'var(--color-accent-hover)'
                  } else {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.color = 'var(--color-accent)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (tier.accent) {
                    e.currentTarget.style.background = 'var(--color-accent)'
                  } else {
                    e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                    e.currentTarget.style.color = 'var(--color-text-primary)'
                  }
                }}
              >
                Enquire →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
