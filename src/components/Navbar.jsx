import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Moon, Sun, Sparkles } from 'lucide-react'
import { scrollToSection } from '../utils/helpers'
import ThemeCustomizer from './ThemeCustomizer'

const Navbar = ({ isDark, toggleTheme, sparkleEnabled, setSparkleEnabled, sparkleIntensity, setSparkleIntensity, accentColor, setAccentColor }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Education', id: 'education' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Internships', id: 'internships' },
    { label: 'Accomplishments', id: 'accomplishments' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleNavClick = (id) => {
    scrollToSection(id)
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? isDark
            ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/10 shadow-lg'
            : 'bg-white/95 backdrop-blur-md border-b border-cyan-300/30 shadow-lg'
          : isDark
          ? 'bg-slate-900/50 backdrop-blur-sm'
          : 'bg-white/50 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-1.5 sm:space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('home')}
          >
            <div
              className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(to right, rgb(var(--accent-light)), rgb(var(--accent-main)))`
              }}
            >
              <span className="text-white font-bold text-xs sm:text-sm">JAI</span>
            </div>
            <span className="hidden sm:inline text-base sm:text-lg font-bold bg-clip-text text-transparent" style={{
              backgroundImage: `linear-gradient(to right, rgb(var(--accent-light)), rgb(var(--accent-main)), rgb(var(--accent-dark)))`
            }}>
              My Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-300 text-sm font-medium relative group ${
                  isDark ? 'text-gray-300 hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: `linear-gradient(to right, rgb(var(--accent-light)), rgb(var(--accent-main)))` }}
                />
              </motion.button>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 md:space-x-4">
            {/* Sparkle controls */}
            <motion.button
              onClick={() => setSparkleEnabled(!sparkleEnabled)}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors hidden sm:flex ${
                sparkleEnabled
                  ? isDark
                    ? 'glass bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300'
                    : 'bg-yellow-100 hover:bg-yellow-200 border border-yellow-400 text-yellow-600'
                  : isDark
                  ? 'glass hover:bg-gray-600/20'
                  : 'bg-slate-200 hover:bg-slate-300 border border-slate-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle sparkles"
              title={sparkleEnabled ? 'Disable sparkles' : 'Enable sparkles'}
            >
              <Sparkles size={18} className="sm:w-5 sm:h-5" />
            </motion.button>

            {/* Intensity slider */}
            <AnimatePresence>
              {sparkleEnabled && (
                <motion.div
                  className="hidden sm:flex items-center gap-2"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                >
                  <input
                    type="range"
                    min="0.3"
                    max="2"
                    step="0.1"
                    value={sparkleIntensity}
                    onChange={(e) => setSparkleIntensity(parseFloat(e.target.value))}
                    className="w-24 h-2 rounded-lg cursor-pointer"
                    style={{
                      background: isDark
                        ? 'linear-gradient(to right, #60a5fa 0%, #fbbf24 100%)'
                        : 'linear-gradient(to right, #0ea5e9 0%, #fcd34d 100%)',
                    }}
                    title={`Sparkle intensity: ${sparkleIntensity.toFixed(1)}x`}
                  />
                  <span className={`text-xs font-semibold w-8 ${isDark ? 'text-yellow-300' : 'text-yellow-600'}`}>
                    {sparkleIntensity.toFixed(1)}x
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Theme Customizer */}
            <ThemeCustomizer isDark={isDark} accentColor={accentColor} setAccentColor={setAccentColor} />

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                isDark
                  ? 'glass hover:bg-cyan-400/20'
                  : 'bg-slate-200 hover:bg-slate-300 border border-slate-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
              ) : (
                <Moon size={18} className="text-slate-800 sm:w-5 sm:h-5" />
              )}
            </motion.button>

            {/* Social icons */}
            <motion.a
              href="https://github.com/Jaideep193"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors hidden sm:flex ${
                isDark
                  ? 'glass hover:bg-cyan-400/20 hover:text-cyan-400'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-800 border border-slate-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jaideep-m-c-2290702a0/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-colors hidden sm:flex ${
                isDark
                  ? 'glass hover:bg-purple-400/20 hover:text-purple-400'
                  : 'bg-slate-200 hover:bg-slate-300 text-slate-800 border border-slate-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-lg glass"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-y-auto max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className={`px-3 sm:px-4 py-4 space-y-1 border-t ${
                isDark ? 'border-cyan-400/10 bg-slate-900/50' : 'border-cyan-300/30 bg-white/80'
              }`}>
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                      isDark
                        ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 active:bg-cyan-400/20'
                        : 'text-slate-700 hover:text-cyan-600 hover:bg-cyan-100/50 active:bg-cyan-100'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.div
                  className="flex gap-2 pt-4 mt-2 border-t border-gray-700/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.04 + 0.1 }}
                >
                  <motion.a
                    href="https://github.com/Jaideep193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 p-3 rounded-lg flex items-center justify-center gap-2 ${
                      isDark
                        ? 'glass hover:bg-cyan-400/20 active:bg-cyan-400/30'
                        : 'bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-800 border border-slate-400'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    <span className="text-sm font-medium">GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/jaideep-m-c-2290702a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 p-3 rounded-lg flex items-center justify-center gap-2 ${
                      isDark
                        ? 'glass hover:bg-purple-400/20 active:bg-purple-400/30'
                        : 'bg-slate-200 hover:bg-slate-300 active:bg-slate-400 text-slate-800 border border-slate-400'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
