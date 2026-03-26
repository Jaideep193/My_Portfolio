import { motion } from 'framer-motion'
import { educationData, certificationsData } from '../utils/constants'
import { staggerContainer, fadeInUp } from '../utils/animations'
import { ExternalLink } from 'lucide-react'
import Section from './Section'
import Card from './Card'

const Education = ({ isDark = true }) => {
  return (
    <Section
      id="education"
      isDark={isDark}
      title="Education"
      subtitle="Academic foundation and qualifications"
    >
      <div className="max-w-6xl mx-auto">

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Vertical line for timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-400 to-transparent" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                {/* Content */}
                <div className="flex-1">
                  <Card isDark={isDark} className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                          isDark ? 'bg-cyan-400/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                        }`}>
                          🎓 Education
                        </div>
                        <h3 className={`text-xl font-bold ${
                          isDark ? 'text-gray-100' : 'text-slate-800'
                        }`}>
                          {item.title}
                        </h3>
                      </div>
                      <span className="text-3xl">{item.icon}</span>
                    </div>

                    <p className={`font-semibold mb-2 ${
                      isDark ? 'text-cyan-400' : 'text-cyan-600'
                    }`}>
                      {item.institution}
                    </p>
                    <p className={`text-sm mb-3 ${
                      isDark ? 'text-gray-400' : 'text-slate-600'
                    }`}>{item.year}</p>
                    <p className={`mb-3 ${
                      isDark ? 'text-gray-300' : 'text-slate-700'
                    }`}>{item.details}</p>
                    
                    {item.cgpa && (
                      <div className={`text-sm font-semibold ${
                        isDark ? 'text-purple-400' : 'text-purple-700'
                      }`}>
                        CGPA: {item.cgpa}
                      </div>
                    )}
                    {item.percentage && (
                      <div className={`text-sm font-semibold ${
                        isDark ? 'text-purple-400' : 'text-purple-700'
                      }`}>
                        Percentage: {item.percentage}
                      </div>
                    )}
                  </Card>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex flex-col items-center"
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div
                    className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full ring-4 ring-slate-900 relative z-10"
                    whileHover={{
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.8)',
                    }}
                  />
                </motion.div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Education
