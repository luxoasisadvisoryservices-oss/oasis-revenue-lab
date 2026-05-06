'use client'

import { useState, useEffect } from 'react'

const WHATSAPP_URL = 'https://wa.me/971527604550?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20Oasis%20Revenue%20Lab'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#hybrid' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(250,248,245,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Parent brand strip */}
      <div
        style={{
          background: 'var(--color-dark)',
          padding: '6px 0',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.55)',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          A division of{' '}
          <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>
            Lux Oasis Advisory &amp; Services LLC
          </span>
        </p>
      </div>

      {/* Main nav */}
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              background: 'var(--color-dark)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" fill="var(--color-accent)" fillOpacity="0.9" />
              <circle cx="8" cy="8" r="2.5" fill="white" fillOpacity="0.9" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                lineHeight: 1,
                letterSpacing: '-0.01em',
              }}
            >
              Oasis Revenue Lab
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-text-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              background: 'var(--color-dark)',
              color: 'white',
              borderRadius: '8px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-dark-surface)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-dark)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Talk on WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: 'var(--color-text-primary)',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--color-bg)',
            borderTop: '1px solid var(--color-border)',
            padding: '16px 24px 24px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              marginTop: '16px',
              padding: '12px 20px',
              background: 'var(--color-dark)',
              color: 'white',
              borderRadius: '8px',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            Talk on WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
