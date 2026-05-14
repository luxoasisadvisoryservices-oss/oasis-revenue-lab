'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const openWA = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I would like to learn more about Oasis Revenue Lab')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  const openEmail = () => { window.location.href = 'mailto:info@luxoasisadvisory.com' }

  const links = {
    Product: [
      { label: 'AI Revenue Agent', href: '#features' },
      { label: 'Consultancy', href: '#consultancy' },
      { label: 'Hybrid Model', href: '#hybrid' },
      { label: 'Pricing', href: '#pricing' },
    ],
    Resources: [
      { label: 'Free Floor Calculator', href: '#calculator' },
      { label: 'Who We Are', href: '#about' },
      { label: 'Global Markets', href: '#global' },
      { label: 'Credentials', href: '#credentials' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms and Conditions', href: '/terms' },
    ],
  }

  return (
    <footer style={{ background: '#080808', padding: '72px 0 32px', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .footer-bottom { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .footer-bottom-links { flex-wrap: wrap !important; gap: 12px !important; }
        }
        .footer-link-btn { transition: color 0.2s ease; }
        .footer-link-btn:hover { color: white !important; }
        .footer-contact-btn { transition: all 0.25s ease; }
        .footer-contact-btn:hover { border-color: rgba(184,144,58,0.35) !important; color: #b8903a !important; }
      `}</style>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,144,58,0.2), transparent)' }} />
      <div style={{ position: 'absolute', bottom: '30%', right: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(184,144,58,0.04) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '48px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(184,144,58,0.18)', flexShrink: 0 }}>
                <Image src="/Logo.jpg" alt="Oasis Revenue Lab" width={36} height={36} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '16px', fontWeight: 500, color: 'white', margin: 0, letterSpacing: '-0.01em' }}>Oasis Revenue Lab</p>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.22)', margin: '0 0 3px' }}>A division of</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: '0 0 6px', fontWeight: 400 }}>Lux Oasis Advisory &amp; Services LLC</p>
            <button onClick={() => window.open('https://luxoasisadvisory.com', '_blank')} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#b8903a', background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 16px', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e0b850')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#b8903a')}
            >
              luxoasisadvisory.com ↗
            </button>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.28)', margin: '0 0 24px', maxWidth: '260px' }}>
              AI-powered revenue intelligence and real consultancy for STR operators. Built in Dubai.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button onClick={openWA} className="footer-contact-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '9px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', width: 'fit-content' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp
              </button>
              <button onClick={openEmail} className="footer-contact-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '9px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', width: 'fit-content' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" /></svg>
                info@luxoasisadvisory.com
              </button>
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', margin: '0 0 16px' }}>{section}</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <button onClick={() => { window.location.href = item.href }} className="footer-link-btn" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 10px', display: 'block', textAlign: 'left' }}>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)', marginBottom: '24px' }} />

        <div className="footer-bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.18)', margin: 0 }}>
            © {currentYear} Lux Oasis Advisory &amp; Services LLC. All rights reserved. TRN 104722180700003.
          </p>
          <div className="footer-bottom-links" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button onClick={() => window.location.href = '/privacy'} className="footer-link-btn" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.18)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Privacy Policy</button>
            <button onClick={() => window.location.href = '/terms'} className="footer-link-btn" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.18)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Terms and Conditions</button>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.12)', margin: 0 }}>oasisrevenuelab.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
