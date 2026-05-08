'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const WHATSAPP = 'https://wa.me/971585089283?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Oasis%20Revenue%20Lab'

const NavLink = ({ href, label }) => {
  const handleEnter = (e) => { e.currentTarget.style.color = '#1a1a1a' }
  const handleLeave = (e) => { e.currentTarget.style.color = '#5a5248' }
  return (
    <button
      onClick={() => window.location.href = href}
      style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 400, color: '#5a5248', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {label}
    </button>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

        <button onClick={() => window.location.href = '/'} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <Image src="/Logo.jpg" alt="Oasis Revenue Lab" width={44} height={44} style={{ borderRadius: '8px', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.01em' }}>
            Oasis Revenue Lab
          </span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <button
          onClick={() => window.open(WHATSAPP, '_blank')}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#0d1520', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, border: 'none', cursor: 'pointer' }}
        >
          Talk on WhatsApp
        </button>

      </nav>
    </header>
  )
}
