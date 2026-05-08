'use client'

export default function CTASection() {
  const openWA = (msg) => {
    const n = '971585089283'
    window.open('https://wa.me/' + n + '?text=' + encodeURIComponent(msg), '_blank')
  }

  const openEmail = () => {
    window.location.href = 'mailto:info@luxoasisadvisory.com?subject=' + encodeURIComponent('Oasis Revenue Lab Enquiry')
  }

  const openCalc = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I would like to request the free STR Pricing Floor Calculator')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  return (
    <section id="contact" style={{ background: '#faf8f5', padding: '100px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Get Started</span>
        </div>

        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(34px, 5vw, 60px)', fontWeight: 500, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 20px' }}>
          Want a smarter revenue system for your listings?
        </h2>

        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: '0 0 40px', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
          Every conversation starts with understanding your portfolio. No pitches, no pressure — just a direct look at what is possible.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', marginBottom: '20px' }}>
          <button
            onClick={() => openWA('Hi, I would like to discuss my portfolio with Oasis Revenue Lab')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 32px', background: '#0d1520', color: 'white', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500, border: 'none', cursor: 'pointer' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Talk on WhatsApp
          </button>

          <button
            onClick={openEmail}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '15px 32px', background: 'transparent', color: '#1a1a1a', borderRadius: '10px', border: '1.5px solid #d5c5aa', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 400, cursor: 'pointer' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an Email
          </button>
        </div>

        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#8a8076' }}>
          Just want the free floor price calculator?{' '}
          <button onClick={openCalc} style={{ color: '#c49632', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, padding: 0 }}>
            Request it here
          </button>
        </p>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #d5c5aa, transparent)', margin: '48px 0' }} />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <div style={{ width: '28px', height: '28px', background: '#0d1520', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="#c49632" fillOpacity="0.9" />
              <circle cx="8" cy="8" r="2.5" fill="white" fillOpacity="0.9" />
            </svg>
          </div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#8a8076', margin: 0 }}>
            Oasis Revenue Lab is a division of{' '}
            <span style={{ color: '#5a5248', fontWeight: 500 }}>Lux Oasis Advisory &amp; Services LLC</span>
            {' '}— UAE registered, DTCM compliant.
          </p>
        </div>

      </div>
    </section>
  )
}
