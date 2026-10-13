import { useState, useEffect, useRef } from 'react'

/**
 * AnimatedCounter
 * Smooth hardware-accelerated count-up animation for numbers/statistics.
 * Triggers when scrolled into the viewport via IntersectionObserver.
 * Formats commas (e.g. 15,000+) and preserves prefixes/suffixes (%, +, etc.).
 */
export default function AnimatedCounter({ value, duration = 1500, className = '' }) {
  const [displayValue, setDisplayValue] = useState(value)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value)
      return
    }

    // Extract numeric part and surrounding characters
    // e.g. "15,000+" -> num: 15000, prefix: "", suffix: "+"
    const match = String(value).match(/^([^\d]*)(\d+[\d,.]*)(.*)$/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const prefix = match[1] || ''
    const rawNumberStr = match[2].replace(/,/g, '')
    const suffix = match[3] || ''
    const targetNumber = parseFloat(rawNumberStr)

    if (isNaN(targetNumber)) {
      setDisplayValue(value)
      return
    }

    const hasComma = match[2].includes(',')
    const isDecimal = rawNumberStr.includes('.')
    const decimalPlaces = isDecimal ? rawNumberStr.split('.')[1].length : 0

    // Set initial display to 0 formatted
    if (!hasAnimated) {
      setDisplayValue(`${prefix}0${suffix}`)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          observer.unobserve(entry.target)

          const startTime = performance.now()

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease out cubic: 1 - pow(1 - progress, 3)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const currentVal = targetNumber * easeOut

            let formattedNum
            if (isDecimal) {
              formattedNum = currentVal.toFixed(decimalPlaces)
            } else {
              const rounded = Math.floor(currentVal)
              formattedNum = hasComma ? rounded.toLocaleString('en-IN') : String(rounded)
            }

            if (progress < 1) {
              setDisplayValue(`${prefix}${formattedNum}${suffix}`)
              requestAnimationFrame(updateCounter)
            } else {
              // Final value
              setDisplayValue(value)
            }
          }

          requestAnimationFrame(updateCounter)
        }
      },
      { threshold: 0.15 }
    )

    const el = elementRef.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [value, duration, hasAnimated])

  return (
    <span ref={elementRef} className={`animated-counter-num ${className}`}>
      {displayValue}
    </span>
  )
}
