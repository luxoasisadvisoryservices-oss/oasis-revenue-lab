'use client'

export default function GlobalPositioning() {
  const markets = [
    { city: 'Dubai', region: 'UAE', status: 'Live', note: 'JBR, Downtown, Business Bay, Marina', color: '#2ebd72' },
    { city: 'GCC Region', region: 'Saudi Arabia, Qatar, Bahrain', status: 'Expanding', note: 'High-growth STR markets', color: '#b8903a' },
    { city: 'European Markets', region: 'UK, Spain, Portugal, Italy', status: 'Planned', note: 'Scalable product architecture', color: 'rgba(255,255,255,0.28)' },
    { city: 'US Markets', region: 'North America', status: 'Planned', note: 'AI product globally deployable', color: 'rgba(255,255,255,0.28)' },
    { city: 'Asian Markets', region: 'Southeast Asia, Japan', status: 'Planned', note: 'Worldwide operator reach', color: 'rgba(255,255,255,0.28)' },
  ]

  return (
    <section id="global" style={{ background: 'linear-gradient(180deg, #f8f6f2 0%, #0e0e0e 6%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @media (max-width: 768px) { .global-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        .market-row { transition: all 0.25s ease; }
        .market-row:hover { background: rgba(255,255,255,0.06) !important; border-color: rgba(184,144,58,0.2) !important; transform: translateX(4px); }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 10% 80%, rgba(184,144,58,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div className="global-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(184,144,58,0.1)', border: '1px solid rgba(184,144,58,0.25)', borderRadius: '20px' }}>
              <div style={{ width: '5px', height: '5px', background: '#b8903a', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8903a' }}>Global Positioning</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: 'white', margin: '0 0 24px' }}>
              Built from real Dubai<br />operations. Designed for<br />operators worldwide.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', margin: '0 0 20px' }}>
              Dubai is one of the most competitive STR markets in the world. Building and operating here creates a system robust enough to perform anywhere.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', margin: '0 0 40px' }}>
              The AI Revenue Agent is productized and can be deployed across markets without rebuilding. One system, global reach.
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[{ value: 'Dubai', label: 'Home market' }, { value: 'GCC+', label: 'Regional expansion' }, { value: 'Global', label: 'Product architecture' }].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '30px', fontWeight: 400, margin: '0 0 4px', background: 'linear-gradient(90deg, #b8903a, #e0b850)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.value}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.32)', margin: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {markets.map((market, i) => (
              <div key={market.city} className="market-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', background: i === 0 ? 'rgba(184,144,58,0.08)' : i === 1 ? 'rgba(184,144,58,0.04)' : 'rgba(255,255,255,0.02)', border: `1px solid ${i === 0 ? 'rgba(184,144,58,0.2)' : i === 1 ? 'rgba(184,144,58,0.1)' : 'rgba(255,255,255,0.05)'}`, borderRadius: '12px', gap: '16px', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
                {i === 0 && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(180deg, #2ebd72, transparent)' }} />}
                {i === 1 && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(180deg, #b8903a, transparent)' }} />}
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, color: 'white', margin: '0 0 3px' }}>{market.city} <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)', fontWeight: 400 }}>{market.region}</span></p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.32)', margin: 0 }}>{market.note}</p>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', whiteSpace: 'nowrap', background: market.status === 'Live' ? 'rgba(46,189,114,0.1)' : market.status === 'Expanding' ? 'rgba(184,144,58,0.12)' : 'rgba(255,255,255,0.04)', color: market.status === 'Live' ? '#2ebd72' : market.status === 'Expanding' ? '#b8903a' : 'rgba(255,255,255,0.28)', border: `1px solid ${market.status === 'Live' ? 'rgba(46,189,114,0.2)' : market.status === 'Expanding' ? 'rgba(184,144,58,0.22)' : 'rgba(255,255,255,0.08)'}` }}>
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
