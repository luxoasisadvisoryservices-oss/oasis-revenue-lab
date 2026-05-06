'use client'

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
      { label: 'Free Floor Calculator', href: 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20the%20free%20calculator' },
      { label: 'Why It Matters', href: '#why' },
      { label: 'Global Markets', href: '#global' },
    ],
    Contact: [
      { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
      { label: 'Email Us', href: 'mailto:info@luxoasisadvisory.com', external: false },
      { label: 'Credentials', href: '#credentials' },
    ],
  }

  return (
    <footer
      style={{
        background: 'var(--color-dark)',
        padding: '64px 0 32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle top accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(196,150,50,0.3), transparent)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '48px',
            marginBottom: '56px',
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand block */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: 'rgba(196,150,50,0.15)',
                  border: '1px solid rgba(196,150,50,0.25)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="var(--color-accent)" fillOpacity="0.9" />
                  <circle cx="8" cy="8" r="2.5" fill="white" fillOpacity="0.8" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: '17px',
                    fontWeight: 500,
                    color: 'white',
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Oasis Revenue Lab
                </p>
              </div>
            </div>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '12px',
                color: 'rgba(255,255,255,0.35)',
                margin: '0 0 4px',
                letterSpacing: '0.02em',
              }}
            >
              A division of
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.55)',
                margin: '0 0 20px',
                fontWeight: 500,
              }}
            >
              Lux Oasis Advisory &amp; Services LLC
            </p>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                fontWeight: 300,
                lineHeight: 1.65,
                color: 'rgba(255,255,255,0.4)',
                margin: '0 0 24px',
                maxWidth: '280px',
              }}
            >
              AI-powered revenue intelligence and real consultancy for STR operators. Built in Dubai.
            </p>

            {/* Contact buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
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
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  width: 'fit-content',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(196,150,50,0.3)'
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:info@luxoasisadvisory.com"
                style={{
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
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  width: 'fit-content',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(196,150,50,0.3)'
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@luxoasisadvisory.com
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  margin: '0 0 16px',
                }}
              >
                {section}
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {items.map((item) => (
                  <li key={item.label} style={{ marginBottom: '10px' }}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.25)',
              margin: 0,
            }}
          >
            © {currentYear} Lux Oasis Advisory &amp; Services LLC. All rights reserved. TRN 104722180700003.
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.2)',
              margin: 0,
            }}
          >
            oasisrevenuelab.com
          </p>
        </div>
      </div>
    </footer>
  )
}
