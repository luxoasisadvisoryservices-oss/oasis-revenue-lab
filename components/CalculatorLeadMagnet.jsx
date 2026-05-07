'use client'

const EMAIL_PORTFOLIO = 'mailto:info@luxoasisadvisory.com?subject=Portfolio%20Calculator%20%26%20Oasis%20Revenue%20Lab%20Enquiry&body=Hi%2C%0A%0AI%27d%20like%20to%20receive%20the%20Multi-Unit%20Portfolio%20Floor%20Price%20Calculator%20and%20learn%20more%20about%20Oasis%20Revenue%20Lab.%0A%0ANumber%20of%20units%3A%20%0AAreas%20and%20buildings%3A%20%0AWhat%20I%27m%20looking%20for%3A%20'

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="3" x2="12" y2="15" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="5" y1="20" x2="19" y2="20" />
  </svg>
)

const EmailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
)

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const singleFeatures = [
  'Break-even nightly rate',
  'Hard pricing floor',
  'Last-minute floor rate',
  'Orphan gap fill rate',
  'Low-season base price',
  'Weekend floor',
  'Peak season minimum',
  '6 PriceLabs settings ready',
]

const portfolioFeatures = [
  'Up to 20 units in one file',
  'Per-unit cost breakdown',
  'Overhead split across units',
  'Break-even per unit',
  'Floor price per unit',
  'PriceLabs settings per unit',
  'Full portfolio summary tab',
  'Profit view across all units',
]

export default function CalculatorLeadMagnet() {
  return (
    <section id="calculator" style={{ background: '#f4f0e8', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 56px' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#c49632', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px', background: 'rgba(196,150,50,0.1)', border: '1px solid rgba(196,150,50,0.25)', borderRadius: '6px', display: 'inline-block', marginBottom: '20px' }}>Free Tools</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 14px' }}>
            STR Pricing Floor Calculators
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            Know your true floor price before you set a single rate. Built from real Dubai STR cost structures.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

          <div style={{ background: 'white', border: '1px solid #e8dfd0', borderRadius: '14px', padding: '36px', boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '36px', height: '36px', background: '#1D6F42', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '16px', fontWeight: 700 }}>X</span>
              </div>
              <div>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#1a1a1a' }}>Single-Unit Calculator</p>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', fontWeight: 500 }}>Free — instant download</p>
              </div>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: '16px 0 20px' }}>
              Enter your fixed costs, variable costs, and business overhead. Get your break-even nightly rate, pricing floor, and 6 ready-to-use PriceLabs settings automatically.
            </p>
            <div style={{ background: '#f4f0e8', border: '1px solid #e8dfd0', borderRadius: '8px', padding: '14px 16px', marginBottom: '24px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#5a5248', margin: '0 0 8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>What you get</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {singleFeatures.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckIcon />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#5a5248' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
              href="/STR_FLOOR_CALCULATOR.xlsx"
              download
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px 0', borderRadius: '8px', background: '#0d1520', color: 'white', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}
            >
              <DownloadIcon />
              Download Free Calculator
            </a>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8a8076', textAlign: 'center', margin: '10px 0 0', fontStyle: 'italic' }}>Excel file — no sign-up required</p>
          </div>

          <div style={{ background: '#0d1520', border: '1.5px solid rgba(196,150,50,0.3)', borderRadius: '14px', padding: '36px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1px', left: '24px', background: '#c49632', padding: '4px 14px', borderRadius: '0 0 8px 8px', fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Portfolio Version
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', marginTop: '12px' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(196,150,50,0.15)', border: '1px solid rgba(196,150,50,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#c49632', fontSize: '16px', fontWeight: 700 }}>X</span>
              </div>
              <div>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: 'white' }}>Multi-Unit Portfolio Calculator</p>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#c49632', fontWeight: 500 }}>Free — email us to receive it</p>
              </div>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.6)', margin: '16px 0 20px' }}>
              Built for operators managing multiple listings. Per-unit cost inputs, overhead split across your portfolio, and a full portfolio summary with floor prices for every unit.
            </p>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '14px 16px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', margin: '0 0 8px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>What you get</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {portfolioFeatures.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckIcon />
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)', margin: '0 0 20px', lineHeight: 1.6 }}>
              When you email us, we send the calculator along with a short overview of how Oasis Revenue Lab works — AI agent, hybrid support, and consultancy. No pressure, just useful context.
            </p>
            
              href={EMAIL_PORTFOLIO}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px 0', borderRadius: '8px', background: '#c49632', color: 'white', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}
            >
              <EmailIcon />
              Email Us to Request
            </a>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.25)', textAlign: 'center', margin: '10px 0 0', fontStyle: 'italic' }}>Opens your email — we reply with the file and a brief intro</p>
          </div>

        </div>
      </div>
    </section>
  )
}
}
