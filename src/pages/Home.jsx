import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ParticleCanvas } from '../components/ParticleCanvas.jsx'
import { PROJECTS } from '../data/content.jsx'

gsap.registerPlugin(ScrollTrigger)

/* ── helpers ─────────────────────────────────────────── */
function splitChars(text) {
  return text.split('').map((ch, i) => (
    <span key={i} className="hero-title-char" style={{ display: 'inline-block' }}>
      {ch === ' ' ? ' ' : ch}
    </span>
  ))
}

function Counter({ to, suffix = '' }) {
  const ref = useRef()
  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const dur   = 1800
      const update = now => {
        const t = Math.min((now - start) / dur, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        el.textContent = Math.round(eased * to).toLocaleString() + suffix
        if (t < 1) requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [to, suffix])
  return <span ref={ref}>0{suffix}</span>
}

/* ── ProjectCard ─────────────────────────────────────── */
function ProjectCard({ project, featured = false }) {
  const { wide, year, tags, title, desc, link, linkLabel, linkCls, ph, phEls, img, cat } = project
  return (
    <a
      href={link}
      className={`project-card${wide && featured ? ' card-wide' : ''}`}
      data-cat={cat}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-img">
        {img
          ? <img src={img} alt={title} loading="lazy" />
          : <div className={`ph ${ph}`}>{phEls}</div>
        }
        <div className="card-year">{year}</div>
      </div>
      <div className="card-body">
        <div className="card-tags">
          {tags.map(t => <span key={t.label} className={`tag ${t.cls}`}>{t.label}</span>)}
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
        <span className={`card-link ${linkCls}`}>{linkLabel}</span>
      </div>
    </a>
  )
}

/* ── page ────────────────────────────────────────────── */
const ROTATE_WORDS = ['Engineer', 'Designer', 'Artist']
const FEATURED = ['acmu', 'thesis', 'verisk']

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0)
  const wordRef    = useRef()
  const heroRef    = useRef()
  const sectionsRef = useRef([])

  /* ── Word rotator ── */
  useEffect(() => {
    const interval = setInterval(() => {
      const el = wordRef.current
      if (!el) return
      gsap.to(el, { opacity: 0, y: -10, duration: 0.3, ease: 'power2.in',
        onComplete: () => {
          setWordIdx(i => (i + 1) % ROTATE_WORDS.length)
          gsap.fromTo(el, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
        }
      })
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  /* ── Hero entrance (runs after loader) ── */
  useEffect(() => {
    const delay = sessionStorage.getItem('loaded') ? 0.1 : 2.2

    const tl = gsap.timeline({ delay })
    tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
      .fromTo('.hero-title-char',
        { y: '110%' },
        { y: '0%', stagger: 0.022, duration: 0.75, ease: 'power3.out' },
        '-=0.4'
      )
      .to('.hero-tagline', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .to('.hero-sub',     { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.35')
      .to('.hero-ctas',    { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
      .to('.hero-stats',   { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.25')
      .to('.hero-right',   { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')

    /* floating code card animation */
    gsap.to('.code-card', {
      y: '-12px', duration: 3.5, ease: 'sine.inOut', repeat: -1, yoyo: true, delay: delay + 1,
    })

    return () => tl.kill()
  }, [])

  /* ── ScrollTrigger section reveals ── */
  useEffect(() => {
    /* Clip-path reveal for section titles */
    gsap.utils.toArray('.section-title').forEach(el => {
      gsap.fromTo(el,
        { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0 0% 0)', opacity: 1,
          duration: 1.1, ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        }
      )
    })

    /* Clip-path reveal for section labels */
    gsap.utils.toArray('.section-label').forEach(el => {
      gsap.fromTo(el,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)', opacity: 1,
          duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        }
      )
    })

    /* Fade-up for generic st-reveal blocks */
    gsap.utils.toArray('.st-reveal').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          delay: Number(el.dataset.delay || 0),
        }
      )
    })

    /* Parallax on hero wrap while scrolling */
    gsap.to(heroRef.current, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
    })

    /* Marquee speed-up on scroll */
    ScrollTrigger.create({
      trigger: '.marquee-section',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: self => {
        const spd = 28 - self.getVelocity() * 0.003
        const el = document.querySelector('.marquee-track')
        if (el) el.style.animationDuration = `${Math.max(8, spd)}s`
      },
    })

    /* "What I make" panels - clip-path slide in from left */
    gsap.fromTo('.what-panel',
      { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
      {
        clipPath: 'inset(0 0% 0 0)', opacity: 1,
        stagger: 0.15, duration: 1.0, ease: 'power4.out',
        scrollTrigger: { trigger: '.what-grid', start: 'top 82%', once: true },
      }
    )

    /* Project cards - stagger with rotation */
    gsap.fromTo('.project-card',
      { opacity: 0, y: 60, rotateX: 8 },
      {
        opacity: 1, y: 0, rotateX: 0,
        stagger: 0.1, duration: 0.95, ease: 'power3.out',
        transformPerspective: 1000,
        scrollTrigger: { trigger: '.projects-grid', start: 'top 84%', once: true },
      }
    )

    /* 3D tilt on project cards */
    const cards = document.querySelectorAll('.project-card')
    const cleanupFns = []
    cards.forEach(card => {
      const onMove = e => {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width  - 0.5
        const y = (e.clientY - r.top)  / r.height - 0.5
        gsap.to(card, {
          rotateY: x * 14, rotateX: -y * 8,
          transformPerspective: 900, duration: 0.45, ease: 'power2.out',
        })
      }
      const onLeave = () => {
        gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanupFns.push(() => { card.removeEventListener('mousemove', onMove); card.removeEventListener('mouseleave', onLeave) })
    })

    /* Magnetic buttons */
    const btns = document.querySelectorAll('.btn-primary, .btn-outline')
    const magnetCleanup = []
    btns.forEach(btn => {
      const onMove = e => {
        const r = btn.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width  / 2)
        const dy = e.clientY - (r.top  + r.height / 2)
        gsap.to(btn, { x: dx * 0.22, y: dy * 0.22, duration: 0.4, ease: 'power2.out' })
      }
      const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
      magnetCleanup.push(() => { btn.removeEventListener('mousemove', onMove); btn.removeEventListener('mouseleave', onLeave) })
    })

    /* About photo parallax */
    gsap.to('.about-photo-wrap', {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: { trigger: '.about-teaser', start: 'top bottom', end: 'bottom top', scrub: true },
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      cleanupFns.forEach(fn => fn())
      magnetCleanup.forEach(fn => fn())
    }
  }, [])

  const featured = PROJECTS.filter(p => FEATURED.includes(p.id))

  const MARQUEE = [
    'Product Design', 'Software Engineering', 'HCI Research',
    'Visual Art', 'Architecture', 'Princeton University',
    'Figma', 'React · TypeScript', 'Generative AI',
  ]

  return (
    <>
      {/* ── ambient ── */}
      <div className="hero-ambient-1" />
      <div className="hero-ambient-2" />

      {/* ── HERO ── */}
      <div className="hero-wrap" ref={heroRef}>
        <ParticleCanvas />

        <div className="hero">
          {/* left */}
          <div className="hero-left">
            <p className="hero-eyebrow" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              <span className="eyebrow-dot" />
              Princeton CS '26 &nbsp;·&nbsp; Product Designer &nbsp;·&nbsp; Engineer
            </p>

            <h1 className="hero-title">
              <span className="hero-title-line">{splitChars('Denish')}</span>
              <span className="hero-title-line">{splitChars('Patel.')}</span>
            </h1>

            <p className="hero-tagline" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              <span>I am a&nbsp;</span>
              <span className="tagline-word" ref={wordRef}>{ROTATE_WORDS[wordIdx]}</span>
              <span>&nbsp;by nature.</span>
            </p>

            <p className="hero-sub" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              I build software that ships and design products people{' '}
              <strong>actually want to use.</strong> Princeton CS senior finishing a
              senior thesis on AI data donation - bridging{' '}
              <strong>product design</strong> and <strong>software engineering</strong>.
            </p>

            <div className="hero-ctas" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              <Link to="/work" className="btn btn-primary">View My Work →</Link>
              <Link to="/about" className="btn btn-outline">About Me</Link>
            </div>

            <div className="hero-stats" style={{ opacity: 0, transform: 'translateY(16px)' }}>
              <div>
                <div className="stat-num"><Counter to={2500} suffix="+" /></div>
                <div className="stat-lbl">Bug reports analyzed</div>
              </div>
              <div>
                <div className="stat-num"><Counter to={30} suffix="+" /></div>
                <div className="stat-lbl">Students tutored weekly</div>
              </div>
              <div>
                <div className="stat-num"><Counter to={95} suffix="%" /></div>
                <div className="stat-lbl">Time reduction at Verisk</div>
              </div>
              <div>
                <div className="stat-num">4</div>
                <div className="stat-lbl">Years at Princeton</div>
              </div>
            </div>
          </div>

          {/* right: code card */}
          <div className="hero-right" style={{ opacity: 0, transform: 'translateY(20px)' }}>
            <div className="code-card">
              <div className="code-card-header">
                <span className="traffic-dot red" />
                <span className="traffic-dot yellow" />
                <span className="traffic-dot green" />
                <span className="code-filename">denish.js</span>
              </div>
              <div className="code-body">
                <span className="c-keyword">const </span>
                <span className="c-var">denish</span>
                <span className="c-bracket"> = {'{'}</span>{'\n'}
                {'  '}<span className="c-prop">role</span>
                <span className="c-bracket">: </span>
                <span className="c-string">'engineer + designer'</span>
                <span className="c-bracket">,</span>{'\n'}
                {'  '}<span className="c-prop">school</span>
                <span className="c-bracket">: </span>
                <span className="c-string">"Princeton '26"</span>
                <span className="c-bracket">,</span>{'\n'}
                {'  '}<span className="c-prop">skills</span>
                <span className="c-bracket">: [</span>{'\n'}
                {'    '}<span className="c-string">'React'</span>
                <span className="c-bracket">, </span>
                <span className="c-string">'Figma'</span>
                <span className="c-bracket">,</span>{'\n'}
                {'    '}<span className="c-string">'Python'</span>
                <span className="c-bracket">, </span>
                <span className="c-string">'GSAP'</span>
                <span className="c-bracket">,</span>{'\n'}
                {'    '}<span className="c-string">'AWS Bedrock'</span>{'\n'}
                {'  '}<span className="c-bracket">],</span>{'\n'}
                {'  '}<span className="c-prop">status</span>
                <span className="c-bracket">: </span>
                <span className="c-accent">'open to work ✦'</span>{'\n'}
                <span className="c-bracket">{'}'}</span>
                <span className="code-cursor" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── MARQUEE ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className={`marquee-item${i % (MARQUEE.length + 1) === 0 ? ' hi' : ''}`}>
              {i % (MARQUEE.length + 1) === 0 ? '✦' : item}
            </span>
          ))}
        </div>
      </div>

      {/* ── WHAT I MAKE ── */}
      <div className="what-section section st-reveal">
        <p className="section-label">What I make</p>
        <h2 className="section-title">Three ways<br />I show up</h2>
        <div className="what-grid" style={{ marginTop: '3rem' }}>
          <div className="what-panel">
            <div className="what-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.814a.5.5 0 0 1-.62-.62l.814-2.872a2 2 0 0 1 .506-.854z"/></svg>
            </div>
            <span className="what-label design">Design</span>
            <h3 className="what-title">Products<br />people love</h3>
            <p className="what-desc">
              I run user research, sketch wireframes, and ship Figma prototypes that
              go straight to development. Good design is invisible - great design
              solves problems before users notice them.
            </p>
            <div className="what-skills">
              {['Figma', 'User Research', 'Wireframing', 'HCI'].map(s => (
                <span key={s} className="what-skill">{s}</span>
              ))}
            </div>
          </div>

          <div className="what-panel eng-panel">
            <div className="what-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <span className="what-label eng">Engineering</span>
            <h3 className="what-title">Software<br />that ships</h3>
            <p className="what-desc">
              From agentic AI workflows at Verisk to full-stack Princeton course
              projects, I write code that actually runs in production. TypeScript,
              React, Python, AWS - I pick the right tool for the job.
            </p>
            <div className="what-skills">
              {['React', 'TypeScript', 'Python', 'AWS Bedrock'].map(s => (
                <span key={s} className="what-skill">{s}</span>
              ))}
            </div>
          </div>

          <div className="what-panel art-panel">
            <div className="what-icon">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
            </div>
            <span className="what-label art">Art</span>
            <h3 className="what-title">Craft &amp;<br />creativity</h3>
            <p className="what-desc">
              I have a Visual Arts minor and an Architecture minor for a reason.
              The same eye that makes a compelling painting makes a compelling UI.
              I bring that aesthetic sensibility to everything I build.
            </p>
            <div className="what-skills">
              {['Oil Painting', 'Digital Art', 'Architecture', 'Procreate'].map(s => (
                <span key={s} className="what-skill">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SELECTED WORK ── */}
      <div className="section" style={{ borderTop: '1px solid var(--border)', paddingTop: 'clamp(80px,10vw,140px)' }}>
        <div className="work-header st-reveal">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="section-title">What I've built<br />&amp; designed</h2>
          </div>
          <Link to="/work" className="btn btn-outline">View All Projects →</Link>
        </div>
        <div className="projects-grid">
          {featured.map(p => <ProjectCard key={p.id} project={p} featured />)}
        </div>
      </div>

      {/* ── ABOUT TEASER ── */}
      <div className="about-teaser section">
        <div className="about-teaser-grid">
          <div className="about-photo-wrap st-reveal">
            <img src="/images/images/Denish.jpg" alt="Denish Patel" className="about-photo" />
            <div className="about-photo-deco" />
          </div>
          <div className="about-text st-reveal" data-delay="0.15">
            <p className="section-label">About Me</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Engineer.<br />Designer.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Artist.</em>
            </h2>
            <p>
              I'm a senior at <strong>Princeton University</strong> studying Computer Science
              with minors in Statistics &amp; ML, Visual Arts, and Architecture &amp; Engineering.
              That's not a typo - I genuinely can't pick a lane.
            </p>
            <p>
              I believe the best products live at the intersection of technical rigor and
              human empathy. Four years sharpening both sides.
            </p>
            <div className="role-chips">
              {['Visual Arts Minor', 'Architecture Minor', 'Statistics & ML Minor', 'AI Research'].map(r => (
                <span key={r} className="role-chip">{r}</span>
              ))}
            </div>
            <Link to="/about" className="btn btn-outline">Full story →</Link>
          </div>
        </div>
      </div>

      {/* ── CONTACT CTA ── */}
      <div className="contact-section section st-reveal">
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
