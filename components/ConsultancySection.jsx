'use client'

export default function ConsultancySection() {
  const pillars = [
    { number: '01', title: 'Real operator experience', body: 'This is built from active STR operations — not theory. Every signal and recommendation comes from a framework tested on live listings in one of the most competitive short-term rental markets in the world.', color: '#2ebd72' },
    { number: '02', title: 'Strategic pricing logic', body: 'Floor-price discipline. Profit over occupancy. Open pricing philosophy. These are not settings to toggle — they are strategic positions that require judgment. That is what consultancy brings.', color: '#b8903a' },
    { number: '03', title: 'Market interpretation', body: 'AI reads data. A real operator reads context. Geopolitical shifts, local events, seasonal anomalies, and comp-set behaviour all shape pricing decisions that no algorithm fully captures alone.', color: '#9b8fd4' },
    { number: '04', title: 'Revenue architecture', body: 'Pricing is one layer. We also look at rate structure, length-of-stay restrictions, discount logic, and the relationship between occupancy and margin — across your whole portfolio.', color: '#cc8e28' },
  ]

  return (
    <section id="consultancy" style={{ background: 'linear-gradient(180deg, #f8f6f2 0%, #0e0e0e 6%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @media (max-width: 768px) {
          .consultancy-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        .pillar-card { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
        .pillar-card:hover { background: rgba(255,255,255,0.05) !important; border-color: rgba(184,144,58,0.22) !important; transform: translateX(4px); }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 90% 20%, rgba(184,144,58,0.05) 0%, transparent 55%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div className="consultancy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(184,144,58,0.1)', border: '1px solid rgba(184,144,58,0.25)', borderRadius: '20px' }}>
              <div style={{ width: '5px', height: '5px', background: '#b8903a', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8903a' }}>Real Revenue Consultancy</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'white', margin: '0 0 24px' }}>
              This is not software.<br />It is a revenue system<br />built by someone who<br />actually operates.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', margin: '0 0 36px' }}>
              Generic automation tools give you charts. Oasis Revenue Lab gives you interpretation, judgment, and a clear direction. The consultancy layer is what separates intelligence from noise.
            </p>
            <div style={{ padding: '24px', background: 'rgba(184,144,58,0.07)', border: '1px solid rgba(184,144,58,0.18)', borderRadius: '14px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #b8903a, transparent)' }} />
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '22px', fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.85)', margin: '0 0 10px', lineHeight: 1.45 }}>
                Pricing tools give you data.<br />We give you a position.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#b8903a', margin: 0, letterSpacing: '0.08em', fontWeight: 500 }}>— Oasis Revenue Lab</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {pillars.map((pillar) => (
              <div key={pillar.number} className="pillar-card" style={{ display: 'flex', gap: '20px', padding: '22px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '14px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: `linear-gradient(180deg, ${pillar.color}, transparent)` }} />
                <div style={{ flexShrink: 0 }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '28px', fontWeight: 300, color: pillar.color, opacity: 0.6, lineHeight: 1 }}>{pillar.number}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: 'white', margin: '0 0 6px' }}>{pillar.title}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)', margin: 0 }}>{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
