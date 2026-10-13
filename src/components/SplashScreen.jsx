import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FiShield,
  FiGrid,
  FiActivity,
  FiLayers,
  FiHome,
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiAward,
} from 'react-icons/fi'
import logoImg from '../assets/logo.png'
import bannerImg from '../assets/banner.jpg'
import './SplashScreen.css'

export default function SplashScreen({ onFinish, isStandalone = false }) {
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          if (onFinish && !isStandalone) {
            setTimeout(onFinish, 500)
          }
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(interval)
  }, [onFinish, isStandalone])

  const handleSkipOrEnter = () => {
    if (onFinish) {
      onFinish()
    } else {
      navigate('/')
    }
  }

  // Keyboard shortcut for desktop: Enter or Escape to enter site immediately
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        handleSkipOrEnter()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const serviceIcons = [
    { name: 'Safety Nets', icon: <FiShield size={20} /> },
    { name: 'Invisible Grills', icon: <FiGrid size={20} /> },
    { name: 'Sports Nets', icon: <FiActivity size={20} /> },
    { name: 'Construction Nets', icon: <FiLayers size={20} /> },
    { name: 'Building Covering', icon: <FiHome size={20} /> },
  ]

  const getPhaseText = (p) => {
    if (p < 28) return 'INITIALIZING SAFETY STANDARDS...'
    if (p < 60) return 'LOADING MARINE-GRADE SS-316 CATALOG...'
    if (p < 88) return 'VERIFYING GARWARE UV SPECIFICATIONS...'
    return 'WELCOME TO HARSHITHA ENTERPRISES'
  }

  return (
    <div className={`splash-screen-overlay ${isStandalone ? 'standalone-mode' : ''}`}>
      {/* Ambient Decorative Lighting on Desktop */}
      <div className="splash-ambient-halo splash-ambient-halo-1"></div>
      <div className="splash-ambient-halo splash-ambient-halo-2"></div>

      <div className="splash-device-frame">
        {/* Left Side (Desktop) / Top Side (Mobile): Architectural Visual Layer */}
        <div className="splash-visual-header">
          <img
            src={bannerImg}
            alt="Luxury Balcony with Invisible Grills"
            className="splash-hero-bg"
          />
          <div className="splash-scenic-overlay"></div>
          <div className="splash-ambient-sunlight"></div>

          {/* Desktop Architectural Feature Callout Card */}
          <div className="splash-desktop-visual-badge">
            <div className="visual-badge-header">
              <span className="badge-tag">
                <FiAward size={12} style={{ marginRight: '5px' }} />
                ARCHITECTURAL SAFETY
              </span>
              <span className="badge-est">ESTD. 2013</span>
            </div>
            <h4 className="visual-badge-title">15,000+ Homes Protected</h4>
            <div className="visual-badge-specs">
              <span className="spec-item">
                <FiCheckCircle size={12} /> High-Tensile SS-316
              </span>
              <span className="spec-item">
                <FiCheckCircle size={12} /> UV-Stabilized Garware Nets
              </span>
            </div>
            <div className="visual-badge-location">
              <FiMapPin size={12} style={{ color: '#D6B66B', marginRight: '5px' }} />
              <span>Chandigarh • Mohali • Panchkula • Zirakpur</span>
            </div>
          </div>
        </div>

        {/* Right Side (Desktop) / Main Column: Central Brand Identity & Solutions */}
        <div className="splash-content-column">
          <div className="splash-body-content">
            {/* Official Company Logo */}
            <div className="splash-emblem-wrap">
              <img
                src={logoImg}
                alt="Harshitha Enterprises Official Logo"
                className="splash-official-logo"
              />
            </div>

            {/* Typography */}
            <div className="splash-titles-block">
              <h1 className="splash-brand-title">
                HARSHITHA
                <span className="splash-brand-sub">ENTERPRISES</span>
              </h1>
              <p className="splash-category-tag">SAFETY & NET SOLUTIONS</p>
            </div>

            {/* Trust Badge */}
            <div className="splash-trust-badge">
              <span className="trust-badge-label">13 YEARS OF TRUST</span>
              <span className="trust-badge-sub">SINCE 2013</span>
            </div>

            {/* 5 Service Icons Section */}
            <div className="splash-services-section">
              <div className="splash-services-row">
                {serviceIcons.map((item, idx) => (
                  <div key={idx} className="splash-service-node">
                    <div className="service-icon-circle">{item.icon}</div>
                    <span className="service-node-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Exclusive Feature Highlights */}
            <div className="splash-desktop-highlights">
              <span className="desktop-highlight-pill">
                <FiShield size={12} style={{ color: '#064E3B', marginRight: '5px' }} />
                SS-316 Marine Grade
              </span>
              <span className="desktop-highlight-pill">
                <FiCheckCircle size={12} style={{ color: '#064E3B', marginRight: '5px' }} />
                10-Year Warranty
              </span>
              <span className="desktop-highlight-pill">
                <FiGrid size={12} style={{ color: '#064E3B', marginRight: '5px' }} />
                Zero View Blockage
              </span>
            </div>

            {/* Loading Indicator */}
            <div className="splash-loading-block">
              <div className="splash-progress-track">
                <div
                  className="splash-progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="splash-loading-label">
                <span className="loading-phase-text">{getPhaseText(progress)}</span>
                <span className="progress-percent">{progress}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Forest Green Waves with Metallic Gold Outlines */}
          <div className="splash-bottom-wave-section">
            <svg
              className="splash-wave-graphic"
              viewBox="0 0 500 120"
              preserveAspectRatio="none"
            >
              {/* Soft Ambient Shadow Wave */}
              <path
                d="M0,45 C120,15 240,65 370,30 C430,15 470,32 500,24 L500,120 L0,120 Z"
                fill="#064E3B"
                opacity="0.85"
              />
              {/* Metallic Gold Accent Wave */}
              <path
                d="M0,38 C140,8 260,58 380,24 C440,8 480,25 500,18"
                stroke="#D6B66B"
                strokeWidth="2.2"
                fill="none"
              />
              {/* Deep Forest Green Wave Front */}
              <path
                d="M0,52 C130,25 270,65 390,36 C450,22 480,34 500,28 L500,120 L0,120 Z"
                fill="#064E3B"
              />
              {/* Secondary Fine Gold Filament */}
              <path
                d="M0,50 C130,23 270,63 390,34 C450,20 480,32 500,26"
                stroke="#D6B66B"
                strokeWidth="1.2"
                fill="none"
                opacity="0.75"
              />
            </svg>

            {/* Script Tagline */}
            <div className="splash-tagline-container">
              <p className="splash-tagline-script">
                “A Safer Tomorrow With Stronger Solutions”
              </p>
            </div>
          </div>
        </div>

        {/* Quick Enter/Skip Button */}
        <button
          type="button"
          onClick={handleSkipOrEnter}
          className="splash-skip-button"
          aria-label="Enter Website"
        >
          <span>Enter Website</span>
          <FiArrowRight size={13} />
        </button>
      </div>
    </div>
  )
}
