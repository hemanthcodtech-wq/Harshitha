import { useState, useEffect } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import './BackToTopButton.css'

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      setScrollPercent(Math.min(100, Math.max(0, percent)))
      setVisible(scrollTop > 320)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Circular progress stroke calculation
  // Radius = 20, Circumference = 2 * PI * 20 ~= 125.66
  const radius = 20
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference

  return (
    <button
      type="button"
      className={`back-to-top-btn ${visible ? 'is-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      title="Back to Top"
    >
      <svg className="progress-ring" width="48" height="48" viewBox="0 0 48 48">
        <circle
          className="progress-ring-track"
          cx="24"
          cy="24"
          r={radius}
        />
        <circle
          className="progress-ring-fill"
          cx="24"
          cy="24"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
        />
      </svg>
      <span className="arrow-icon-wrap">
        <FiChevronUp size={20} />
      </span>
    </button>
  )
}
