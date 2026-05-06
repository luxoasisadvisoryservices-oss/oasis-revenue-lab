'use client'

const WHATSAPP_CALC = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20receive%20the%20free%20STR%20Pricing%20Floor%20Calculator'

export default function CalculatorLeadMagnet() {
  const benefits = [
    'Estimate your true minimum viable nightly rate',
    'Account for all fixed and variable costs per listing',
    'Understand how floor price affects your profitability',
    'Build a defensible pricing floor you can communicate with confidence',
    'Stop guessing and start pricing from a clear cost structure',
  ]

  return (
    <section
      id="calculator"
      style={{
        background: 'var(--color-surface-muted)',
        padding: '100px 0',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: copy */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div
                style={{
                  padding: '4px 10px',
                  background: 'rgba(196,150,50,0.1)',
                  border: '1px solid rgba(196,150,50,0.25)',
                  borderRadius: '6px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Free Resource
                </span>
              </div>
            </div>

            <h2
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: 'clamp(28px, 3vw, 44px)',
                fontWeight: 500,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: 'var(--color-text-primary)',
                margin: '0 0 16px',
              }}
            >
              STR Pricing Floor Calculator
            </h2>
            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.65,
                color: 'var(--color-text-secondary)',
                margin: '0 0 28px',
              }}
            >
              A practical Excel tool that helps STR operators calculate their true minimum viable nightly rate—based on actual costs, not guesswork. The foundation of sound revenue management.
            </p>

            <ul style={{ listStyle: 'none', margin: '0 0 32px', padding: 0 }}>
              {benefits.map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2.5"
                    style={{ flexShrink: 0, marginTop: '3px' }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '14px',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.55,
                    }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <p
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '13px',
                color: 'var(--color-text-muted)',
                margin: '0 0 20px',
                fontStyle: 'italic',
              }}
            >
              This is a free file—no strings attached. Message us and we'll send it directly.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href={WHATSAPP_CALC}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  background: 'var(--color-dark)',
                  color: 'white',
                  borderRadius: '8px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(13,21,32,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Request via WhatsApp
              </a>
              <a
                href="mailto:info@luxoasisadvisory.com?subject=Free%20Floor%20Price%20Calculator%20Request"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 24px',
                  background: 'transparent',
                  color: 'var(--color-text-secondary)',
                  borderRadius: '8px',
                  border: '1.5px solid var(--color-border-strong)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.color = 'var(--color-accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-strong)'
                  e.currentTarget.style.color = 'var(--color-text-secondary)'
                }}
              >
                Request via Email
              </a>
            </div>
          </div>

          {/* Right: visual mockup of the tool */}
          <div>
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '14px',
                padding: '28px',
                boxShadow: 'var(--shadow-card-hover)',
              }}
            >
              {/* Excel-style header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    background: '#1D6F42',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: 'white', fontSize: '14px', fontFamily: 'Georgia, serif', fontWeight: 700 }}>X</span>
                </div>
                <div>
                  <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: 'var(--color-text-primary)' }}>
                    STR_PricingFloor_Calculator.xlsx
                  </p>
                  <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'var(--color-text-muted)' }}>
                    Oasis Revenue Lab — Free Resource
                  </p>
                </div>
              </div>

              {/* Mock rows */}
              {[
                { label: 'Monthly rent / lease cost', value: 'AED 14,500', highlight: false },
                { label: 'Cleaning & maintenance', value: 'AED 1,200', highlight: false },
                { label: 'Platform fees (est. 15%)', value: 'AED 2,100', highlight: false },
                { label: 'Utilities & misc', value: 'AED 600', highlight: false },
                { label: 'Total monthly cost base', value: 'AED 18,400', highlight: true },
                { label: 'Target occupancy (nights)', value: '22 nights', highlight: false },
                { label: '→ MINIMUM FLOOR PRICE', value: 'AED 836 / night', highlight: 'accent' },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    marginBottom: '4px',
                    borderRadius: '6px',
                    background: row.highlight === 'accent'
                      ? 'rgba(196,150,50,0.08)'
                      : row.highlight
                      ? 'var(--color-surface-muted)'
                      : 'transparent',
                    border: row.highlight === 'accent'
                      ? '1px solid rgba(196,150,50,0.25)'
                      : '1px solid transparent',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '12px',
                      color: row.highlight === 'accent' ? 'var(--color-accent)' : row.highlight ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                      fontWeight: row.highlight ? 500 : 400,
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '12px',
                      color: row.highlight === 'accent' ? 'var(--color-accent)' : row.highlight ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                      fontWeight: row.highlight ? 600 : 400,
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}

              <p
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '11px',
                  color: 'var(--color-text-muted)',
                  margin: '16px 0 0',
                  textAlign: 'center',
                  fontStyle: 'italic',
                }}
              >
                Illustrative example only — real tool includes full customisable inputs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
