import { useState, useEffect, useRef } from 'react'
import './CustomCursor.css'

/**
 * CustomCursor
 * Luxury custom cursor with trailing ring and magnetic hover expansion.
 * Active exclusively on fine pointer desktop devices (disabled on touch/mobile).
 */
export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(true)

  const cursorRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    // Check if the device has a fine pointer (desktop mouse)
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!hasFinePointer) {
      setIsTouchDevice(true)
      return
    }
    setIsTouchDevice(false)

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const onMouseDown = () => setIsClicked(true)
    const onMouseUp = () => setIsClicked(false)

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    // Check hovered elements for interactive selectors
    const onMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.closest(
        'a, button, input, select, textarea, [role="button"], .gallery-item-card, .service-card, .stat-counter-box, .testimonial-card-box, .pillar-card, .trust-strip-card, .slider-viewer-box, .lightbox-dialog'
      )
      setIsHovered(Boolean(isInteractive))
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    document.addEventListener('mouseover', onMouseOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [isVisible])

  if (isTouchDevice) return null

  return (
    <div
      className={`custom-cursor-container ${isVisible ? 'is-visible' : ''}`}
      aria-hidden="true"
    >
      {/* Central pinpoint dot that tracks mouse directly */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Outer trailing ring with fluid luxury physics */}
      <div
        ref={cursorRef}
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  )
}
