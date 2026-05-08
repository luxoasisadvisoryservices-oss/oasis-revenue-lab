'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openWhatsApp = () => {
    const number = '971585089283'
    const message = 'Hi, I would like to learn more about Oasis Revenue Lab'
    const url = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message)
    window.open(url, '_blank')
  }

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#hybrid' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? 'rgba(250,248,245,0.96)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid #e8dfd0' : '1px solid transparent', transition: 'all 0.3s ease' }}>

      <div style={{ background: '#0d1520', padding: '6px 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', margin: 0 }}>
          A division of <span style={{ color: '#c49632', fontWeight: 500 }}>Lux Oasis Advisory &amp; Services LLC</span>
        </p>
      </div>

      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <button onClick={() => window.location.href = '/'} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <Image src="/Logo.jpg" alt="Oasis Revenue Lab" width={44} height={44} style={{ borderRadius: '8px', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.01em' }}>
            Oasis Revenue Lab
          </span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => window.location.href = link.href}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400, color: '#5a5248', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1a1a1a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#5a5248')}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={openWhatsApp}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#0d1520', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer' }}
        >
          Talk on WhatsApp
        </button>

      </nav>
    </header>
  )
}
