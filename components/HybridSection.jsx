'use client'

const tiers = [
  { id: 'ai', label: 'AI Revenue Agent', tag: 'Fully autonomous', icon: '🤖', description: 'A 24/7 AI revenue manager that monitors your listings, verifies your PriceLabs pricing daily, flags what needs action, and tells you exactly what rates to set and why. Message it anytime on Telegram — paste your costs, set your revenue goals, ask about any unit, any date, any market signal.', includes: ['Daily intelligence brief every morning at 9:45am', 'PriceLabs prices verified and corrected daily', 'Exact rate recommendations — what to set and when', 'Floor price monitoring — never go below your minimum', 'MPI market performance vs competitors', 'Booking pace and demand signal alerts', 'Upcoming events and compression warnings', 'Trigger-based actions — if this then do that', 'Orphan gap and last-minute strategy', 'Revenue goal tracking and monthly summary', 'Paste your costs — get your floor price instantly', 'Ask anything on Telegram — 24/7 response'], best: 'For operators who want a fully autonomous AI revenue manager running in the background — without hiring anyone.', featured: false, cta: 'Start with AI Agent', msg: 'Hi, I would like to start with the AI Revenue Agent. I manage listings in ' },
  { id: 'hybrid', label: 'Hybrid Revenue Management', tag: 'AI plus human expertise', icon: '🧠', description: 'The AI agent runs autonomously in the background — and you also get direct access to a real revenue manager for strategic decisions, market interpretation, and pricing structure that requires human judgment.', includes: ['Everything in AI Revenue Agent', 'Direct revenue manager access', 'Strategic pricing reviews', 'Market interpretation sessions', 'PriceLabs strategy and setup guidance', 'Rate structure and floor price architecture', 'Seasonal strategy and event planning', 'Monthly performance review call'], best: 'For operators who want the AI running autonomously plus a human revenue expert available when it matters.', featured: true, cta: 'Discuss Hybrid Support', msg: 'Hi, I would like to discuss Hybrid Revenue Management. My portfolio has ' },
  { id: 'consultancy', label: 'One-Time Setup', tag: 'Focused engagement', icon: '📋', description: 'A focused revenue and pricing setup session. PriceLabs configuration, floor price architecture, rate structure, and seasonal strategy — built properly from scratch so your pricing system runs correctly from day one.', includes: ['PriceLabs full setup and review', 'Floor price architecture per unit', 'Seasonal pricing strategy', 'Weekday and weekend rate logic', 'Event and peak pricing strategy', 'Min stay optimisation', 'Last-minute rules configuration', 'Portfolio review and recommendations'], best: 'For operators who need a professional pricing structure built once, correctly.', featured: false, cta: 'Book Consultancy', msg: 'Hi, I would like to book a one-time revenue consultancy session' },
]

export default function HybridSection() {
  const openWA = (msg) => {
    const n = '971585089283'
    window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(msg), '_blank')
  }

  return (
    <section id="hybrid" style={{ background: 'linear-gradient(180deg, #0e0e0e 0%, #f0ece4 6%)', padding: '100px 0', position: 'relative' }}>
      <style>{`
        @media (max-width: 768px) { .hybrid-grid { grid-template-columns: 1fr !important; gap: 20px !important; } }
        .tier-card { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
        .tier-card:hover { transform: translateY(-4px); }
      `}</style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(184,144,58,0.08)', border: '1px solid rgba(184,144,58,0.2)', borderRadius: '20px' }}>
            <div style={{ width: '5px', height: '5px', background: '#b8903a', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8903a' }}>How It Works</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#111111', margin: '0 0 16px' }}>
            The AI is not replacing revenue management expertise. It is scaling it.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#504840', margin: 0 }}>
            The AI Revenue Agent runs autonomously every day — monitoring, verifying, alerting, and recommending. You stay in control. It does the work.
          </p>
        </div>
        <div style={{ padding: '16px 24px', background: 'linear-gradient(135deg, #141414, #1e1e1e)', borderRadius: '12px', marginBottom: '40px', display: 'flex', alignItems: 'flex-start', gap: '12px', border: '1px solid rgba(184,144,58,0.14)', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
          <span style={{ fontSize: '16px', flexShrink: 0 }}>💡</span>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.65 }}>
            <strong style={{ color: 'white', fontWeight: 500 }}>The AI agent is your 24/7 revenue manager:</strong> It monitors your listings, verifies PriceLabs daily, tells you exactly what prices to set, flags risks before they cost you money, and responds to any question on Telegram in seconds.
          </p>
        </div>
        <div className="hybrid-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {tiers.map((tier) => (
            <div key={tier.id} className="tier-card" style={{ background: tier.featured ? 'linear-gradient(160deg, #141414, #1e1e1e)' : 'white', border: tier.featured ? '1.5px solid rgba(184,144,58,0.32)' : '1px solid #e0d8cc', borderRadius: '16px', padding: '32px', position: 'relative', overflow: 'hidden', boxShadow: tier.featured ? '0 24px 64px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.05)' }}>
              {tier.featured && (<div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #b8903a, transparent)' }} />)}
              {tier.featured && (<div style={{ position: 'absolute', top: '-1px', left: '24px', background: 'linear-gradient(135deg, #b8903a, #96721e)', padding: '4px 14px', borderRadius: '0 0 8px 8px', fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase', boxShadow: '0 4px 12px rgba(184,144,58,0.28)' }}>Recommended</div>)}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', marginTop: tier.featured ? '16px' : '0' }}>
                <span style={{ fontSize: '22px' }}>{tier.icon}</span>
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, color: tier.featured ? 'white' : '#111111', margin: '0 0 2px' }}>{tier.label}</p>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#b8903a', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{tier.tag}</span>
                </div>
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.7, color: tier.featured ? 'rgba(255,255,255,0.55)' : '#504840', margin: '0 0 20px' }}>{tier.description}</p>
              <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0 }}>
                {tier.includes.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#b8903a" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: tier.featured ? 'rgba(255,255,255,0.6)' : '#504840', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: tier.featured ? 'rgba(255,255,255,0.28)' : '#807060', margin: '0 0 20px', fontStyle: 'italic', lineHeight: 1.55 }}>{tier.best}</p>
              <button onClick={() => openWA(tier.msg)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px 0', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, width: '100%', cursor: 'pointer', background: tier.featured ? 'linear-gradient(135deg, #b8903a, #96721e)' : 'transparent', color: tier.featured ? 'white' : '#111111', border: tier.featured ? 'none' : '1.5px solid #ccc0aa', boxShadow: tier.featured ? '0 4px 16px rgba(184,144,58,0.28)' : 'none', transition: 'all 0.25s ease' }}
                onMouseEnter={(e) => { if (tier.featured) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(184,144,58,0.38)' } else { e.currentTarget.style.background = '#e6e0d6' } }}
                onMouseLeave={(e) => { if (tier.featured) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(184,144,58,0.28)' } else { e.currentTarget.style.background = 'transparent' } }}
              >{tier.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
