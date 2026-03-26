import { useState, useEffect } from 'react'

/**
 * Hook to animate a number from 0 to target when element enters viewport
 * @param {number} target - The target number to count to
 * @param {number} duration - Animation duration in milliseconds (default 2000)
 * @returns {number} - Animated count value
 */
export const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!target || target <= 0) return

    let startTime = null
    let animationFrame = null

    const animate = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime
      }

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const currentCount = Math.floor(progress * target)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [target, duration])

  return count
}

export default useCounter
