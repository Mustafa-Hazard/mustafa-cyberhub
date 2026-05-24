'use client'
import { useState, useEffect } from 'react'
import { NAV_LINKS, NAV_SCROLL_THRESHOLD, NAV_OFFSET } from '@/lib/constants'
import { useScrollSpy } from '@/hooks/useScrollSpy'

const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''))

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > NAV_SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET, behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        id="nav"
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
          padding: scrolled ? '.8rem 0' : '1.4rem 0',
          background: scrolled ? 'rgba(8,11,18,.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'background var(--trans), padding var(--trans)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
            style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', color: 'var(--white)', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--lime)', display: 'inline-block' }} aria-hidden="true" />
            Mustafa Iqbal
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }} className="nav-desktop">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  style={{
                    fontFamily: 'var(--ff-mono)', fontSize: '.72rem', letterSpacing: '.08em',
                    color: activeId === link.href.replace('#', '') ? 'var(--lime)' : 'var(--gray)',
                    textDecoration: 'none', textTransform: 'uppercase', transition: 'color var(--trans)',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
            className="nav-cta-btn"
            style={{
              fontFamily: 'var(--ff-mono)', fontSize: '.72rem', letterSpacing: '.06em',
              padding: '.45rem 1.1rem', borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--lime)', color: 'var(--lime)',
              textDecoration: 'none', background: 'transparent', transition: 'background var(--trans), color var(--trans)',
            }}
          >
            Let&apos;s Talk
          </a>

          {/* Hamburger */}
          <button
            id="hamburger"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'none', padding: '.5rem' }}
          >
            <span style={{ width: 22, height: 1.5, background: 'var(--gray)', borderRadius: 2, display: 'block' }} />
            <span style={{ width: 22, height: 1.5, background: 'var(--gray)', borderRadius: 2, display: 'block' }} />
            <span style={{ width: 22, height: 1.5, background: 'var(--gray)', borderRadius: 2, display: 'block' }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 940 }}
          aria-hidden="true"
        />
      )}

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={mobileOpen ? 'open' : ''}
        style={{
          position: 'fixed', top: 0, width: 280, height: '100vh',
          background: 'var(--bg2)', borderLeft: '1px solid var(--border)',
          zIndex: 950, display: 'flex', flexDirection: 'column',
          padding: '2.5rem 1.8rem', gap: '1rem',
        }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          style={{ alignSelf: 'flex-end', background: 'none', border: 'none', color: 'var(--lime)', cursor: 'none', fontSize: '1.2rem', fontFamily: 'var(--ff-mono)' }}
          aria-label="Close menu"
        >✕</button>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            style={{
              fontFamily: 'var(--ff-body)', color: 'var(--gray)', textDecoration: 'none',
              fontSize: '.95rem', padding: '.6rem 0', borderBottom: '1px solid var(--border)',
              transition: 'color var(--trans)',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 960px) {
          .nav-desktop { display: none !important; }
          .nav-cta-btn { display: none !important; }
          #hamburger   { display: flex !important; }
        }
      `}</style>
    </>
  )
}
