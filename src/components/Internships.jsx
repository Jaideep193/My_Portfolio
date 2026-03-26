import { motion } from 'framer-motion'
import { internshipsData } from '../utils/constants'
import { staggerContainer, fadeInUp } from '../utils/animations'
import { ChevronRight } from 'lucide-react'
import Section from './Section'
import Card from './Card'

const Internships = ({ isDark = true }) => {
  return (
    <Section
      id="internships"
      isDark={isDark}
      title="Internships & Experience"
      subtitle="Hands-on professional experience in tech industry"
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
            {internshipsData.map((internship, index) => (
              <motion.div
                key={internship.id}
                className={`flex items-stretch gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={fadeInUp}
              >
                {/* Content */}
                <div className="flex-1">
                  <Card isDark={isDark} className="p-6 h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                          isDark ? 'bg-pink-400/20 text-pink-400' : 'bg-pink-100 text-pink-700'
                        }`}>
                          💼 Internship
                        </div>
                        <h3 className={`text-xl font-bold mb-1 ${
                          isDark ? 'text-gray-100' : 'text-slate-800'
                        }`}>
                          {internship.title}
                        </h3>
                      </div>
                      <span className="text-3xl">{internship.icon}</span>
                    </div>

                    <p className={`font-semibold mb-1 ${
                      isDark ? 'text-cyan-400' : 'text-cyan-600'
                    }`}>
                      {internship.company}
                    </p>
                    <p className={`text-sm mb-1 ${
                      isDark ? 'text-gray-400' : 'text-slate-600'
                    }`}>{internship.duration}</p>
                    <p className={`text-sm mb-3 ${
                      isDark ? 'text-purple-400' : 'text-purple-700'
                    }`}>{internship.location}</p>
                    
                    <p className={`mb-4 ${
                      isDark ? 'text-gray-300' : 'text-slate-700'
                    }`}>{internship.details}</p>

                    {/* Achievements */}
                    {internship.achievements && (
                      <motion.div 
                        className={`mb-4 p-3 rounded-lg ${
                          isDark ? 'bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-400/20' : 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200'
                        }`}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h4 className={`font-semibold mb-2 text-sm ${
                          isDark ? 'text-green-400' : 'text-green-700'
                        }`}>
                          🎯 Key Achievements:
                        </h4>
                        <p className={`text-sm leading-relaxed ${
                          isDark ? 'text-green-300' : 'text-green-700'
                        }`}>
                          {internship.achievements}
                        </p>
                      </motion.div>
                    )}

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 text-sm ${
                        isDark ? 'text-gray-200' : 'text-slate-800'
                      }`}>
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {internship.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2 text-sm ${
                              isDark ? 'text-gray-400' : 'text-slate-600'
                            }`}
                          >
                            <ChevronRight size={16} className={`mt-0.5 flex-shrink-0 ${
                              isDark ? 'text-cyan-400' : 'text-cyan-600'
                            }`} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className={`font-semibold mb-2 text-sm ${
                        isDark ? 'text-gray-200' : 'text-slate-800'
                      }`}>
                        Skills Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.skills.map((skill, idx) => (
                          <motion.span
                            key={idx}
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              isDark
                                ? 'bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-300'
                                : 'bg-gradient-to-r from-cyan-100 to-purple-100 text-cyan-700'
                            }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex flex-col items-center"
                  whileHover={{ scale: 1.3 }}
                >
                  <motion.div
                    className={`w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full ring-4 relative z-10 ${
                      isDark ? 'ring-slate-900' : 'ring-white'
                    }`}
                    whileHover={{
                      boxShadow: '0 0 20px rgba(236, 72, 153, 0.8)',
                    }}
                  />
                </motion.div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            { number: '3', label: 'Internships', icon: '💼' },
            { number: '5', label: 'Months Total', icon: '📅' },
            { number: '10+', label: 'Skills Learned', icon: '🎓' },
            { number: '90-95%', label: 'Performance', icon: '⭐' },
          ].map((stat, index) => (
            <Card
              key={index}
              isDark={isDark}
              className="p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}

export default Internships
