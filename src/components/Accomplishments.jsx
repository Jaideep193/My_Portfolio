import { motion } from 'framer-motion'
import { accomplishmentsData } from '../utils/constants'
import { staggerContainer, fadeInUp } from '../utils/animations'
import { Sparkles } from 'lucide-react'
import Section from './Section'
import Card from './Card'

const Accomplishments = ({ isDark = true }) => {
  return (
    <Section
      id="accomplishments"
      isDark={isDark}
      title="Accomplishments "
      subtitle="Recognition for excellence and innovative contributions"
    >
      <div className="max-w-6xl mx-auto">

        {/* Accomplishments Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {accomplishmentsData.map((accomplishment, index) => (
            <Card key={accomplishment.id} isDark={isDark} className="p-6 relative overflow-hidden group">
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark
                  ? 'from-purple-400/10 via-transparent to-cyan-400/10'
                  : 'from-purple-400/5 via-transparent to-cyan-400/5'
              }`} />

              <div className="relative z-10">
                {/* Icon and date */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 12 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {accomplishment.icon}
                  </motion.div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    isDark ? 'bg-yellow-400/20 text-yellow-300' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {accomplishment.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-gray-100' : 'text-slate-800'
                }`}>
                  {accomplishment.title}
                </h3>

                {/* Achievement */}
                <p className={`font-semibold mb-2 text-sm ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}>
                  {accomplishment.achievement}
                </p>

                {/* Description */}
                <p className={`text-sm mb-4 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-slate-700'
                }`}>
                  {accomplishment.details}
                </p>

                {/* Impact */}
                <div className={`flex items-start gap-2 p-3 rounded-lg ${
                  isDark
                    ? 'bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/20'
                    : 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-300'
                }`}>
                  <Sparkles size={16} className={`mt-0.5 flex-shrink-0 ${
                    isDark ? 'text-yellow-400' : 'text-yellow-600'
                  }`} />
                  <p className={`text-sm font-medium ${
                    isDark ? 'text-yellow-300' : 'text-yellow-700'
                  }`}>
                    {accomplishment.impact}
                  </p>
                </div>

                {/* Animated decoration */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-5 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </div>
            </Card>
          ))}
        </motion.div>

      </div>
    </Section>
  )
}

export default Accomplishments
