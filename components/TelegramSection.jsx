'use client'

export default function TelegramSection() {
  const openWA = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I would like to understand how the AI Revenue Agent works and what it delivers daily')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  return (
    <section id="telegram" style={{ background: '#0d1520', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @media (max-width: 768px) {
          .telegram-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(196,150,50,0.05) 0%, transparent 55%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div className="telegram-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Live Agent Output</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'white', margin: '0 0 20px' }}>
              Your revenue manager, one message away.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 20px' }}>
              Every morning at 9:45am Gulf time, the AI sends a full intelligence brief to your Telegram. Real signals, real pricing decisions, real actions — per listing.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 32px' }}>
              Not a summary. Not a chart. A clear daily brief telling you exactly what to do, why, and when.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {[
                'MPI signal — are you outperforming the market?',
                'Floor price status — are you protected?',
                'PriceLabs prices verified daily per unit',
                'Unsold nights flagged with urgency level',
                'What is coming — events, compression, seasonality',
                'Trigger-based actions — if this then do that',
                'Outcome tracked automatically via Hostaway',
              ].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{item}</span>
                </div>
              ))}
            </div>
            <button onClick={openWA} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: '#c49632', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer' }}>
              Ask About the AI Revenue Agent
            </button>
          </div>

          <div>
            <div style={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #c49632, #a87d22)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '14px' }}>📊</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: 'white', margin: 0 }}>Oasis Revenue Lab</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#4ade80', margin: 0 }}>online</p>
                  </div>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>09:45 GST</span>
              </div>

              <div style={{ padding: '16px', maxHeight: '620px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>

                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '4px 12px 12px 12px', padding: '14px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: 'white', margin: '0 0 4px' }}>📊 Thu 07 May | Oasis Revenue Lab</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.7)', margin: '0 0 3px' }}>4 properties — AED 38,400 secured (30d) | Occ 74% | MPI 1.32</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>🔴 1 critical | 🟡 1 action | 🟠 1 o
