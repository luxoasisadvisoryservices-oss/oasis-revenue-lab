'use client'

const WHATSAPP_PORTFOLIO = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20request%20the%20Portfolio%20Floor%20Price%20Calculator'

export default function CalculatorLeadMagnet() {
  return (
    <section id="calculator" style={{ background: '#f4f0e8', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#c49632', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', background: 'rgba(196,150,50,0.1)', border: '1px solid rgba(196,150,50,0.25)', borderRadius: '6px' }}>Free Tools</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 14px' }}>
            STR Pricing Floor Calculators
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            Two versions — one for individual operators, one for portfolios. Both designed to build floor-price discipline from the ground up.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          <div style={{ background: 'white', border: '1px solid #e8dfd0', borderRadius: '14px', padding: '36px', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '36px', height: '36px', background: '#1D6F42', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '16px', fontWeight: 700 }}>X</span>
              </div>
              <div>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>Single-Unit Calculator</p>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8a8076' }}>Free direct download</p>
              </div>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: '0 0 20px' }}>
              Calculate your minimum viable nightly rate for a single listing. Enter your costs, target occupancy, and get your floor price instantly.
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0 }}>
              {['Monthly cost inputs — rent, fees, utilities', 'Target occupancy nights per month', 'Platform fee calculator', 'Instant floor price output', 'Simple clean Excel format'].map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#5a5248', lineHeight: 1.5 }}>{b}</span>
                </li>
              ))}
            </ul>
            <a href="/STR_Floor_Calculator_Single.xlsx" download style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 0', borderRadius: '8px', background: '#0d1520', color: 'white', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
              Download Single-Unit Calculator
            </a>
          </div>
          <div style={{ background: '#0d1520', border: '1.5px solid rgba(196,150,50,0.3)', borderRadius: '14px', padding: '36px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1px', left: '24px', background: '#c49632', padding: '4px 14px', borderRadius: '0 0 8px 8px', fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Portfolio Version
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', marginTop: '12px' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(196,150,50,0.15)', border: '1px solid rgba(196,150,50,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#c49632', fontSize: '16px', fontWeight: 700 }}>X</span>
              </div>
              <div>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: 'white' }}>Multi-Unit Portfolio Calculator</p>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>Shared after a short conversation</p>
              </div>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', margin: '0 0 20px' }}>
              Built for operators managing multiple listings. Covers mixed unit types, different cost structures, and portfolio-level floor price logic.
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 20px', padding: 0 }}>
              {['Multiple unit types in one file', 'Per-unit cost and floor calculation', 'Portfolio-wide revenue floor summary', 'Designed for holiday homes companies', 'Shared after a short onboarding chat'].map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>{b}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.3)', margin: '0 0 20px', fontStyle: 'italic', lineHeight: 1.55 }}>
              We share this after a short conversation to understand your portfolio structure. No commitment required.
            </p>
            <a href={WHATSAPP_PORTFOLIO} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px 0', borderRadius: '8px', background: '#c49632', color: 'white', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
              Request Portfolio Calculator
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
