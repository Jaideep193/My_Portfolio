import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations'
import { scrollToSection } from '../utils/helpers'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Jaideep M C - Computer Science Engineering Student'
  const tagline = 'AI/ML Enthusiast | Full-Stack Developer | Cloud Certified'

  // Typing effect
  useEffect(() => {
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-20"
          style={{ background: `rgb(var(--accent-light))` }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl animate-pulse opacity-20"
          style={{ background: `rgb(var(--accent-main))` }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {/* Floating profile image */}
        <motion.div
          className="mb-8"
          variants={fadeInUp}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div 
            className="w-32 h-32 mx-auto relative cursor-pointer group"
            onClick={() => window.open('12.jpeg', '_blank')}
          >
            <div
              className="absolute inset-0 rounded-full p-1 group-hover:p-0.5 transition-all"
              style={{
                background: `linear-gradient(to right, rgb(var(--accent-light)), rgb(var(--accent-main)))`,
                animation: 'rotateWithPause 18s linear infinite'
              }}
            >
              <img 
                src="12.jpeg" 
                alt="Jaideep M C" 
                className="w-full h-full bg-slate-900 rounded-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </motion.div>

        {/* Typed name */}
        <motion.div variants={fadeInUp} className="mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 relative hero-heading">
            <span 
              className="text-white relative inline-block"
              style={{
                textShadow: `
                  -2px -2px 0 rgba(0, 0, 0, 0.8),
                  2px -2px 0 rgba(0, 0, 0, 0.8),
                  -2px 2px 0 rgba(0, 0, 0, 0.8),
                  2px 2px 0 rgba(0, 0, 0, 0.8),
                  -2px 0px 0 rgba(0, 0, 0, 0.8),
                  2px 0px 0 rgba(0, 0, 0, 0.8),
                  0px -2px 0 rgba(0, 0, 0, 0.8),
                  0px 2px 0 rgba(0, 0, 0, 0.8),
                  0 0 10px rgba(255, 255, 255, 0.8),
                  0 0 20px rgba(255, 200, 100, 0.6),
                  0 0 30px rgba(255, 255, 255, 0.4)
                `,
                animation: 'torchGlow 2s ease-in-out infinite'
              }}
            >
              {displayedText}
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          {tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={staggerContainer}
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="btn-primary inline-flex items-center justify-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ArrowRight size={20} className="ml-2" />
          </motion.button>

          <motion.a
            href="Resume.pdf"
            download
            className="btn-secondary inline-flex items-center justify-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} className="mr-2" />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary inline-flex items-center justify-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
            <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div
            className="w-6 h-10 rounded-full flex justify-center p-2"
            style={{ borderWidth: '2px', borderColor: `rgb(var(--accent-light))` }}
          >
            <div
              className="w-1 h-2 rounded-full animate-pulse"
              style={{ background: `rgb(var(--accent-light))` }}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
