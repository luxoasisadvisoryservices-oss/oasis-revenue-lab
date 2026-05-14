'use client'

import { useState, useEffect } from 'react'

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)
  const [tooltip, setTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const openWA = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I would like to learn more about Oasis Revenue Lab')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  return (
    <>
      <style>{`
        @keyframes wa-appear {
          from { opacity: 0; transform: translateY(20px) scale(0.8); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wa-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(184,144,58,0.4), 0 8px 32px rgba(0,0,0,0.3); }
          50%      { box-shadow: 0 0 0 10px rgba(184,144,58,0), 0 8px 32px rgba(0,0,0,0.3); }
        }
        .wa-float-btn {
          animation: wa-pulse 3s ease-in-out infinite;
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease !important;
        }
        .wa-float-btn:hover {
          animation: none !important;
          transform: scale(1.1) translateY(-3px) !important;
          box-shadow: 0 16px 48px rgba(0,0,0,0.35), 0 0 0 2px rgba(184,144,58,0.3) !important;
        }
        .wa-tooltip {
          animation: wa-appear 0.3s cubic-bezier(0.22,1,0.36,1) both;
        }
        @media (max-width: 768px) {
          .wa-float-wrap { bottom: 20px !important; right: 16px !important; }
          .wa-float-btn { width: 52px !important; height: 52px !important; }
          .wa-tooltip { display: none !important; }
        }
      `}</style>

      {visible && (
        <div
          className="wa-float-wrap"
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '28px',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '10px',
            animation: 'wa-appear 0.5s cubic-bezier(0.22,1,0.36,1) both',
          }}
        >
          {tooltip && (
            <div
              className="wa-tooltip"
              style={{
                background: 'rgba(12,16,24,0.96)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(184,144,58,0.2)',
                borderRadius: '12px',
                padding: '12px 16px',
                maxWidth: '220px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: 'white', margin: '0 0 3px' }}>
                Talk to us on WhatsApp
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}>
                Questions about your portfolio? We reply fast.
              </p>
              <div style={{ position: 'absolute', bottom: '-6px', right: '22px', width: '12px', height: '12px', background: 'rgba(12,16,24,0.96)', border: '1px solid rgba(184,144,58,0.2)', borderTop: 'none', borderLeft: 'none', transform: 'rotate(45deg)' }} />
            </div>
          )}

          <button
            className="wa-float-btn"
            onClick={openWA}
            onMouseEnter={() => setTooltip(true)}
            onMouseLeave={() => setTooltip(false)}
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #b8903a, #96721e)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
