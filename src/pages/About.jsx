import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TIMELINE } from '../data/content.jsx'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = [
  {
    title: 'Design',
    items: ['Figma - prototyping & design systems','Low & high-fidelity wireframing','User research & focus groups','Interaction & accessibility design','Adobe Photoshop · Illustrator · InDesign','Usability heuristics evaluation','Procreate · Canva · Rhino'],
  },
  {
    title: 'Engineering',
    items: ['React · TypeScript · HTML/CSS','Python · Java · SQL','Node.js · Express','AWS Bedrock · S3 · Streamlit','Git · GitHub','ARM Assembly · Arduino','AI tools (Claude, Gemini, GPT)'],
  },
  {
    title: 'Research',
    items: ['Qualitative & quantitative evaluation','User interviewing','Empirical study design','Large-scale data analysis','Human-Computer Interaction','Computer Vision fundamentals'],
  },
  {
    title: 'Art & Making',
    items: ['Oil painting & soft pastels','Pencil & charcoal drawing','Digital illustration (Procreate)','Architectural modeling (Rhino)','Photography composition'],
  },
]

export default function About() {
  useEffect(() => {
    gsap.fromTo('.about-hero > *',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    )
    const els = gsap.utils.toArray('.st-fade')
    els.forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 45 },
        {
          opacity: 1, y: 0,
          duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }
      )
    })
    gsap.fromTo('.skill-card',
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1, y: 0, scale: 1,
        stagger: 0.08, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.skills-grid', start: 'top 82%', once: true },
      }
    )
    gsap.fromTo('.tl-item',
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0,
        stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.timeline', start: 'top 82%', once: true },
      }
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <>
      <div className="hero-ambient-1" />

      {/* Hero */}
      <div className="about-hero">
        <div>
          <p className="section-label">About Me</p>
          <h1 className="big-name">Hi, I'm<br />Denish<span style={{ color: 'var(--accent)' }}>.</span></h1>
          <p className="about-tagline">
            Princeton CS senior. Product designer. Software engineer. Occasional painter.
          </p>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: 'var(--text-2)', lineHeight: 1.8, maxWidth: 540, marginBottom: '1.5rem' }}>
            I grew up in New Jersey and found myself at Princeton studying Computer Science with
            three minors - Statistics & Machine Learning, Visual Arts, and Architecture &
            Engineering. That's not a flex; it's a confession: I genuinely cannot pick a lane.
          </p>
          <p style={{ fontSize: 'clamp(15px,1.6vw,17px)', color: 'var(--text-2)', lineHeight: 1.8, maxWidth: 540, marginBottom: '2rem' }}>
            I believe the most interesting work happens at the edges of disciplines.
            Code and design aren't opposites - they're the same impulse: take something
            messy and make it clear, useful, and maybe beautiful.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/work" className="btn btn-primary">View My Work →</Link>
          </div>
        </div>
        <div>
          <img src="/images/Denish.jpg" alt="Denish Patel" className="about-hero-photo" />
        </div>
      </div>

      {/* Skills */}
      <div className="skills-section section st-fade">
        <p className="section-label">Skills & Tools</p>
        <h2 className="section-title">What I work with</h2>
        <div className="skills-grid">
          {SKILLS.map(cat => (
            <div key={cat.title} className="skill-card">
              <div className="skill-card-title">{cat.title}</div>
              <div className="skill-list">
                {cat.items.map(item => <div key={item} className="skill-item">{item}</div>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="exp-section section st-fade">
        <p className="section-label">Experience</p>
        <h2 className="section-title" style={{ marginBottom: 0 }}>Where I've worked</h2>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div key={i} className="tl-item">
              <div className="tl-track">
                <div className="tl-dot" />
                <div className="tl-date">{item.date}</div>
              </div>
              <div className="tl-body">
                <div className="tl-role">{item.role}</div>
                <div className="tl-company">{item.company}</div>
                <div className="tl-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="section st-fade" style={{ borderTop: '1px solid var(--border)' }}>
        <p className="section-label">Education</p>
        <h2 className="section-title">Princeton University</h2>
        <p style={{ fontSize: 'clamp(15px,1.6vw,18px)', color: 'var(--text-2)', marginTop: '1rem', marginBottom: '3rem' }}>
          B.S.E. in Computer Science · Sep 2022 – May 2026<br />
          <span style={{ color: 'var(--muted)', fontSize: '0.9em' }}>
            Minors: Statistics & Machine Learning · Visual Arts · Architecture & Engineering
          </span>
        </p>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-card-title">Coursework</div>
            <div className="skill-list">
              {['Human-Computer Interaction','Computer Vision','Machine Learning','System Design','Algorithms & Data Structures','Programming Systems'].map(c => (
                <div key={c} className="skill-item">{c}</div>
              ))}
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-card-title">Activities</div>
            <div className="skill-list">
              {['Google SWEP via Basta (2024–2025)','Scholar Institute Fellows Program','CodePath participant','Society of Asian Engineers','Princeton AI Alignment','NJ SEEDS Alum & Volunteer','Princeton Robotics Club'].map(a => (
                <div key={a} className="skill-item">{a}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="contact-section section st-fade">
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
          <a href="tel:+19293719720" className="contact-item">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +1 (929) 371-9720
          </a>
          <a href="https://linkedin.com/in/denishpatel13" className="contact-item" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href="https://github.com/Denish2003" className="contact-item" target="_blank" rel="noopener">GitHub ↗</a>
        </div>
      </div>
    </>
  )
}
