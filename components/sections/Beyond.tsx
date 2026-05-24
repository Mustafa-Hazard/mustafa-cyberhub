'use client'
import { useReveal } from '@/hooks/useReveal'
import { beyondCards } from '@/data/beyond'

export default function Beyond() {
  useReveal()

  return (
    <section id="beyond" aria-label="Beyond the code" style={{ padding: '7rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-tag reveal">// More Than a Developer</p>
        <h2 className="section-title reveal">Beyond <span style={{ color: 'var(--lime)' }}>the Code</span></h2>
        <div className="section-divider reveal" aria-hidden="true" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1.2rem' }}>
          {beyondCards.map((card, i) => (
            <div
              key={card.id}
              className={`beyond-card reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`}
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.6rem', transition: 'border-color var(--trans),transform var(--trans)', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', marginBottom: '1.1rem', background: card.iconBg }} aria-hidden="true">{card.icon}</div>
              <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '.3rem' }}>{card.title}</h3>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.68rem', color: 'var(--lime)', marginBottom: '.6rem', letterSpacing: '.04em' }}>{card.org}</div>
              <p style={{ fontSize: '.8rem', color: 'var(--gray2)', lineHeight: 1.7 }}>{card.desc}</p>
              <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.65rem', color: 'var(--gray2)', marginTop: '.7rem' }}>{card.date}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .beyond-card:hover { border-color: var(--border2) !important; transform: translateY(-4px) !important; }
      `}</style>
    </section>
  )
}
