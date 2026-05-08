'use client'

const problems = [
  {
    icon: '⌀',
    title: 'No floor price discipline',
    body: 'Most operators do not have a properly calculated minimum rate. They let occupancy anxiety drive prices below what is actually profitable.',
  },
  {
    icon: '≈',
    title: 'Static pricing that does not respond',
    body: 'A rate set once and left running is not a pricing strategy. Markets move. Your prices should move with them — up and down at the right moments.',
  },
  {
    icon: '⚙',
    title: 'Generic automation with no judgment',
    body: 'PriceLabs and similar tools give you a framework. They do not give you a position. Without interpretation, automation just automates mistakes.',
  },
  {
    icon: '↗',
    title: 'Missed event and demand premiums',
    body: 'High-demand weekends, local events, and seasonal peaks get underpriced because no system flagged them in time. Those nights can carry the month.',
  },
  {
    icon: '⏱',
    title: 'Slow reaction to demand shifts',
    body: 'Markets move fast. A demand surge that lasts 72 hours can be entirely missed if your pricing logic updates weekly — or not at all.',
  },
  {
    icon: '≠',
    title: 'Occupancy as a proxy for revenue',
    body: 'High occupancy and high profit are not the same thing. Many operators fill calendars and wonder why margins are thin. The target is RevPAR, not occupancy rate.',
  },
]

export default function ProblemSection() {
  return (
    <section style={{ background: '#faf8f5', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ maxWidth: '600px', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Why This Exists</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 16px' }}>
            Most STR operators are flying without instruments.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            Revenue management is treated like a settings page — not a discipline. These are the problems we see across nearly every portfolio we work with.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
          {problems.map((problem) => (
            <div
              key={problem.title}
              style={{ display: 'flex', gap: '16px', padding: '24px', background: 'white', border: '1px solid #e8dfd0', borderRadius: '12px', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#d5c5aa'; e.currentTarget.style.background = '#f4f0e8' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e8dfd0'; e.currentTarget.style.background = 'white' }}
            >
              <div style={{ flexShrink: 0, width: '36px', height: '36px', background: '#f4f0e8', border: '1px solid #e8dfd0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: '18px', color: '#8a8076' }}>
                {problem.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 6px' }}>{problem.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>{problem.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', padding: '32px', background: 'linear-gradient(135deg, #f4f0e8, white)', border: '1px solid #e8dfd0', borderRadius: '14px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '26px', fontWeight: 500, color: '#1a1a1a', margin: '0 0 10px' }}>
            These are not technology problems. They are discipline problems.
          </h3>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 300, color: '#5a5248', margin: '0 0 24px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
            The right system — combining AI monitoring with real revenue expertise — makes these disciplines automatic.
          </p>
          <button
            onClick={() => window.location.href = '#pricing'}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#0d1520', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer' }}
          >
            See how Oasis Revenue Lab solves this
          </button>
        </div>

      </div>
    </section>
  )
}
