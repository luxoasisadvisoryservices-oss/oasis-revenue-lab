'use client'

const problems = [
  {
    icon: '⌀',
    title: 'No floor price discipline',
    body: 'Most operators don\'t have a properly calculated minimum rate. They let occupancy anxiety drive prices below what\'s actually profitable.',
  },
  {
    icon: '≈',
    title: 'Static pricing that doesn\'t respond',
    body: 'A rate set once and left running isn\'t a pricing strategy. Markets move. Your prices should move with them—up and down at the right moments.',
  },
  {
    icon: '⚙',
    title: 'Generic automation with no judgment',
    body: 'PriceLabs and similar tools give you a framework. They don\'t give you a position. Without interpretation, automation just automates mistakes.',
  },
  {
    icon: '↗',
    title: 'Missed event and demand premiums',
    body: 'High-demand weekends, local events, and seasonal peaks get underpriced because no system flagged them in time. Those nights can carry the month.',
  },
  {
    icon: '⏱',
    title: 'Slow reaction to demand shifts',
    body: 'Markets move fast. A demand surge that lasts 72 hours can be entirely missed if your pricing logic updates weekly—or not at all.',
  },
  {
    icon: '≠',
    title: 'Occupancy as a proxy for revenue',
    body: 'High occupancy and high profit are not the same thing. Many operators fill calendars and wonder why margins are thin. The target is RevPAR, not occupancy rate.',
  },
]

export default function ProblemSection() {
  return (
    <section
      style={{
        background: 'var(--color-bg)',
        padding: '100px 0',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ maxWidth: '600px', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%' }} />
            <span
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}
            >
              Why This Exists
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-text-primary)',
              margin: '0 0 16px',
            }}
          >
            Most STR operators are flying without instruments.
          </h2>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'var(--color-text-secondary)',
              margin: 0,
            }}
          >
            Revenue management is treated like a settings page—not a discipline. These are the problems we see across nearly every portfolio we work with.
          </p>
        </div>

        {/* Problem cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {problems.map((problem) => (
            <div
              key={problem.title}
              style={{
                display: 'flex',
                gap: '16px',
                padding: '24px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                e.currentTarget.style.background = 'var(--color-surface-muted)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)'
                e.currentTarget.style.background = 'var(--color-surface)'
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: '36px',
                  height: '36px',
                  background: 'var(--color-surface-muted)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Georgia, serif',
                  fontSize: '18px',
                  color: 'var(--color-text-muted)',
                }}
              >
                {problem.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    margin: '0 0 6px',
                  }}
                >
                  {problem.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: 'var(--color-text-secondary)',
                    margin: 0,
                  }}
                >
                  {problem.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div
          style={{
            marginTop: '48px',
            padding: '32px',
            background: 'linear-gradient(135deg, var(--color-surface-muted), var(--color-surface))',
            border: '1px solid var(--color-border)',
            borderRadius: '14px',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '26px',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              margin: '0 0 10px',
            }}
          >
            These aren't technology problems. They're discipline problems.
          </h3>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: 'var(--color-text-secondary)',
              margin: '0 0 24px',
              maxWidth: '520px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.65,
            }}
          >
            The right system—combining AI monitoring with real revenue expertise—makes these disciplines automatic.
          </p>
          <a
            href="#pricing"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'var(--color-dark)',
              color: 'white',
              borderRadius: '8px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(13,21,32,0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            See how Oasis Revenue Lab solves this →
          </a>
        </div>
      </div>
    </section>
  )
}
