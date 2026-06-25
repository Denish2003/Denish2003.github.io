import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function Loader() {
  const loaderRef = useRef()
  const barRef    = useRef()
  const logoRef   = useRef()
  const [done, setDone] = useState(false)

  useEffect(() => {
    /* Only show loader on first visit per session */
    if (sessionStorage.getItem('loaded')) {
      setDone(true)
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('loaded', '1')
        setDone(true)
      }
    })

    tl.fromTo(logoRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .to(barRef.current,
      { width: '100%', duration: 1.0, ease: 'power2.inOut' },
      '-=0.3'
    )
    .to(loaderRef.current,
      { yPercent: -100, duration: 0.8, ease: 'power3.inOut', delay: 0.15 }
    )
  }, [])

  if (done) return null

  return (
    <div ref={loaderRef} className="loader">
      <div ref={logoRef} className="loader-logo">D<span>.</span></div>
      <div className="loader-bar-wrap">
        <div ref={barRef} className="loader-bar" />
      </div>
    </div>
  )
}
