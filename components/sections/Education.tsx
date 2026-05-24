'use client'
import { useReveal } from '@/hooks/useReveal'

const certs = [
  { title: 'Google Cybersecurity Professional', sub: 'Coursera · Oct 2025', link: 'https://coursera.org/share/40092fd5dc6991639bd5538a67c5a9d1' },
  { title: 'Google AI Essentials',              sub: 'Coursera · Oct 2025', link: 'https://www.coursera.org/account/accomplishments/specialization/953XK0GYCIT1' },
  { title: 'Linux for Beginners',               sub: 'Udemy · Jul 2025',    link: 'https://www.udemy.com/certificate/UC-91ec6ae7-dc40-42dc-8a3f-504f880ef5b8/' },
  { title: 'Python Pro',                        sub: 'Udemy · Apr 2025',    link: 'https://www.udemy.com/certificate/UC-dbdf73dc-9367-4df0-b854-486c0b946b9a/' },
  { title: 'German A1 + A2',                    sub: 'Goethe-Institut · 2022–2023', badge: 'Certified' },
  { title: 'IELTS Academic',                    sub: 'British Council · 2024',      badge: 'Band 7', badgeLime: true },
]

export default function Education() {
  useReveal()

  return (
    <section id="edu" aria-label="Education and certifications" style={{ padding: '7rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <p className="section-tag reveal">// Credentials</p>
      <h2 className="section-title reveal">Education &amp; <span style={{ color: 'var(--lime)' }}>Certifications</span></h2>
      <div className="section-divider reveal" aria-hidden="true" />

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '2.5rem' }} className="edu-grid">
        {/* Education card */}
        <div className="reveal" style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.2rem' }}>
            <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-sm)', background: 'var(--lime-dim)', border: '1px solid rgba(200,255,0,.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }} aria-hidden="true">📚</div>
            <div>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--white)' }}>SZABIST University</div>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.75rem', color: 'var(--gray2)', marginTop: '.2rem' }}>B.S. Computer Science — Karachi</div>
            </div>
          </div>
          <dl style={{ fontSize: '.82rem', color: 'var(--gray)', lineHeight: 2 }}>
            {[
              ['CGPA',       '3.6 / 4.0 · 2× Top of Class'],
              ['Year',       '3rd Year · 6th Semester'],
              ['Expected',   'June 2027'],
              ['Focus',      'Cybersecurity, Secure Backend, Application Security'],
              ['Coursework', 'Networks, OS, Software Engineering, AI, Database Systems, Network Security, SQE&T'],
            ].map(([dt, dd]) => (
              <div key={dt} style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                <strong style={{ color: 'var(--white)', minWidth: 80 }}>{dt}:</strong>
                <span dangerouslySetInnerHTML={{ __html: dd }} />
              </div>
            ))}
          </dl>
          <div style={{ marginTop: '1.3rem', display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
            <span className="pill white">NCEAC Accredited</span>
            <span className="pill white">HEC Recognized</span>
          </div>
        </div>

        {/* Certs */}
        <div className="reveal reveal-delay-1">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
            {certs.map((c) => (
              <div
                key={c.title}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.8rem', padding: '.85rem 1rem', borderRadius: 'var(--radius-sm)', background: 'var(--bg3)', border: '1px solid var(--border)', transition: 'border-color var(--trans)' }}
                className="cert-item"
              >
                <div>
                  <h4 style={{ fontSize: '.82rem', fontWeight: 600, color: 'var(--white)', marginBottom: '.1rem' }}>{c.title}</h4>
                  <p style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', color: 'var(--gray2)' }}>{c.sub}</p>
                </div>
                {c.link
                  ? <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.3rem', fontFamily: 'var(--ff-mono)', fontSize: '.67rem', color: 'var(--lime)', textDecoration: 'none', transition: 'color var(--trans)', whiteSpace: 'nowrap', flexShrink: 0 }}>View ↗</a>
                  : <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', color: c.badgeLime ? 'var(--lime)' : 'var(--gray2)', flexShrink: 0 }}>{c.badge}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cert-item:hover { border-color: rgba(200,255,0,.2) !important; }
        @media (max-width: 960px) { .edu-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
