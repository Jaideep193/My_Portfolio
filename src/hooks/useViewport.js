import { useState, useRef, useEffect } from 'react'

/**
 * Hook to detect when an element enters viewport and trigger a callback
 * @param {RefObject} ref - React ref to the element
 * @param {Function} callback - Callback to trigger when element enters
 * @param {string} options - Intersection observer options
 */
export const useIntersect = (ref, callback, options = { threshold: 0.3 }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
        observer.unobserve(entry.target)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref, callback, options])
}

/**
 * Hook for parallax scroll effect
 * @param {number} speed - Parallax speed multiplier (0.1 - 0.9, lower = more effect)
 * @returns {number} - Y offset value for transform
 */
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offset
}

export default useParallax
