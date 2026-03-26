import { motion } from 'framer-motion'
import { reveal, containerVariants } from '../utils/animations'

const Section = ({
  id,
  isDark = true,
  title,
  subtitle,
  children,
}) => {
  return (
    <section id={id} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={reveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
        >
          {title && (
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 gradient-text">
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`text-center text-lg mb-12 ${
                isDark ? 'text-gray-400' : 'text-slate-600'
              }`}
            >
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default Section
