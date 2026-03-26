import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MAX_SPARKLES = 80
const EMIT_INTERVAL_MS = 24
const IDLE_THRESHOLD_MS = 260
const IDLE_EMIT_INTERVAL_MS = 60

const CursorSparkle = ({ isDark = true, intensity = 1 }) => {
  const [sparkles, setSparkles] = useState([])
  const [isIdle, setIsIdle] = useState(false)
  const lastEmit = useRef(0)
  const lastPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const idleTimer = useRef(null)
  const idleInterval = useRef(null)
  const idleStart = useRef(0)

  useEffect(() => {
    const handleMove = (e) => {
      const now = performance.now()
      if (now - lastEmit.current < EMIT_INTERVAL_MS) return
      lastEmit.current = now

      const { clientX: x, clientY: y } = e
      lastPos.current = { x, y }
      setIsIdle(false)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setIsIdle(true), IDLE_THRESHOLD_MS)
      const count = 3
      const newSparkles = Array.from({ length: count }, (_, i) => ({
        id: `${now}-${i}-${Math.random().toString(36).slice(2)}`,
        x,
        y,
        size: 6 + Math.random() * 10,
        dx: (Math.random() - 0.5) * 16,
        dy: -6 - Math.random() * 10,
        rot: Math.random() * 45,
        life: 600,
      }))

      setSparkles((prev) => {
        const merged = [...prev, ...newSparkles]
        return merged.slice(Math.max(0, merged.length - MAX_SPARKLES))
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [])

  // Idle fountain emission effect
  useEffect(() => {
    if (isIdle) {
      idleStart.current = performance.now()
      if (idleInterval.current) clearInterval(idleInterval.current)
      idleInterval.current = setInterval(() => {
        const now = performance.now()
        const { x, y } = lastPos.current
        const elapsed = now - idleStart.current
        const intensityScale = Math.min(elapsed / 4000, 1) * intensity
        const count = 6 + Math.floor(intensityScale * 4)
        const newSparkles = Array.from({ length: count }, (_, i) => {
          const spread = (Math.random() - 0.5) * (36 + 20 * intensityScale)
          const rise = (-18 - Math.random() * 24) - 30 * intensityScale
          return {
            id: `${now}-idle-${i}-${Math.random().toString(36).slice(2)}`,
            x,
            y,
            size: 4 + Math.random() * 8,
            dx: spread,
            dy: rise,
            rot: Math.random() * 60,
            life: 900 + Math.floor(300 * intensityScale),
          }
        })
        setSparkles((prev) => {
          const merged = [...prev, ...newSparkles]
          return merged.slice(Math.max(0, merged.length - MAX_SPARKLES))
        })
      }, IDLE_EMIT_INTERVAL_MS)
    } else {
      if (idleInterval.current) {
        clearInterval(idleInterval.current)
        idleInterval.current = null
      }
    }
    return () => {
      if (idleInterval.current) clearInterval(idleInterval.current)
    }
  }, [isIdle])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            initial={{
              opacity: 0.85,
              scale: 0.8,
              x: s.x,
              y: s.y,
              rotate: s.rot,
            }}
            animate={{
              opacity: 0,
              scale: 1.2,
              x: s.x + s.dx,
              y: s.y + s.dy,
              rotate: s.rot + 90,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: s.life / 1000, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: s.size,
              height: s.size,
              left: 0,
              top: 0,
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,215,0,0.95) 0%, rgba(255,184,0,0.8) 40%, rgba(255,184,0,0.3) 70%, rgba(255,184,0,0) 82%)',
              boxShadow: isDark
                ? '0 0 18px rgba(255, 200, 0, 0.45), 0 0 6px rgba(255, 160, 0, 0.55)'
                : '0 0 14px rgba(255, 185, 0, 0.40), 0 0 4px rgba(255, 160, 0, 0.40)',
              filter: 'blur(0.25px)',
              mixBlendMode: isDark ? 'screen' : 'multiply',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default CursorSparkle
