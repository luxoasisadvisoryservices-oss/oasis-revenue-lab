'use client'

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
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/STR_FLOOR_CALCULATOR.xlsx'
    link.setAttribute('download', 'STR_Floor_Calculator_OasisRevenueLab.xlsx')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePortfolioEmail = () => {
    const subject = encodeURIComponent('Portfolio Calculator & Oasis Revenue Lab Enquiry')
    const body = encodeURIComponent('Hi,\n\nI would like to receive the Multi-Unit Portfolio Floor Price Calculator and learn more about Oasis Revenue Lab.\n\nNumber of units: \nAreas and buildings: \nWhat I am looking for: \n\nLooking forward to hearing from you.')
    window.location.href = 'mailto:info@luxoasisadvisory.com?subject=' + subject + '&body=' + body
  }

  return (
    <section id="calculator" style={{
      background: 'linear-gradient(180deg, #0d1520 0%, #f4f0e8 6%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .calculator-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        .calc-card {
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .calc-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <div style={{ position: 'absolute', top: '20%', right: '5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(196,150,50,0.05) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', padding: '5px 14px', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.2)', borderRadius: '20px' }}>
            <div style={{ width: '5px', height: '5px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c49632' }}>Free Tools</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 3vw, 48px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 14px' }}>
            STR Pricing Floor Calculators
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            Know your true floor price before you set a single rate. Built from real Dubai STR cost structures.
          </p>
        </div>

        <div className="calculator-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

          <div
            className="calc-card"
            style={{
              background: 'white',
              border: '1px solid #e8dfd0',
              borderRadius: '20px',
              padding: '36px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #4ade80, transparent)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', background: '#1D6F42', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(29,111,66,0.3)' }}>
                <span style={{ color: 'white', fontSize: '16px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>X</span>
              </div>
              <div>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, color: '#1a1a1a' }}>Single-Unit Calculator</p>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#4ade80', fontWeight: 500 }}>Free — instant download</p>
              </div>
            </div>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: '0 0 20px' }}>
              Enter your fixed costs, variable costs, and business overhead. Get your break-even nightly rate, pricing floor, and 6 ready-to-use PriceLabs settings automatically.
            </p>

            <div style={{ background: '#f4f0e8', border: '1px solid #e8dfd0', borderRadius: '10px', padding: '16px', marginBottom: '24px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: '#5a5248', margin: '0 0 10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>What you get</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {singleFeatures.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#5a5248' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleDownload}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', padding: '13px 0',
                background: 'linear-gradient(135deg, #0d1520, #1a2535)',
                color: 'white', borderRadius: '10px',
                fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
                width: '100%', border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(13,21,32,0.2)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(13,21,32,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(13,21,32,0.2)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
              Download Free Calculator
            </button>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#8a8076', textAlign: 'center', margin: '10px 0 0', fontStyle: 'italic' }}>Excel file — no sign-up required</p>
          </div>

          <div
            className="calc-card"
            style={{
              background: 'linear-gradient(160deg, #0d1520, #1a2535)',
              border: '1.5px solid rgba(196,150,50,0.3)',
              borderRadius: '20px',
              padding: '36px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(13,21,32,0.2)',
            }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #c49632, transparent)' }} />
            <div style={{ position: 'absolute', top: '-1px', left: '24px', background: 'linear-gradient(135deg, #c49632, #a87d22)', padding: '4px 14px', borderRadius: '0 0 10px 10px', fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase', boxShadow: '0 4px 12px rgba(196,150,50,0.3)' }}>
              Portfolio Version
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', marginTop: '16px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(196,150,50,0.15)', border: '1px solid rgba(196,150,50,0.3)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#c49632', fontSize: '16px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>X</span>
              </div>
              <div>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, color: 'white' }}>Multi-Unit Portfolio Calculator</p>
                <p style={{ margin: 0, fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#c49632', fontWeight: 500 }}>Free — email us to receive it</p>
              </div>
            </div>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.55)', margin: '0 0 20px' }}>
              Built for operators managing multiple listings. Per-unit cost inputs, overhead split across your portfolio, floor prices and PriceLabs settings for every unit.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '16px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', margin: '0 0 10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>What you get</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {portfolioFeatures.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c49632" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.55)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.3)', margin: '0 0 20px', lineHeight: 1.6 }}>
              When you email us, we send the calculator along with a short overview of how Oasis Revenue Lab works.
            </p>

            <button
              onClick={handlePortfolioEmail}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', padding: '13px 0',
                background: 'linear-gradient(135deg, #c49632, #a87d22)',
                color: 'white', borderRadius: '10px',
                fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
                width: '100%', border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(196,150,50,0.3)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(196,150,50,0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(196,150,50,0.3)' }}
            >
              Email Us to Request
            </button>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.2)', textAlign: 'center', margin: '10px 0 0', fontStyle: 'italic' }}>Opens your email — we reply with the file</p>
          </div>

        </div>
      </div>
    </section>
  )
}
