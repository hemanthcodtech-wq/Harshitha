import { useEffect, useRef } from 'react'
import bannerImg from '../assets/banner.jpg'
import Typewriter from './Typewriter'
import MagneticButton from './MagneticButton'
import './Banner.css'

export default function Banner({ onOpenBooking, onExploreServices }) {
  const bgRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      // Move background at 40% of scroll speed for parallax depth
      bgRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(1.06)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="banner-section" id="home">
      <div ref={bgRef} className="banner-background-layer" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="banner-gradient-overlay"></div>
      </div>

      <div className="banner-content-container">
        <div className="banner-main-grid">
          {/* Left Hero Content */}
          <div className="banner-text-column">
            {/* Top Hero Block */}
            <div className="banner-hero-top">
              {/* Top Badge */}
              <div className="banner-trust-tagline">
                <span>13 YEARS OF TRUST</span>
                <span className="tagline-dot">•</span>
                <span>SINCE 2013</span>
              </div>

              {/* Main Headline with Typewriter Animation */}
              <h1 className="banner-headline">
                Complete Net Solutions<br />
                <Typewriter
                  text="For Pigeon Free Homes & Balcony Safety"
                  loop={false}
                  typingSpeed={65}
                  className="typewriter-black banner-typewriter"
                />
              </h1>

              {/* Description Subtitle */}
              <p className="banner-description">
                Safety, Invisible Grills, Sports Nets, Construction Nets<br className="desktop-break" />
                and Building Covering Nets – Expert Installation in Chandigarh.
              </p>

              {/* CTA Action Buttons - Single Row at Top */}
              <div className="banner-cta-group">
                <MagneticButton strength={0.28}>
                  <button
                    type="button"
                    className="banner-primary-btn"
                    onClick={onOpenBooking}
                  >
                    <span>Book a Service</span>
                    <svg
                      className="btn-arrow-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </MagneticButton>

                <MagneticButton strength={0.28}>
                  <button
                    type="button"
                    className="banner-secondary-btn"
                    onClick={onExploreServices}
                  >
                    <span>Our Services</span>
                  </button>
                </MagneticButton>
              </div>
            </div>

            {/* 4 Trust Feature Strip */}
            <div className="banner-features-strip">
              {/* Feature 1: Safe Homes */}
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                  </svg>
                </div>
                <div className="feature-label">
                  <strong>Safe Homes</strong>
                  <span>& Workspaces</span>
                </div>
              </div>

              {/* Feature 2: Premium Quality Nets */}
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </div>
                <div className="feature-label">
                  <strong>Premium</strong>
                  <span>Quality Nets</span>
                </div>
              </div>

              {/* Feature 3: Professional Installation */}
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="feature-label">
                  <strong>Professional</strong>
                  <span>Installation</span>
                </div>
              </div>

              {/* Feature 4: Trusted for 13+ Years */}
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div className="feature-label">
                  <strong>Trusted for</strong>
                  <span>13+ Years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area with Floating Experience Card */}
          <div className="banner-visual-column">
            <div className="floating-experience-card">
              <div className="experience-icon-box">
                {/* Golden Crown Icon */}
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f3b53f" />
                      <stop offset="50%" stopColor="#d49b29" />
                      <stop offset="100%" stopColor="#ab7714" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M2 19h20v2H2v-2zM4 17l2-11 5 6 5-6 2 11H4z"
                    fill="url(#goldGrad)"
                  />
                  <circle cx="6" cy="5" r="1.5" fill="#f3b53f" />
                  <circle cx="12" cy="4" r="1.5" fill="#f3b53f" />
                  <circle cx="18" cy="5" r="1.5" fill="#f3b53f" />
                </svg>
              </div>

              <div className="experience-text-box">
                <div className="experience-number">13+</div>
                <div className="experience-title">Years of Excellence</div>
                <div className="experience-subtitle">Since 2013</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
