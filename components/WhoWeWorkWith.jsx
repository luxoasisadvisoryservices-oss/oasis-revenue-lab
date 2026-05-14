'use client'

const audiences = [
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>), title: 'Individual Hosts', subtitle: '1–10 listings', description: 'Owners who want professional pricing discipline without hiring a revenue manager. The AI agent runs daily, monitors your floor, and flags what needs attention.', fits: ['AI-Only Agent', 'Consultancy'], color: '#2ebd72', scale: false },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>), title: 'Property Managers', subtitle: '10–50 listings', description: 'Growing portfolios that need portfolio-level intelligence without the overhead. One daily briefing covers every listing — no manual checking, no missed signals.', fits: ['AI-Only Agent', 'Hybrid Model'], color: '#b8903a', scale: false },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>), title: 'Holiday Homes Companies', subtitle: '50–200 listings', description: 'Established DTCM-licensed operators managing branded portfolios. The AI agent scales across your entire inventory — pricing intelligence at the speed your operation requires.', fits: ['Hybrid Model', 'Full Consultancy'], color: '#9b8fd4', scale: false },
  { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: 'Large-Scale Operators', subtitle: '200–500+ listings', description: 'The AI agent is built to scale. Operators managing hundreds of listings get the same granular daily intelligence across their entire portfolio — without adding headcount.', fits: ['AI-Only Agent', 'Enterprise Hybrid'], color: '#cc8e28', scale: true },
]

export default function WhoWeWorkWith() {
  const openWA = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I manage a portfolio and would like to discuss how Oasis Revenue Lab can help')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  return (
    <section id="who-we-work-with" style={{ background: 'linear-gradient(180deg, #f8f6f2 0%, #0e0e0e 6%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @media (max-width: 768px) {
          .who-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .who-bottom { flex-direction: column !important; align-items: flex-start !important; }
        }
        .audience-card { transition: all 0.3s cubic-bezier(0.22,1,0.36,1); }
        .audience-card:hover { transform: translateY(-5px); }
      `}</style>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 50% 100%, rgba(184,144,58,0.05) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(184,144,58,0.1)', border: '1px solid rgba(184,144,58,0.25)', borderRadius: '20px' }}>
            <div style={{ width: '5px', height: '5px', background: '#b8903a', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8903a' }}>Who We Work With</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 50px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: 'white', margin: '0 0 14px' }}>
            From 1 listing to 500.<br />The system scales with you.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)', margin: 0 }}>
            The AI Revenue Agent delivers the same intelligence quality at 5 listings or 500 — without adding operational cost as you grow.
          </p>
        </div>
        <div className="who-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '24px' }}>
          {audiences.map((audience) => (
            <div key={audience.title} className="audience-card" style={{ padding: '28px 24px', background: audience.scale ? 'rgba(184,144,58,0.06)' : 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: audience.scale ? '1px solid rgba(184,144,58,0.22)' : '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
              {audience.scale && (<div style={{ position: 'absolute', top: '-1px', left: '20px', background: 'linear-gradient(135deg, #b8903a, #96721e)', padding: '3px 12px', borderRadius: '0 0 8px 8px', fontFamily: 'DM Sans, sans-serif', fontSize: '9px', fontWeight: 600, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Enterprise Ready</div>)}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${audience.color}50, transparent)` }} />
              <div style={{ width: '42px', height: '42px', background: `${audience.color}12`, border: `1px solid ${audience.color}22`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: audience.color, marginBottom: '16px', marginTop: audience.scale ? '12px' : '0' }}>{audience.icon}</div>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, color: 'white', margin: '0 0 4px' }}>{audience.title}</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: audience.color, margin: '0 0 12px', fontWeight: 500 }}>{audience.subtitle}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.45)', margin: '0 0 16px' }}>{audience.description}</p>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', margin: '0 0 8px' }}>Best fit</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {audience.fits.map((fit) => (<span key={fit} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', padding: '3px 10px', background: `${audience.color}10`, border: `1px solid ${audience.color}20`, borderRadius: '20px', color: audience.color, fontWeight: 500 }}>{fit}</span>))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b8903a" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: '1px' }}><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.7 }}>
            <strong style={{ color: 'white', fontWeight: 500 }}>Why large operators choose AI over more headcount:</strong> A human revenue manager can actively manage 20 to 40 listings at best. The AI agent monitors 500 listings with the same consistency — every morning, every listing, no gaps.
          </p>
        </div>
        <div className="who-bottom" style={{ padding: '28px 32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,144,58,0.35), transparent)' }} />
          <div>
            <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '22px', fontWeight: 400, color: 'white', margin: '0 0 6px', letterSpacing: '-0.01em' }}>Managing a large portfolio? Let us talk about what scales.</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>Enterprise pricing available. Every enquiry handled personally.</p>
          </div>
          <button onClick={openWA} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', background: 'linear-gradient(135deg, #b8903a, #96721e)', color: 'white', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 4px 16px rgba(184,144,58,0.25)', transition: 'all 0.25s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(184,144,58,0.35)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(184,144,58,0.25)' }}
          >Talk on WhatsApp</button>
        </div>
      </div>
    </section>
  )
}
