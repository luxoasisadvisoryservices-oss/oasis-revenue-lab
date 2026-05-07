'use client'

const tools = [
  { name: 'PriceLabs', role: 'Pricing engine and market data', note: 'Expert Partner' },
  { name: 'Hostaway', role: 'PMS and booking data pipeline', note: 'Live integration' },
  { name: 'Booking Pace', role: 'Forward-looking demand signals', note: 'Daily tracking' },
  { name: 'MPI', role: 'Market Performance Index', note: 'vs. baseline' },
  { name: 'ADR and RevPAR', role: 'Revenue performance metrics', note: 'YoY comparison' },
  { name: 'Tower Comp Data', role: 'Building-level competitor tracking', note: 'Micro-market' },
  { name: 'Historical Performance', role: 'Seasonal and event benchmarks', note: 'Pattern recognition' },
  { name: 'Operator Intelligence', role: 'Real-world context and judgment', note: 'Human layer' },
]

export default function DataToolsSection() {
  return (
    <section id="data" style={{ background: '#faf8f5', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: '560px', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Data and Tools</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 14px' }}>
            Powered by real data and revenue tools.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            Designed to work with data from the tools operators already use. Transparent signals, clear sources, no black box.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '14px', marginBottom: '32px' }}>
          {tools.map((tool) => (
            <div key={tool.name} style={{ background: 'white', border: '1px solid #e8dfd0', borderRadius: '12px', padding: '20px 22px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', background: '#c49632', borderRadius: '50%', flexShrink: 0, marginTop: '5px' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: '#1a1a1a', margin: 0 }}>{tool.name}</p>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#c49632', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '20px', padding: '2px 8px', fontWeight: 500 }}>{tool.note}</span>
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#8a8076', margin: 0 }}>{tool.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '20px 24px', background: '#f4f0e8', border: '1px solid #d5c5aa', borderRadius: '10px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#5a5248', margin: 0, lineHeight: 1.65 }}>
            <strong style={{ fontWeight: 500, color: '#1a1a1a' }}>Transparency note:</strong> Oasis Revenue Lab is designed to work with data from tools such as those listed above. Integration depth varies by client setup. We never overpromise connectivity — we deliver intelligence from what is available and clearly label what is missing.
          </p>
        </div>
      </div>
    </section>
  )
}
