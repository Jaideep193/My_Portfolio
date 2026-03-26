import { motion } from 'framer-motion'
import { liftHover } from '../utils/animations'

const Card = ({ isDark = true, className = '', children, hover = true }) => {
  const baseTheme = isDark
    ? 'glass border border-white/10'
    : 'bg-white border border-slate-200 shadow-md'

  return (
    <motion.div
      className={`${baseTheme} rounded-lg ${className}`}
      {...(hover ? { whileHover: liftHover.whileHover, transition: liftHover.transition } : {})}
    >
      {children}
    </motion.div>
  )
}

export default Card
