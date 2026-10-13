import { useRef } from 'react'

/**
 * MagneticButton — wraps any element and makes it subtly follow the cursor on hover.
 * Strength controls how far the element moves (0.3 = 30% of cursor offset).
 */
export default function MagneticButton({ children, strength = 0.32, className = '', style = {}, ...props }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) * strength
    const dy = (e.clientY - cy) * strength
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
    el.style.transform = 'translate(0, 0)'
    setTimeout(() => {
      if (el) el.style.transition = ''
    }, 450)
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'inline-flex', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  )
}
