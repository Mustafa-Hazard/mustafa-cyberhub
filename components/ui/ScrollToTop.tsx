'use client'
import { useEffect, useState } from 'react'
import { S2T_SCROLL_THRESHOLD } from '@/lib/constants'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > S2T_SCROLL_THRESHOLD)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      id="s2t"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 500,
        width: 42, height: 42, borderRadius: 'var(--radius-sm)',
        background: 'var(--lime)', border: 'none', color: 'var(--bg)',
        fontSize: '1.1rem', fontWeight: 700, cursor: 'none',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity .3s, transform .3s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        pointerEvents: show ? 'auto' : 'none',
      }}
    >
      ↑
    </button>
  )
}
