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
              Every morning at 9:45am Gulf time, the AI sends a full intelligence brief to your Telegram. This is what it actually looks like — real data, real actions, real pricing decisions.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 32px' }}>
              Not a summary. Not a chart. A clear daily brief telling you exactly what to do, why, and when.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {[
                'MPI signal — are you outperforming the market?',
                'Floor price status — are you protected?',
                'PriceLabs prices verified daily',
                'Unsold nights flagged — act now or let go',
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
                    <span style={{ fontSize: '14px' }}>🏝</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: 'white', margin: 0 }}>Oasis Revenue Lab</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#4ade80', margin: 0 }}>online</p>
                  </div>
                </div>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>09:45 GST</span>
              </div>

              <div style={{ padding: '16px', maxHeight: '600px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>

                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '4px 12px 12px 12px', padding: '14px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: 'white', margin: '0 0 4px' }}>📊 Thu 07 May | Oasis Revenue Lab</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>2 properties — AED 2,804 secured (30d) | Occ 22% | MPI 1.05</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: '4px 0 0' }}>🔴 1 critical &nbsp;|&nbsp; 🟡 1 monitor &nbsp;|&nbsp; 🟢 0 healthy</p>
                </div>

                <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#ef4444', margin: '0 0 6px', letterSpacing: '0.06em' }}>🗺 MARKET SITUATION</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 3px' }}>🔴 Geopolitical disruption — regional demand suppressed</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 6px' }}>🔴 UAE air travel advisories active</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Intelligence updated: 2026-05-07 05:45 GST</p>
                </div>

                <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#f59e0b', margin: '0 0 8px' }}>🟡 Oasis 1 — JBR Sea View 2BR</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>Occ 30% (+8pts vs market ✅) | ADR AED 271 | Rev 30d AED 1,084</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 8px' }}>MPI: 3d 2.8 / 7d 1.8 / 30d 1.4 — strongly outperforming ✅</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '8px', marginBottom: '8px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#ef4444', margin: '0 0 3px', fontWeight: 600 }}>🚨 Unsold 3-5d out: Mon 11, Tue 12, Wed 13 May — act now</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', margin: 0 }}>💪 Ahead of market — hold or test +5% base</p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '8px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px', fontWeight: 600, letterSpacing: '0.04em' }}>PRICELABS — VERIFIED CORRECT</p>
                    {[['Mon 11 May','AED 375'],['Tue 12 May','AED 387'],['Fri 15 May','AED 363'],['Sat 16 May','AED 363']].map(([d,p]) => (
                      <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>{d}</span>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', fontWeight: 500 }}>{p} ✓</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#ef4444', margin: '0 0 8px' }}>🔴 Oasis 2 — JBR Poolfront 1BR</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>Occ 13% (6pts behind market ⚠️) | ADR AED 430 | Rev 30d AED 1,720</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 8px' }}>MPI: 3d 3.3 / 7d 2.1 / 30d 0.7 — below market ⚠️ | Last booking: 14 days ago</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '8px', marginBottom: '8px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#ef4444', margin: '0 0 3px', fontWeight: 600 }}>🚨 Unsold Mon–Wed 11-13 May — act now</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#f59e0b', margin: 0 }}>📈 Demand accelerating — MPI 2.1 to 3.3 in 3d</p>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '8px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.4)', margin: '0 0 4px', fontWeight: 600, letterSpacing: '0.04em' }}>PRICELABS — VERIFIED CORRECT</p>
                    {[['Mon 11 May','AED 399'],['Tue 12 May','AED 400'],['Fri 15 May','AED 413'],['Sat 16 May','AED 411']].map(([d,p]) => (
                      <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0' }}>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>{d}</span>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', fontWeight: 500 }}>{p} ✓</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#c49632', margin: '0 0 8px' }}>📅 WHAT IS COMING</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>• Arafat Day — 18d out — IF pace recovers THEN hold AED 400+</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>• Eid Al Adha — 6-day GCC long weekend — 19d out — watch closely</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>• Summer low season Jun 1 — set min stay 5 nights, target AED 280-320</p>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '4px 12px 12px 12px', padding: '12px 16px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: 'white', margin: '0 0 8px' }}>🎯 TRIGGER</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>• IF no booking by 11pm GST tonight — apply floor override Mon 11 May</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: '0 0 4px' }}>• IF no booking tonight — drop Last Minute Rules to floor for 3 nights</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.65)', margin: 0 }}>• IF booking lands — hold rate 24h, then review MPI before next move</p>
                </div>

                <div style={{ background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '4px 12px 12px 12px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%', flexShrink: 0 }} />
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Outcome auto-measured in 7 days via Hostaway snapshot</p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
