'use client'

export default function OperatorCredibility() {
  const openWA = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I would like to speak with the Oasis Revenue Lab revenue team about my operation')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  return (
    <section id="about" style={{ background: 'linear-gradient(180deg, #0e0e0e 0%, #f8f6f2 6%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @media (max-width: 768px) { .credibility-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        .credibility-card { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
        .credibility-card:hover { transform: translateY(-3px); box-shadow: 0 12px 36px rgba(0,0,0,0.08) !important; border-color: rgba(184,144,58,0.28) !important; }
      `}</style>
      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(184,144,58,0.04) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="credibility-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(184,144,58,0.08)', border: '1px solid rgba(184,144,58,0.2)', borderRadius: '20px' }}>
              <div style={{ width: '5px', height: '5px', background: '#b8903a', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8903a' }}>Our Story</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#111111', margin: '0 0 24px' }}>
              Built by real operators.<br />Not by developers who<br />read about hospitality.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: '#504840', margin: '0 0 20px' }}>
              Oasis Revenue Lab was not built in a lab. It was built inside a real short-term rental operation — managing live listings in Dubai, dealing with real pricing decisions, real market shifts, and real consequences of getting it wrong.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: '#504840', margin: '0 0 36px' }}>
              We operate Lux Oasis Holiday Homes — a DTCM-licensed STR company with active listings in JBR, Dubai Marina, and Downtown. Every signal, every recommendation, every floor-price rule has been tested on our own portfolio first.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
              {[
                { icon: '🏢', title: 'Active STR operator', body: 'We run Lux Oasis Holiday Homes — a DTCM-licensed holiday homes company with live listings in Dubai. This is not theory.' },
                { icon: '📊', title: 'PriceLabs ecosystem', body: 'We configure, manage, and optimise PriceLabs strategies daily. The AI was built around how professional operators actually use pricing tools.' },
                { icon: '🧠', title: 'Revenue management expertise', body: 'HSMAI-trained revenue management thinking. Hospitality pricing principles. Real market interpretation — not generic automation logic.' },
                { icon: '🤖', title: 'We built the AI for ourselves first', body: 'The Revenue Lab agent runs on our own listings every morning. When we recommend it to clients, we are already using it ourselves.' },
              ].map((item) => (
                <div key={item.title} className="credibility-card" style={{ display: 'flex', gap: '16px', padding: '18px 20px', background: 'white', border: '1px solid #e0d8cc', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', background: 'linear-gradient(180deg, #b8903a, transparent)' }} />
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: '#111111', margin: '0 0 4px' }}>{item.title}</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.6, color: '#504840', margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={openWA} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'linear-gradient(135deg, #141414, #1e1e1e)', color: 'white', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: '1px solid rgba(184,144,58,0.2)', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', transition: 'all 0.25s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(184,144,58,0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(184,144,58,0.2)' }}
            >Talk to the Revenue Team</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: 'linear-gradient(135deg, #141414, #1e1e1e)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(184,144,58,0.18)', boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b8903a', margin: '0 0 18px' }}>The Ecosystem</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Lux Oasis Holiday Homes', role: 'Active STR operations — JBR, Marina, Downtown Dubai', status: 'Live' },
                  { name: 'Oasis Revenue Lab', role: 'AI revenue intelligence and consultancy product', status: 'Live' },
                  { name: 'Lux Oasis Advisory & Services LLC', role: 'Parent entity — UAE registered, DTCM compliant', status: 'Active' },
                ].map((item) => (
                  <div key={item.name} style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(184,144,58,0.18)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: 'white', margin: 0 }}>{item.name}</p>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 500, color: '#2ebd72', background: 'rgba(46,189,114,0.1)', border: '1px solid rgba(46,189,114,0.2)', borderRadius: '20px', padding: '2px 8px', whiteSpace: 'nowrap' }}>{item.status}</span>
                    </div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.38)', margin: 0 }}>{item.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #e0d8cc', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#807060', margin: '0 0 14px' }}>Professional Foundations</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { label: 'HSMAI Revenue Management', detail: 'Certification in progress', color: '#b8903a' },
                  { label: 'PriceLabs Expert Ecosystem', detail: 'Active practitioner', color: '#2ebd72' },
                  { label: 'DTCM Licensed Operations', detail: 'UAE holiday homes licence', color: '#2ebd72' },
                  { label: 'Hostaway PMS Integration', detail: 'Live booking data pipeline', color: '#2ebd72' },
                  { label: 'Dubai STR Market', detail: 'Active since 2024', color: '#2ebd72' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 12px', background: '#f0ece4', borderRadius: '8px', flexWrap: 'wrap', gap: '8px', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#e6e0d6' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#f0ece4' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '7px', height: '7px', background: item.color, borderRadius: '50%', flexShrink: 0, boxShadow: `0 0 6px ${item.color}50` }} />
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#111111', margin: 0 }}>{item.label}</p>
                    </div>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#807060' }}>{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '20px 24px', background: 'linear-gradient(135deg, #f0ece4, white)', border: '1px solid #ccc0aa', borderRadius: '14px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #b8903a, #e0b850, #b8903a)' }} />
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontStyle: 'italic', fontWeight: 400, color: '#111111', margin: '0 0 8px', lineHeight: 1.5 }}>
                A real revenue management company that built its own AI system.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#807060', margin: 0 }}>— How we think about what we built</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
