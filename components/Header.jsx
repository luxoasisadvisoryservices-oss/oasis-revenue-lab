'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrolled || menuOpen ? 'rgba(250,248,245,0.98)' : 'transparent', backdropFilter: scrolled || menuOpen ? 'blur(12px)' : 'none', borderBottom: scrolled || menuOpen ? '1px solid #e8dfd0' : '1px solid transparent', transition: 'all 0.3s ease' }}>
      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-wa-btn-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <div style={{ background: '#0d1520', padding: '6px 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', margin: 0 }}>
          A division of <span style={{ color: '#c49632', fontWeight: 500 }}>Lux Oasis Advisory and Services LLC</span>
        </p>
      </div>

      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <button onClick={() => window.location.href = '/'} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}>
          <Image src="/Logo.jpg" alt="Oasis Revenue Lab" width={38} height={38} style={{ borderRadius: '7px', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
            Oasis Revenue Lab
          </span>
        </button>

        <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => window.location.href = link.href}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400, color: '#5a5248', background: 'none', border: 'none', cursor: 'pointer', padding: 0, whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1a1a1a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#5a5248')}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={scrollToCalc}
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: '#c49632', background: 'rgba(196,150,50,0.08)', border: '1px solid rgba(196,150,50,0.25)', borderRadius: '6px', cursor: 'pointer', padding: '6px 14px', whiteSpace: 'nowrap' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(196,150,50,0.15)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(196,150,50,0.08)' }}
          >
            Free Calculator
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={openWA}
            className="nav-wa-btn-desktop"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#0d1520', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            Talk on WhatsApp
          </button>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', flexShrink: 0 }}
          >
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#1a1a1a', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#1a1a1a', borderRadius: '2px', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '2px', background: '#1a1a1a', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

      </nav>

      {menuOpen && (
        <div className="mobile-menu" style={{ background: 'rgba(250,248,245,0.98)', borderTop: '1px solid #e8dfd0', padding: '16px 24px 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 400, color: '#1a1a1a', background: 'none', border: 'none', cursor: 'pointer', padding: '12px 0', textAlign: 'left', borderBottom: '1px solid #e8dfd0' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={scrollToCalc}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 500, color: '#c49632', background: 'none', border: 'none', cursor: 'pointer', padding: '12px 0', textAlign: 'left', borderBottom: '1px solid #e8dfd0' }}
            >
              Free Calculator ↓
            </button>
          </div>
          <button
            onClick={() => { setMenuOpen(false); openWA() }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '13px 0', background: '#0d1520', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 500, border: 'none', cursor: 'pointer', width: '100%' }}
          >
            Talk on WhatsApp
          </button>
        </div>
      )}

    </header>
  )
}
