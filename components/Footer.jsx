'use client'

import Image from 'next/image'

const WHATSAPP_URL = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Oasis%20Revenue%20Lab'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    Contact: [
      { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
      { label: 'Email Us', href: 'mailto:info@luxoasisadvisory.com', external: false },
      { label: 'Privacy Policy', href: '/privacy', external: false },
      { label: 'Terms and Conditions', href: '/terms', external: false },
    ],
  }

  const linkStyle = {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    transition: 'color 0.15s',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    display: 'block',
    marginBottom: '10px',
  }

  const contactBtnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '13px',
    color: 'rgba(255,255,255,0.7)',
    cursor: 'pointer',
    width: 'fit-content',
  }

  return (
    <footer style={{ background: '#0d1520', padding: '64px 0 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(196,150,50,0.3), transparent)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Image
                src="/Logo.jpg"
                alt="Oasis Revenue Lab"
                width={44}
                height={44}
                style={{ borderRadius: '8px', objectFit: 'contain', background: 'white', padding: '2px' }}
              />
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '17px', fontWeight: 500, color: 'white', margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>
                Oasis Revenue Lab
              </p>
            </div>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '0 0 4px' }}>A division of</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.55)', margin: '0 0 20px', fontWeight: 500 }}>Lux Oasis Advisory &amp; Services LLC</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.4)', margin: '0 0 24px', maxWidth: '280px' }}>
              AI-powered revenue intelligence and real consultancy for STR operators. Built in Dubai.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                style={contactBtnStyle}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                  <text x="7" y="16" fontSize="11" fill="rgba(255,255,255,0.7)">W</text>
                </svg>
                WhatsApp
              </button>
              <button
                onClick={() => window.location.href = 'mailto:info@luxoasisadvisory.com'}
                style={contactBtnStyle}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.8">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
                info@luxoasisadvisory.com
              </button>
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', margin: '0 0 16px' }}>
                {section}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => {
                        if (item.external) {
                          window.open(item.href, '_blank')
                        } else if (item.href.startsWith('/')) {
                          window.location.href = item.href
                        } else if (item.href.startsWith('mailto')) {
                          window.location.href = item.href
                        } else {
                          window.location.href = item.href
                        }
                      }}
                      style={linkStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.25)', margin: 0 }}>
            © {currentYear} Lux Oasis Advisory &amp; Services LLC. All rights reserved. TRN 104722180700003.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button onClick={() => window.location.href = '/privacy'} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>
              Privacy Policy
            </button>
            <button onClick={() => window.location.href = '/terms'} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}>
              Terms and Conditions
            </button>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>oasisrevenuelab.com</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
