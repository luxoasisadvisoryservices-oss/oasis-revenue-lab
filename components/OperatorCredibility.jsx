'use client'

export default function OperatorCredibility() {
  const openWA = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I would like to talk to the Oasis Revenue Lab revenue team')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  return (
    <section id="about" style={{ background: '#faf8f5', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Who We Are</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 24px' }}>
              Built by real operators. Not by developers who read about hospitality.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: '#5a5248', margin: '0 0 20px' }}>
              Oasis Revenue Lab was not built in a lab. It was built inside a real short-term rental operation — managing live listings in Dubai, dealing with real pricing decisions, real market shifts, and real consequences of getting it wrong.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: '#5a5248', margin: '0 0 32px' }}>
              We operate Lux Oasis Holiday Homes — a DTCM-licensed STR company with active listings in JBR, Dubai Marina, and Downtown. Every signal, every recommendation, every floor-price rule in this system has been tested on our own portfolio first.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              {[
                { icon: '🏢', title: 'Active STR operator', body: 'We run Lux Oasis Holiday Homes — a DTCM-licensed holiday homes company with live listings in Dubai. This is not theory.' },
                { icon: '📊', title: 'PriceLabs ecosystem', body: 'We configure, manage, and optimise PriceLabs strategies daily. The AI was built around how professional operators actually use pricing tools.' },
                { icon: '🧠', title: 'Revenue management expertise', body: 'HSMAI-trained revenue management thinking. Hospitality pricing principles. Real market interpretation — not generic automation logic.' },
                { icon: '🤖', title: 'We built the AI for ourselves first', body: 'The Revenue Lab agent runs on our own listings every morning. When we recommend it to clients, we are already using it ourselves.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: '16px', padding: '18px 20px', background: 'white', border: '1px solid #e8dfd0', borderRadius: '10px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 4px' }}>{item.title}</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.6, color: '#5a5248', margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={openWA}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: '#0d1520', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer' }}
            >
              Talk to the Revenue Team
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <div style={{ background: '#0d1520', borderRadius: '14px', padding: '28px', border: '1px solid rgba(196,150,50,0.2)' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632', margin: '0 0 16px' }}>The Ecosystem</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { name: 'Lux Oasis Holiday Homes', role: 'Active STR operations — JBR, Marina, Downtown Dubai', status: 'Live' },
                  { name: 'Oasis Revenue Lab', role: 'AI revenue intelligence and consultancy product', status: 'Live' },
                  { name: 'Lux Oasis Advisory & Services LLC', role: 'Parent entity — UAE registered, DTCM compliant', status: 'Active' },
                ].map((item) => (
                  <div key={item.name} style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: 'white', margin: 0 }}>{item.name}</p>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 500, color: '#4ade80', background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '20px', padding: '2px 8px' }}>{item.status}</span>
                    </div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>{item.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: '14px', padding: '28px', border: '1px solid #e8dfd0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5a5248', margin: '0 0 16px' }}>Professional Foundations</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'HSMAI Revenue Management', detail: 'Certification in progress', color: '#c49632' },
                  { label: 'PriceLabs Expert Ecosystem', detail: 'Active practitioner', color: '#4ade80' },
                  { label: 'DTCM Licensed Operations', detail: 'UAE holiday homes licence', color: '#4ade80' },
                  { label: 'Hostaway PMS Integration', detail: 'Live booking data pipeline', color: '#4ade80' },
                  { label: 'Dubai STR Market', detail: 'Active since 2024', color: '#4ade80' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', background: '#f4f0e8', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '7px', height: '7px', background: item.color, borderRadius: '50%', flexShrink: 0 }} />
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#1a1a1a', margin: 0 }}>{item.label}</p>
                    </div>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8a8076' }}>{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '20px 24px', background: '#f4f0e8', border: '1px solid #d5c5aa', borderRadius: '12px' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '18px', fontStyle: 'italic', fontWeight: 400, color: '#1a1a1a', margin: '0 0 8px', lineHeight: 1.5 }}>
                A real revenue management company that built its own AI system.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#8a8076', margin: 0 }}>— How we think about what we built</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

