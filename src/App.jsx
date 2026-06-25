import { useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import { Cursor } from './components/Cursor.jsx'
import { Loader } from './components/Loader.jsx'
import { Nav } from './components/Nav.jsx'
import { Footer } from './components/Footer.jsx'

import Home  from './pages/Home.jsx'
import Work  from './pages/Work.jsx'
import About from './pages/About.jsx'
import Art   from './pages/Art.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const location  = useLocation()
  const lenisRef  = useRef(null)
  const curtainRef = useRef(null)

  /* ── Lenis smooth scroll ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(time => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
    return () => { lenis.destroy() }
  }, [])

  /* ── Curtain instantly covers page before paint (no flash) ── */
  useLayoutEffect(() => {
    gsap.set(curtainRef.current, { scaleY: 1 })
    window.scrollTo(0, 0)
  }, [location.pathname])

  /* ── Curtain animates away after paint → reveals new page ── */
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
    gsap.to(curtainRef.current, {
      scaleY: 0,
      duration: 0.8,
      ease: 'power4.inOut',
      delay: 0.05,
      onComplete: () => ScrollTrigger.refresh(),
    })
  }, [location.pathname])

  return (
    <>
      <div className="page-curtain" ref={curtainRef} />
      <Cursor />
      <Loader />
      <Nav />

      <Routes>
        <Route path="/"       element={<Home  />} />
        <Route path="/work"   element={<Work  />} />
        <Route path="/about"  element={<About />} />
        <Route path="/art"    element={<Art   />} />
        {/* 404 fallback */}
        <Route path="*"       element={<Home  />} />
      </Routes>

      <Footer />
    </>
  )
}
