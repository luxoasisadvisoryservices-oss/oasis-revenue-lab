'use client'

const tiers = [
  {
    id: 'ai',
    label: 'AI Revenue Agent',
    tag: 'Fully autonomous',
    icon: '🤖',
    description: 'A 24/7 AI revenue manager that monitors your listings, verifies your PriceLabs pricing daily, flags what needs action, and tells you exactly what rates to set and why. Message it anytime on Telegram — paste your costs, set your revenue goals, ask about any unit, any date, any market signal. It responds in seconds.',
    includes: [
      'Daily intelligence brief every morning at 9:45am',
      'PriceLabs prices verified and corrected daily',
      'Exact rate recommendations — what to set and when',
      'Floor price monitoring — never go below your minimum',
      'MPI market performance vs competitors',
      'Booking pace and demand signal alerts',
      'Upcoming events and compression warnings',
      'Trigger-based actions — if this then do that',
      'Orphan gap and last-minute strategy',
      'Revenue goal tracking and monthly summary',
      'Paste your costs — get your floor price instantly',
      'Ask anything on Telegram — 24/7 response',
    ],
    best: 'For operators who want a fully autonomous AI revenue manager running in the background — without hiring anyone.',
    featured: false,
    cta: 'Start with AI Agent',
    msg: 'Hi, I would like to start with the AI Revenue Agent. I manage listings in ',
  },
  {
    id: 'hybrid',
    label: 'Hybrid Revenue Management',
    tag: 'AI plus human expertise',
    icon: '🧠',
    description: 'The AI agent runs autonomously in the background — and you also get direct access to a real revenue manager for strategic decisions, market interpretation, and pricing structure that requires human judgment.',
    includes: [
      'Everything in AI Revenue Agent',
      'Direct revenue manager access',
      'Strategic pricing reviews',
      'Market interpretation sessions',
      'PriceLabs strategy and setup guidance',
      'Rate structure and floor price architecture',
      'Seasonal strategy and event planning',
      'Monthly performance review call',
    ],
    best: 'For operators who want the AI running autonomously plus a human revenue expert available when it matters.',
    featured: true,
    cta: 'Discuss Hybrid Support',
    msg: 'Hi, I would like to discuss Hybrid Revenue Management. My portfolio has ',
  },
  {
    id: 'consultancy',
    label: 'One-Time Setup',
    tag: 'Focused engagement',
    icon: '📋',
    description: 'A focused revenue and pricing setup session. PriceLabs configuration, floor price architecture, rate structure, and seasonal strategy — built properly from scratch so your pricing system runs correctly from day one.',
    includes: [
      'PriceLabs full setup and review',
      'Floor price architecture per unit',
      'Seasonal pricing strategy',
      'Weekday and weekend rate logic',
      'Event and peak pricing strategy',
      'Min stay optimisation',
      'Last-minute rules configuration',
      'Portfolio review and recommendations',
    ],
    best: 'For operators who need a professional pricing structure built once, correctly.',
    featured: false,
    cta: 'Book Consultancy',
    msg: 'Hi, I would like to book a one-time revenue consultancy session',
  },
]

export default function HybridSection() {
  const openWA = (msg) => {
    const n = '971585089283'
    window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(msg), '_blank')
  }

  return (
    <section id="hybrid" style={{ background: '#f4f0e8', padding: '100px 0' }}>
      <style>{`
        @media (max-width: 768px) {
          .hybrid-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>How It Works</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 16px' }}>
            The AI is not replacing revenue management expertise. It is scaling it.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            The AI Revenue Agent runs autonomously every day — monitoring, verifying, alerting, and recommending. You stay in control. It does the work.
          </p>
        </div>

        <div style={{ padding: '16px 24px', background: '#0d1520', borderRadius: '10px', marginBottom: '40px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <span style={{ fontSize: '16px', flexShrink: 0 }}>💡</span>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: 'white', fontWeight: 500 }}>The AI agent is your 24/7 revenue manager:</strong> It monitors your listings, verifies PriceLabs daily, tells you exactly what prices to set, flags risks before they cost you money, and responds to any question on Telegram in seconds. Add your costs, set your goals, paste your calendar — it handles the intelligence so you handle the decisions.
          </p>
        </div>

        <div className="hybrid-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              style={{ background: tier.featured ? '#0d1520' : 'white', border: tier.featured ? '1.5px solid rgba(196,150,50,0.35)' : '1px solid #e8dfd0', borderRadius: '14px', padding: '32px', position: 'relative', boxShadow: tier.featured ? '0 12px 40px rgba(13,21,32,0.14)' : '0 1px 3px rgba(0,0,0,0.04)' }}
            >
              {tier.featured && (
                <div style={{ position: 'absolute', top: '-1px', left: '24px', background: '#c49632', padding: '4px 14px', borderRadius: '0 0 8px 8px', fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Recommended
                </div>
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', marginTop: tier.featured ? '10px' : '0' }}>
                <span style={{ fontSize: '22px' }}>{tier.icon}</span>
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, color: tier.featured ? 'white' : '#1a1a1a', margin: '0 0 2px' }}>{tier.label}</p>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#c49632', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{tier.tag}</span>
                </div>
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.7, color: tier.featured ? 'rgba(255,255,255,0.65)' : '#5a5248', margin: '0 0 20px' }}>
                {tier.description}
              </p>
              <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0 }}>
                {tier.includes.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: tier.featured ? 'rgba(255,255,255,0.72)' : '#5a5248', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: tier.featured ? 'rgba(255,255,255,0.35)' : '#8a8076', margin: '0 0 20px', fontStyle: 'italic', lineHeight: 1.55 }}>{tier.best}</p>
              <button
                onClick={() => openWA(tier.msg)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 0', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, width: '100%', cursor: 'pointer', background: tier.featured ? '#c49632' : 'transparent', color: tier.featured ? 'white' : '#1a1a1a', border: tier.featured ? 'none' : '1.5px solid #d5c5aa' }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
