'use client'

const WHATSAPP_URL = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Oasis%20Revenue%20Lab'

const audiences = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Individual Hosts',
    subtitle: '1–10 listings',
    description:
      'Owners who want professional pricing discipline without hiring a revenue manager. The AI agent runs daily, monitors your floor, and flags what needs attention.',
    fits: ['AI-Only Agent', 'Consultancy'],
    scale: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Property Managers',
    subtitle: '10–50 listings',
    description:
      'Growing portfolios that need portfolio-level intelligence without the overhead. One daily briefing covers every listing — no manual checking, no missed signals.',
    fits: ['AI-Only Agent', 'Hybrid Model'],
    scale: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Holiday Homes Companies',
    subtitle: '50–200 listings',
    description:
      'Established DTCM-licensed operators managing branded portfolios. The AI agent scales across your entire inventory — pricing intelligence delivered at the speed your operation requires.',
    fits: ['Hybrid Model', 'Full Consultancy'],
    scale: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Large-Scale Operators',
    subtitle: '200–500+ listings',
    description:
      'The AI agent is built to scale. Operators managing hundreds of listings get the same granular daily intelligence across their entire portfolio — without adding headcount. One system, any size.',
    fits: ['AI-Only Agent', 'Enterprise Hybrid'],
    scale: true,
  },
]

export default function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
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
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse at 50% 100%, rgba(196,150,50,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>
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
              Who We Work With
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
              margin: '0 0 14px',
            }}
          >
            From 1 listing to 500. The system scales with you.
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.55)',
              margin: 0,
            }}
          >
            The AI Revenue Agent is a productized system — not a manual service. It delivers the same intelligence quality at 5 listings or 500, without adding operational cost as you grow.
          </p>
        </div>

        {/* Audience cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          {audiences.map((audience) => (
            <div
              key={audience.title}
              style={{
                padding: '28px',
                background: audience.scale ? 'rgba(196,150,50,0.06)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${audience.scale ? 'rgba(196,150,50,0.3)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '14px',
                transition: 'all 0.22s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = audience.scale ? 'rgba(196,150,50,0.1)' : 'rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = audience.scale ? 'rgba(196,150,50,0.06)' : 'rgba(255,255,255,0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {audience.scale && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '20px',
                    background: 'var(--color-accent)',
                    padding: '3px 12px',
                    borderRadius: '0 0 8px 8px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'white',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Enterprise Ready
                </div>
              )}

              <div
                style={{
                  width: '44px',
                  height: '44px',
                  background: audience.scale ? 'rgba(196,150,50,0.15)' : 'rgba(196,150,50,0.08)',
                  border: `1px solid ${audience.scale ? 'rgba(196,150,50,0.3)' : 'rgba(196,150,50,0.15)'}`,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                  marginBottom: '18px',
                  marginTop: audience.scale ? '12px' : '0',
                }}
              >
                {audience.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: 'white',
                  margin: '0 0 4px',
                }}
              >
                {audience.title}
              </h3>
              <p
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: 'var(--color-accent)',
                  margin: '0 0 14px',
                  fontWeight: 500,
                }}
              >
                {audience.subtitle}
              </p>

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.55)',
                  margin: '0 0 18px',
                }}
              >
                {audience.description}
              </p>

              <div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.25)',
                    margin: '0 0 8px',
                  }}
                >
                  Best fit
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {audience.fits.map((fit) => (
                    <span
                      key={fit}
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '11px',
                        padding: '4px 10px',
                        background: 'rgba(196,150,50,0.08)',
                        border: '1px solid rgba(196,150,50,0.2)',
                        borderRadius: '20px',
                        color: 'var(--color-accent)',
                        fontWeight: 500,
                      }}
                    >
                      {fit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The key scale argument */}
        <div
          style={{
            padding: '24px 28px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: '2px' }}>
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: 'rgba(255,255,255,0.6)',
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: 'white', fontWeight: 500 }}>Why large operators choose AI over more headcount:</strong> A human revenue manager can actively manage 20–40 listings at best. The AI agent monitors 500 listings with the same consistency — every morning, every listing, no gaps. The cost per listing drops as you scale. The quality of intelligence doesn't.
          </p>
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            padding: '32px 36px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '22px',
                fontWeight: 500,
                color: 'white',
                margin: '0 0 6px',
              }}
            >
              Managing a large portfolio? Let's talk about what scales.
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.4)',
                margin: 0,
              }}
            >
              Enterprise pricing available. Every enquiry handled personally.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 24px',
              background: 'var(--color-accent)',
              color: 'white',
              borderRadius: '8px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-accent-hover)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-accent)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Talk on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
