import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, X } from 'lucide-react'

const ThemeCustomizer = ({ isDark = true, accentColor, setAccentColor }) => {
  const [isOpen, setIsOpen] = useState(false)

  const colors = [
    { name: 'Cyan', value: 'cyan', gradient: 'from-cyan-400 to-cyan-600', hex: '#06b6d4' },
    { name: 'Purple', value: 'purple', gradient: 'from-purple-400 to-purple-600', hex: '#a855f7' },
    { name: 'Pink', value: 'pink', gradient: 'from-pink-400 to-pink-600', hex: '#ec4899' },
    { name: 'Gold', value: 'gold', gradient: 'from-yellow-400 to-yellow-600', hex: '#fbbf24' },
    { name: 'Blue', value: 'blue', gradient: 'from-blue-400 to-blue-600', hex: '#3b82f6' },
    { name: 'Green', value: 'green', gradient: 'from-emerald-400 to-emerald-600', hex: '#10b981' },
  ]

  return (
    <>
      {/* Customizer Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-lg transition-colors ${
          isDark
            ? 'glass hover:bg-purple-400/20'
            : 'bg-slate-200 hover:bg-slate-300 border border-slate-400'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Theme customizer"
        title="Customize theme colors"
      >
        <Palette size={20} className={isDark ? 'text-purple-400' : 'text-purple-700'} />
      </motion.button>

      {/* Customizer Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className={`fixed top-20 right-4 z-50 p-6 rounded-2xl w-80 ${
                isDark
                  ? 'glass border border-white/20'
                  : 'bg-white border border-slate-200 shadow-xl'
              }`}
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-bold ${isDark ? 'text-gray-100' : 'text-slate-800'}`}>
                  Accent Color
                </h3>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className={`p-1 rounded transition-colors ${
                    isDark ? 'hover:bg-gray-700' : 'hover:bg-slate-200'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Color Grid */}
              <div className="grid grid-cols-3 gap-3">
                {colors.map((color) => (
                  <motion.button
                    key={color.value}
                    onClick={() => {
                      setAccentColor(color.value)
                      setIsOpen(false)
                    }}
                    className={`relative p-4 rounded-xl transition-transform ${
                      isDark ? 'glass hover:glass' : 'bg-slate-100 hover:bg-slate-200'
                    }`}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Color Circle */}
                    <div
                      className={`w-8 h-8 rounded-full mx-auto bg-gradient-to-br ${color.gradient} shadow-lg`}
                    />
                    {/* Label */}
                    <p className={`text-xs font-semibold mt-2 text-center ${
                      isDark ? 'text-gray-300' : 'text-slate-700'
                    }`}>
                      {color.name}
                    </p>
                    {/* Active Indicator */}
                    {accentColor === color.value && (
                      <motion.div
                        className={`absolute inset-0 rounded-xl border-2 border-${color.value}-400`}
                        layoutId="activeColor"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Current Color Display */}
              <div className={`mt-4 p-3 rounded-lg ${
                isDark ? 'bg-gray-800/50' : 'bg-slate-100'
              }`}>
                <p className={`text-xs font-semibold mb-2 ${
                  isDark ? 'text-gray-400' : 'text-slate-600'
                }`}>
                  Current: <span className="capitalize">{accentColor}</span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ThemeCustomizer
