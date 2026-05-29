'use client'

import Image from 'next/image'

export default function CredentialsSection() {
  return (
    <section id="credentials" style={{
      background: '#f8f6f2',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) { .credentials-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        .cred-row { transition: all 0.2s ease; }
        .cred-row:hover { background: #e6e0d6 !important; }
      `}</style>

      <div style={{ position: 'absolute', top: '20%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(184,144,58,0.04) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(50px)' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div className="credentials-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start', marginBottom: '56px' }}>

          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(184,144,58,0.08)', border: '1px solid rgba(184,144,58,0.2)', borderRadius: '20px' }}>
              <div style={{ width: '5px', height: '5px', background: '#b8903a', borderRadius: '50%' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8903a' }}>Credentials and Recognition</span>
            </div>

            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#111111', margin: '0 0 20px' }}>
              Revenue managers who built their own AI system.
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: '#504840', margin: '0 0 16px' }}>
              Oasis Revenue Lab was not created by a software company. It was created by revenue managers who were frustrated with the gap between data tools and real pricing decisions.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, color: '#504840', margin: '0 0 32px' }}>
              We actively operate Lux Oasis Holiday Homes — a DTCM-licensed STR company in Dubai. Every recommendation we make to clients is tested on our own listings first.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'HSMAI Revenue Management', detail: 'Certification in progress', color: '#b8903a' },
                { label: 'PriceLabs Revenue Management Partner', detail: 'Verified', color: '#2ebd72' },
                { label: 'DTCM Licensed Operations', detail: 'UAE holiday homes licence', color: '#2ebd72' },
                { label: 'Hostaway PMS Integration', detail: 'Live booking data pipeline', color: '#2ebd72' },
                { label: 'Active Dubai STR Portfolio', detail: 'JBR, Marina, Downtown', color: '#2ebd72' },
              ].map((item) => (
                <div key={item.label} className="cred-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 14px', background: 'white', border: '1px solid #e0d8cc', borderRadius: '10px', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', background: item.color, borderRadius: '50%', flexShrink: 0, boxShadow: `0 0 8px ${item.color}50` }} />
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: '#111111', margin: 0 }}>{item.label}</p>
                  </div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#807060' }}>{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ background: 'white', border: '1px solid #e0d8cc', borderRadius: '20px', padding: '28px', boxShadow: '0 4px 16px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #b8903a, transparent)' }} />
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#807060', margin: '0 0 20px' }}>Tools and Partnerships</p>

              <div style={{ padding: '20px', background: '#f0ece4', border: '1px solid #e0d8cc', borderRadius: '12px', marginBottom: '12px', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#e6e0d6' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#f0ece4' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '44px', height: '44px', background: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                      <Image src="/pricelabs-logo.png" alt="PriceLabs" width={30} height={30} style={{ objectFit: 'contain' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#111111', margin: '0 0 3px' }}>PriceLabs</p>
                      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#504840', margin: 0, fontWeight: 300 }}>Revenue Management Partner</p>
                    </div>
                  </div>
                  <Image
                    src="/PriceLabs_PM_Partner_Badge.png"
                    alt="PriceLabs Verified Revenue Management Partner"
                    width={160}
                    height={48}
                    style={{ objectFit: 'contain', flexShrink: 0 }}
                  />
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#504840', margin: '14px 0 0', fontWeight: 300, lineHeight: 1.55 }}>
                  Verified by PriceLabs as a Revenue Management Partner. We configure and optimise PriceLabs strategies daily for live Dubai STR portfolios.
                </p>
              </div>

              <div style={{ padding: '20px', background: '#f0ece4', border: '1px solid #e0d8cc', borderRadius: '12px', marginBottom: '12px', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#e6e0d6' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#f0ece4' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #141414, #222222)', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: '#b8903a', fontSize: '13px', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>H</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#111111', margin: 0 }}>HSMAI Revenue Management</p>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: '#b8903a', fontWeight: 500 }}>Certification in progress</span>
                  </div>
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#504840', margin: '0 0 10px', fontWeight: 300, lineHeight: 1.55 }}>The globally recognised standard for professional revenue managers.</p>
                <div style={{ padding: '8px 12px', background: 'white', border: '2px dashed #ccc0aa', borderRadius: '8px', textAlign: 'center' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#807060', margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase' }}>HSMAI Badge — Arriving Soon</p>
                </div>
              </div>

              <div style={{ padding: '20px', background: '#f0ece4', border: '1px solid #e0d8cc', borderRadius: '12px', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#e6e0d6' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#f0ece4' }}
              >
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: '#111111', margin: '0 0 5px' }}>DTCM Licensed — Lux Oasis Holiday Homes</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#504840', margin: '0 0 10px', fontWeight: 300, lineHeight: 1.55 }}>Active holiday homes licence. Fully compliant with Dubai Tourism regulations.</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['JBR', 'Dubai Marina', 'Downtown Dubai'].map((area) => (
                    <span key={area} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', padding: '4px 10px', background: 'white', border: '1px solid #ccc0aa', borderRadius: '20px', color: '#504840' }}>{area}</span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: '22px 24px', background: 'linear-gradient(135deg, #141414, #1e1e1e)', borderRadius: '14px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(184,144,58,0.14)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #b8903a, transparent)' }} />
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.82)', margin: '0 0 8px', lineHeight: 1.5 }}>
                A real revenue management company that built its own AI system.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.32)', margin: 0 }}>— How we think about what we built</p>
            </div>

            <div style={{ padding: '18px 22px', background: 'white', border: '2px dashed #ccc0aa', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 600, color: '#807060', margin: '0 0 3px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Industry Recognition</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#807060', margin: 0, fontStyle: 'italic' }}>Awards, case studies, and partner logos added as achieved</p>
            </div>

          </div>
        </div>

        <div style={{ padding: '22px 28px', background: 'linear-gradient(135deg, #141414, #1e1e1e)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', border: '1px solid rgba(184,144,58,0.14)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,144,58,0.35), transparent)' }} />
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6, maxWidth: '600px' }}>
            <strong style={{ color: 'white', fontWeight: 500 }}>Our position:</strong> A real revenue management company that built its own AI system. Not an AI startup trying to enter hospitality.
          </p>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.28)', whiteSpace: 'nowrap' }}>Lux Oasis Advisory &amp; Services LLC</span>
        </div>

      </div>
    </section>
  )
}
