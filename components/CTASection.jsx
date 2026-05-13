'use client'

export default function CTASection() {
  const openWA = (msg) => {
    const n = '971585089283'
    window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(msg), '_blank')
  }

  const openEmail = () => {
    window.location.href = 'mailto:info@luxoasisadvisory.com?subject=' + encodeURIComponent('Oasis Revenue Lab Enquiry')
  }

  const scrollToCalc = () => {
    const el = document.getElementById('calculator')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="contact" style={{
      background: 'linear-gradient(180deg, #0d1520 0%, #0d1520 100%)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .cta-buttons { flex-direction: column !important; align-items: stretch !important; }
          .cta-buttons button { justify-content: center !important; }
          .cta-trust { flex-direction: column !important; gap: 12px !important; }
        }
      `}</style>

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(196,150,50,0.06) 0%, transparent 65%)', pointerEvents: 'none', filter: 'blur(60px)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(196,150,50,0.3), transparent)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '28px', padding: '6px 16px', background: 'rgba(196,150,50,0.1)', border: '1px solid rgba(196,150,50,0.25)', borderRadius: '20px' }}>
          <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%', animation: 'pulse-gold 2s infinite' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632' }}>Get Started</span>
        </div>

        <h2 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: 'white',
          margin: '0 0 8px',
        }}>
          Want a smarter revenue
        </h2>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 400,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          margin: '0 0 28px',
          background: 'linear-gradient(90deg, #c49632 0%, #f0c050 50%, #c49632 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmer 4s linear infinite',
        }}>
          system for your listings?
        </h2>

        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)', margin: '0 0 48px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          Every conversation starts with understanding your portfolio. No pitches, no pressure — just a direct look at what is possible.
        </p>

        <div className="cta-buttons" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', marginBottom: '24px' }}>
          <button
            onClick={() => openWA('Hi, I would like to discuss my portfolio with Oasis Revenue Lab')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #c49632, #a87d22)',
              color: 'white', borderRadius: '12px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500,
              border: 'none', cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(196,150,50,0.35)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(196,150,50,0.45)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(196,150,50,0.35)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Talk on WhatsApp
          </button>

          <button
            onClick={openEmail}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '16px 36px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(8px)',
              color: 'rgba(255,255,255,0.75)', borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.12)',
              fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 400,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an Email
          </button>
        </div>

        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginBottom: '64px' }}>
          Just want the free floor price calculator?{' '}
          <button
            onClick={scrollToCalc}
            style={{ color: '#c49632', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, padding: 0, transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f0c050')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#c49632')}
          >
            Request it here
          </button>
        </p>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(196,150,50,0.3), transparent)', marginBottom: '40px' }} />

        <div className="cta-trust" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { icon: '🏙️', text: 'Live Dubai STR operations' },
            { icon: '🤖', text: 'AI updated daily' },
            { icon: '🧠', text: 'Real revenue expertise' },
            { icon: '📊', text: 'Floor-price protected' },
          ].map((item) => (
            <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '14px' }}>{item.icon}</span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
