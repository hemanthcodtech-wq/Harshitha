import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  FiPhoneCall,
  FiHome,
  FiShield,
  FiGrid,
  FiImage,
  FiMail,
  FiCalendar,
  FiChevronRight,
  FiClock,
} from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import logoImg from '../assets/logo.png'
import './Header.css'

export default function Header({ onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
      setIsScrolled(scrollTop > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Luxury Scroll Reading Progress Bar */}
      <div
        className="header-scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="header-container">
        {/* Brand Logo & Name from src/assets/logo.png */}
        <Link to="/" className="header-logo-link" onClick={closeMobileMenu}>
          <img src={logoImg} alt="Harshitha Enterprises" className="header-logo-img" />
          <div className="header-brand-text">
            <span className="brand-name-title">Harshitha Enterprises</span>
            <span className="brand-name-sub">Safety Nets & Invisible Grills</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Recent Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Book
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Action Section: Phone Helpline + Book CTA */}
        <div className="header-actions">
          {/* Mobile Number Button (Replaced Search Icon) */}
          <a
            href="tel:9900020960"
            className="header-phone-link"
            aria-label="Call 9900020960"
          >
            <div className="header-phone-icon-wrap">
              <FiPhoneCall size={15} />
            </div>
            <div className="header-phone-info">
              <span className="header-phone-label">Helpline</span>
              <span className="header-phone-val">9900020960</span>
            </div>
          </a>

          {/* Book a Service CTA Button */}
          <Link
            to="/book"
            className="header-cta-btn"
          >
            <span>Book a Service</span>
            <svg
              className="cta-arrow-icon"
              width="15"
              height="15"
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
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'is-active' : ''}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Enhanced with React Icons */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          {/* Drawer Top Branding Bar */}
          <div className="mobile-drawer-brand-card">
            <img src={logoImg} alt="Harshitha Enterprises" className="drawer-logo-img" />
            <div className="drawer-brand-info">
              <strong>HARSHITHA ENTERPRISES</strong>
              <span>Since 2013 • ISO Certified</span>
            </div>
          </div>

          {/* Navigation Links with React Icons */}
          <ul className="mobile-nav-list">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
                end
              >
                <div className="mobile-nav-icon-wrap">
                  <FiHome size={18} />
                </div>
                <span className="mobile-nav-text">Home</span>
                <FiChevronRight className="mobile-nav-chevron" size={16} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <div className="mobile-nav-icon-wrap">
                  <FiShield size={18} />
                </div>
                <span className="mobile-nav-text">About Us</span>
                <FiChevronRight className="mobile-nav-chevron" size={16} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <div className="mobile-nav-icon-wrap">
                  <FiGrid size={18} />
                </div>
                <span className="mobile-nav-text">Services</span>
                <FiChevronRight className="mobile-nav-chevron" size={16} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <div className="mobile-nav-icon-wrap">
                  <FiImage size={18} />
                </div>
                <span className="mobile-nav-text">Recent Projects</span>
                <FiChevronRight className="mobile-nav-chevron" size={16} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <div className="mobile-nav-icon-wrap">
                  <FiMail size={18} />
                </div>
                <span className="mobile-nav-text">Contact</span>
                <FiChevronRight className="mobile-nav-chevron" size={16} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book"
                className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <div className="mobile-nav-icon-wrap">
                  <FiCalendar size={18} />
                </div>
                <span className="mobile-nav-text">Book Inspection</span>
                <FiChevronRight className="mobile-nav-chevron" size={16} />
              </NavLink>
            </li>
          </ul>

          {/* Drawer Actions Footer */}
          <div className="mobile-drawer-footer">
            <Link
              to="/book"
              className="mobile-cta-btn"
              onClick={closeMobileMenu}
            >
              <FiCalendar size={17} />
              <span>Book a Service</span>
              <FiChevronRight size={16} />
            </Link>

            <a
              href="tel:9900020960"
              className="mobile-contact-pill"
            >
              <div className="mobile-pill-icon-box">
                <FiPhoneCall size={16} />
              </div>
              <div className="mobile-pill-text-box">
                <span className="mobile-pill-sub">Customer Helpline</span>
                <strong className="mobile-pill-num">9900020960</strong>
              </div>
            </a>

            <a
              href="https://wa.me/919900020960"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-whatsapp-btn"
            >
              <BsWhatsapp size={18} />
              <span>WhatsApp Instant Estimate</span>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  )
}
