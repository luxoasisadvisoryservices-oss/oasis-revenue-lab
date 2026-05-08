'use client'

export default function GlobalPositioning() {
  const markets = [
    { city: 'Dubai', region: 'UAE', status: 'Live', note: 'JBR, Downtown, Business Bay, Marina' },
    { city: 'GCC Region', region: 'Saudi Arabia, Qatar, Bahrain', status: 'Expanding', note: 'High-growth STR markets' },
    { city: 'European Markets', region: 'UK, Spain, Portugal, Italy', status: 'Planned', note: 'Scalable product architecture' },
    { city: 'US Markets', region: 'North America', status: 'Planned', note: 'AI product globally deployable' },
    { city: 'Asian Markets', region: 'Southeast Asia, Japan', status: 'Planned', note: 'Worldwide operator reach' },
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
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Global Positioning</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'white', margin: '0 0 24px' }}>
              Built from real Dubai operations. Designed for operators worldwide.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 20px' }}>
              Dubai is one of the most competitive and data-driven STR markets in the world. Building and operating here creates a system robust enough to perform anywhere.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 36px' }}>
              The AI Revenue Agent is productized and can be deployed across markets without rebuilding from scratch. One system, global reach.
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[{ value: 'Dubai', label: 'Home market' }, { value: 'GCC+', label: 'Regional expansion' }, { value: 'Global', label: 'Product architecture' }].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '28px', fontWeight: 500, color: '#c49632', margin: '0 0 4px' }}>{s.value}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {markets.map((market, i) => (
              <div key={market.city} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', background: i === 0 ? 'rgba(196,150,50,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${i === 0 ? 'rgba(196,150,50,0.2)' : 'rgba(255,255,255,0.06)'}`, borderRadius: '12px', gap: '16px', flexWrap: 'wrap' }}>
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, color: 'white', margin: '0 0 3px' }}>
                    {market.city} <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontWeight: 400 }}>{market.region}</span>
                  </p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>{market.note}</p>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, padding: '4px 10px', borderRadius: '20px', whiteSpace: 'nowrap', background: market.status === 'Live' ? 'rgba(74,222,128,0.1)' : market.status === 'Expanding' ? 'rgba(196,150,50,0.12)' : 'rgba(255,255,255,0.06)', color: market.status === 'Live' ? '#4ade80' : market.status === 'Expanding' ? '#c49632' : 'rgba(255,255,255,0.4)', border: `1px solid ${market.status === 'Live' ? 'rgba(74,222,128,0.2)' : market.status === 'Expanding' ? 'rgba(196,150,50,0.25)' : 'rgba(255,255,255,0.1)'}` }}>
                  {market.status}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
