import { SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 2rem', maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
      <div>
        <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '.95rem', color: 'var(--white)' }}>
          <span style={{ color: 'var(--lime)' }}>Mustafa Iqbal</span>
        </div>
        <p style={{ fontSize: '.73rem', color: 'var(--gray2)', marginTop: '.15rem' }}>Full-Stack · Cybersecurity · Karachi</p>
      </div>

      <div style={{ display: 'flex', gap: '.5rem' }} aria-label="Social links">
        <a href={SOCIAL_LINKS.github}   target="_blank" rel="noopener noreferrer" aria-label="GitHub"   style={{ color: 'var(--gray2)', textDecoration: 'none', fontSize: '.95rem', transition: 'color var(--trans)' }}>⬡</a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--gray2)', textDecoration: 'none', fontSize: '.95rem', transition: 'color var(--trans)' }}>in</a>
        <a href={SOCIAL_LINKS.email}    aria-label="Email" style={{ color: 'var(--gray2)', textDecoration: 'none', fontSize: '.95rem', transition: 'color var(--trans)' }}>✉</a>
      </div>

      <p style={{ width: '100%', fontFamily: 'var(--ff-mono)', fontSize: '.65rem', color: 'var(--gray2)', textAlign: 'center', paddingTop: '1.2rem', borderTop: '1px solid var(--border)' }}>
        © {new Date().getFullYear()} Mustafa Muhammad Iqbal. All rights reserved.
      </p>
    </footer>
  )
}
