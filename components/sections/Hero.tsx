'use client'
import { useReveal } from '@/hooks/useReveal'
import { SOCIAL_LINKS } from '@/lib/constants'
import { NAV_OFFSET } from '@/lib/constants'

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET, behavior: 'smooth' })
}

export default function Hero() {
  useReveal()

  return (
    <section id="hero" aria-label="Introduction" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 2rem' }}>
      {/* BG Grid */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundImage: 'linear-gradient(rgba(200,255,0,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(200,255,0,.03) 1px,transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%,black 20%,transparent 80%)' }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(200,255,0,.07) 0%,transparent 65%)', top: '-15%', left: '-10%', zIndex: 0, pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,211,238,.05) 0%,transparent 65%)', bottom: '5%', right: '5%', zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', width: '100%', padding: '8rem 0 6rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
        {/* LEFT */}
        <div>
          {/* Status */}
          <div role="status" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.35rem .9rem', borderRadius: 999, background: 'rgba(52,211,153,.07)', border: '1px solid rgba(52,211,153,.18)', color: '#6ee7b7', fontFamily: 'var(--ff-mono)', fontSize: '.7rem', letterSpacing: '.04em', marginBottom: '1.8rem' }}>
            <span className="pulse-dot" aria-hidden="true" />
            Available for Internships &amp; Junior Roles
          </div>

          {/* Name */}
          <h1 style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: 'clamp(3.2rem,7vw,5.5rem)', lineHeight: 1.0, color: 'var(--white)', marginBottom: '1.2rem', letterSpacing: '-.02em' }}>
            Mustafa
            <span style={{ color: 'var(--lime)', display: 'block' }}>Iqbal.</span>
          </h1>

          {/* Roles */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginBottom: '1.8rem' }} aria-label="Specialisations">
            <span className="pill">Full-Stack Dev</span>
            <span className="pill cyan">Cybersecurity</span>
            <span className="pill white">ML / AI</span>
            <span className="pill white">QA / Testing</span>
          </div>

          {/* Desc */}
          <p style={{ color: 'var(--gray)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 460, marginBottom: '2.4rem' }}>
            BSCS student at <strong style={{ color: 'var(--white)' }}>SZABIST, Karachi</strong> building secure, tested, production-ready software — from full-stack web apps to ML-powered tools. Cybersecurity-first mindset in everything I ship.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', marginBottom: '2.4rem' }}>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('#projects') }} className="btn btn-lime">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
              View Projects
            </a>
            <a href="/Mustafa_Iqbal_CV.pdf" download className="btn btn-outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download CV
            </a>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', gap: '.6rem' }} aria-label="Social links">
            {[
              { href: SOCIAL_LINKS.github,   label: 'GitHub',    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg> },
              { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn',  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
              { href: SOCIAL_LINKS.email,    label: 'Email',     icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 4l10 8 10-8"/></svg> },
              { href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp',  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="17" height="17"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg> },
            ].map(({ href, label, icon }) => (
              <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label}
                style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', color: 'var(--gray)', textDecoration: 'none', transition: 'all var(--trans)' }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — stat cards + code block */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {[
            { num: '3.6',  label: 'CGPA at SZABIST · 2× Top of Class' },
            { num: '5+',   label: 'Production-grade Apps Shipped' },
            { num: '200+', label: 'MoU Records Audited During Internship' },
          ].map(({ num, label }, i) => (
            <div key={num} className={`hero-stat-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
              style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.3rem 1.5rem', transition: 'border-color var(--trans),transform var(--trans)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2.2rem', fontWeight: 700, color: 'var(--lime)', lineHeight: 1, marginBottom: '.25rem' }}>{num}</div>
              <div style={{ fontSize: '.82rem', color: 'var(--gray)' }}>{label}</div>
            </div>
          ))}

          <div className="reveal reveal-delay-3" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.2rem 1.5rem', fontFamily: 'var(--ff-mono)', fontSize: '.72rem', lineHeight: 1.9, color: 'var(--gray2)' }} aria-hidden="true">
            <div><span className="c-gray">{'// current focus'}</span></div>
            <div><span className="c-blue">const</span> <span className="c-lime">stack</span> = {'{'}</div>
            <div>&nbsp;&nbsp;<span className="c-green">dev</span>: <span className="c-orange">&quot;ASP.NET · React · Node&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="c-green">ml</span>: <span className="c-orange">&quot;SVM · Naive Bayes · NLP&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="c-green">security</span>: <span className="c-cyan">&quot;NIST · Splunk&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="c-green">goal</span>: <span className="c-cyan">&quot;AppSec&quot;</span></div>
            <div>{'};'}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem', zIndex: 2 }}>
        <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gray2)', textTransform: 'uppercase' }}>Scroll</span>
        <div className="scroll-line" />
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; padding: 7rem 0 5rem !important; }
        }
      `}</style>
    </section>
  )
}
