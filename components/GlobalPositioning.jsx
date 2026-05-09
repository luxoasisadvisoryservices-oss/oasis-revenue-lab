'use client'

export default function GlobalPositioning() {
  const markets = [
    { city: 'Dubai', region: 'UAE', status: 'Live', note: 'JBR, Downtown, Business Bay, Marina' },
    { city: 'GCC Region', region: 'Saudi Arabia, Qatar, Bahrain', status: 'Expanding', note: 'High-growth STR markets — next target' },
  ]

  return (
    <section id="global" style={{ background: '#0d1520', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @media (max-width: 768px) {
          .global-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 10% 80%, rgba(196,150,50,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div className="global-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Where We Operate</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'white', margin: '0 0 24px' }}>
              Built in Dubai. Expanding across the GCC.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 20px' }}>
              Dubai is one of the most competitive and data-driven STR markets in the world. Building and operating here first creates a system that is battle-tested before it goes anywhere else.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 36px' }}>
              The GCC is the natural next market — Saudi Arabia, Qatar, and Bahrain are all seeing rapid STR growth driven by tourism investment and Vision 2030. The product architecture is built to expand without rebuilding.
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { value: 'Dubai', label: 'Home market — live' },
                { value: 'GCC', label: 'Next expansion' },
                { value: '57,000+', label: 'Dubai STR listings' },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '28px', fontWeight: 500, color: '#c49632', margin: '0 0 4px' }}>{s.value}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {markets.map((market, i) => (
              <div key={market.city} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 28px', background: i === 0 ? 'rgba(196,150,50,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${i === 0 ? 'rgba(196,150,50,0.2)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '12px', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 500, color: 'white', margin: '0 0 4px' }}>
                    {market.city} <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>{market.region}</span>
                  </p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{market.note}</p>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, padding: '5px 12px', borderRadius: '20px', whiteSpace: 'nowrap', background: market.status === 'Live' ? 'rgba(74,222,128,0.1)' : 'rgba(196,150,50,0.12)', color: market.status === 'Live' ? '#4ade80' : '#c49632', border: `1px solid ${market.status === 'Live' ? 'rgba(74,222,128,0.2)' : 'rgba(196,150,50,0.25)'}` }}>
                  {market.status}
                </span>
              </div>
            ))}

            <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', margin: '0 0 8px' }}>Our approach to expansion</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                We expand markets only when we have documented results and operational knowledge to do it properly. Dubai first. GCC next. No shortcuts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
