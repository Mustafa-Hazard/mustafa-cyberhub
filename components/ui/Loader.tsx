'use client'
import { useEffect, useState } from 'react'
import { LOADER_DELAY_MS } from '@/lib/constants'

export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), LOADER_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      id="loader"
      role="status"
      aria-label="Loading"
      style={{
        position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 10000,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '1.5rem',
        transition: 'opacity .6s, visibility .6s',
        opacity: done ? 0 : 1,
        visibility: done ? 'hidden' : 'visible',
        pointerEvents: done ? 'none' : 'all',
      }}
    >
      <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--white)', letterSpacing: '.1em' }}>
        M · I
      </div>
      <div style={{ width: 200, height: 2, background: 'var(--border2)', borderRadius: 2, overflow: 'hidden' }}>
        <div className="loader-bar-fill" />
      </div>
    </div>
  )
}
