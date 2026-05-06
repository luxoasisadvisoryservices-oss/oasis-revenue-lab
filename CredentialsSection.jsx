'use client'

export default function CredentialsSection() {
  const foundations = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      label: 'Active Dubai STR Operations',
      detail: 'JBR, Downtown & Business Bay — live portfolio',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
        </svg>
      ),
      label: 'PriceLabs Expert Partner',
      detail: 'Certified pricing tools partnership',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      label: 'Proprietary AI Revenue System',
      detail: 'Built and deployed on live portfolios',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      label: 'Dubai DTCM Compliant Operations',
      detail: 'Holiday homes licensing — fully regulated',
    },
  ]

  const credentialSlots = [
    { label: 'HSMAI Certification', status: 'In Progress', color: 'var(--color-accent)' },
    { label: 'Revenue Management Credentials', status: 'Coming Soon', color: 'var(--color-text-muted)' },
    { label: 'Industry Awards', status: 'Space Reserved', color: 'var(--color-text-muted)' },
    { label: 'Partner Logos', status: 'Space Reserved', color: 'var(--color-text-muted)' },
  ]

  return (
    <section
      id="credentials"
      style={{
        background: 'var(--color-surface-muted)',
        padding: '100px 0',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ maxWidth: '560px', marginBottom: '56px' }}>
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
              Credentials & Recognition
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(28px, 3vw, 44px)',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              margin: '0 0 14px',
            }}
          >
            Built on real operations. Growing toward formal recognition.
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
            Our credibility starts with what we actually operate—not with certificates. Industry recognition is being pursued and will be reflected here as it is achieved.
          </p>
        </div>

        {/* Operational foundations */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          {foundations.map((item) => (
            <div
              key={item.label}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: '40px',
                  height: '40px',
                  background: 'var(--color-surface-muted)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent)',
                }}
              >
                {item.icon}
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    margin: '0 0 4px',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    color: 'var(--color-text-muted)',
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials placeholder row */}
        <div
          style={{
            border: '1.5px dashed var(--color-border-strong)',
            borderRadius: '14px',
            padding: '36px 32px',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              margin: '0 0 24px',
            }}
          >
            Professional Recognition — In Progress
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {credentialSlots.map((slot) => (
              <div
                key={slot.label}
                style={{
                  padding: '16px 20px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--color-text-primary)',
                    margin: 0,
                  }}
                >
                  {slot.label}
                </p>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    color: slot.color,
                    fontWeight: 500,
                  }}
                >
                  {slot.status}
                </span>
              </div>
            ))}
          </div>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              color: 'var(--color-text-muted)',
              margin: '20px 0 0',
              fontStyle: 'italic',
            }}
          >
            This section will be updated as credentials, certifications, and industry recognition are achieved.
          </p>
        </div>
      </div>
    </section>
  )
}
