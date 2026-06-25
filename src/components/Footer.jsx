import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-logo">Denish<span>.</span></div>
        <div className="footer-copy">© 2026 Denish Patel · Princeton, NJ</div>
      </div>
      <div className="footer-links">
        <Link to="/work">Work</Link>
        <Link to="/art">Art</Link>
        <Link to="/about">About</Link>
        <a href="https://linkedin.com/in/denishpatel13" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a href="https://github.com/Denish2003" target="_blank" rel="noopener">GitHub ↗</a>
        <a href="mailto:dp9798@alumni.princeton.edu">Email ↗</a>
      </div>
    </footer>
  )
}
