import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations'
import Section from './Section'

const About = ({ isDark = true }) => {
  const [showCounters, setShowCounters] = useState(false)
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true, margin: '-100px' })
  const experiences = [
    {
      year: '2022 - Present',
      title: 'CSE Student',
      description: 'Pursuing Bachelor of Engineering from VTU, specializing in AI/ML and Cloud Computing',
    },
    {
      year: '2023',
      title: 'Microsoft Cloud Bootcamp',
      description: 'Completed intensive bootcamp on Azure cloud services and AI fundamentals',
    },
    {
      year: '2023',
      title: 'Full-Stack Development',
      description: 'Mastered MERN stack development with focus on responsive and modern UI/UX',
    },
    {
      year: '2024',
      title: 'Cloud Certifications',
      description: 'Earned Azure, Google Cloud, and Oracle OCI certifications for enterprise cloud solutions',
    },
  ]

  const highlights = [
    {
      icon: '🧠',
      title: 'AI/ML Enthusiast',
      detail: 'Building intelligent systems with deep learning, computer vision, and neural networks for real-world impact',
    },
    {
      icon: '☁️',
      title: 'Cloud Enthusiast',
      detail: 'Certified in Azure, GCP, AWS & OCI. Designing scalable cloud architectures and serverless solutions',
    },
    {
      icon: '🛠️',
      title: 'Full-Stack Developer',
      detail: 'Crafting end-to-end web applications with React, Node.js, and modern frameworks. Clean code advocate',
    },
    {
      icon: '🚀',
      title: 'Innovation Driven',
      detail: 'Passionate about solving complex problems through technology. Always learning, building, and shipping',
    },
  ]

  useEffect(() => {
    if (isInView) setShowCounters(true)
  }, [isInView])

  const Counter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
      if (!showCounters) return
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }, [showCounters, target, duration])
    return count
  }

  return (
    <Section
      id="about"
      isDark={isDark}
      title="About Me"
      subtitle="My journey in tech and passion for innovation"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio Text */}
          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp} className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-slate-700'
            }`}>
              I am a passionate Computer Science Engineering student with a strong interest in Artificial Intelligence, Machine Learning, and modern software development. Currently pursuing my degree, I focus on applying theoretical knowledge through hands-on projects and practical implementations of emerging technologies.
            </motion.p>

            <motion.p variants={fadeInUp} className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-slate-700'
            }`}>
              My technical experience includes full-stack web development, machine learning model development, and building data-driven applications. I enjoy working on projects that involve intelligent systems, automation, and real-world problem solving, particularly in areas such as healthcare analytics, computer vision, and AI-powered decision systems.
            </motion.p>

            <motion.p variants={fadeInUp} className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-slate-700'
            }`}>
              Beyond academics, I am a continuous learner who actively explores new technologies, completes industry-relevant certifications, and works on self-driven projects. I value writing clean, efficient, and maintainable code, and I am motivated to build solutions that are both technically sound and impactful.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              ref={statsRef}
              variants={fadeInUp}
              className="grid sm:grid-cols-3 gap-4 pt-2"
            >
              {[
                { label: 'Internships', value: 3, icon: '💼' },
                { label: 'Core Domains', value: 3, icon: '🎯' },
                { label: 'Cloud Platforms', value: 4, icon: '☁️' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className={`p-4 rounded-xl border transition-shadow ${
                    isDark
                      ? 'glass border-white/10 text-gray-200'
                      : 'bg-white border-slate-200 shadow-sm text-slate-800'
                  }`}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg">{stat.icon}</span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: `rgb(var(--accent-light))` }}
                    >
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-2xl font-bold">
                    <Counter target={stat.value} duration={1500} />
                    {stat.value >= 6 && '+'}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-4 space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: `rgb(var(--accent-light))` }}
                />
                <span className={isDark ? 'text-gray-300' : 'text-slate-700'}>🎓 Location: Bengaluru, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: `rgb(var(--accent-main))` }}
                />
                <span className={isDark ? 'text-gray-300' : 'text-slate-700'}>💼 Status: Open to internships & opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: `rgb(var(--accent-dark))` }}
                />
                <span className={isDark ? 'text-gray-300' : 'text-slate-700'}>🚀 Focus: AI/ML, Full-Stack, Cloud Solutions</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            className="grid grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                className={`rounded-2xl p-7 aspect-square flex flex-col justify-between transition-all relative overflow-hidden group cursor-pointer ${
                  isDark
                    ? 'glass text-gray-100 border border-white/10'
                    : 'bg-white border-2 border-slate-200 shadow-lg text-slate-800'
                }`}
                variants={scaleIn}
                initial={{ opacity: 0, scale: 0.7, rotateY: -40, z: -100 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: 0,
                  z: 0,
                  transition: { 
                    delay: idx * 0.12,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 120
                  }
                }}
                whileHover={{ 
                  y: -16, 
                  scale: 1.06, 
                  rotateZ: idx % 2 === 0 ? 3 : -3,
                  boxShadow: isDark 
                    ? '0 25px 70px rgba(0, 240, 255, 0.6), 0 0 40px rgba(0, 240, 255, 0.3)' 
                    : '0 25px 70px rgba(14, 165, 233, 0.5), 0 0 40px rgba(14, 165, 233, 0.2)',
                  borderColor: `rgb(var(--accent-light))`
                }}
                transition={{ type: "spring", stiffness: 220, damping: 12 }}
              >
                {/* Shimmer effect overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(120deg, transparent 30%, rgba(var(--accent-light), 0.3) 50%, transparent 70%)`,
                    backgroundSize: '200% 200%'
                  }}
                  animate={{
                    backgroundPosition: ['200% 0%', '-200% 0%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Animated gradient background */}
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-700"
                  style={{ 
                    background: `linear-gradient(135deg, rgb(var(--accent-light)), rgb(var(--accent-main)), rgb(var(--accent-dark)))`,
                    backgroundSize: '300% 300%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Multiple glowing orbs */}
                <motion.div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-40 blur-3xl transition-all duration-700"
                  style={{ 
                    background: `radial-gradient(circle, rgb(var(--accent-light)), transparent)` 
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700"
                  style={{ 
                    background: `radial-gradient(circle, rgb(var(--accent-main)), transparent)` 
                  }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                {/* Icon and badge */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <motion.div 
                    className="text-6xl filter drop-shadow-2xl"
                    whileHover={{ 
                      rotate: [0, -20, 20, -15, 15, -10, 10, 0],
                      scale: [1, 1.3, 1.25, 1.3, 1.2, 1.25, 1],
                      y: [0, -8, 0, -5, 0],
                      filter: ['drop-shadow(0 0 0 rgba(var(--accent-light), 0))', 'drop-shadow(0 0 20px rgba(var(--accent-light), 0.8))', 'drop-shadow(0 0 0 rgba(var(--accent-light), 0))']
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.div
                    className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md"
                    style={{ 
                      backgroundColor: `rgba(var(--accent-light), 0.25)`,
                      color: `rgb(var(--accent-light))`,
                      border: `2px solid rgba(var(--accent-light), 0.4)`,
                      boxShadow: `0 0 10px rgba(var(--accent-light), 0.2)`
                    }}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      backgroundColor: `rgba(var(--accent-light), 0.4)`,
                      boxShadow: `0 0 20px rgba(var(--accent-light), 0.5)`
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 8px rgba(var(--accent-light), 0.3)`,
                        `0 0 20px rgba(var(--accent-light), 0.6)`,
                        `0 0 8px rgba(var(--accent-light), 0.3)`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    #{idx + 1}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.h4 
                    className="text-xl font-black mb-3 leading-tight tracking-tight"
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p 
                    className={`text-sm leading-relaxed font-medium ${isDark ? 'text-gray-300' : 'text-slate-600'}`}
                    initial={{ opacity: 0.85 }}
                    whileHover={{ opacity: 1, y: -1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.detail}
                  </motion.p>
                  
                  {/* Corner accent lines */}
                  <motion.div
                    className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg opacity-0 group-hover:opacity-60"
                    style={{ borderColor: `rgb(var(--accent-light))` }}
                    initial={{ scale: 0, x: 10, y: 10 }}
                    whileHover={{ scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg opacity-0 group-hover:opacity-60"
                    style={{ borderColor: `rgb(var(--accent-light))` }}
                    initial={{ scale: 0, x: -10, y: -10 }}
                    whileHover={{ scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  />
                  
                  {/* Enhanced floating particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-70"
                      style={{
                        backgroundColor: `rgb(var(--accent-light))`,
                        left: `${15 + i * 18}%`,
                        bottom: `${8 + (i % 2) * 20}%`,
                        boxShadow: `0 0 8px rgb(var(--accent-light))`
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 2, 0],
                        x: [(i % 2 === 0 ? -5 : 5), (i % 2 === 0 ? 5 : -5), (i % 2 === 0 ? -5 : 5)]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default About
