import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import {
  FiMapPin,
  FiPlay,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiPhoneCall,
  FiLayers,
  FiMaximize2,
} from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { projectsGallery, projectsVideo } from '../data/projectsData'
import Typewriter from '../components/Typewriter'
import './ProjectsPage.css'

export default function ProjectsPage({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [selectedIdx, setSelectedIdx] = useState(0)

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'real', label: 'Real Site Photos' },
    { id: 'Invisible Grills', label: 'Invisible Grills' },
    { id: 'Cloth Dryers', label: 'Cloth Hangers' },
    { id: 'Bird Nets', label: 'Bird & Pigeon Nets' },
    { id: 'Child Safety', label: 'Child Safety' },
    { id: 'ai', label: 'Architectural Renders' },
  ]

  const filteredItems = projectsGallery.filter((item) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'real') return item.tag === 'Real Installation'
    if (activeFilter === 'ai') return item.tag === 'Architectural Render'
    return item.category === activeFilter
  })

  const openLightbox = (item, idx) => {
    setSelectedMedia(item)
    setSelectedIdx(idx)
  }

  const closeLightbox = () => {
    setSelectedMedia(null)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    const newIdx = selectedIdx === 0 ? filteredItems.length - 1 : selectedIdx - 1
    setSelectedIdx(newIdx)
    setSelectedMedia(filteredItems[newIdx])
  }

  const handleNext = (e) => {
    e.stopPropagation()
    const newIdx = selectedIdx === filteredItems.length - 1 ? 0 : selectedIdx + 1
    setSelectedIdx(newIdx)
    setSelectedMedia(filteredItems[newIdx])
  }

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!selectedMedia) return
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') {
        const newIdx = selectedIdx === 0 ? filteredItems.length - 1 : selectedIdx - 1
        setSelectedIdx(newIdx)
        setSelectedMedia(filteredItems[newIdx])
      }
      if (e.key === 'ArrowRight') {
        const newIdx = selectedIdx === filteredItems.length - 1 ? 0 : selectedIdx + 1
        setSelectedIdx(newIdx)
        setSelectedMedia(filteredItems[newIdx])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedMedia, selectedIdx, filteredItems])

  return (
    <div className="projects-page">
      {/* 1. Page Hero Banner */}
      <section className="projects-hero-banner">
        <div className="container">
          <span className="page-hero-badge">Proven Excellence • Real Transformations</span>
          <h1 className="page-hero-title">
            Recent Projects &{' '}
            <Typewriter
              text="Site Gallery"
              loop={false}
              typingSpeed={65}
            />
          </h1>
          <p className="page-hero-subtitle">
            Explore genuine on-site balcony safety nets, invisible grills, and smart dryer installations completed across residential societies and commercial facilities.
          </p>
        </div>
      </section>

      {/* 2. Featured Video Installation Showcase */}
      <section className="featured-video-section">
        <div className="container">
          <div className="video-card-container">
            <div className="video-player-wrap reveal-left">
              <video
                controls
                playsInline
                preload="metadata"
                className="site-project-video"
              >
                <source src={projectsVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video-live-pill">
                <span className="live-dot"></span>
                <span>Verified Site Footage</span>
              </div>
            </div>

            <div className="video-details-content reveal-right">
              <span className="section-pill">
                <FiPlay style={{ marginRight: '6px' }} /> Certified Technician Process
              </span>
              <h2 className="video-heading">{projectsVideo.title}</h2>
              <div className="video-location-badge">
                <FiMapPin size={14} style={{ color: '#074c3e' }} />
                <span>{projectsVideo.location}</span>
              </div>
              <p className="video-desc">{projectsVideo.desc}</p>

              <div className="video-features-list">
                <div className="video-feat-item">
                  <FiCheckCircle style={{ color: '#16a34a' }} />
                  <span>Heavy-Duty Anchor Drilling in RCC Beams</span>
                </div>
                <div className="video-feat-item">
                  <FiCheckCircle style={{ color: '#16a34a' }} />
                  <span>Calibrated SS-316 Tensile Cable Tensioning</span>
                </div>
                <div className="video-feat-item">
                  <FiCheckCircle style={{ color: '#16a34a' }} />
                  <span>Clean Dust-Free Finish & Handover</span>
                </div>
              </div>

              <div className="video-action-buttons">
                <button
                  type="button"
                  className="video-book-btn"
                  onClick={() => (onOpenBooking ? onOpenBooking() : null)}
                >
                  <FiCheckCircle size={16} />
                  <span>Book Free Site Inspection</span>
                </button>
                <a href="tel:9900020960" className="video-call-btn">
                  <FiPhoneCall size={16} />
                  <span>Call 9900020960</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Projects Gallery Section */}
      <section className="gallery-main-section">
        <div className="container">
          <div className="gallery-section-head">
            <div className="gallery-title-area">
              <span className="section-pill">Installation Portfolio</span>
              <h2 className="gallery-section-title">Explore Completed Installations</h2>
              <p className="gallery-section-sub">
                Click any photo to zoom in and view high-resolution installation details.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="gallery-filter-tabs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-pill-btn ${activeFilter === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Media Grid */}
          <div className="gallery-cards-grid reveal-stagger">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="gallery-item-card"
                onClick={() => openLightbox(item, idx)}
              >
                {/* Media Thumbnail */}
                <div className="gallery-media-wrap">
                  {item.mediaType === 'video' ? (
                    <div className="video-thumb-container">
                      <video
                        src={item.src}
                        preload="metadata"
                        className="gallery-media-element"
                        muted
                      />
                      <div className="video-play-overlay">
                        <div className="play-icon-circle">
                          <FiPlay size={20} />
                        </div>
                        <span>Watch Demo Video</span>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="gallery-media-element"
                      loading="lazy"
                    />
                  )}

                  <span className={`media-tag-pill ${item.tag === 'Real Installation' ? 'tag-real' : 'tag-render'}`}>
                    {item.tag}
                  </span>

                  <div className="gallery-zoom-badge">
                    <FiMaximize2 size={16} />
                  </div>
                </div>

                {/* Card Details */}
                <div className="gallery-card-content">
                  <div className="gallery-card-location">
                    <FiMapPin size={13} style={{ color: '#074c3e' }} />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-card-desc">{item.desc}</p>

                  <div className="gallery-card-footer">
                    <span className="card-specs-pill">{item.specs}</span>
                    <button
                      type="button"
                      className="card-inquire-link"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (onOpenBooking) onOpenBooking()
                      }}
                    >
                      <span>Inquire</span>
                      <FiCheckCircle size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lightbox Fullscreen Modal with React Portal */}
      {selectedMedia &&
        createPortal(
          <div className="lightbox-backdrop" onClick={closeLightbox}>
            <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={closeLightbox}
                aria-label="Close image popup"
              >
                <FiX size={22} />
              </button>

              <button
                type="button"
                className="lightbox-nav-btn prev-btn"
                onClick={handlePrev}
                aria-label="Previous item"
              >
                <FiChevronLeft size={28} />
              </button>

              <button
                type="button"
                className="lightbox-nav-btn next-btn"
                onClick={handleNext}
                aria-label="Next item"
              >
                <FiChevronRight size={28} />
              </button>

              <div className="lightbox-media-container">
                {selectedMedia.mediaType === 'video' ? (
                  <video
                    src={selectedMedia.src}
                    controls
                    autoPlay
                    playsInline
                    className="lightbox-video-view"
                  />
                ) : (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="lightbox-image-view"
                  />
                )}
              </div>

              <div className="lightbox-info-bar">
                <div className="lightbox-info-left">
                  <span className="lightbox-tag">{selectedMedia.tag}</span>
                  <h3>{selectedMedia.title}</h3>
                  <p>
                    <FiMapPin size={14} style={{ marginRight: '5px' }} />
                    {selectedMedia.location} • {selectedMedia.specs}
                  </p>
                </div>

                <div className="lightbox-actions-right">
                  <button
                    type="button"
                    className="lightbox-book-btn"
                    onClick={() => {
                      closeLightbox()
                      if (onOpenBooking) onOpenBooking()
                    }}
                  >
                    Book Free Site Measurement
                  </button>
                  <a href="tel:9900020960" className="lightbox-phone-btn">
                    Call 9900020960
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* 5. Consultation & Booking Ribbon */}
      <section className="projects-cta-ribbon">
        <div className="container">
          <div className="projects-ribbon-card">
            <div className="ribbon-card-info">
              <span className="ribbon-card-pill">100% Free Site Inspection</span>
              <h2>Want Similar Safety Fitted on Your Balcony?</h2>
              <p>
                Our senior safety technician will visit your apartment with authentic material samples and laser measure tools.
              </p>
            </div>

            <div className="ribbon-card-actions">
              <button
                type="button"
                className="ribbon-book-btn"
                onClick={() => (onOpenBooking ? onOpenBooking() : null)}
              >
                <span>Book Free Site Visit</span>
              </button>
              <a href="tel:9900020960" className="ribbon-call-btn">
                <FiPhoneCall size={16} />
                <span>Call 9900020960</span>
              </a>
              <a
                href="https://wa.me/919900020960?text=Hi%20Harshitha%20Enterprises%2C%20I%20am%20interested%20in%20your%20recent%20installation%20services."
                target="_blank"
                rel="noreferrer"
                className="ribbon-whatsapp-btn"
              >
                <BsWhatsapp size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
