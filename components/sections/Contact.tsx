'use client'
import { useState, useRef } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { SOCIAL_LINKS, FORMSPREE_URL } from '@/lib/constants'

const contactInfo = [
  { icon: '✉', iconBg: 'var(--lime-dim)',             label: 'Email',     value: 'talhamustafa642@gmail.com', href: SOCIAL_LINKS.email },
  { icon: '📞', iconBg: 'rgba(52,211,153,.08)',        label: 'WhatsApp',  value: '+92 330 2479956',            href: SOCIAL_LINKS.whatsapp },
  { icon: '📍', iconBg: 'var(--blue-dim)',             label: 'Location',  value: 'Karachi, Pakistan',          href: undefined },
  { icon: '🔗', iconBg: 'rgba(167,139,250,.08)',       label: 'Portfolio', value: 'mustafa-iqbal.vercel.app',   href: 'https://mustafa-iqbal.vercel.app' },
]

export default function Contact() {
  useReveal()
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, { method: 'POST', body: new FormData(formRef.current!), headers: { Accept: 'application/json' } })
      setStatus(res.ok ? 'ok' : 'err')
      if (res.ok) formRef.current?.reset()
    } catch {
      setStatus('err')
    }
  }

  return (
    <section id="contact" aria-label="Contact" style={{ padding: '7rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-tag reveal">// Get In Touch</p>
        <h2 className="section-title reveal">Let&apos;s <span style={{ color: 'var(--lime)' }}>Connect</span></h2>
        <div className="section-divider reveal" aria-hidden="true" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'start' }} className="contact-grid">
          {/* Info */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
            {contactInfo.map((ci) => (
              <div key={ci.label} style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1rem 1.1rem', display: 'flex', alignItems: 'center', gap: '.9rem', transition: 'border-color var(--trans)' }}>
                <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.95rem', flexShrink: 0, background: ci.iconBg }} aria-hidden="true">{ci.icon}</div>
                <div>
                  <h4 style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--white)', marginBottom: '.1rem' }}>{ci.label}</h4>
                  {ci.href
                    ? <a href={ci.href} target={ci.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: '.8rem', color: 'var(--gray2)', textDecoration: 'none', transition: 'color var(--trans)' }}>{ci.value}</a>
                    : <p style={{ fontSize: '.8rem', color: 'var(--gray2)' }}>{ci.value}</p>
                  }
                </div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '.5rem', marginTop: '.4rem' }}>
              <a href={SOCIAL_LINKS.github}   target="_blank" rel="noopener noreferrer" className="pill">⬡ GitHub</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="pill">in LinkedIn</a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1" style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '2rem' }}>
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem' }} className="form-row">
                {[
                  { id: 'cf-name',  name: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name',        autocomplete: 'name' },
                  { id: 'cf-email', name: 'email',   label: 'Email',   type: 'email', placeholder: 'you@example.com',  autocomplete: 'email' },
                ].map((f) => (
                  <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: '.35rem', marginBottom: '.85rem' }}>
                    <label htmlFor={f.id} style={{ fontFamily: 'var(--ff-mono)', fontSize: '.67rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gray2)' }}>{f.label}</label>
                    <input id={f.id} name={f.name} type={f.type} required placeholder={f.placeholder} autoComplete={f.autocomplete} className="form-input" />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem', marginBottom: '.85rem' }}>
                <label htmlFor="cf-subject" style={{ fontFamily: 'var(--ff-mono)', fontSize: '.67rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gray2)' }}>Subject</label>
                <input id="cf-subject" name="subject" type="text" placeholder="What's this about?" className="form-input" />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem', marginBottom: '.85rem' }}>
                <label htmlFor="cf-msg" style={{ fontFamily: 'var(--ff-mono)', fontSize: '.67rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gray2)' }}>Message</label>
                <textarea id="cf-msg" name="message" required placeholder="Tell me about your project or opportunity…" className="form-input" style={{ resize: 'vertical', minHeight: 110 }} />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-lime"
                style={{ width: '100%', justifyContent: 'center', cursor: 'none', opacity: status === 'sending' ? .6 : 1 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'ok'  && <p role="status" style={{ fontFamily: 'var(--ff-mono)', fontSize: '.72rem', textAlign: 'center', marginTop: '.6rem', color: 'var(--lime)' }}>✓ Message sent!</p>}
              {status === 'err' && <p role="status" style={{ fontFamily: 'var(--ff-mono)', fontSize: '.72rem', textAlign: 'center', marginTop: '.6rem', color: '#f87171' }}>✗ Something went wrong. Try emailing directly.</p>}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
