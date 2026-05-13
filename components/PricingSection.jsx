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
            <div style={{ width: '7px', height: '7px', background: '#c49632', borderRadius: '50%', animation: 'pulse-gold 2s infinite', flexShrink: 0 }} />
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
