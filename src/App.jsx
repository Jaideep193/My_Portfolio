import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Internships from './components/Internships'
import Accomplishments from './components/Accomplishments'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { initializeEmailJS } from './utils/helpers'
import { applyAccentColor } from './utils/colorMap'
import CursorSparkle from './components/CursorSparkle'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isDark, setIsDark] = useState(() => {
    // Load theme from localStorage or default to dark
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      return saved ? JSON.parse(saved) : true
    }
    return true
  })

  const [sparkleEnabled, setSparkleEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sparkleEnabled')
      return saved ? JSON.parse(saved) : true
    }
    return true
  })

  const [sparkleIntensity, setSparkleIntensity] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sparkleIntensity')
      return saved ? parseFloat(saved) : 1
    }
    return 1
  })

  const [accentColor, setAccentColor] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('accentColor')
      return saved ? JSON.parse(saved) : 'cyan'
    }
    return 'cyan'
  })

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Initialize EmailJS on mount
    initializeEmailJS()
  }, [])

  useEffect(() => {
    // Update theme on change
    localStorage.setItem('theme', JSON.stringify(isDark))
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    // Persist sparkle settings
    localStorage.setItem('sparkleEnabled', JSON.stringify(sparkleEnabled))
    localStorage.setItem('sparkleIntensity', sparkleIntensity.toString())
    localStorage.setItem('accentColor', JSON.stringify(accentColor))
    // Apply accent color to document
    applyAccentColor(accentColor)
  }, [sparkleEnabled, sparkleIntensity, accentColor])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`${isDark ? 'bg-slate-950 text-gray-100 dark' : 'bg-white text-slate-800 light'}`}>
      {/* Parallax gradient background */}
      <div
        className={`fixed inset-0 -z-50 ${isDark ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-br from-gray-50 via-gray-100 to-white'}`}
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Animated gradient overlay with parallax */}
      <div
        className={`fixed inset-0 -z-40 ${isDark ? 'bg-gradient-to-t from-indigo-950/20 to-transparent' : 'bg-gradient-to-t from-blue-100/10 to-transparent'} pointer-events-none`}
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        sparkleEnabled={sparkleEnabled}
        setSparkleEnabled={setSparkleEnabled}
        sparkleIntensity={sparkleIntensity}
        setSparkleIntensity={setSparkleIntensity}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />
      {sparkleEnabled && <CursorSparkle isDark={isDark} intensity={sparkleIntensity} />}
      <ScrollToTop isDark={isDark} />
      
      <main className="relative z-10">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About isDark={isDark} />
        </section>

        <section id="skills">
          <Skills isDark={isDark} />
        </section>

        <section id="education">
          <Education isDark={isDark} />
        </section>

        <section id="certifications">
          <Certifications isDark={isDark} />
        </section>

        <section id="internships">
          <Internships isDark={isDark} />
        </section>

        <section id="accomplishments">
          <Accomplishments isDark={isDark} />
        </section>

        <section id="projects">
           <Projects isDark={isDark} />
        </section>

        <section id="contact">
          <Contact isDark={isDark} />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
