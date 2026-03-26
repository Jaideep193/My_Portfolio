import { motion } from 'framer-motion'
import { certificationsData } from '../utils/constants'
import { staggerContainer, fadeInUp } from '../utils/animations'
import { ExternalLink } from 'lucide-react'
import Section from './Section'
import Card from './Card'

const Certifications = ({ isDark = true }) => {
  return (
    <Section
      id="certifications"
      isDark={isDark}
      title="Certifications"
      subtitle="Professional credentials and technical certifications"
    >
      <div className="max-w-6xl mx-auto">

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certificationsData.map((cert, index) => (
            <Card key={cert.id} isDark={isDark} className="p-6 relative overflow-hidden group">
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                isDark
                  ? 'from-cyan-400/10 to-purple-500/10'
                  : 'from-cyan-400/5 to-purple-500/5'
              } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                      isDark
                        ? 'bg-purple-400/20 text-purple-400'
                        : 'bg-purple-100 text-purple-700'
                    }`}>
                      🏅 Certification
                    </div>
                    <h3 className={`text-lg font-bold mb-1 ${
                      isDark ? 'text-gray-100' : 'text-slate-800'
                    }`}>
                      {cert.title}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {cert.logoUrl && (
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img
                          src={cert.logoUrl}
                          alt={`${cert.institution} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          width="48"
                          height="48"
                          style={{ filter: isDark ? 'brightness(1)' : 'brightness(0.9)' }}
                        />
                      </div>
                    )}
                    <span className="text-2xl">{cert.icon}</span>
                  </div>
                </div>

                <p className={`font-semibold mb-1 ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  {cert.institution}
                </p>
                <p className={`text-sm mb-3 ${
                  isDark ? 'text-gray-400' : 'text-slate-600'
                }`}>{cert.year}</p>
                <p className={`text-sm mb-4 ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                }`}>{cert.details}</p>

                {cert.link && (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                      isDark
                        ? 'text-purple-400 hover:text-purple-300'
                        : 'text-purple-700 hover:text-purple-800'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    Verify Credential <ExternalLink size={16} />
                  </motion.a>
                )}
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Certifications Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { number: '9', label: 'Total Certifications', icon: '🎯' },
            { number: '7', label: 'Cloud Platforms Certified', icon: '☁️' },
            { number: '2025', label: 'Latest Achievement', icon: '⭐' },
          ].map((stat, index) => (
            <Card
              key={index}
              isDark={isDark}
              className="p-6 text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-slate-600'
              }`}>{stat.label}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default Certifications
