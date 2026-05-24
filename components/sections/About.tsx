'use client'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import { SOCIAL_LINKS } from '@/lib/constants'

const specs = [
    { icon: '🛡️', title: 'Security-First Dev', desc: 'RBAC · input validation · audit logs' },
    { icon: '🧪', title: 'QA & Testing', desc: 'Cypress E2E · Playwright · Jira' },
    { icon: '🤖', title: 'ML & NLP', desc: 'SVM · Naive Bayes · TF-IDF · scikit-learn' },
    { icon: '🌍', title: 'Multilingual', desc: 'EN (IELTS 7) · DE (B1) · UR' },
]

const langs = [
    { flag: '🇬🇧', label: 'English — IELTS Band 7' },
    { flag: '🇩🇪', label: 'German — B1' },
    { flag: '🇵🇰', label: 'Urdu — Native' },
]

export default function About() {
    useReveal()

    return (
        <section id="about" aria-label="About me" style={{ padding: '7rem 2rem', background: 'var(--bg2)' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '5rem', alignItems: 'start' }} className="about-grid">

                    {/* Image col */}
                    <div className="reveal" style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '-1.2rem', right: '-1.2rem', width: 100, height: 100, borderRadius: 'var(--radius-sm)', border: '1px solid rgba(200,255,0,.15)', background: 'var(--lime-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--lime)', zIndex: 2 }} aria-hidden="true">MI</div>
                        <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
                            <Image src="/images/profile.jpg" alt="Mustafa Iqbal — profile photo" width={480} height={560} priority style={{ width: '100%', height: 'auto', display: 'block', filter: 'brightness(.85) saturate(.9)' }} />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,11,18,.5) 0%,transparent 60%)' }} aria-hidden="true" />
                            <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem', zIndex: 2, background: 'rgba(8,11,18,.85)', border: '1px solid var(--border2)', backdropFilter: 'blur(8px)', borderRadius: 'var(--radius-sm)', padding: '.6rem .9rem', fontFamily: 'var(--ff-mono)', fontSize: '.7rem', color: 'var(--lime)' }}>
                                📍 Karachi, Pakistan
                            </div>
                        </div>
                    </div>

                    {/* Text col */}
                    <div className="reveal reveal-delay-1">
                        <p className="section-tag">// Who I Am</p>
                        <h2 className="section-title">Secure Code.<br /><span style={{ color: 'var(--lime)' }}>Tested. Shipped.</span></h2>
                        <div className="section-divider" style={{ marginBottom: '1.6rem' }} aria-hidden="true" />

                        <p style={{ color: 'var(--gray)', fontSize: '.95rem', lineHeight: 1.85, marginBottom: '1.1rem' }}>
                            I&apos;m <strong style={{ color: 'var(--white)' }}>Mustafa Muhammad Iqbal</strong>, a Computer Science student at <strong style={{ color: 'var(--white)' }}>SZABIST Karachi</strong> (CGPA 3.6, ranked first in class — twice). I build full-stack applications with a security-first mindset, ensuring every line of code is validated, tested, and hardened before it ships.
                        </p>
                        <p style={{ color: 'var(--gray)', fontSize: '.95rem', lineHeight: 1.85, marginBottom: '1.1rem' }}>
                            My work spans <strong style={{ color: 'var(--white)' }}>full-stack development</strong>, <strong style={{ color: 'var(--white)' }}>machine learning</strong>, and <strong style={{ color: 'var(--white)' }}>cybersecurity</strong> — from architecting role-based auth systems and training NLP classifiers, to analysing logs in Splunk and applying NIST frameworks. Long-term goal: <strong style={{ color: 'var(--white)' }}>Application Security</strong>.
                        </p>

                        {/* Spec grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem', margin: '1.6rem 0' }}>
                            {specs.map((s) => (
                                <div key={s.title} style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '1rem 1.1rem', transition: 'border-color var(--trans)' }}>
                                    <div style={{ fontSize: '1.1rem', marginBottom: '.4rem' }} aria-hidden="true">{s.icon}</div>
                                    <div style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--white)', marginBottom: '.18rem' }}>{s.title}</div>
                                    <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '.68rem', color: 'var(--gray2)' }}>{s.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Language pills */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.8rem' }} aria-label="Languages spoken">
                            {langs.map((l) => (
                                <span key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '.4rem', padding: '.35rem .75rem', borderRadius: 999, background: 'var(--bg3)', border: '1px solid var(--border)', fontSize: '.75rem', color: 'var(--white)' }}>
                                    <span aria-hidden="true">{l.flag}</span> {l.label}
                                </span>
                            ))}
                        </div>

                        {/* Quick links */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '1.4rem' }}>
                            <a href={SOCIAL_LINKS.email} className="pill">✉ Email</a>
                            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="pill">💬 WhatsApp</a>
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="pill">⬡ GitHub</a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="pill">in LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
        </section>
    )
}
