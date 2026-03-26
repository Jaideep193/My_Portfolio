import { useState } from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '../utils/constants'
import { staggerContainer, fadeInUp, scaleIn } from '../utils/animations'
import Section from './Section'

const Skills = ({ isDark = true }) => {
  const [activeCategory, setActiveCategory] = useState('languages')

  const categories = [
    { key: 'languages', label: 'Languages' },
    { key: 'frameworks', label: 'Frameworks' },
    { key: 'cloud', label: 'Cloud Platforms' },
    { key: 'tools', label: 'Tools & Platforms' },
  ]

  const currentSkills = skillsData[activeCategory]

  return (
    <Section
      id="skills"
      isDark={isDark}
      title="Skills & Expertise"
      subtitle="Technologies and tools I've mastered"
    >
      <div className="max-w-6xl mx-auto">

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.key
                  ? 'text-white'
                  : isDark
                    ? 'glass text-gray-300'
                    : 'bg-white border border-slate-200 text-slate-700'
              }`}
              style={
                activeCategory === category.key
                  ? {
                      background: `linear-gradient(to right, rgb(var(--accent-main)), rgb(var(--accent-dark)))`,
                      boxShadow: `0 8px 16px rgba(var(--accent-main), 0.5)`
                    }
                  : {}
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          key={activeCategory}
        >
          {currentSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`p-6 rounded-lg flex flex-col items-center justify-center text-center group ${
                isDark ? 'glass' : 'bg-white border border-slate-200 shadow-md'
              }`}
              variants={fadeInUp}
              whileHover={{
                scale: 1.08,
                boxShadow: `0 0 20px rgba(var(--accent-light), 0.4)`,
              }}
            >
              {/* Real Logo */}
              <div className={`mb-3 h-16 flex items-center justify-center group-hover:scale-110 transition-transform rounded-lg p-2 ${
                skill.name === 'AWS' ? 'bg-orange-100' : 'bg-white'
              }`}>
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className={`h-full object-contain ${skill.name === 'AWS' ? 'filter brightness-100' : ''}`}
                  loading="lazy"
                  onError={(e) => {
                    console.log(`Failed to load ${skill.name} logo`)
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              
              {/* Skill Name */}
              <h3 className={`text-sm font-semibold ${
                isDark ? 'text-gray-100' : 'text-slate-800'
              }`}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills summary */}
        <motion.div
          className="glass p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-gradient-text">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">Backend & APIs</h4>
              <p className="text-gray-400 text-sm">
                Node.js, Flask, RESTful APIs, Database design, Microservices
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-400 mb-2">ML & AI</h4>
              <p className="text-gray-400 text-sm">
                TensorFlow, PyTorch, Scikit-learn, CNN, LSTM, Computer Vision
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-pink-400 mb-2">Cloud & DevOps</h4>
              <p className="text-gray-400 text-sm">
                Azure, AWS, Google Cloud, Docker, CI/CD, Infrastructure
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Skills
