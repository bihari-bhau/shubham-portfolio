import { useEffect, useRef, useState } from 'react'
import { STATS } from '../data'

function StatItem({ num, suffix, label, animate }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!animate) return
    const dur = 1600
    const start = performance.now()
    const step = (now) => {
      const prog = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - prog, 3)
      setCount(Math.round(ease * num))
      if (prog < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [animate, num])

  return (
    <div className="stat r">
      <span className="stat-n">{count}{suffix}</span>
      <div className="stat-l">{label}</div>
    </div>
  )
}

export default function Stats() {
  const [fired, setFired] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !fired) setFired(true) },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [fired])

  return (
    <div className="stats-band" ref={ref}>
      <div className="stats-inner">
        {STATS.map((s, i) => (
          <StatItem key={i} {...s} animate={fired} />
        ))}
      </div>
    </div>
  )
}
