import { useState, useEffect, useRef } from 'react'
import {
  FiStar,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiTool,
} from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'
import './HomeTestimonials.css'

export default function HomeTestimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Anurag Sharma',
      location: 'Wave Estate, Sector 85, Mohali',
      project: 'High-Rise Balcony Invisible Grills',
      rating: 5,
      review:
        'Installed invisible safety grills in our 12th-floor apartment balcony. Harshitha Enterprises did a fantastic job. The technician was professional, drilling was neat, and the view remains completely open. Excellent protection for my kids.',
      tag: 'Verified Homeowner',
    },
    {
      id: 2,
      name: 'Pooja Verma',
      location: 'Sector 34, Chandigarh',
      project: 'Motorized Smart SS304 Cloth Hanger',
      rating: 5,
      review:
        'We ordered motorized ceiling cloth hangers and window safety grills for our duplex. Superb SS304 build quality, runs whisper-quiet, and completely decluttered our utility space. The installation team completed everything within 3 hours.',
      tag: 'Verified Duplex Resident',
    },
    {
      id: 3,
      name: 'Rajesh Malhotra',
      location: 'Sushma Grande, Zirakpur',
      project: 'Full Balcony Fall-Protection Netting',
      rating: 5,
      review:
        'High-tensile SS316 cables with transparent nylon sleeve looks so elegant! From outside, you cannot even notice the grills, yet it can take immense pressure. Highly recommend Harshitha Enterprises to anyone looking for balcony safety in Tricity.',
      tag: 'Verified Flat Owner',
    },
    {
      id: 4,
      name: 'Simranjeet Kaur',
      location: 'Sector 20, Panchkula',
      project: 'Invisible Balcony Grills for Toddler Safety',
      rating: 5,
      review:
        'With a 2-year-old at home, the open balcony was giving us sleepless nights. Harshitha Enterprises came the very same day for measurement and installed SS316 grills the next day. Sturdy, neat finish, and totally childproof!',
      tag: 'Verified Parent',
    },
    {
      id: 5,
      name: 'Vikram Ahuja',
      location: 'DLF Hyde Park, New Chandigarh',
      project: 'French Window Grills & Duct Netting',
      rating: 5,
      review:
        'Excellent craftsmanship! Installed invisible grills across 6 French windows and pigeon nets in the duct area. No ugly iron cages, zero birds, and maximum ventilation. Truly worth every rupee.',
      tag: 'Verified Villa Owner',
    },
    {
      id: 6,
      name: 'Sunita Reddy',
      location: 'My Home Bhooja, Hyderabad',
      project: '28th Floor Balcony Safety System',
      rating: 5,
      review:
        'Living on the 28th floor, wind resistance and certified anchor strength were crucial. The Harshitha team used marine-grade SS316 wire rope with stainless turnbuckles. Very responsive support and excellent finishing.',
      tag: 'Verified High-Rise Resident',
    },
    {
      id: 7,
      name: 'Harpreet Singh',
      location: 'Aerocity, Mohali',
      project: 'Ceiling Pulley Cloth Drying System',
      rating: 5,
      review:
        'The ceiling pulley cloth hanger is a game-changer for winter and rainy seasons. High weight capacity for heavy blankets and bedsheets. Smooth nylon ropes and zero rust on the pipes even after months of daily use.',
      tag: 'Verified Customer',
    },
    {
      id: 8,
      name: 'Manish Bansal',
      location: 'VIP Road, Zirakpur',
      project: 'Balcony Pigeon Exclusion Netting',
      rating: 5,
      review:
        'Pigeons had completely ruined our balcony AC ledge. Harshitha Enterprises installed 100% virgin Garware nylon net with tight SS wire boundary. No more bird droppings, foul smell, or unwanted nesting.',
      tag: 'Verified Apartment Owner',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Dynamically update items per view based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, reviews.length - itemsPerPage)

  // Auto-play slider every 4.5 seconds when not paused
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4500)

    return () => clearInterval(timer)
  }, [maxIndex, isPaused])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
    touchStartX.current = 0
    touchEndX.current = 0
  }

  // Calculate percentage shift for smooth translateX
  const slideWidthPercent = 100 / itemsPerPage
  const translateXPercent = currentIndex * slideWidthPercent

  return (
    <section
      className="home-testimonials-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Section Header with Controls */}
        <div className="testimonials-header-bar">
          <div className="testimonials-header-text">
            <span className="section-pill">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-desc">
              Real reviews from {reviews.length}+ happy homeowners across Chandigarh, Mohali, Panchkula, Zirakpur, and key metros.
            </p>
          </div>

          <div className="slider-nav-btns-group">
            <button
              type="button"
              className="slider-nav-btn prev-btn"
              onClick={handlePrev}
              aria-label="Previous Testimonials"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="slider-nav-btn next-btn"
              onClick={handleNext}
              aria-label="Next Testimonials"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel Slider Window */}
        <div
          className="testimonials-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="testimonials-carousel-track"
            style={{
              transform: `translateX(-${translateXPercent}%)`,
              transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="testimonial-slide-item"
                style={{ flex: `0 0 ${slideWidthPercent}%` }}
              >
                <div className="testimonial-card-box">
                  <div className="testimonial-card-top">
                    <div className="quote-icon-box">
                      <FaQuoteLeft size={16} color="#074c3e" />
                    </div>
                    <div className="rating-stars-row">
                      {[...Array(rev.rating)].map((_, i) => (
                        <FiStar key={i} size={15} className="star-filled" />
                      ))}
                    </div>
                  </div>

                  <p className="testimonial-card-quote">"{rev.review}"</p>

                  <div className="testimonial-author-block">
                    <div className="author-avatar-badge">
                      {rev.name.charAt(0)}
                    </div>
                    <div className="author-details">
                      <div className="author-name-row">
                        <h4 className="author-name">{rev.name}</h4>
                        <span className="verified-badge">
                          <FiCheckCircle size={12} /> {rev.tag}
                        </span>
                      </div>
                      <span className="author-location">
                        <FiMapPin size={12} style={{ marginRight: '4px' }} />
                        {rev.location}
                      </span>
                      <span className="author-project">
                        <FiTool size={11} style={{ marginRight: '4px' }} />
                        {rev.project}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots & Mobile Nav */}
        <div className="slider-bottom-controls">
          <div className="slider-dots-row">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`slider-dot ${currentIndex === idx ? 'active-dot' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="mobile-slider-arrows">
            <button
              type="button"
              className="mobile-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <FiChevronLeft size={20} />
            </button>
            <span className="slide-counter-badge">
              {currentIndex + 1} / {maxIndex + 1}
            </span>
            <button
              type="button"
              className="mobile-arrow-btn"
              onClick={handleNext}
              aria-label="Next"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
