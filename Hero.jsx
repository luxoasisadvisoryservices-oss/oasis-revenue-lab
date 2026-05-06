'use client'

const WHATSAPP_URL = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20the%20Oasis%20Revenue%20Lab%20AI%20Agent'
const WHATSAPP_CALC = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20receive%20the%20free%20STR%20Pricing%20Floor%20Calculator'

function DashboardMockup() {
  return (
    <div
      style={{
        background: 'var(--color-dark)',
        borderRadius: '16px',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(13,21,32,0.25)',
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(196,150,50,0.15) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 2px', fontFamily: 'DM Sans, sans-serif' }}>Oasis Revenue Lab</p>
          <p style={{ color: 'white', fontSize: '14px', fontWeight: 500, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Daily Intelligence Brief</p>
        </div>
        <div style={{ background: 'rgba(196,150,50,0.15)', border: '1px solid rgba(196,150,50,0.3)', borderRadius: '6px', padding: '4px 10px' }}>
          <span style={{ color: 'var(--color-accent)', fontSize: '11px', fontFamily: 'JetBrains Mono, monospace' }}>LIVE</span>
        </div>
      </div>

      {/* Alert card */}
      <div
        style={{
          background: 'rgba(196,150,50,0.08)',
          border: '1px solid rgba(196,150,50,0.25)',
          borderRadius: '10px',
          padding: '14px',
          marginBottom: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <div style={{ width: '8px', height: '8px', background: 'var(--color-accent)', borderRadius: '50%', marginTop: '5px', flexShrink: 0 }} />
          <div>
            <p style={{ color: 'var(--color-accent)', fontSize: '11px', fontWeight: 600, margin: '0 0 3px', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Pricing Alert</p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', margin: 0, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>
              Your floor price is being hit 4 nights this week. Demand signal: <strong style={{ color: 'white' }}>above average</strong>. Consider raising base rate.
            </p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '12px' }}>
        {[
          { label: 'Floor Price', value: 'AED 380', sub: 'Protected ✓', color: '#4ade80' },
          { label: 'Booking Pace', value: '+18%', sub: 'vs last week', color: 'var(--color-accent)' },
          { label: 'Occupancy Risk', value: 'Low', sub: '14-day view', color: '#60a5fa' },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '8px',
              padding: '12px 10px',
              textAlign: 'center',
            }}
          >
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px', fontFamily: 'DM Sans, sans-serif' }}>{stat.label}</p>
            <p style={{ color: stat.color, fontSize: '16px', fontWeight: 600, margin: '0 0 2px', fontFamily: 'DM Sans, sans-serif' }}>{stat.value}</p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', margin: 0, fontFamily: 'DM Sans, sans-serif' }}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      <div
        style={{
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '10px',
          padding: '14px',
          marginBottom: '12px',
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 6px', fontFamily: 'DM Sans, sans-serif' }}>AI Recommendation</p>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', margin: 0, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.55 }}>
          Raise nightly rate to <span style={{ color: 'white', fontWeight: 600 }}>AED 520–560</span> for the 14–21 May window. Event demand detected in your market. Floor remains at AED 380.
        </p>
      </div>

      {/* Demand signal */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontFamily: 'DM Sans, sans-serif', margin: 0 }}>
          Market demand signal
        </p>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              style={{
                width: '20px',
                height: '6px',
                borderRadius: '3px',
                background: i <= 4 ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)',
                opacity: i <= 4 ? (i * 0.25) + 0.1 : 1,
              }}
            />
          ))}
          <span style={{ color: 'var(--color-accent)', fontSize: '11px', fontFamily: 'DM Sans, sans-serif', marginLeft: '6px', fontWeight: 500 }}>Strong</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: '140px',
        paddingBottom: '100px',
        background: 'var(--color-bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(196,150,50,0.04) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(13,21,32,0.03) 0%, transparent 50%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left: copy */}
          <div>
            {/* Tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
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
                AI Revenue Intelligence · Dubai
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(40px, 5vw, 62px)',
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
                margin: '0 0 24px',
              }}
            >
              Smarter pricing decisions—without living inside PriceLabs.
            </h1>

            {/* Subheadline */}
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '17px',
                fontWeight: 300,
                lineHeight: 1.65,
                color: 'var(--color-text-secondary)',
                margin: '0 0 36px',
                maxWidth: '480px',
              }}
            >
              Oasis Revenue Lab combines AI monitoring, floor-price discipline, and real revenue consultancy—so STR operators protect margins and move faster on every pricing decision.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  background: 'var(--color-dark)',
                  color: 'white',
                  borderRadius: '8px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(13,21,32,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                Ask About the AI Agent
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#pricing"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  background: 'transparent',
                  color: 'var(--color-text-primary)',
                  borderRadius: '8px',
                  border: '1.5px solid var(--color-border-strong)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                  e.currentTarget.style.color = 'var(--color-text-primary)'
                }}
              >
                View Offers
              </a>
            </div>

            {/* Subtle calc prompt */}
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                margin: 0,
              }}
            >
              Want the free floor price calculator?{' '}
              <a
                href={WHATSAPP_CALC}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 500 }}
              >
                Message us →
              </a>
            </p>
          </div>

          {/* Right: dashboard mockup */}
          <div style={{ position: 'relative' }}>
            {/* Decorative accent behind card */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                bottom: '-20px',
                left: '20px',
                background: 'linear-gradient(135deg, rgba(196,150,50,0.08), rgba(13,21,32,0.04))',
                borderRadius: '20px',
                zIndex: 0,
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <DashboardMockup />
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div
          style={{
            marginTop: '72px',
            paddingTop: '32px',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          {[
            { icon: '🏙️', text: 'Built from live Dubai STR operations' },
            { icon: '🤖', text: 'AI-powered · updated daily' },
            { icon: '🧠', text: 'Real operator expertise behind every signal' },
            { icon: '📊', text: 'Floor-price discipline built in' },
          ].map((item) => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              <span
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  color: 'var(--color-text-muted)',
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
