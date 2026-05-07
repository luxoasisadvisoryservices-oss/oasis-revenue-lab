'use client'

const WHATSAPP = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20ask%20about%20the%20AI%20Revenue%20Agent'

const queries = [
  { msg: 'What is my floor price for Oasis 1?', reply: 'Floor price for Oasis 1 is AED 540. Currently being hit on Tue/Wed. Recommend raising base rate by AED 40 before this weekend.' },
  { msg: 'How is booking pace looking this week?', reply: 'Pace is 18% below target for next 14 days. Weekend signals are strong. Midweek needs attention — consider a short-stay discount for Tue/Wed only.' },
  { msg: 'Any demand opportunities coming up?', reply: 'High compression detected Fri 16 May. Tower comps are filling fast. Current rate AED 680 is below the recommended range of AED 720-850.' },
]

export default function TelegramSection() {
  return (
    <section id="telegram" style={{ background: '#0d1520', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(196,150,50,0.05) 0%, transparent 55%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>24/7 Telegram Access</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'white', margin: '0 0 20px' }}>
              Your revenue manager, one message away.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 32px' }}>
              The AI Revenue Agent is not just a daily briefing. It is a live assistant you can message any time about any unit, any pricing decision, any market question.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '36px' }}>
              {[
                'Ask about floor prices for any unit',
                'Check booking pace and demand signals',
                'Request pricing recommendations',
                'Identify orphan gaps and short-stay opportunities',
                'Get market compression alerts',
                'Ask about tower performance vs competitors',
                'Request revenue summaries anytime',
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.3)', margin: '0 0 2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Live Telegram Chat</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>OasisRevenueLabBot</p>
            </div>
            {queries.map((q, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ alignSelf: 'flex-end', background: 'rgba(196,150,50,0.15)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '12px 12px 4px 12px', padding: '10px 14px', maxWidth: '85%' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.5 }}>{q.msg}</p>
                </div>
                <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px 12px 12px 4px', padding: '10px 14px', maxWidth: '90%' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#c49632', margin: '0 0 4px', fontWeight: 600, letterSpacing: '0.04em' }}>Oasis Revenue Lab AI</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.55 }}>{q.reply}</p>
                </div>
              </div>
            ))}
            <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%' }} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Available 24/7 - responds in seconds</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
