'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openWA = () => {
    const n = '971585089283'
    const m = encodeURIComponent('Hi, I would like to learn more about Oasis Revenue Lab')
    window.open('https://wa.me/' + n + '?text=' + m, '_blank')
  }

  const scrollToCalc = () => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.getElementById('calculator')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#hybrid' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Who We Are', href: '#about' },
  ]

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setTimeout(() => { window.location.href = href }, 100)
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
      background: scrolled || menuOpen ? 'rgba(12,16,24,0.95)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled || menuOpen ? '1px solid rgba(184,144,58,0.12)' : '1px solid transparent',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-wa-btn-desktop { display: none !important; }
          .nav-loa-btn-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        .nav-link-btn { position: relative; }
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #b8903a;
          transition: width 0.3s ease;
        }
        .nav-link-btn:hover::after { width: 100%; }
      `}</style>

      <div style={{
        background: 'linear-gradient(90deg, #0c0c0c, #141414)',
        padding: '5px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(184,144,58,0.08)',
      }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', margin: 0 }}>
          A division of{' '}
          <button
            onClick={() => window.open('https://luxoasisadvisory.com', '_blank')}
            style={{
              color: '#b8903a',
              fontWeight: 500,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: 0,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              textDecorationColor: 'rgba(184,144,58,0.4)',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#e0b850'; e.currentTarget.style.textDecorationColor = 'rgba(224,184,80,0.6)' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#b8903a'; e.currentTarget.style.textDecorationColor = 'rgba(184,144,58,0.4)' }}
          >
            Lux Oasis Advisory and Services LLC ↗
          </button>
        </p>
        <button
          onClick={() => window.open('https://luxoasisadvisory.com', '_blank')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            fontFamily: 'DM Sans, sans-serif', fontSize: '10px', fontWeight: 500,
            color: 'rgba(255,255,255,0.35)',
            background: 'none', border: 'none', cursor: 'pointer',
            letterSpacing: '0.06em',
            transition: 'color 0.2s ease',
            padding: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#b8903a')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
        >
          luxoasisadvisory.com
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </button>
      </div>

      <nav style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        <button
          onClick={() => window.location.href = '/'}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
        >
          <div style={{ width: '34px', height: '34px', borderRadius: '7px', overflow: 'hidden', border: '1px solid rgba(184,144,58,0.2)', flexShrink: 0 }}>
            <Image src="/Logo.jpg" alt="Oasis Revenue Lab" width={34} height={34} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
          </div>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '17px', fontWeight: 500, color: 'white', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
            Oasis Revenue Lab
          </span>
        </button>

        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              className="nav-link-btn"
              onClick={() => window.location.href = link.href}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 400, color: 'rgba(255,255,255,0.55)', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', whiteSpace: 'nowrap', transition: 'color 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={scrollToCalc}
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, color: '#b8903a', background: 'rgba(184,144,58,0.07)', border: '1px solid rgba(184,144,58,0.2)', borderRadius: '6px', cursor: 'pointer', padding: '6px 13px', whiteSpace: 'nowrap', transition: 'all 0.2s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(184,144,58,0.15)'; e.currentTarget.style.borderColor = 'rgba(184,144,58,0.4)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(184,144,58,0.07)'; e.currentTarget.style.borderColor = 'rgba(184,144,58,0.2)' }}
          >
            Free Calculator
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => window.open('https://luxoasisadvisory.com', '_blank')}
            className="nav-loa-btn-desktop"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '8px 14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '7px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 400,
              color: 'rgba(255,255,255,0.4)',
              cursor: 'pointer', whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(184,144,58,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
          >
            Lux Oasis Advisory
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </button>

          <button
            onClick={openWA}
            className="nav-wa-btn-desktop"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '9px 18px',
              background: 'linear-gradient(135deg, #b8903a, #96721e)',
              color: 'white', borderRadius: '8px',
              fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
              border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              boxShadow: '0 4px 14px rgba(184,144,58,0.25)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 22px rgba(184,144,58,0.35)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(184,144,58,0.25)' }}
          >
            Talk on WhatsApp
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', flexShrink: 0 }}
          >
            {[0,1,2].map((i) => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: 'rgba(255,255,255,0.7)', borderRadius: '2px',
                transition: 'all 0.25s ease',
                transform: menuOpen ? i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" style={{ background: 'rgba(12,12,12,0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(184,144,58,0.12)', padding: '16px 24px 28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '16px' }}>
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => handleNavClick(link.href)}
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 400, color: 'rgba(255,255,255,0.75)', background: 'none', border: 'none', cursor: 'pointer', padding: '13px 0', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >{link.label}</button>
            ))}
            <button onClick={scrollToCalc}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 500, color: '#b8903a', background: 'none', border: 'none', cursor: 'pointer', padding: '13px 0', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >Free Calculator ↓</button>
            <button onClick={() => { setMenuOpen(false); window.open('https://luxoasisadvisory.com', '_blank') }}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 400, color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer', padding: '13px 0', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >Lux Oasis Advisory ↗</button>
          </div>
          <button
            onClick={() => { setMenuOpen(false); openWA() }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 0', background: 'linear-gradient(135deg, #b8903a, #96721e)', color: 'white', borderRadius: '10px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 500, border: 'none', cursor: 'pointer', width: '100%', boxShadow: '0 4px 14px rgba(184,144,58,0.25)' }}
          >Talk on WhatsApp</button>
        </div>
      )}
    </header>
  )
}
