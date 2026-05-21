'use client'

import { useEffect, useRef } from 'react'

const WA = 'https://wa.me/971585089283'

function StatCard({ label, value, sub, color = '#2ebd72' }) {
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
        e.currentTarget.style.borderColor = 'rgba(184,144,58,0.25)'
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
      background: 'rgba(20,20,20,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid rgba(184,144,58,0.2)',
      boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
    }}>
      <div style={{ background: 'linear-gradient(135deg, #1e1e1e, #141414)', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #b8903a, #96721e)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(184,144,58,0.3)' }}>
            <span style={{ fontSize: '13px' }}>📊</span>
          </div>
          <div>
            <p style={{ color: 'white', fontSize: '12px', fontWeight: 600, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Daily Revenue Intelligence</p>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Thu 07 May 2026 · 09:45 GST</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '7px', height: '7px', background: '#2ebd72', borderRadius: '50%' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#2ebd72' }}>Live</span>
        </div>
      </div>

      <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
          <StatCard label="Revenue 30d" value="AED 38,400" sub="↑ 12% vs last month" color="#2ebd72" />
          <StatCard label="Avg Occupancy" value="74%" sub="Market: 61%" color="#2ebd72" />
          <StatCard label="MPI 30d" value="1.32" sub="Outperforming" color="#b8903a" />
          <StatCard label="Portfolio" value="4 units" sub="All monitored" color="rgba(255,255,255,0.4)" />
        </div>
      </div>

      <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: 'white', margin: '0 0 2px' }}>Luxury 2 Bedroom — Marina View</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Dubai Marina · Floor 28 · 2BR</p>
          </div>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: '#2ebd72', background: 'rgba(46,189,114,0.1)', border: '1px solid rgba(46,189,114,0.2)', padding: '3px 10px', borderRadius: '20px' }}>ON TRACK</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '6px', marginBottom: '10px' }}>
          {[
            { metric: 'Occupancy', value: '82%', bench: 'Market 61%', color: '#2ebd72' },
            { metric: 'ADR', value: 'AED 920', bench: 'Floor AED 680', color: 'rgba(255,255,255,0.5)' },
            { metric: 'MPI 30d', value: '1.61', bench: 'Outperforming', color: '#2ebd72' },
            { metric: 'Rev 30d', value: 'AED 14,800', bench: 'YoY +18%', color: '#2ebd72' },
          ].map((r) => (
            <div key={r.metric} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '8px 10px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: 'rgba(255,255,255,0.3)', margin: '0 0 3px' }}>{r.metric}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: 'white', margin: '0 0 2px' }}>{r.value}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: r.color, margin: 0 }}>{r.bench}</p>
            </div>
          ))}
        </div>
        <div style={{ padding: '8px 12px', background: 'rgba(46,189,114,0.06)', border: '1px solid rgba(46,189,114,0.15)', borderRadius: '8px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#2ebd72', fontWeight: 500, margin: '0 0 2px' }}>Weekend demand strong — MPI accelerating</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: 0 }}>PriceLabs AED 1,050-1,180 Fri-Sat verified. Consider ceiling +8% next Fri.</p>
        </div>
      </div>

      <div style={{ padding: '14px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: 'white', margin: '0 0 2px' }}>Stunning View 1 Bedroom — JBR</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>JBR · Beachfront · 1BR</p>
          </div>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: '#cc8e28', background: 'rgba(204,142,40,0.1)', border: '1px solid rgba(204,142,40,0.2)', padding: '3px 10px', borderRadius: '20px' }}>ACTION NEEDED</span>
        </div>
        <div style={{ padding: '8px 12px', background: 'rgba(204,142,40,0.06)', border: '1px solid rgba(204,142,40,0.15)', borderRadius: '8px', marginBottom: '8px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#cc8e28', fontWeight: 500, margin: '0 0 2px' }}>3 unsold nights Mon-Wed — act now</p>
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
  const scrollToCalc = () => {
    const el = document.getElementById('calculator')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={{
      background: 'linear-gradient(180deg, #0e0e0e 0%, #111111 60%, #141414 100%)',
      paddingTop: '130px', paddingBottom: '100px',
      position: 'relative', overflow: 'hidden',
      minHeight: '100vh', display: 'flex', alignItems: 'center',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-trust { gap: 16px !important; flex-direction: column !important; align-items: flex-start !important; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div className="orb-gold" style={{ width: '600px', height: '600px', top: '-100px', left: '-100px', opacity: 0.5 }} />
      <div className="orb-gold" style={{ width: '400px', height: '400px', bottom: '0', right: '10%', opacity: 0.3 }} />
      <div className="orb-grey" style={{ width: '500px', height: '500px', top: '20%', right: '5%', opacity: 0.4 }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none', opacity: 0.3 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', width: '100%' }} ref={heroRef}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px', padding: '6px 14px', background: 'rgba(184,144,58,0.1)', border: '1px solid rgba(184,144,58,0.25)', borderRadius: '20px' }}>
              <div style={{ width: '6px', height: '6px', background: '#b8903a', borderRadius: '50%', animation: 'pulse-gold 2s infinite' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8903a' }}>AI Revenue Intelligence · Dubai</span>
            </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(38px, 5vw, 62px)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'white',
              margin: '0 0 16px',
            }}>
              Stop guessing whether<br />your prices are right.
            </h1>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 500,
              color: '#b8903a',
              margin: '0 0 16px',
              letterSpacing: '0.01em',
            }}>
              Your Dubai revenue analyst — every morning, in your Telegram.
            </p>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 12px',
              maxWidth: '460px',
            }}>
              Daily revenue calls with reasons, confidence, and outcomes — built by a Dubai STR operator, for Dubai STR operators.
            </p>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.32)',
              margin: '0 0 36px',
              maxWidth: '460px',
            }}>
              Not a SaaS dashboard. Built by operators who run live Dubai STR portfolios every day.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <button
                onClick={openAgent}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'linear-gradient(135deg, #b8903a, #96721e)', color: 'white', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(184,144,58,0.3)', transition: 'all 0.25s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(184,144,58,0.4)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(184,144,58,0.3)' }}
              >
                Discuss My Portfolio
              </button>
              <button
                onClick={() => window.location.href = '#pricing'}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 28px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(8px)', color: 'rgba(255,255,255,0.75)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400, cursor: 'pointer', transition: 'all 0.25s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                View Offers
              </button>
            </div>

            <div style={{ padding: '14px 18px', background: 'rgba(184,144,58,0.07)', border: '1px solid rgba(184,144,58,0.18)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: 'white', margin: '0 0 2px' }}>Not sure what your floor price should be?</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.35)', margin: 0 }}>Free Excel calculator — no sign-up required</p>
              </div>
              <button
                onClick={scrollToCalc}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: 'rgba(184,144,58,0.14)', border: '1px solid rgba(184,144,58,0.28)', color: '#b8903a', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(184,144,58,0.24)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(184,144,58,0.14)' }}
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
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ fontSize: '14px' }}>{item.icon}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>{item.text}</span>
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
