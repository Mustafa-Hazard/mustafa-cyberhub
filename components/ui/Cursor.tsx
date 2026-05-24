'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cur || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cur.style.transform = `translate(${mx - 5}px,${my - 5}px)`
    }

    const animRing = () => {
      rx += (mx - rx - 18) * 0.15
      ry += (my - ry - 18) * 0.15
      ring.style.transform = `translate(${Math.round(rx)}px,${Math.round(ry)}px)`
      rafId = requestAnimationFrame(animRing)
    }

    const onEnter = () => { ring.style.opacity = '0' }
    const onLeave = () => { ring.style.opacity = '1' }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animRing)

    const hoverEls = document.querySelectorAll('a,button,.proj-card,.beyond-card,.cert-item')
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div id="cursor" aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
    </>
  )
}
