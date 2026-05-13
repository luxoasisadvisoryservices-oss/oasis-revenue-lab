'use client'

export default function TelegramSection() {
  const openWA = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I would like to understand how the AI Revenue Agent works and what it delivers daily')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  return (
    <section id="telegram" style={{
      background: 'linear-gradient(180deg, #faf8f5 0%, #0d1520 6%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .telegram-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(196,150,50,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 20% 80%, rgba(59,130,246,0.04) 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div className="telegram-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(196,150,50,0.1)', border: '1px solid rgba(196,150,50,0.25)', borderRadius: '20px' }}>
              <div style={{ width: '5px', height: '5px', background: '#c49632', borderRadius: '50%', animation: 'pulse-gold 2s infinite' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632' }}>Live Agent Output</span>
            </div>

            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 52px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'white', margin: '0 0 20px' }}>
              Your revenue manager,<br />one message away.
            </h2>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: '0 0 16px' }}>
              Every morning at 9:45am Gulf time, the AI sends a full intelligence brief to your Telegram. Real signals, real pricing decisions, real actions — per listing.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: '0 0 36px' }}>
              Not a summary. Not a chart. A clear daily brief telling you exactly what to do, why, and when.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {[
                { text: 'MPI signal — are you outperforming the market?', color: '#4ade80' },
                { text: 'Floor price status — are you protected?', color: '#c49632' },
                { text: 'PriceLabs prices verified daily per unit', color: '#4ade80' },
                { text: 'Unsold nights flagged with urgency level', color: '#f59e0b' },
                { text: 'What is coming — events, compression, seasonality', color: '#c49632' },
                { text: 'Trigger-based actions — if this then do that', color: '#4ade80' },
                { text: 'Outcome tracked automatically via Hostaway', color: '#4ade80' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', transition: 'all 0.2s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(196,150,50,0.2)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)' }}
                >
                  <div style={{ width: '6px', height: '6px', background: item.color, borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{item.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={openWA}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px',
                background: 'linear-gradient(135deg, #c49632, #a87d22)',
                color: 'white', borderRadius: '10px',
                fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
                border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(196,150,50,0.3)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(196,150,50,0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,150,50,0.3)' }}
            >
              Ask About the AI Revenue Agent
            </button>
          </div>

          <div>
            <div style={{
              background: 'rgba(13,21,32,0.8)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(196,150,50,0.15)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
            }}>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '34px', height: '34px', background: 'linear-gradient(135deg, #c49632, #a87d22)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(196,150,50,0.3)' }}>
                    <span style={{ fontSize: '14px' }}>📊</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: 'white', margin: 0 }}>Oasis Revenue Lab</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <div style={{ width: '5px', height: '5px', background: '#4ade80', borderRadius: '50%' }} />
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#4ade80', margin: 0 }}>online</p>
                    </div>
                  </div>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.25)' }}>09:45 GST</span>
              </div>

              <div style={{ padding: '16px', maxHeight: '580px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>

                {[
                  {
                    bg: 'rgba(255,255,255,0.04)',
                    border: 'rgba(255,255,255,0.08)',
                    content: (
                      <>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: 'white', margin: '0 0 4px' }}>📊 Thu 07 May | Oasis Revenue Lab</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.65)', margin: '0 0 3px' }}>4 properties — AED 38,400 (30d) | Occ 74% | MPI 1.32</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>🔴 1 critical | 🟡 1 action | 🟠 1 opportunity | 🟢 1 on track</p>
                      </>
                    )
                  },
                  {
                    bg: 'rgba(245,158,11,0.05)',
                    border: 'rgba(245,158,11,0.15)',
                    content: (
                      <>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#f59e0b', margin: '0 0 6px' }}>🗺 MARKET SITUATION</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 3px' }}>🟢 JBR demand recovering — MPI trending upward</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 5px' }}>🟡 Marina weekend compression building — Fri-Sat filling 12d out</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>Updated: 2026-05-07 05:45 GST</p>
                      </>
                    )
                  },
                  {
                    bg: 'rgba(74,222,128,0.05)',
                    border: 'rgba(74,222,128,0.15)',
                    content: (
                      <>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#4ade80', margin: '0 0 6px' }}>🟢 Luxury 2 Bedroom — Marina View</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 3px' }}>Occ 82% (+21pts vs market) | ADR AED 920 | Rev AED 14,800</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 8px' }}>MPI: 3d 1.8 / 7d 1.6 / 30d 1.61 — strongly outperforming</p>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px', marginBottom: '8px' }}>
                          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', margin: '0 0 3px', fontWeight: 600 }}>Weekend demand strong — consider ceiling +8%</p>
                          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>PriceLabs AED 1,050-1,180 Fri-Sat verified correct</p>
                        </div>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.3)', margin: '0 0 4px', fontWeight: 600, letterSpacing: '0.04em' }}>PRICELABS VERIFIED</p>
                        {[['Fri 09','AED 1,050'],['Sat 10','AED 1,180'],['Fri 16','AED 1,120'],['Sat 17','AED 1,200']].map(([d,p]) => (
                          <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>{d}</span>
                            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#4ade80', fontWeight: 500 }}>{p} ✓</span>
                          </div>
                        ))}
                      </>
                    )
                  },
                  {
                    bg: 'rgba(245,158,11,0.05)',
                    border: 'rgba(245,158,11,0.15)',
                    content: (
                      <>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#f59e0b', margin: '0 0 6px' }}>🟡 Stunning View 1 Bedroom — JBR</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 3px' }}>Occ 58% (3pts behind market) | ADR AED 620 | Rev AED 10,850</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 8px' }}>MPI: 3d 1.2 / 7d 1.1 / 30d 0.94 — slight lag</p>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '8px' }}>
                          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#f59e0b', margin: '0 0 3px', fontWeight: 600 }}>3 unsold nights Mon-Wed — act now</p>
                          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Adjust min stay to 2 nights for this window</p>
                        </div>
                      </>
                    )
                  },
                  {
                    bg: 'rgba(196,150,50,0.06)',
                    border: 'rgba(196,150,50,0.15)',
                    content: (
                      <>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#c49632', margin: '0 0 6px' }}>📅 WHAT IS COMING</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 3px' }}>Eid Al Adha 6-day weekend — 19d out — target AED 1,200-1,400</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Summer low season Jun 1 — min stay 5 nights, ADR AED 550-700</p>
                      </>
                    )
                  },
                  {
                    bg: 'rgba(255,255,255,0.03)',
                    border: 'rgba(255,255,255,0.07)',
                    content: (
                      <>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: 'white', margin: '0 0 6px' }}>🎯 TRIGGERS</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.55)', margin: '0 0 3px' }}>1BR JBR — IF no booking by 11pm → drop min stay to 2 nights</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.55)', margin: 0 }}>2BR Marina — IF Eid shows 3+ bookings → raise ceiling AED 1,350</p>
                      </>
                    )
                  },
                ].map((msg, i) => (
                  <div key={i} style={{
                    background: msg.bg,
                    border: `1px solid ${msg.border}`,
                    borderRadius: '4px 12px 12px 12px',
                    padding: '12px 14px',
                    transition: 'all 0.2s ease',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = msg.bg.replace('0.05', '0.08').replace('0.04', '0.07').replace('0.06', '0.09').replace('0.03', '0.06') }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = msg.bg }}
                  >
                    {msg.content}
                  </div>
                ))}

                <div style={{ background: 'rgba(74,222,128,0.04)', border: '1px solid rgba(74,222,128,0.1)', borderRadius: '4px 12px 12px 12px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '5px', height: '5px', background: '#4ade80', borderRadius: '50%', flexShrink: 0 }} />
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>Advisory only · Read-only mode · Outcomes tracked via Hostaway</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
