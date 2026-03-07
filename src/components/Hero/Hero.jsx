import { useEffect, useRef } from 'react'
import './Hero.css'

function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`
        ctx.fill()
      })
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-glow" />
      <div className="hero-content">
        <p className="hero-greeting">
          <span className="hero-dot" /> Disponible para desarrollo freelance
        </p>
        <h1 className="hero-name">
          Luis<br/>
          <span className="hero-name-accent">Olvera</span>
        </h1>
        <p className="hero-title">
          <span className="hero-mono">{'< '}</span>
          Full Stack Developer en formación
          <span className="hero-mono">{' />'}</span>
        </p>
        <p className="hero-desc">
          Estudiante de Desarrollo de Software en Guayaquil, Ecuador.<br />
          Construyo aplicaciones web, móviles y de escritorio.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">Ver proyectos</a>
          <a href="#contact" className="btn-outline">Contáctame</a>
        </div>
        <div className="hero-stack">
          {['C#', '.NET', 'React', 'Angular', 'Python', 'MAUI','Javascript'].map(t => (
            <span key={t} className="hero-tag">{t}</span>
          ))}
        </div>
      </div>


      {/*<div className="hero-scroll">
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </div>*/}
    </section>
  )
}

export default Hero