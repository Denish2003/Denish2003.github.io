import { useEffect, useRef } from 'react'

export function ParticleCanvas() {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    const mouse = { x: -1000, y: -1000 }

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * (window.devicePixelRatio || 1)
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1)
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }

    const W = () => canvas.offsetWidth
    const H = () => canvas.offsetHeight

    resize()

    /* Create particles */
    const COUNT = 90
    const particles = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * W(),
      y:  Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.5 + 0.4,
      opacity: Math.random() * 0.45 + 0.15,
    }))

    const onMove = e => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('resize', resize)

    const LINK_DIST = 130

    const draw = () => {
      ctx.clearRect(0, 0, W(), H())

      for (const p of particles) {
        /* Mouse repulsion */
        const dx = p.x - mouse.x, dy = p.y - mouse.y
        const d  = Math.sqrt(dx * dx + dy * dy)
        if (d < 90 && d > 0) {
          p.vx += (dx / d) * 0.06
          p.vy += (dy / d) * 0.06
        }

        /* Friction + speed cap */
        p.vx *= 0.985
        p.vy *= 0.985
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > 1.4) { p.vx = (p.vx / spd) * 1.4; p.vy = (p.vy / spd) * 1.4 }

        p.x += p.vx; p.y += p.vy

        /* Wrap edges */
        if (p.x < 0) p.x = W()
        if (p.x > W()) p.x = 0
        if (p.y < 0) p.y = H()
        if (p.y > H()) p.y = 0

        /* Draw dot */
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240,85,37,${p.opacity})`
        ctx.fill()
      }

      /* Draw connections */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.14
            ctx.beginPath()
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(240,85,37,${alpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      /* Mouse proximity highlight: nearest 3 particles get a bright line to cursor */
      const dists = particles.map((p, i) => ({
        i, d: Math.hypot(p.x - mouse.x, p.y - mouse.y)
      })).sort((a, b) => a.d - b.d).slice(0, 3)

      for (const { i, d } of dists) {
        if (d > 200) continue
        const p = particles[i]
        const alpha = (1 - d / 200) * 0.35
        ctx.beginPath()
        ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y)
        ctx.strokeStyle = `rgba(240,85,37,${alpha})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" />
}
