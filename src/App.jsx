import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BookingModal from './components/BookingModal'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailsPage from './pages/ServiceDetailsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import BookPage from './pages/BookPage'
import PolicyPage from './pages/PolicyPage'
import SplashScreen from './components/SplashScreen'
import SplashPage from './pages/SplashPage'
import BackToTopButton from './components/BackToTopButton'
import CustomCursor from './components/CustomCursor'
import { initScrollReveal } from './utils/scrollReveal'
import './App.css'

function AppContent() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [showSplash, setShowSplash] = useState(() => {
    // Only show splash on first visit
    const hasVisited = localStorage.getItem('harshitha_splash_shown')
    return !hasVisited
  })
  const location = useLocation()
  const prevPathRef = useRef(location.pathname)
  const isSplash = location.pathname === '/splash'

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true)
  }

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false)
  }

  // Smooth Scroll Reveal Initialization on route change
  useEffect(() => {
    // Trigger exit animation when path changes
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname
    }
    const timer = setTimeout(() => {
      const cleanup = initScrollReveal()
      return cleanup
    }, 60)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const handleSplashFinish = () => {
    localStorage.setItem('harshitha_splash_shown', 'true')
    setShowSplash(false)
  }

  return (
    <div className="app-layout">
      {/* Initial Website Launch Splash Screen - Only on first visit */}
      {showSplash && !isSplash && (
        <SplashScreen onFinish={handleSplashFinish} />
      )}

      {/* Luxury Custom Desktop Cursor */}
      {!isSplash && <CustomCursor />}

      {/* Persistent Site Header */}
      {!isSplash && <Header onOpenBooking={handleOpenBooking} />}

      {/* Dynamic Route Pages with Smooth Page Entrance Transition */}
      <main className="main-content-area" style={isSplash ? { paddingBottom: 0 } : {}}>
        <div key={location.pathname} className="page-transition-wrapper">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/splash" element={<SplashPage />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services/:serviceId" element={<ServiceDetailsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/projects" element={<ProjectsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookPage />} />

            {/* Policy & Legal Routes */}
            <Route path="/privacy-policy" element={<PolicyPage defaultSlug="privacy-policy" />} />
            <Route path="/terms-conditions" element={<PolicyPage defaultSlug="terms-conditions" />} />
            <Route path="/cancellation-refund-policy" element={<PolicyPage defaultSlug="cancellation-refund-policy" />} />
            <Route path="/shipping-delivery-policy" element={<PolicyPage defaultSlug="shipping-delivery-policy" />} />
            <Route path="/warranty-policy" element={<PolicyPage defaultSlug="warranty-policy" />} />
            <Route path="/disclaimer" element={<PolicyPage defaultSlug="disclaimer" />} />
            <Route path="/cookie-policy" element={<PolicyPage defaultSlug="cookie-policy" />} />
          </Routes>
        </div>
      </main>

      {/* Global Footer */}
      {!isSplash && <Footer />}

      {/* Global Quick Booking Modal Dialog */}
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />

      {/* Floating Quick Action Bar for Mobile Visitors */}
      {!isSplash && (
        <div className="floating-action-bar">
          <a
            href="tel:9900020960"
            className="float-call-btn"
            aria-label="Call directly for inquiry"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="float-btn-text">Call Now</span>
          </a>

          <span className="float-whatsapp-pulse">
            <Link
              to="/book"
              className="float-book-btn"
              aria-label="Book a free site inspection"
            >
              <span>Book Free Visit</span>
            </Link>
          </span>
        </div>
      )}

      {/* Luxury Circular Progress Floating Back To Top Button */}
      {!isSplash && <BackToTopButton />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  )
}

export default App
