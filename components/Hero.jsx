'use client'

import { useEffect, useRef } from 'react'

const WA = 'https://wa.me/971585089283'

function StatCard({ label, value, sub, color = '#4ade80' }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '12px',
      padding: '14px 16px',
      transition: 'all 0.25s ease',
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
        e.currentTarget.style.borderColor = 'rgba(196,150,50,0.25)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.35)', margin: '0 0 6px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</p>
      <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '22px', fontWeight: 500, color: 'white', margin: '0 0 3px', lineHeight: 1 }}>{value}</p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color, margin: 0, fontWeight: 500 }}>{sub}</p>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div style={{
      background: 'rgba(13,21,32,0.8)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid rgba(196,150,50,0.2)',
      boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
    }}>

      <div style={{
        background: 'linear-gradient(135deg, #1a2535, #0d1520)',
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '28px', height: '28px',
            background: 'linear-gradient(135deg, #c49632, #a87d22)',
            borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(196,150,50,0.3)',
          }}>
            <span style={{ fontSize: '13px' }}>📊</span>
          </div>
          <div>
            <p style={{ color: 'white', fontSize: '12px', fontWeight: 600, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Daily Revenue Intelligence</p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Thu 07 May 2026 · 09:45 GST</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '7px', height: '7px', background: '#4ade80', borderRadius: '50%', animation: 'glow-pulse 2s infinite' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#4ade80' }}>Live</span>
        </div>
      </div>

      <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
          <StatCard label="Revenue 30d" value="AED 38,400" sub="↑ 12% vs last month" color="#4ade80" />
          <StatCard label="Avg Occupancy" value="74%" sub="Market: 61%" color="#4ade80" />
          <StatCard label="MPI 30d" value="1.32" sub="Outperforming" color="#c49632" />
          <StatCard label="Portfolio" value="4 units" sub="All monitored" color="rgba(255,255,255,0.4)" />
        </div>
      </div>

      <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: 'white', margin: '0 0 2px' }}>Luxury 2 Bedroom — Marina View</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Dubai Marina · Floor 28 · 2BR</p>
          </div>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600,
            color: '#4ade80', background: 'rgba(74,222,128,0.1)',
            border: '1px solid rgba(74,222,128,0.2)',
            padding: '3px 10px', borderRadius: '20px',
          }}>ON TRACK</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '6px', marginBottom: '10px' }}>
          {[
            { metric: 'Occupancy', value: '82%', bench: 'Market 61%', color: '#4ade80' },
            { metric: 'ADR', value: 'AED 920', bench: 'Floor AED 680', color: 'rgba(255,255,255,0.5)' },
            { metric: 'MPI 30d', value: '1.61', bench: 'Outperforming', color: '#4ade80' },
            { metric: 'Rev 30d', value: 'AED 14,800', bench: 'YoY +18%', color: '#4ade80' },
          ].map((r) => (
            <div key={r.metric} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '8px 10px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.3)', margin: '0 0 3px' }}>{r.metric}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: 'white', margin: '0 0 2px' }}>{r.value}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: r.color, margin: 0 }}>{r.bench}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '8px 12px', background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.15)', borderRadius: '8px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', fontWeight: 500, margin: '0 0 2px' }}>Weekend demand strong — MPI accelerating</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>PriceLabs AED 1,050-1,180 Fri-Sat verified. Consider ceiling +8% next Fri.</p>
        </div>
      </div>

      <div style={{ padding: '14px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: 'white', margin: '0 0 2px' }}>Stunning View 1 Bedroom — JBR</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>JBR · Beachfront · 1BR</p>
          </div>
          <span style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600,
            color: '#f59e0b', background: 'rgba(245,158,11,0.1)',
            border: '1px solid rgba(245,158,11,0.2)',
            padding: '3px 10px', borderRadius: '20px',
          }}>ACTION NEEDED</span>
        </div>
        <div style={{ padding: '8px 12px', background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: '8px', marginBottom: '8px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#f59e0b', fontWeight: 500, margin: '0 0 2px' }}>3 unsold nights Mon-Wed — act now</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>Orphan gap Thu-Fri needs min-stay adjustment to 2 nights.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 10px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
          <div style={{ width: '5px', height: '5px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', flexShrink: 0 }} />
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.25)', margin: 0, fontStyle: 'italic' }}>Illustrative — see live Telegram output below</p>
        </div>
      </div>

    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  const openAgent = () => window.open(WA + '?text=' + encodeURIComponent('Hi, I would like to discuss my STR portfolio and learn about Oasis Revenue Lab'), '_blank')
  const openCalc = () => window.open(WA + '?text=' + encodeURIComponent('Hi, I would like to receive the free STR Pricing Floor Calculator'), '_blank')
  const scrollToCalc = () => {
    const el = document.getElementById('calculator')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      background: 'linear-gradient(180deg, #0d1520 0%, #0f1c2d 60%, #111820 100%)',
      paddingTop: '130px',
      paddingBottom: '100px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-trust { gap: 16px !important; flex-direction: column !important; align-items: flex-start !important; }
          .hero-trust-item { width: 100% !important; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div className="orb-gold" style={{ width: '600px', height: '600px', top: '-100px', left: '-100px', opacity: 0.6 }} />
      <div className="orb-gold" style={{ width: '400px', height: '400px', bottom: '0', right: '10%', opacity: 0.4 }} />
      <div className="orb-blue" style={{ width: '500px', height: '500px', top: '20%', right: '5%', opacity: 0.5 }} />

      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none', opacity: 0.4 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', width: '100%' }} ref={heroRef}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', padding: '6px 14px', background: 'rgba(196,150,50,0.1)', border: '1px solid rgba(196,150,50,0.25)', borderRadius: '20px' }}>
              <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%', animation: 'pulse-gold 2s infinite' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632' }}>AI Revenue Intelligence · Dubai</span>
            </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'white',
              margin: '0 0 8px',
            }}>
              Your daily AI
            </h1>
            <h1 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              margin: '0 0 24px',
              background: 'linear-gradient(90deg, #c49632 0%, #f0c050 50%, #c49632 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmer 4s linear infinite',
            }}>
              revenue manager.
            </h1>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', margin: '0 0 12px', maxWidth: '460px' }}>
              Oasis Revenue Lab monitors your listings every morning — verifying pricing, reading market signals, protecting your floor, and telling you exactly what to do.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.4)', margin: '0 0 36px', maxWidth: '460px' }}>
              Not a SaaS dashboard. Built by operators who run live Dubai STR portfolios every day.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <button
                onClick={openAgent}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 28px',
                  background: 'linear-gradient(135deg, #c49632, #a87d22)',
                  color: 'white', borderRadius: '10px',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500,
                  border: 'none', cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(196,150,50,0.35)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(196,150,50,0.45)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,150,50,0.35)' }}
              >
                Discuss My Portfolio
              </button>
              <button
                onClick={() => window.location.href = '#pricing'}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 28px',
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                  color: 'rgba(255,255,255,0.8)', borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)' }}
              >
                View Offers
              </button>
            </div>

            <div style={{
              padding: '14px 18px',
              background: 'rgba(196,150,50,0.07)',
              border: '1px solid rgba(196,150,50,0.2)',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '12px', marginBottom: '36px',
              backdropFilter: 'blur(8px)',
            }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: 'white', margin: '0 0 2px' }}>Not sure what your floor price should be?</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Free Excel calculator — no sign-up required</p>
              </div>
              <button
                onClick={scrollToCalc}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '8px 16px',
                  background: 'rgba(196,150,50,0.15)',
                  border: '1px solid rgba(196,150,50,0.3)',
                  color: '#c49632', borderRadius: '8px',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500,
                  cursor: 'pointer', whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(196,150,50,0.25)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(196,150,50,0.15)' }}
              >
                Get Free Calculator
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>

            <div className="hero-trust" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              {[
                { icon: '🏙️', text: 'Live Dubai STR operations' },
                { icon: '🤖', text: 'AI updated daily' },
                { icon: '🧠', text: 'Real operator expertise' },
                { icon: '📊', text: 'Floor-price protected' },
              ].map((item) => (
                <div key={item.text} className="hero-trust-item" style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ fontSize: '14px' }}>{item.icon}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ animation: 'float 8s ease-in-out infinite' }}>
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
