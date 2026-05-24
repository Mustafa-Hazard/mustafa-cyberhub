'use client'
import { useEffect } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { skillGroups } from '@/data/skills'

export default function Skills() {
  useReveal()

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const bar = e.target as HTMLElement
            bar.style.setProperty('--w', bar.dataset.w ?? '0%')
            requestAnimationFrame(() => bar.classList.add('go'))
            obs.unobserve(bar)
          }
        })
      },
      { threshold: 0.3 }
    )
    document.querySelectorAll('.sb-fill').forEach((b) => obs.observe(b))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" aria-label="Technical skills" style={{ padding: '7rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
      <p className="section-tag reveal">// What I Do</p>
      <h2 className="section-title reveal">Technical <span style={{ color: 'var(--lime)' }}>Skills</span></h2>
      <div className="section-divider reveal" aria-hidden="true" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }} className="skills-grid">
        {skillGroups.map((group, i) => (
          <div
            key={group.id}
            className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 3)}` : ''}`}
            style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.6rem', transition: 'border-color var(--trans)' }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1.3rem' }}>
              <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0, background: group.iconBg, color: group.iconColor }} aria-hidden="true">{group.icon}</div>
              <div style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--white)' }}>{group.title}</div>
            </div>

            {/* Bars */}
            {group.type === 'bars' && group.bars && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
                {group.bars.map((bar) => (
                  <div key={bar.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.2rem' }}>
                      <span style={{ fontSize: '.82rem', color: 'var(--gray)' }}>{bar.name}</span>
                      <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '.67rem', color: 'var(--lime)' }}>{bar.pct}%</span>
                    </div>
                    <div style={{ height: 2, background: 'rgba(255,255,255,.06)', borderRadius: 2, overflow: 'hidden' }} role="progressbar" aria-valuenow={bar.pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${bar.name} proficiency`}>
                      <div className="sb-fill" data-w={`${bar.pct}%`} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            {group.type === 'tags' && group.tags && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem' }}>
                {group.tags.map((tag) => <span key={tag.label} className={`pill ${tag.color}`}>{tag.label}</span>)}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 960px) { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
