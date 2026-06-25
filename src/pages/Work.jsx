import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROJECTS } from '../data/content.jsx'

gsap.registerPlugin(ScrollTrigger)

const FILTERS = [
  { id: 'all',      label: 'All' },
  { id: 'design',   label: 'Product Design' },
  { id: 'eng',      label: 'Engineering' },
  { id: 'research', label: 'Research' },
]

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    gsap.fromTo('.work-hero > *',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    )
    gsap.fromTo('.project-card',
      { opacity: 0, y: 50, scale: 0.98 },
      {
        opacity: 1, y: 0, scale: 1,
        stagger: 0.09, duration: 0.85, ease: 'power3.out',
        scrollTrigger: { trigger: '.work-page-grid', start: 'top 85%', once: true },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')
    cards.forEach(card => {
      const show = activeFilter === 'all' || card.dataset.cat === activeFilter
      gsap.to(card, {
        opacity: show ? 1 : 0.2,
        scale:   show ? 1 : 0.98,
        duration: 0.35, ease: 'power2.out',
        pointerEvents: show ? 'auto' : 'none',
      })
    })
  }, [activeFilter])

  return (
    <>
      <div className="hero-ambient-1" />

      <div className="work-hero">
        <p className="section-label">Portfolio</p>
        <h1 className="big-name" style={{ fontSize: 'clamp(52px,8vw,110px)' }}>
          Selected<br /><em>Work.</em>
        </h1>
        <p className="about-tagline" style={{ maxWidth: 520, marginTop: '1.5rem' }}>
          Product design, software engineering, and research - from UX work with
          content moderators in Africa to agentic AI systems at a Fortune 500.
        </p>
        <div className="work-filter">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={`filter-btn${activeFilter === f.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="work-page-grid">
        {PROJECTS.map(p => (
          <a
            key={p.id}
            id={p.id}
            href={p.link}
            className={`project-card${p.wide ? ' card-wide' : ''}`}
            data-cat={p.cat}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-img">
              {p.img
                ? <img src={p.img} alt={p.title} loading="lazy" />
                : <div className={`ph ${p.ph}`}>{p.phEls}</div>
              }
              <div className="card-year">{p.year}</div>
            </div>
            <div className="card-body">
              <div className="card-tags">
                {p.tags.map(t => <span key={t.label} className={`tag ${t.cls}`}>{t.label}</span>)}
              </div>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <span className={`card-link ${p.linkCls}`}>{p.linkLabel}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="contact-section section" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="section-label">Let's Connect</p>
        <h2 className="section-title">Get in touch</h2>
        <p className="section-desc" style={{ margin: '1rem auto 2.5rem', textAlign: 'center' }}>
          Based in Princeton, NJ.
        </p>
        <div className="contact-links">
          <a href="mailto:dp9798@alumni.princeton.edu" className="contact-item">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            dp9798@alumni.princeton.edu
          </a>
          <a href="https://linkedin.com/in/denishpatel13" className="contact-item" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href="https://github.com/Denish2003" className="contact-item" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </div>
    </>
  )
}
