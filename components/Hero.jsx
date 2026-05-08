'use client'

const WHATSAPP_AGENT = 'https://wa.me/971585089283?text=Hi%2C%20I%27d%20like%20to%20discuss%20my%20portfolio%20with%20Oasis%20Revenue%20Lab'
const WHATSAPP_CALC = 'https://wa.me/971585089283?text=Hi%2C%20I%27d%20like%20to%20request%20the%20free%20floor%20price%20calculator'

function DashboardMockup() {
  return (
    <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(13,21,32,0.25)', border: '1px solid #e8dfd0' }}>
      <div style={{ background: '#1a3a5c', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', background: 'white', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontSize: '14px' }}>📊</span>
        </div>
        <div>
          <p style={{ color: 'white', fontSize: '14px', fontWeight: 700, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Daily Revenue Intelligence Report</p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Portfolio · Thursday 07 May 2026 · Confidential</p>
        </div>
      </div>

      <div style={{ padding: '16px 20px', background: '#f8f9fa', borderBottom: '1px solid #e8dfd0' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#1a3a5c', margin: '0 0 10px', letterSpacing: '0.08em' }}>PORTFOLIO OVERVIEW</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
          {[
            { label: 'REVENUE 30D', value: 'AED 38,400', color: '#1a3a5c' },
            { label: 'AVG OCCUPANCY', value: '74%', color: '#1a3a5c' },
            { label: 'AVG MPI 30D', value: '1.32', color: '#c49632' },
            { label: 'LISTINGS', value: '4', color: '#1a3a5c' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'white', border: '1px solid #e8dfd0', borderRadius: '6px', padding: '10px 8px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: '#8a8076', margin: '0 0 4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: s.color, margin: 0 }}>{s.value}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
          {[
            { label: '1 Critical', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
            { label: '1 Action Needed', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
            { label: '1 Opportunity', color: '#c49632', bg: 'rgba(196,150,50,0.1)' },
            { label: '1 On Track', color: '#4ade80', bg: 'rgba(74,222,128,0.1)' },
          ].map((b) => (
            <div key={b.label} style={{ padding: '4px 10px', background: b.bg, borderRadius: '4px' }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: b.color }}>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '14px 20px', borderBottom: '1px solid #e8dfd0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#1a3a5c', margin: '0 0 1px' }}>Luxury 2 Bedroom — Marina View</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#8a8076', margin: 0 }}>Dubai Marina · 2BR · Floor 28</p>
          </div>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#4ade80', background: 'rgba(74,222,128,0.1)', padding: '3px 8px', borderRadius: '4px' }}>ON TRACK</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '4px', marginBottom: '8px' }}>
          {[
            { metric: 'Occ next 30d', value: '82%', bench: 'Market: 61%' },
            { metric: 'ADR', value: 'AED 920', bench: 'Floor: AED 680' },
            { metric: 'MPI 30d', value: '1.61', bench: 'Outperforming' },
            { metric: 'Rev 30d', value: 'AED 14,800', bench: 'YoY +18%' },
          ].map((r) => (
            <div key={r.metric} style={{ background: '#f8f9fa', borderRadius: '4px', padding: '8px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: '#8a8076', margin: '0 0 2px' }}>{r.metric}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 2px' }}>{r.value}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: '#4ade80', margin: 0 }}>{r.bench}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '8px 12px', background: 'rgba(74,222,128,0.05)', border: '1px solid rgba(74,222,128,0.2)', borderRadius: '6px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', fontWeight: 600, margin: '0 0 2px' }}>Strong weekend demand — MPI accelerating 1.4 to 1.8 in 3d</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#5a5248', margin: 0 }}>PriceLabs AED 1,050-1,180 Fri-Sat verified correct. Consider testing ceiling +8% next weekend.</p>
        </div>
      </div>

      <div style={{ padding: '14px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#1a3a5c', margin: '0 0 1px' }}>Stunning View 1 Bedroom — JBR</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#8a8076', margin: 0 }}>JBR · 1BR · Beachfront</p>
          </div>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 700, color: '#f59e0b', background: 'rgba(245,158,11,0.1)', padding: '3px 8px', borderRadius: '4px' }}>ACTION NEEDED</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '4px', marginBottom: '8px' }}>
          {[
            { metric: 'Occ next 30d', value: '58%', bench: 'Market: 61%' },
            { metric: 'ADR', value: 'AED 620', bench: 'Floor: AED 480' },
            { metric: 'MPI 30d', value: '0.94', bench: 'Slight lag' },
            { metric: 'Rev 30d', value: 'AED 10,850', bench: 'Opportunity' },
          ].map((r) => (
            <div key={r.metric} style={{ background: '#f8f9fa', borderRadius: '4px', padding: '8px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: '#8a8076', margin: '0 0 2px' }}>{r.metric}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 2px' }}>{r.value}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: '#f59e0b', margin: 0 }}>{r.bench}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '8px 12px', background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: '6px', marginBottom: '8px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#f59e0b', fontWeight: 600, margin: '0 0 2px' }}>3 unsold nights Mon-Wed next week — last-minute rules review needed</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#5a5248', margin: 0 }}>MPI 7d at 1.2 — demand exists. Orphan gap Thu-Fri needs min-stay adjustment to fill.</p>
        </div>
        <div style={{ padding: '6px 12px', background: '#f8f9fa', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '6px', height: '6px', background: '#8a8076', borderRadius: '50%', flexShrink: 0 }} />
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#8a8076', margin: 0, fontStyle: 'italic' }}>Illustrative report — see live Telegram output below</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{ paddingTop: '140px', paddingBottom: '100px', background: '#faf8f5', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>AI Revenue Intelligence - Dubai</span>
            </div>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(38px, 5vw, 60px)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 20px' }}>
              Smarter pricing decisions without living inside PriceLabs.
            </h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: '0 0 12px', maxWidth: '480px' }}>
              Oasis Revenue Lab combines AI monitoring, floor-price discipline, and real revenue consultancy so STR operators protect margins and move faster on every pricing decision.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: 1.65, color: '#5a5248', margin: '0 0 32px', maxWidth: '480px' }}>
              Not just software. Built by operators who actually run short-term rental portfolios in Dubai.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
              <button
                onClick={() => window.open(WHATSAPP_AGENT, '_blank')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: '#0d1520', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, border: 'none', cursor: 'pointer' }}
              >
                Discuss My Portfolio
              </button>
              <button
                onClick={() => window.location.href = '#pricing'}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: 'transparent', color: '#1a1a1a', borderRadius: '8px', border: '1.5px solid #d5c5aa', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400, cursor: 'pointer' }}
              >
                View Offers
              </button>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#8a8076', margin: 0 }}>
              Want the free floor price calculator?{' '}
              <button onClick={() => window.open(WHATSAPP_CALC, '_blank')} style={{ color: '#c49632', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, padding: 0 }}>
                Request it here
              </button>
            </p>
          </div>
          <div>
            <DashboardMockup />
          </div>
        </div>
        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid #e8dfd0', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          {[
            { icon: '🏙️', text: 'Built from live Dubai STR operations' },
            { icon: '🤖', text: 'AI-powered and updated daily' },
            { icon: '🧠', text: 'Real operator expertise behind every signal' },
            { icon: '📊', text: 'Floor-price discipline built in' },
          ].map((item) => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '15px' }}>{item.icon}</span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#8a8076' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
