'use client'

export default function CredentialsSection() {
  return (
    <section id="credentials" style={{ background: '#faf8f5', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ width: '6px', height: '6px', background: '#c49632', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#c49632' }}>Credentials and Recognition</span>
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#1a1a1a', margin: '0 0 14px' }}>
            Professional foundations. Growing recognition.
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#5a5248', margin: 0 }}>
            Our credibility starts with what we actually operate. Industry recognition is being actively pursued and will be reflected here as it is achieved.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {[
            {
              icon: '🏆',
              title: 'HSMAI Revenue Management',
              status: 'Certification in progress',
              statusColor: '#c49632',
              body: 'Hospitality Sales and Marketing Association International revenue management certification. The globally recognised standard for professional revenue managers.',
              placeholder: 'HSMAI Badge — Arriving Soon',
            },
            {
              icon: '📊',
              title: 'PriceLabs Expert Ecosystem',
              status: 'Active practitioner',
              statusColor: '#4ade80',
              body: 'Experienced with PriceLabs revenue systems — configuring strategies, floor price logic, seasonal profiles, and market intelligence for live Dubai STR portfolios.',
              placeholder: 'PriceLabs Partner Logo — Placeholder',
            },
            {
              icon: '🏙️',
              title: 'DTCM Licensed Operations',
              status: 'Active — UAE regulated',
              statusColor: '#4ade80',
              body: 'Lux Oasis Holiday Homes operates under a valid DTCM holiday homes licence. Fully compliant with Dubai tourism authority regulations.',
              placeholder: 'DTCM Licence Badge — Placeholder',
            },
            {
              icon: '🌍',
              title: 'Industry Recognition',
              status: 'Building — space reserved',
              statusColor: '#8a8076',
              body: 'Awards, case studies, client results, and industry recognition will be added here as they are achieved. We do not invent credentials — we earn them.',
              placeholder: 'Future Awards and Badges',
            },
          ].map((item) => (
            <div key={item.title} style={{ background: 'white', border: '1px solid #e8dfd0', borderRadius: '14px', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '52px', height: '52px', background: '#f4f0e8', border: '1px solid #d5c5aa', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', fontSize: '22px' }}>
                {item.icon}
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#1a1a1a', margin: '0 0 6px' }}>{item.title}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: item.statusColor, fontWeight: 500, margin: '0 0 8px' }}>{item.status}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 300, color: '#5a5248', margin: 0, lineHeight: 1.6 }}>{item.body}</p>
              <div style={{ marginTop: '16px', padding: '10px 12px', background: '#f4f0e8', border: '2px dashed #d5c5aa', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', color: '#8a8076', margin: 0, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{item.placeholder}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ padding: '24px 28px', background: '#0d1520', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6, maxWidth: '600px' }}>
            <strong style={{ color: 'white', fontWeight: 500 }}>Our position:</strong> A real revenue management company that built its own AI system. Not an AI startup trying to enter hospitality.
          </p>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>Lux Oasis Advisory &amp; Services LLC</span>
        </div>

      </div>
    </section>
  )
}
