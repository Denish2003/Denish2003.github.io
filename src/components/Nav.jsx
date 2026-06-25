import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export function Nav() {
  const navRef   = useRef()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav ref={navRef} className={`nav${scrolled ? ' scrolled' : ''}`}>
        <NavLink to="/" className="nav-logo" onClick={close}>Denish<span>.</span></NavLink>

        <div className="nav-pill">
          <NavLink to="/"      className={({isActive}) => isActive ? 'active' : ''} end onClick={close}>Home</NavLink>
          <NavLink to="/work"  className={({isActive}) => isActive ? 'active' : ''} onClick={close}>Work</NavLink>
          <NavLink to="/art"   className={({isActive}) => isActive ? 'active' : ''} onClick={close}>Art</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={close}>About</NavLink>
        </div>

        <div className="nav-right">
          <a href="https://linkedin.com/in/denishpatel13" className="nav-social" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a href="https://github.com/Denish2003" className="nav-social" target="_blank" rel="noopener">GitHub ↗</a>
          <a href="mailto:dp9798@alumni.princeton.edu" className="nav-social">dp9798@alumni.princeton.edu</a>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <NavLink to="/"      onClick={close}>Home</NavLink>
        <NavLink to="/work"  onClick={close}>Work</NavLink>
        <NavLink to="/art"   onClick={close}>Art</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <a href="mailto:dp9798@alumni.princeton.edu" onClick={close} className="mobile-email">dp9798@alumni.princeton.edu</a>
      </div>
    </>
  )
}
