import { useState, useEffect, useCallback } from 'react'
import { gsap } from 'gsap'
import { ART_ITEMS } from '../data/content.jsx'

const FILTERS = [
  { id: 'all',          label: 'All' },
  { id: 'drawing',      label: 'Drawing' },
  { id: 'digital',      label: 'Digital' },
  { id: 'architecture', label: 'Architecture' },
]

export default function Art() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxSrc, setLightboxSrc] = useState(null)

  const visible = ART_ITEMS.filter(
    item => activeFilter === 'all' || item.cat === activeFilter
  )

  /* ── entrance animation ── */
  useEffect(() => {
    gsap.fromTo('.art-hero > *',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    )
  }, [])

  /* ── re-animate gallery on filter change ── */
  useEffect(() => {
    gsap.fromTo('.gallery-item',
      { opacity: 0, scale: 0.94 },
      { opacity: 1, scale: 1, stagger: 0.04, duration: 0.55, ease: 'power3.out' }
    )
  }, [activeFilter])

  /* ── lightbox keyboard ── */
  const closeLb = useCallback(() => setLightboxSrc(null), [])
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') closeLb() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [closeLb])

  /* lock scroll when lightbox open */
  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? 'hidden' : ''
  }, [lightboxSrc])

  return (
    <>
      <div className="hero-ambient-1" />
      <div className="hero-ambient-2" />

      {/* lightbox */}
      <div
        className={`lightbox${lightboxSrc ? ' open' : ''}`}
        onClick={e => { if (e.target.classList.contains('lightbox')) closeLb() }}
      >
        <button className="lightbox-close" onClick={closeLb}>✕</button>
        {lightboxSrc && <img src={lightboxSrc} alt="Artwork" />}
      </div>

      <div className="art-hero">
        <p className="section-label">Creative Work</p>
        <h1 className="big-name" style={{ fontSize: 'clamp(52px,8vw,110px)' }}>
          Art &amp;<br /><em>Making.</em>
        </h1>
        <p className="about-tagline" style={{ maxWidth: 560, marginTop: '1.5rem' }}>
          When I'm not writing code or designing interfaces, I'm drawing, painting, or building
          physical things. The same eye that makes a good UI makes a good painting.
          Click any piece to enlarge.
        </p>
        <div className="gallery-filter">
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

      <div className="gallery-grid">
        {visible.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="gallery-item"
            onClick={() => setLightboxSrc(item.src)}
          >
            <img src={item.src} alt={item.label} loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
