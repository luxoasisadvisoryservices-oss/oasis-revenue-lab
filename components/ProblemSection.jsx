'use client'

const problems = [
  {
    icon: '⌀',
    title: 'No floor price discipline',
    body: 'Most operators do not have a properly calculated minimum rate. They let occupancy anxiety drive prices below what is actually profitable.',
    color: '#ef4444',
  },
  {
    icon: '≈',
    title: 'Static pricing that does not respond',
    body: 'A rate set once and left running is not a pricing strategy. Markets move. Your prices should move with them — up and down at the right moments.',
    color: '#f59e0b',
  },
  {
    icon: '⚙',
    title: 'Generic automation with no judgment',
    body: 'PriceLabs and similar tools give you a framework. They do not give you a position. Without interpretation, automation just automates mistakes.',
    color: '#818cf8',
  },
  {
    icon: '↗',
    title: 'Missed event and demand premiums',
    body: 'High-demand weekends, local events, and seasonal peaks get underpriced because no system flagged them in time. Those nights can carry the month.',
    color: '#c49632',
  },
  {
    icon: '⏱',
    title: 'Slow reaction to demand shifts',
    body: 'Markets move fast. A demand surge that lasts 72 hours can be entirely missed if your pricing logic updates weekly — or not at all.',
    color: '#f59e0b',
  },
  {
    icon: '≠',
    title: 'Occupancy as a proxy for revenue',
    body: 'High occupancy and high profit are not the same thing. Many operators fill calendars and wonder why margins are thin. The target is RevPAR, not occupancy rate.',
    color: '#4ade80',
  },
]

export default function ProblemSection() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #f4f0e8 0%, #faf8f5 4%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .problems-grid { grid-template-columns: 1fr !important; }
        }
        .problem-card {
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .problem-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08) !important;
          border-color: #d5c5aa !important;
        }
      `}</style>

      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(196,150,50,0.05) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ maxWidth: '600px', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '20px' }}>
            <div style={{ width: '5px', height: '5px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632' }}>Why This Exists</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 16px' }}>
            Most STR operators are flying without instruments.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.7, color: '#5a5248', margin: 0 }}>
            Revenue management is treated like a settings page — not a discipline. These are the problems we see across nearly every portfolio we work with.
          </p>
        </div>

        <div className="problems-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="problem-card"
              style={{
                padding: '24px',
                background: 'white',
                border: '1px solid #e8dfd0',
                borderRadius: '16px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${problem.color}40, transparent)` }} />
              <div style={{
                width: '40px', height: '40px',
                background: `${problem.color}10`,
                border: `1px solid ${problem.color}25`,
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '14px',
                fontFamily: 'Georgia, serif',
                fontSize: '18px',
                color: problem.color,
              }}>
                {problem.icon}
              </div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 8px' }}>{problem.title}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>{problem.body}</p>
            </div>
          ))}
        </div>

        <div style={{
          padding: '32px 36px',
          background: 'linear-gradient(135deg, #0d1520, #1a2535)',
          borderRadius: '16px',
          textAlign: 'center',
          border: '1px solid rgba(196,150,50,0.15)',
          boxShadow: '0 16px 48px rgba(13,21,32,0.12)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #c49632, transparent)' }} />
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 400, color: 'white', margin: '0 0 10px', letterSpacing: '-0.01em' }}>
            These are not technology problems. They are discipline problems.
          </h3>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.5)', margin: '0 0 24px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
            The right system — combining AI monitoring with real revenue expertise — makes these disciplines automatic.
          </p>
          <button
            onClick={() => window.location.href = '#pricing'}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 28px',
              background: 'linear-gradient(135deg, #c49632, #a87d22)',
              color: 'white', borderRadius: '10px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
              border: 'none', cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(196,150,50,0.3)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,150,50,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(196,150,50,0.3)' }}
          >
            See how Oasis Revenue Lab solves this
          </button>
        </div>

      </div>
    </section>
  )
}
