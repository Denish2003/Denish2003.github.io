import { useEffect, useRef } from 'react'

export function Cursor() {
  const dotRef  = useRef()
  const ringRef = useRef()

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    let mx = -200, my = -200
    let rx = -200, ry = -200
    let raf

    const onMove = e => { mx = e.clientX; my = e.clientY }
    const onLeave = () => { dot.classList.add('hidden'); ring.classList.add('hidden') }
    const onEnter = () => { dot.classList.remove('hidden'); ring.classList.remove('hidden') }

    const HOVER_SEL = 'a, button, [data-hover], .project-card, .gallery-item, .filter-btn, .role-chip, .what-panel'
    const onOver = e => { if (e.target.closest(HOVER_SEL)) ring.classList.add('hovered') }
    const onOut  = e => { if (e.target.closest(HOVER_SEL)) ring.classList.remove('hovered') }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    const tick = () => {
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
      rx += (mx - rx) * 0.13
      ry += (my - ry) * 0.13
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
