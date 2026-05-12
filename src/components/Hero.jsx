import { useEffect, useRef, useState } from 'react'
import { PERSONAL, CUBE_FACES } from '../data'

function ParticleCanvas() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -999, y: -999 })
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H, dots = []

    class Dot {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.45
        this.vy = (Math.random() - 0.5) * 0.45
        this.r = Math.random() * 1.8 + 0.6
      }
      tick() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W) this.vx *= -1
        if (this.y < 0 || this.y > H) this.vy *= -1
      }
    }

    const resize = () => {
      W = canvas.width = canvas.parentElement.offsetWidth
      H = canvas.height = canvas.parentElement.offsetHeight
      dots = Array.from({ length: 90 }, () => new Dot())
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      dots.forEach((d) => {
        d.tick()
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(249,115,22,0.55)'
        ctx.fill()

        dots.forEach((q) => {
          const dist = Math.hypot(d.x - q.x, d.y - q.y)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(d.x, d.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(249,115,22,${0.18 * (1 - dist / 130)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        const md = Math.hypot(d.x - mx, d.y - my)
        if (md < 160) {
          ctx.beginPath()
          ctx.moveTo(d.x, d.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `rgba(34,211,238,${0.35 * (1 - md / 160)})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      })
      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    const heroEl = canvas.parentElement
    const onMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    const onLeave = () => { mouseRef.current = { x: -999, y: -999 } }
    heroEl.addEventListener('mousemove', onMove)
    heroEl.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      heroEl.removeEventListener('mousemove', onMove)
      heroEl.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-canvas" />
}

function Cube3D() {
  const faceClasses = ['face-front', 'face-back', 'face-right', 'face-left', 'face-top', 'face-bottom']
  return (
    <div className="hero-visual">
      <div className="scene-wrap">
        <div className="ring ring-1"><div className="ring-dot dot-o" /></div>
        <div className="ring ring-2"><div className="ring-dot dot-c" /></div>
        <div className="cube-container">
          {CUBE_FACES.map((label, i) => (
            <div key={label} className={`face ${faceClasses[i]}`}>{label}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Typewriter({ roles }) {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const role = roles[roleIdx]
    const delay = deleting ? 35 : 75

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(role.slice(0, charIdx + 1))
        if (charIdx + 1 === role.length) {
          setDeleting(true)
          setTimeout(() => {}, 1800) // pause handled below
          return
        }
        setCharIdx((c) => c + 1)
      } else {
        setText(role.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setRoleIdx((r) => (r + 1) % roles.length)
        }
        setCharIdx((c) => c - 1)
      }
    }, deleting && charIdx === roles[roleIdx].length ? 1800 : delay)

    return () => clearTimeout(timer)
  }, [text, charIdx, deleting, roleIdx, roles])

  return (
    <div className="hero-role">
      {text}<span className="cursor-blink">|</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticleCanvas />
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-tag">🧠 LLM Post-Training · Full-Stack</div>
          <h1 className="hero-name">
            Shubham<br /><span className="o">Singh.</span>
          </h1>
          <Typewriter roles={PERSONAL.roles} />
          <p className="hero-desc">
            I evaluate <strong>AI systems at Ethara AI</strong>, benchmark coding agents on 54+ Python
            libraries, and build <strong>real deployed products</strong> — from RLHF tools to full-stack
            educational platforms.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects ↗</a>
            <a href={`mailto:${PERSONAL.email}`} className="btn btn-ghost">Say Hello</a>
          </div>
        </div>
        <Cube3D />
      </div>
    </section>
  )
}
