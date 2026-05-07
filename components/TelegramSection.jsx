'use client'

const WHATSAPP = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20the%20AI%20Revenue%20Agent'

export default function TelegramSection() {
  return (
    <section id="telegram" style={{ background: '#0d1520', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(196,150,50,0.05) 0%, transparent 55%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }}>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Live Agent Output</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'white', margin: '0 0 20px' }}>
              Your revenue manager, one message away.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 20px' }}>
              Every morning at 9:45am Gulf time, the AI sends a full intelligence brief to your Telegram. This is what it actually looks like — real signals, real pricing decisions, real actions.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 32px' }}>
              Not a summary. Not a chart. A clear daily brief telling you exactly what to do, why, and when — per listing.
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
            <button
              onClick={() => window.open(WHATSAPP, '_blank')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: '#c49632', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer' }}
            >
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
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>🔴 1 critical &nbsp;|&nbsp; 🟡 1 action &nbsp;|&nbsp; 🟠 1 opportunity &nbsp;|&nbsp; 🟢 1 on track</p>
                </div>

                <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#f59e0b', margin: '0 0 6px' }}>🗺 MARKET SITUATION</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 3px' }}>🟢 JBR demand recovering — MPI trending upward week-on-week</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 6px' }}>🟡 Marina weekend compression building — Fri-Sat filling 12d out</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Intelligence updated: 2026-05-07 05:45 GST</p>
                </div>

                <div style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#4ade80', margin: '0 0 8px' }}>🟢 Luxury 2 Bedroom — Marina View</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>Occ 82% (+21pts vs market ✅) | ADR AED 920 | Rev 30d AED 14,800</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 8px' }}>MPI: 3d 1.8 / 7d 1.6 / 30d 1.61 — strongly outperforming ✅</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '8px', marginBottom: '8px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', margin: '0 0 3px', fontWeight: 600 }}>💪 Weekend demand strong — MPI accelerating</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Consider testing rate ceiling +8% next Fri-Sat. Demand can absorb it.</p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '8px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px', fontWeight: 600', letterSpacing: '0.04em' }}>PRICELABS — VERIFIED CORRECT</p>
                    {[['Fri 09 May','AED 1,050'],['Sat 10 May','AED 1,180'],['Fri 16 May','AED 1,120'],['Sat 17 May','AED 1,200']].map(([d,p]) => (
                      <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>{d}</span>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', fontWeight: 500 }}>{p} ✓</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#f59e0b', margin: '0 0 8px' }}>🟡 Stunning View 1 Bedroom — JBR</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>Occ 58% (3pts behind market ⚠️) | ADR AED 620 | Rev 30d AED 10,850</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 8px' }}>MPI: 3d 1.2 / 7d 1.1 / 30d 0.94 — slight lag vs market</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '8px', marginBottom: '8px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#f59e0b', margin: '0 0 3px', fontWeight: 600 }}>🚨 3 unsold nights Mon-Wed next week — act now</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Orphan gap Thu-Fri trapped by 3-night min stay. Adjust to 2 nights for this window.</p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '8px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px', fontWeight: 600, letterSpacing: '0.04em' }}>PRICELABS — VERIFIED CORRECT</p>
                    {[['Mon 11 May','AED 580'],['Tue 12 May','AED 580'],['Wed 13 May','AED 595'],['Fri 15 May','AED 720']].map(([d,p]) => (
                      <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>{d}</span>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', fontWeight: 500 }}>{p} ✓</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#c49632', margin: '0 0 8px' }}>📅 WHAT IS COMING</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>• Eid Al Adha 6-day long weekend — 19d out — Marina units: target AED 1,200-1,400</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>• Arafat Day public holiday — 18d out — JBR: hold AED 700+ if pace holds</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>• Summer low season Jun 1 — set min stay 5 nights, target ADR AED 550-700</p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: 'white', margin: '0 0 8px' }}>🎯 TRIGGERS</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>• Stunning View 1BR — IF no booking by 11pm GST — drop min stay to 2 nights Mon-Wed</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>• Luxury 2BR Marina — IF Eid week shows 3+ bookings THEN raise ceiling to AED 1,350</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>• All units — verify Last Minute Rules active at 10-15% within 3 days</p>
                </div>

                <div style={{ background: 'rgba(74,222,128,0.04)', border: '1px solid rgba(74,222,128,0.12)', borderRadius: '4px 12px 12px 12px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', flexShrink: 0 }} />
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Advisory only · Read-only mode · Outcomes auto-measured via Hostaway</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
