'use client'

const plans = [
  {
    name: 'AI Revenue Agent',
    price: 'from AED 149',
    period: '/ listing / month',
    description:
      'Productized AI intelligence for STR operators who want daily monitoring and pricing support without manual effort.',
    features: [
      'Daily AI briefing (Telegram or Slack)',
      'Floor price monitoring & alerts',
      'Demand signal tracking',
      'Booking pace analysis',
      'Monthly performance summary',
      'Portfolio health overview',
    ],
    cta: 'Enquire About AI Agent',
    href: 'https://wa.me/971XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20the%20AI%20Revenue%20Agent',
    featured: false,
    note: 'Founding client rate available — contact us.',
  },
  {
    name: 'Hybrid Revenue Management',
    price: 'Custom pricing',
    period: 'based on portfolio size',
    description:
      'The complete revenue management system: AI monitoring plus direct consultancy access. Built for operators who want results, not just data.',
    features: [
      'Everything in AI Agent',
      'Direct advisory sessions',
      'Strategic pricing reviews',
      'Revenue architecture support',
      'Market interpretation calls',
      'Rate structure optimisation',
      'Monthly performance review',
    ],
    cta: 'Enquire About Hybrid',
    href: 'https://wa.me/971XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Hybrid%20Revenue%20Management',
    featured: true,
    note: 'Most popular option for growing portfolios.',
  },
  {
    name: 'Consultancy Only',
    price: 'Custom pricing',
    period: 'engagement-based',
    description:
      'Strategic revenue consulting without the AI agent. Expert pricing logic and revenue strategy for operators who already have data tools.',
    features: [
      'Pricing structure review',
      'Revenue strategy sessions',
      'Floor price architecture',
      'Rate ladder optimisation',
      'Market positioning advice',
      'One-time or retainer basis',
    ],
    cta: 'Enquire About Consultancy',
    href: 'https://wa.me/971XXXXXXXXX?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Revenue%20Consultancy',
    featured: false,
    note: 'Also available as a one-time engagement.',
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" style={{ background: 'var(--color-bg)', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 56px' }}>
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
              Offers & Pricing
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
              margin: '0 0 14px',
            }}
          >
            Start with what you need. Scale from there.
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
            Every enquiry is handled personally. Pricing reflects portfolio size and service level. No surprises.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
            alignItems: 'start',
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.featured ? 'var(--color-dark)' : 'var(--color-surface)',
                border: `1.5px solid ${plan.featured ? 'rgba(196,150,50,0.35)' : 'var(--color-border)'}`,
                borderRadius: '14px',
                padding: '36px 32px',
                position: 'relative',
                boxShadow: plan.featured ? '0 12px 40px rgba(13,21,32,0.14)' : 'var(--shadow-card)',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = plan.featured
                  ? '0 20px 60px rgba(13,21,32,0.2)'
                  : 'var(--shadow-card-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = plan.featured
                  ? '0 12px 40px rgba(13,21,32,0.14)'
                  : 'var(--shadow-card)'
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-1px',
                    left: '24px',
                    background: 'var(--color-accent)',
                    padding: '4px 14px',
                    borderRadius: '0 0 8px 8px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'white',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Most Popular
                </div>
              )}

              <h3
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: plan.featured ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  margin: '0 0 12px',
                }}
              >
                {plan.name}
              </h3>

              <div style={{ marginBottom: '16px' }}>
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: '32px',
                    fontWeight: 500,
                    color: plan.featured ? 'white' : 'var(--color-text-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    color: plan.featured ? 'rgba(255,255,255,0.45)' : 'var(--color-text-muted)',
                    marginLeft: '4px',
                  }}
                >
                  {plan.period}
                </span>
              </div>

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: plan.featured ? 'rgba(255,255,255,0.6)' : 'var(--color-text-secondary)',
                  margin: '0 0 24px',
                }}
              >
                {plan.description}
              </p>

              <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-accent)"
                      strokeWidth="2.5"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        color: plan.featured ? 'rgba(255,255,255,0.72)' : 'var(--color-text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '12px',
                    color: plan.featured ? 'rgba(255,255,255,0.35)' : 'var(--color-text-muted)',
                    margin: '0 0 20px',
                    fontStyle: 'italic',
                  }}
                >
                  {plan.note}
                </p>
              )}

              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 0',
                  borderRadius: '8px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  background: plan.featured ? 'var(--color-accent)' : 'transparent',
                  color: plan.featured ? 'white' : 'var(--color-text-primary)',
                  border: plan.featured ? 'none' : '1.5px solid var(--color-border-strong)',
                }}
                onMouseEnter={(e) => {
                  if (plan.featured) {
                    e.currentTarget.style.background = 'var(--color-accent-hover)'
                  } else {
                    e.currentTarget.style.borderColor = 'var(--color-accent)'
                    e.currentTarget.style.color = 'var(--color-accent)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.featured) {
                    e.currentTarget.style.background = 'var(--color-accent)'
                  } else {
                    e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                    e.currentTarget.style.color = 'var(--color-text-primary)'
                  }
                }}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            color: 'var(--color-text-muted)',
            marginTop: '36px',
          }}
        >
          All enquiries are handled personally. Pricing reviewed for each portfolio individually.
          <br />
          VAT applies where applicable. Operated by Lux Oasis Advisory &amp; Services LLC (TRN 104722180700003).
        </p>
      </div>
    </section>
  )
}
