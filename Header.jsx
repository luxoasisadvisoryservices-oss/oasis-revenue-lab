'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const WHATSAPP = 'https://wa.me/971527604550?text=Hi'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? 'rgba(250,248,245,0.96)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent', transition: 'all 0.3s ease' }}>

      <div style={{ background: '#0d1520', padding: '6px 0', textAlign: 'center' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', margin: 0 }}>
          A division of <span style={{ color: '#c49632', fontWeight: 500 }}>Lux Oasis Advisory and Services LLC</span>
        </p>
      </div>

      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image src="/Logo.jpg" alt="Oasis Revenue Lab" width={44} height={44} style={{ borderRadius: '8px', objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '18px', fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.01em' }}>
            Oasis Revenue Lab
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#features" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#5a5248', textDecoration: 'none' }}>Features</a>
          <a href="#hybrid" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#5a5248', textDecoration: 'none' }}>How It Works</a>
          <a href="#pricing" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#5a5248', textDecoration: 'none' }}>Pricing</a>
          <a href="#contact" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#5a5248', textDecoration: 'none' }}>Contact</a>
        </div>

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#0d1520', color: 'white', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}>
          Talk on WhatsApp
        </a>

      </nav>
    </header>
  )
}
