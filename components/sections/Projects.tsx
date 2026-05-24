'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'
import { projects, filterTabs, type Project } from '@/data/projects'

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      role="dialog" aria-modal="true" aria-labelledby="m-title"
      style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', opacity: 1, pointerEvents: 'auto', transition: 'opacity .3s' }}
    >
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.75)', backdropFilter: 'blur(8px)' }} />
      <div style={{ position: 'relative', background: 'var(--bg2)', border: '1px solid var(--border2)', borderRadius: 'var(--radius)', maxWidth: 680, width: '100%', maxHeight: '88vh', overflowY: 'auto' }}>
        <div style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
          <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,var(--bg2) 0%,transparent 50%)' }} aria-hidden="true" />
          <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: '.8rem', right: '.8rem', zIndex: 2, width: 32, height: 32, borderRadius: 'var(--radius-sm)', background: 'rgba(8,11,18,.8)', border: '1px solid var(--border2)', color: 'var(--gray)', cursor: 'none', fontSize: '.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all var(--trans)' }}>✕</button>
        </div>
        <div style={{ padding: '1.6rem' }}>
          <h2 id="m-title" style={{ fontFamily: 'var(--ff-display)', fontSize: '1.2rem', color: 'var(--white)', marginBottom: '.5rem' }}>{project.title}</h2>
          <p style={{ fontSize: '.86rem', color: 'var(--gray)', lineHeight: 1.7, marginBottom: '1rem' }}>{project.longDesc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', marginBottom: '1.2rem' }}>
            {project.stack.map((t, i) => <span key={t} className={`pill ${project.stackColors[i] ?? 'white'}`}>{t}</span>)}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">⬡ GitHub</a>}
            {project.live   && <a href={project.live}   target="_blank" rel="noopener noreferrer" className="btn btn-lime">↗ Live Demo</a>}
            {!project.github && !project.live && <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '.72rem', color: 'var(--gray2)' }}>No public link yet.</span>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  useReveal()
  const [activeFilter, setActiveFilter] = useState('all')
  const [selected, setSelected]         = useState<Project | null>(null)

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter as Project['tags'][number]))

  return (
    <section id="projects" aria-label="Projects" style={{ padding: '7rem 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <p className="section-tag reveal">// My Work</p>
        <h2 className="section-title reveal">Featured <span style={{ color: 'var(--lime)' }}>Projects</span></h2>
        <div className="section-divider reveal" style={{ marginBottom: '2rem' }} aria-hidden="true" />

        {/* Filter bar */}
        <div className="reveal" style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '3rem' }} role="group" aria-label="Filter projects">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              className={`filter-btn${activeFilter === tab.value ? ' active' : ''}`}
              onClick={() => setActiveFilter(tab.value)}
              aria-pressed={activeFilter === tab.value}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '1.3rem' }} role="list">
          {filtered.map((proj, i) => (
            <article
              key={proj.id}
              role="listitem"
              className={`proj-card reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`}
              onClick={() => setSelected(proj)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelected(proj) } }}
              tabIndex={0}
              aria-label={`View ${proj.shortTitle} details`}
              style={{ background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', cursor: 'none', transition: 'border-color var(--trans),transform var(--trans),box-shadow var(--trans)', position: 'relative' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <Image src={proj.image} alt={proj.title} fill style={{ objectFit: 'cover', filter: 'brightness(.85) saturate(.9)', transition: 'transform .5s,filter .5s' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(8,11,18,.9) 0%,transparent 60%)' }} aria-hidden="true" />
                {proj.featured && <span style={{ position: 'absolute', top: '.8rem', left: '.8rem', zIndex: 2, fontFamily: 'var(--ff-mono)', fontSize: '.65rem', letterSpacing: '.06em', padding: '.25rem .65rem', borderRadius: 999, background: 'rgba(200,255,0,.15)', border: '1px solid rgba(200,255,0,.3)', color: 'var(--lime)' }} aria-label="Featured project">⭐ Featured</span>}
                <div style={{ position: 'absolute', inset: 0, zIndex: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(8,11,18,.6)', opacity: 0, transition: 'opacity var(--trans)', backdropFilter: 'blur(4px)' }} className="proj-hover-overlay" aria-hidden="true">
                  <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '.72rem', padding: '.45rem 1rem', borderRadius: 999, background: 'var(--lime)', color: 'var(--bg)', fontWeight: 700 }}>Quick View</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.2rem 1.3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '.5rem', marginBottom: '.5rem' }}>
                  <div style={{ fontFamily: 'var(--ff-display)', fontSize: '.95rem', fontWeight: 700, color: 'var(--white)' }}>{proj.shortTitle}</div>
                  <div style={{ display: 'flex', gap: '.35rem' }}>
                    {proj.github && <a href={proj.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label={`View ${proj.shortTitle} on GitHub`} style={{ color: 'var(--gray2)', textDecoration: 'none', fontSize: '1rem', transition: 'color var(--trans)', padding: '.15rem' }}>⬡</a>}
                    {proj.live   && <a href={proj.live}   target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label="Live demo" style={{ color: 'var(--gray2)', textDecoration: 'none', fontSize: '1rem', transition: 'color var(--trans)', padding: '.15rem' }}>↗</a>}
                  </div>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--gray2)', lineHeight: 1.6, marginBottom: '.8rem' }}>{proj.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.28rem' }} aria-label="Technologies">
                  {proj.stack.slice(0, 4).map((t, i) => <span key={t} className={`pill ${proj.stackColors[i] ?? 'white'}`}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}

      <style>{`
        .proj-card:hover { border-color: var(--border2) !important; transform: translateY(-5px) !important; box-shadow: 0 20px 50px rgba(0,0,0,.4) !important; }
        .proj-card:hover .proj-hover-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  )
}
