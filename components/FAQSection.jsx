'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How is Oasis Revenue Lab different from just using PriceLabs?',
    a: 'PriceLabs is a pricing tool. It adjusts rates based on algorithms — but it cannot tell you whether your strategy is working, whether your floor price is correctly set, or what the market is actually doing right now. Oasis Revenue Lab sits on top of PriceLabs and adds the intelligence layer: daily monitoring, market interpretation, floor price verification, and clear recommendations. We also configure and manage PriceLabs strategies for you — something the tool itself cannot do.',
  },
  {
    q: 'Do you change my prices automatically?',
    a: 'Not yet — and when we do, it will be done carefully. Currently the AI agent operates in advisory mode: it monitors, analyses, and sends you clear daily recommendations. You act on them. We are actively working on a supervised autopilot feature in collaboration with PriceLabs that will allow automatic price updates within guardrails you define — floor prices, ceiling prices, and rules you control. This will be available to existing clients first.',
  },
  {
    q: 'What do I need to get started?',
    a: 'You need an active PriceLabs account and a Telegram account. We also need your listing details and a short onboarding call to set your floor prices and revenue goals correctly. Setup takes less than 48 hours from the moment you sign.',
  },
  {
    q: 'How much does it cost?',
    a: 'The AI Revenue Agent is AED 80 per listing per month at the founding rate — locked permanently for the first 20 clients. Standard pricing will increase after the launch phase. Hybrid and consultancy packages are custom — contact us directly to discuss your portfolio.',
  },
  {
    q: 'Is this only for Dubai operators?',
    a: 'Currently yes — our market intelligence, comp data, and operational experience are built around the Dubai STR market. JBR, Marina, Downtown, Business Bay, and Palm Jumeirah are where we have the deepest data. We are expanding to GCC markets in 2026.',
  },
  {
    q: 'What if I already have a property manager?',
    a: 'The AI Revenue Agent works alongside any property manager. We provide the revenue intelligence layer — your manager handles operations. Many operators use both. If your property manager handles pricing too, we can work with them directly on the strategy layer.',
  },
  {
    q: 'How long until I see results?',
    a: 'The daily briefings start within 48 hours of onboarding. Revenue impact depends on your current pricing setup — operators who have no floor price discipline or are underpricing peak nights typically see improvement within the first 2-4 weeks. We track outcomes automatically via Hostaway so results are measurable.',
  },
  {
    q: 'Is there a contract or minimum term?',
    a: 'No long-term contract. Monthly rolling. You can cancel with 30 days notice. The founding rate is locked for 18 months for clients who join during the launch phase — after that it remains at the rate you signed at, not the standard price.',
  },
  {
    q: 'Do you work with operators outside holiday homes?',
    a: 'Currently our focus is short-term rental operators using platforms like Airbnb and Booking.com with PriceLabs as their pricing tool. Serviced apartments and boutique hotels with different PMS setups are on our roadmap but not yet supported.',
  },
  {
    q: 'Who is behind Oasis Revenue Lab?',
    a: 'Oasis Revenue Lab is a division of Lux Oasis Advisory and Services LLC, a UAE-registered company. We actively operate Lux Oasis Holiday Homes — a DTCM-licensed STR company with live listings in Dubai. Every system we recommend to clients runs on our own portfolio first.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" style={{
      background: '#f8f6f2',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .faq-header { font-size: 32px !important; }
        }
        .faq-item {
          transition: all 0.2s ease;
        }
        .faq-item:hover {
          border-color: rgba(184,144,58,0.25) !important;
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease;
        }
      `}</style>

      <div style={{ position: 'absolute', top: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(184,144,58,0.04) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(50px)' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', padding: '5px 14px', background: 'rgba(184,144,58,0.08)', border: '1px solid rgba(184,144,58,0.2)', borderRadius: '20px' }}>
            <div style={{ width: '5px', height: '5px', background: '#b8903a', borderRadius: '50%' }} />
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8903a' }}>FAQ</span>
          </div>
          <h2 className="faq-header" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.02em', color: '#111111', margin: '0 0 14px' }}>
            Questions we get asked
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 300, lineHeight: 1.65, color: '#504840', margin: 0, maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            Everything you need to know before getting started. Still have questions? Talk to us directly on WhatsApp.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item"
              style={{
                background: 'white',
                border: open === i ? '1px solid rgba(184,144,58,0.3)' : '1px solid #e0d8cc',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: open === i ? '0 8px 32px rgba(0,0,0,0.07)' : '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'all 0.25s ease',
              }}
            >
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '15px',
                  fontWeight: open === i ? 500 : 400,
                  color: open === i ? '#111111' : '#2a2a2a',
                  lineHeight: 1.4,
                  transition: 'all 0.2s ease',
                }}>
                  {faq.q}
                </span>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: open === i ? 'linear-gradient(135deg, #b8903a, #96721e)' : '#f0ece4',
                  border: open === i ? 'none' : '1px solid #e0d8cc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.25s ease',
                  boxShadow: open === i ? '0 4px 12px rgba(184,144,58,0.3)' : 'none',
                }}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={open === i ? 'white' : '#807060'}
                    strokeWidth="2.5"
                    style={{ transition: 'transform 0.3s ease', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              <div
                className="faq-answer"
                style={{
                  maxHeight: open === i ? '400px' : '0px',
                  opacity: open === i ? 1 : 0,
                }}
              >
                <div style={{ padding: '0 24px 20px' }}>
                  <div style={{ height: '1px', background: 'linear-gradient(90deg, rgba(184,144,58,0.2), transparent)', marginBottom: '16px' }} />
                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color: '#504840',
                    margin: 0,
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', padding: '24px 28px', background: 'linear-gradient(135deg, #141414, #1e1e1e)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', border: '1px solid rgba(184,144,58,0.14)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,144,58,0.35), transparent)' }} />
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500, color: 'white', margin: '0 0 4px' }}>Still have questions?</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0 }}>Talk to us directly — every enquiry is handled personally.</p>
          </div>
          <button
            onClick={() => {
              const n = '971585089283'
              const m = encodeURIComponent('Hi, I have a question about Oasis Revenue Lab')
              window.open('https://wa.me/' + n + '?text=' + m, '_blank')
            }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 22px', background: 'linear-gradient(135deg, #b8903a, #96721e)', color: 'white', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 4px 16px rgba(184,144,58,0.25)', transition: 'all 0.25s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(184,144,58,0.35)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(184,144,58,0.25)' }}
          >
            Ask on WhatsApp
          </button>
        </div>

      </div>
    </section>
  )
}
