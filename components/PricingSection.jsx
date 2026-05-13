'use client'

const plans = [
  {
    name: 'AI Revenue Agent',
    price: 'AED 80',
    period: '/ listing / month',
    badge: 'Founding Rate',
    description: 'Productized AI intelligence for STR operators who want daily monitoring and pricing support without manual effort.',
    note: 'Founding rate locked permanently for the first 20 clients. Standard pricing moves to AED 149+/listing/month after launch phase.',
    features: [
      'Daily AI briefing via Telegram',
      'Floor price monitoring and alerts',
      'Demand signal tracking',
      'Booking pace analysis',
      'MPI market performance index',
      'Tower-level comp intelligence',
      'Market compression alerts',
      'Unit-level recommendations',
      'Monthly performance summary',
    ],
    featured: false,
    urgency: true,
    cta: 'Claim Founding Rate',
    msg: 'Hi, I would like to claim the founding rate for the AI Revenue Agent. I manage listings in ',
    color: '#4ade80',
  },
  {
    name: 'Hybrid Revenue Management',
    price: 'Custom',
    period: 'based on portfolio size',
    badge: 'Most Popular',
    description: 'The complete revenue management system. AI monitoring combined with direct human revenue management support.',
    note: 'Best for operators who want AI efficiency and human judgment working together.',
    features: [
      'Everything in AI Revenue Agent',
      'Human revenue management support',
      'Strategic pricing reviews',
      'Ongoing revenue advisory',
      'Market interpretation calls',
      'PriceLabs strategy guidance',
      'Rate structure optimisation',
      'Monthly performance review',
    ],
    featured: true,
    urgency: false,
    cta: 'Discuss Hybrid Support',
    msg: 'Hi, I would like to discuss Hybrid Revenue Management. My portfolio has ',
    color: '#c49632',
  },
  {
    name: 'One-Time Consultancy',
    price: 'Custom',
    period: 'one-time engagement',
    badge: null,
    description: 'A focused revenue and pricing setup session. Ideal for operators who need proper structure without ongoing support.',
    note: 'Available as a one-time engagement for new setups or portfolio reviews.',
    features: [
      'PriceLabs setup and review',
      'Seasonal pricing customisation',
      'Dubai-specific pricing logic',
      'Weekday and weekend rate structure',
      'Event and peak strategy',
      'Floor price architecture',
      'Apartment-specific setup',
      'Portfolio review and recommendations',
    ],
    featured: false,
    urgency: false,
    cta: 'Book One-Time Consultancy',
    msg: 'Hi, I would like to book a one-time revenue consultancy session',
    color: '#818cf8',
  },
]

export default function PricingSection() {
  const openWA = (msg) => {
    const n = '971585089283'
    window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(msg), '_blank')
  }

  return (
    <section id="pricing" style={{
      background: 'linear-gradient(180deg, #f4f0e8 0%, #faf8f5 4%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .pricing-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
        .pricing-card {
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pricing-card:hover {
          transform: translateY(-5px);
        }
      `}</style>

      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(196,150,50,0.04) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(60px)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '20px' }}>
            <div style={{ width: '5px', height: '5px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632' }}>Offers and Pricing</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 14px' }}>
            Start with what you need.<br />Scale from there.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: '0 0 20px' }}>
            Every enquiry handled personally. No automated funnels — just a direct conversation about your portfolio.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 20px', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '10px' }}>
            <div style={{ width: '7px', height: '7px', background: '#c49632', borderRadius: '50%', flexShrink: 0 }} />
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#1a1a1a', margin: 0 }}>
              <strong style={{ fontWeight: 600 }}>Founding rate:</strong> First 20 clients lock in AED 80/listing/month permanently.{' '}
              <strong style={{ color: '#c49632' }}>18 spots remaining.</strong>
            </p>
          </div>
        </div>

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'start' }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="pricing-card"
              style={{
                background: plan.featured ? 'linear-gradient(160deg, #0d1520, #1a2535)' : 'white',
                border: plan.featured ? '1.5px solid rgba(196,150,50,0.35)' : '1px solid #e8dfd0',
                borderRadius: '20px',
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: plan.featured ? '0 24px 64px rgba(13,21,32,0.18)' : '0 2px 8px rgba(0,0,0,0.05)',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${plan.color}80, transparent)` }} />

              {plan.badge && (
                <div style={{ position: 'absolute', top: '-1px', left: '24px', background: plan.featured ? 'linear-gradient(135deg, #c49632, #a87d22)' : '#0d1520', padding: '4px 14px', borderRadius: '0 0 8px 8px', fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase', boxShadow: plan.featured ? '0 4px 12px rgba(196,150,50,0.3)' : 'none' }}>
                  {plan.badge}
                </div>
              )}

              {plan.urgency && (
                <div style={{ position: 'absolute', top: '-1px', right: '24px', background: '#ef4444', padding: '4px 12px', borderRadius: '0 0 8px 8px', fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: 'white', letterSpacing: '0.06em', boxShadow: '0 4px 12px rgba(239,68,68,0.3)' }}>
                  18 spots left
                </div>
              )}

              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: plan.featured ? plan.color : '#8a8076', margin: '0 0 12px', marginTop: plan.badge ? '20px' : '0' }}>{plan.name}</h3>

              <div style={{ marginBottom: '16px' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '36px', fontWeight: 400, color: plan.featured ? 'white' : '#1a1a1a', letterSpacing: '-0.02em' }}>{plan.price}</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: plan.featured ? 'rgba(255,255,255,0.35)' : '#8a8076', marginLeft: '4px' }}>{plan.period}</span>
              </div>

              {plan.urgency && (
                <div style={{ padding: '8px 12px', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.18)', borderRadius: '8px', marginBottom: '14px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#c49632', fontWeight: 500, margin: 0 }}>
                    Standard price after launch: AED 149+/listing/month. Lock in AED 80 permanently today.
                  </p>
                </div>
              )}

              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: plan.featured ? 'rgba(255,255,255,0.55)' : '#5a5248', margin: '0 0 20px' }}>{plan.description}</p>

              <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: plan.featured ? 'rgba(255,255,255,0.65)' : '#5a5248', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: plan.featured ? 'rgba(255,255,255,0.25)' : '#8a8076', margin: '0 0 20px', fontStyle: 'italic', lineHeight: 1.55 }}>{plan.note}</p>
              )}

              <button
                onClick={() => openWA(plan.msg)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '13px 0', borderRadius: '10px',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
                  width: '100%', cursor: 'pointer',
                  background: plan.urgency || plan.featured ? 'linear-gradient(135deg, #c49632, #a87d22)' : 'transparent',
                  color: plan.urgency || plan.featured ? 'white' : '#1a1a1a',
                  border: plan.urgency || plan.featured ? 'none' : '1.5px solid #d5c5aa',
                  boxShadow: plan.urgency || plan.featured ? '0 4px 16px rgba(196,150,50,0.3)' : 'none',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  if (plan.urgency || plan.featured) {
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,150,50,0.4)'
                  } else {
                    e.currentTarget.style.background = '#f4f0e8'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.urgency || plan.featured) {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(196,150,50,0.3)'
                  } else {
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#8a8076', marginTop: '36px' }}>
          All enquiries handled personally. VAT applies where applicable. Operated by Lux Oasis Advisory &amp; Services LLC — TRN 104722180700003.
        </p>

      </div>
    </section>
  )
}
