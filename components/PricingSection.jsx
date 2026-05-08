'use client'

const plans = [
  {
    name: 'AI Revenue Agent',
    price: 'AED 80',
    period: '/ listing / month',
    badge: 'Launch Pricing',
    description: 'Productized AI intelligence for STR operators who want daily monitoring and pricing support without manual effort.',
    note: 'Launch pricing valid for the first 12 months. Standard pricing may increase after launch phase.',
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
    cta: 'Start with AI Agent',
    msg: 'Hi, I would like to start with the AI Revenue Agent',
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
    cta: 'Discuss Hybrid Support',
    msg: 'Hi, I would like to discuss Hybrid Revenue Management',
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
    cta: 'Book One-Time Consultancy',
    msg: 'Hi, I would like to book a one-time revenue consultancy',
  },
]

export default function PricingSection() {
  const openWA = (msg) => {
    const n = '971585089283'
    window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(msg), '_blank')
  }

  return (
    <section id="pricing" style={{ background: '#faf8f5', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Offers and Pricing</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 14px' }}>
            Start with what you need. Scale from there.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            Every enquiry is handled personally. No automated sales funnels — just a direct conversation about your portfolio.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', alignItems: 'start' }}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{ background: plan.featured ? '#0d1520' : 'white', border: plan.featured ? '1.5px solid rgba(196,150,50,0.35)' : '1px solid #e8dfd0', borderRadius: '14px', padding: '36px 32px', position: 'relative', boxShadow: plan.featured ? '0 12px 40px rgba(13,21,32,0.14)' : '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)' }}
            >
              {plan.badge && (
                <div style={{ position: 'absolute', top: '-1px', left: '24px', background: '#c49632', padding: '4px 14px', borderRadius: '0 0 8px 8px', fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {plan.badge}
                </div>
              )}
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: plan.featured ? '#c49632' : '#8a8076', margin: '0 0 12px' }}>{plan.name}</h3>
              <div style={{ marginBottom: '16px' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '34px', fontWeight: 500, color: plan.featured ? 'white' : '#1a1a1a' }}>{plan.price}</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: plan.featured ? 'rgba(255,255,255,0.4)' : '#8a8076', marginLeft: '4px' }}>{plan.period}</span>
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: plan.featured ? 'rgba(255,255,255,0.6)' : '#5a5248', margin: '0 0 20px' }}>{plan.description}</p>
              <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: plan.featured ? 'rgba(255,255,255,0.72)' : '#5a5248', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
              {plan.note && (
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: plan.featured ? 'rgba(255,255,255,0.3)' : '#8a8076', margin: '0 0 20px', fontStyle: 'italic', lineHeight: 1.55 }}>{plan.note}</p>
              )}
              <button
                onClick={() => openWA(plan.msg)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 0', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, width: '100%', cursor: 'pointer', background: plan.featured ? '#c49632' : 'transparent', color: plan.featured ? 'white' : '#1a1a1a', border: plan.featured ? 'none' : '1.5px solid #d5c5aa' }}
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
