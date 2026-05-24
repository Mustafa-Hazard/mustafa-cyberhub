'use client'
import { useReveal } from '@/hooks/useReveal'
import { experiences } from '@/data/experience'

export default function Experience() {
  useReveal()

  return (
    <section id="experience" aria-label="Work experience" style={{ padding: '7rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <p className="section-tag reveal">// My Journey</p>
      <h2 className="section-title reveal">Work <span style={{ color: 'var(--lime)' }}>Experience</span></h2>
      <div className="section-divider reveal" aria-hidden="true" />

      <div style={{ maxWidth: 820 }}>
        {experiences.map((exp, i) => (
          <article
            key={exp.id}
            className={`exp-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
            style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '2rem 2.2rem', position: 'relative', overflow: 'hidden', transition: 'border-color var(--trans)', marginBottom: '1.2rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)' }}>{exp.org}</div>
                <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.72rem', color: 'var(--lime)', marginTop: '.25rem' }}>↳ {exp.role}</div>
              </div>
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '.7rem', color: 'var(--gray2)', border: '1px solid var(--border)', borderRadius: 999, padding: '.3rem .8rem', whiteSpace: 'nowrap' }}>{exp.date}</span>
            </div>

            <ul aria-label="Responsibilities" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.6rem', margin: '1rem 0 1.3rem' }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{ display: 'flex', gap: '.7rem', fontSize: '.88rem', color: 'var(--gray)', lineHeight: 1.65 }}>
                  <span style={{ color: 'var(--lime)', flexShrink: 0, fontFamily: 'var(--ff-mono)', marginTop: '.05rem' }}>→</span>
                  <span dangerouslySetInnerHTML={{ __html: b.replace(/(\d+\+? \w[\w\s]+)/g, '<strong style="color:var(--white)">$1</strong>') }} />
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }} aria-label="Skills used">
              {exp.tags.map((t) => <span key={t} className="pill white">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
