import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  // Custom cursor
  useEffect(() => {
    const onMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Scroll reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.r').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // 3D tilt on cards
  useEffect(() => {
    const enableTilt = (selector, mag) => {
      document.querySelectorAll(selector).forEach((el) => {
        const enter = () => (el.style.transition = 'none')
        const move = (e) => {
          const r = el.getBoundingClientRect()
          const x = (e.clientX - r.left) / r.width - 0.5
          const y = (e.clientY - r.top) / r.height - 0.5
          el.style.transform = `perspective(900px) rotateY(${x * mag}deg) rotateX(${-y * mag}deg) translateZ(10px)`
        }
        const leave = () => {
          el.style.transition = 'transform 0.5s ease, border-color 0.3s'
          el.style.transform = ''
        }
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mousemove', move)
        el.addEventListener('mouseleave', leave)
      })
    }
    // Small delay to let DOM render
    const timer = setTimeout(() => {
      enableTilt('.proj-card', 10)
      enableTilt('.exp-card', 7)
      enableTilt('.edu-card', 9)
      enableTilt('.pill', 5)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
