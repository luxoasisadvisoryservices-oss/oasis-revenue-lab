'use client'

const WHATSAPP_AGENT = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20discuss%20my%20portfolio%20with%20Oasis%20Revenue%20Lab'
const WHATSAPP_CALC = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20request%20the%20free%20floor%20price%20calculator'

function DashboardMockup() {
  return (
    <div style={{ background: '#0d1520', borderRadius: '16px', padding: '24px', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 64px rgba(13,21,32,0.35)' }}>
      <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(196,150,50,0.12) 0%, transparent 70%)', borderRadius: '50%' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
        <div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 2px', fontFamily: 'DM Sans, sans-serif' }}>Oasis Revenue Lab</p>
          <p style={{ color: 'white', fontSize: '13px', fontWeight: 500, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Daily Intelligence Brief</p>
        </div>
        <div style={{ background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: '6px', padding: '4px 10px' }}>
          <span style={{ color: '#4ade80', fontSize: '11px', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}>LIVE</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '12px' }}>
        {[
          { label: 'MPI Signal', value: '+12%', sub: 'Outperforming', color: '#4ade80' },
          { label: 'Booking Pace', value: 'SLOW', sub: 'Next 14 days', color: '#f59e0b' },
          { label: 'Demand Level', value: 'HIGH', sub: 'Weekend surge', color: '#c49632' },
        ].map((s) => (
          <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '8px', padding: '10px 8px', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 4px', fontFamily: 'DM Sans, sans-serif' }}>{s.label}</p>
            <p style={{ color: s.color, fontSize: '15px', fontWeight: 600, margin: '0 0 2px', fontFamily: 'DM Sans, sans-serif' }}>{s.value}</p>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '9px', margin: 0, fontFamily: 'DM Sans, sans-serif' }}>{s.sub}</p>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.25)', borderRadius: '10px', padding: '12px', marginBottom: '10px' }}>
        <p style={{ color: '#c49632', fontSize: '10px', fontWeight: 600, margin: '0 0 3px', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Floor Price Warning</p>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>
          Do not go below <strong style={{ color: 'white' }}>AED 540</strong>. Floor hit 3 of last 7 nights. Raise base rate before weekend.
        </p>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '12px', marginBottom: '10px' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 6px', fontFamily: 'DM Sans, sans-serif' }}>Recommended Price Range</p>
        <p style={{ color: 'white', fontSize: '18px', fontWeight: 600, margin: '0 0 4px', fontFamily: 'DM Sans, sans-serif' }}>AED 720 - 850</p>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Fri-Sun window based on tower comp and MPI signal</p>
      </div>
      <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '10px', padding: '12px', marginBottom: '10px' }}>
        <p style={{ color: '#ef4444', fontSize: '10px', fontWeight: 600, margin: '0 0 3px', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Market Compression in 5 Days</p>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', margin: 0, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.5 }}>
          High demand compression expected Fri 16 May. Tower comps filling fast. Review rates now.
        </p>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '12px' }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 5px', fontFamily: 'DM Sans, sans-serif' }}>Tower Performance Insight</p>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: 0, fontFamily: 'DM Sans, sans-serif', lineHeight: 1.55 }}>
          Fri/Sat rates in your tower are running <span style={{ color: '#f59e0b', fontWeight: 600 }}>8-12% below</span> comparable units nearby. Revenue opportunity visible this weekend.
        </p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{ paddingTop: '140px', paddingBottom: '100px', background: '#faf8f5', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>AI Revenue Intelligence - Dubai</span>
            </div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 20px' }}>
              Smarter pricing decisions without living inside PriceLabs.
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: '0 0 12px', maxWidth: '480px' }}>
              Oasis Revenue Lab combines AI monitoring, floor-price discipline, and real revenue consultancy so STR operators protect margins and move faster on every pricing decision.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: 1.65, color: '#5a5248', margin: '0 0 32px', maxWidth: '480px' }}>
              Not just software. Built by operators who actually run short-term rental portfolios in Dubai.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              <a href={WHATSAPP_AGENT} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: '#0d1520', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                Discuss My Portfolio
              </a>
              <a href="#pricing" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: 'transparent', color: '#1a1a1a', borderRadius: '8px', border: '1.5px solid #d5c5aa', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400, textDecoration: 'none' }}>
                View Offers
              </a>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#8a8076', margin: 0 }}>
              Want the free floor price calculator?{' '}
              <a href={WHATSAPP_CALC} target="_blank" rel="noopener noreferrer" style={{ color: '#c49632', textDecoration: 'none', fontWeight: 500 }}>Request it here</a>
            </p>
          </div>
          <div>
            <DashboardMockup />
          </div>
        </div>
        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid #e8dfd0', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          {[
            { icon: '🏙️', text: 'Built from live Dubai STR operations' },
            { icon: '🤖', text: 'AI-powered and updated daily' },
            { icon: '🧠', text: 'Real operator expertise behind every signal' },
            { icon: '📊', text: 'Floor-price discipline built in' },
          ].map((item) => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '15px' }}>{item.icon}</span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#8a8076' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
