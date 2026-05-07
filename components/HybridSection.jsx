'use client'

const WHATSAPP = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20discuss%20Hybrid%20Revenue%20Management'

export default function HybridSection() {
  const tiers = [
    {
      id: 'ai',
      label: 'AI-Only',
      tag: 'Scalable product',
      icon: '🤖',
      description: 'Daily AI briefings, floor price monitoring, demand signals, and pricing recommendations — delivered to Telegram every morning. You make the final call.',
      includes: [
        'Daily intelligence brief via Telegram',
        'Floor price monitoring and alerts',
        'MPI market performance tracking',
        'Booking pace and demand signals',
        'PriceLabs prices verified daily',
        'Monthly performance summary',
      ],
      best: 'For operators who understand pricing and want automated daily intelligence.',
      featured: false,
      cta: 'Start with AI Agent',
      href: 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20start%20with%20the%20AI%20Revenue%20Agent',
    },
    {
      id: 'hybrid',
      label: 'Hybrid Revenue Management',
      tag: 'Most popular',
      icon: '🧠',
      description: 'AI monitoring combined with direct access to real revenue management expertise. The AI scales the intelligence. The human layer adds judgment, context, and strategy.',
      includes: [
        'Everything in AI-Only',
        'Direct revenue advisory access',
        'Strategic pricing reviews',
        'Market interpretation sessions',
        'PriceLabs strategy guidance',
        'Rate structure optimisation',
        'Monthly performance review',
      ],
      best: 'For operators who want AI efficiency and human revenue management expertise working together.',
      featured: true,
      cta: 'Discuss Hybrid Support',
      href: 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20discuss%20Hybrid%20Revenue%20Management',
    },
    {
      id: 'consultancy',
      label: 'One-Time Setup',
      tag: 'Focused engagement',
      icon: '📋',
      description: 'A focused revenue and pricing setup session. PriceLabs configuration, floor price architecture, rate structure, and seasonal strategy — done properly from the start.',
      includes: [
        'PriceLabs setup and review',
        'Floor price architecture',
        'Seasonal pricing strategy',
        'Weekday and weekend logic',
        'Event and peak strategy',
        'Min stay optimisation',
        'Portfolio review session',
      ],
      best: 'For operators starting fresh or needing a professional pricing structure.',
      featured: false,
      cta: 'Book Consultancy',
      href: 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20book%20a%20one-time%20revenue%20consultancy',
    },
  ]

  return (
    <section id="hybrid" style={{ background: '#f4f0e8', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>How It Works</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 16px' }}>
            The AI is not replacing revenue management expertise. It is scaling it.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            Every recommendation the AI makes is built on real revenue management logic — the same logic we apply to our own listings every day. Choose the level of support that fits your operation.
          </p>
        </div>

        <div style={{ padding: '16px 24px', background: '#0d1520', borderRadius: '10px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '16px' }}>💡</span>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: 'white', fontWeight: 500 }}>Why the hybrid model exists:</strong> Some decisions require market context, operator judgment, and strategic thinking that no algorithm fully replaces. The hybrid model gives you both — AI speed and scale, human intelligence where it matters.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              style={{
                background: tier.featured ? '#0d1520' : 'white',
                border: tier.featured ? '1.5px solid rgba(196,150,50,0.35)' : '1px solid #e8dfd0',
                borderRadius: '14px',
                padding: '32px',
                position: 'relative',
                boxShadow: tier.featured ? '0 12px 40px rgba(13,21,32,0.14)' : '0 1px 3px rgba(0,0,0,0.04)',
              }}
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

              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: tier.featured ? 'rgba(255,255,255,0.65)' : '#5a5248', margin: '0 0 20px' }}>
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

              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: tier.featured ? 'rgba(255,255,255,0.35)' : '#8a8076', margin: '0 0 20px', fontStyle: 'italic', lineHeight: 1.55 }}>
                {tier.best}
              </p>

              <button
                onClick={() => window.open(tier.href, '_blank')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 0',
                  borderRadius: '8px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  width: '100%',
                  cursor: 'pointer',
                  background: tier.featured ? '#c49632' : 'transparent',
                  color: tier.featured ? 'white' : '#1a1a1a',
                  border: tier.featured ? 'none' : '1.5px solid #d5c5aa',
                }}
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
