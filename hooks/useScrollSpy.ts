'use client'
import { useEffect, useState } from 'react'
import { SCROLL_SPY_OFFSET } from '@/lib/constants'

export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY
      let current = ''
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY
        if (sy >= top - SCROLL_SPY_OFFSET) current = id
      })
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return activeId
}
