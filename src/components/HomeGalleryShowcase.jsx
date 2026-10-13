import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiMapPin,
  FiCheckCircle,
  FiMaximize2,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiPhoneCall,
} from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import g2_1 from '../2/WhatsApp Image 2026-10-13 at 11.14.59 AM.jpeg'
import g2_2 from '../2/WhatsApp Image 2026-10-13 at 11.15.01 AM.jpeg'
import g2_3 from '../2/image.png'
import g2_4 from '../2/WhatsApp Image 2026-10-13 at 11.16.36 AM.jpeg'
import './HomeGalleryShowcase.css'

export default function HomeGalleryShowcase({ onOpenBooking }) {
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedIdx, setSelectedIdx] = useState(0)

  const showcaseProjects = [
    {
      id: 'showcase-1',
      category: 'Balcony Grill',
      title: 'High-Rise Balcony Installation',
      location: 'Wave Estate, Sector 85, Mohali',
      image: g2_1,
      specs: 'SS-316 Marine Grade Cables',
      serviceSlug: 'invisible-grills',
      desc: 'Seamless architectural invisible safety grill fitted along full balcony perimeter with marine-grade SS-316 tensioned cables.',
    },
    {
      id: 'showcase-2',
      category: 'Window Grill',
      title: 'French Window Safety Grill',
      location: 'Sector 8 Luxury Villa, Chandigarh',
      image: g2_2,
      specs: '6063-T6 Aluminum Track',
      serviceSlug: 'invisible-grills',
      desc: 'Precision horizontal grill track mounted directly into RCC ceiling beam without tile cracking or paint chipping.',
    },
    {
      id: 'showcase-3',
      category: 'Cloth Hanger',
      title: 'Balcony Ceiling Cloth Hanger Setup',
      location: 'DLF The Valley, Panchkula',
      image: g2_3,
      specs: 'Heavy Duty SS-304 Rods',
      serviceSlug: 'cloth-hangers',
      desc: '6-pipe heavy duty SS-304 stainless steel ceiling pulley clothes drying hanger with dual brass bearings and smooth lifting cord.',
    },
    {
      id: 'showcase-4',
      category: 'Pigeon Netting',
      title: 'Balcony Bird Exclusion Barrier',
      location: 'Sushma Grande, Zirakpur',
      image: g2_4,
      specs: '25mm Garware Nylon Mesh',
      serviceSlug: 'pigeon-nets',
      desc: 'Hygienic transparent bird net keeping pigeons from roosting on balcony railings, air conditioner ledges, and ducts.',
    },
  ]

  const openPopup = (item, idx) => {
    setSelectedItem(item)
    setSelectedIdx(idx)
  }

  const closePopup = () => {
    setSelectedItem(null)
  }

  const handlePrev = (e) => {
    e.stopPropagation()
    const newIdx = selectedIdx === 0 ? showcaseProjects.length - 1 : selectedIdx - 1
    setSelectedIdx(newIdx)
    setSelectedItem(showcaseProjects[newIdx])
  }

  const handleNext = (e) => {
    e.stopPropagation()
    const newIdx = selectedIdx === showcaseProjects.length - 1 ? 0 : selectedIdx + 1
    setSelectedIdx(newIdx)
    setSelectedItem(showcaseProjects[newIdx])
  }

  // Keyboard navigation for popup & body scroll lock
  useEffect(() => {
    if (!selectedItem) return
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePopup()
      if (e.key === 'ArrowLeft') {
        const newIdx = selectedIdx === 0 ? showcaseProjects.length - 1 : selectedIdx - 1
        setSelectedIdx(newIdx)
        setSelectedItem(showcaseProjects[newIdx])
      }
      if (e.key === 'ArrowRight') {
        const newIdx = selectedIdx === showcaseProjects.length - 1 ? 0 : selectedIdx + 1
        setSelectedIdx(newIdx)
        setSelectedItem(showcaseProjects[newIdx])
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedItem, selectedIdx])

  return (
    <section className="home-gallery-showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="showcase-header-bar">
          <div className="showcase-header-text">
            <span className="section-pill">Gallery Showcase</span>
            <h2 className="showcase-title">Recent Installation Projects</h2>
            <p className="showcase-subtitle">
              Take a look at genuine on-site balcony safety and utility installations executed across Chandigarh Tricity's top apartment complexes. Click any project to inspect high-resolution images.
            </p>
          </div>

          <Link to="/projects" className="view-all-showcase-btn">
            <span>View All Installations</span>
            <FiArrowRight size={16} />
          </Link>
        </div>

        {/* 4 Cards Showcase Grid */}
        <div className="showcase-cards-grid reveal-stagger">
          {showcaseProjects.map((item, idx) => (
            <div key={item.id} className="showcase-item-card">
              {/* Clickable Image Container to trigger popup */}
              <div
                className="showcase-image-wrapper"
                onClick={() => openPopup(item, idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openPopup(item, idx)
                  }
                }}
                aria-label={`Open photo popup for ${item.title}`}
              >
                <img src={item.image} alt={item.title} className="showcase-img" />
                <span className="showcase-category-pill">{item.category}</span>
                <div className="showcase-zoom-overlay">
                  <div className="showcase-zoom-icon">
                    <FiMaximize2 size={18} />
                  </div>
                  <span>View Full Photo</span>
                </div>
              </div>

              <div className="showcase-card-body">
                <h3
                  className="showcase-card-title clickable-title"
                  onClick={() => openPopup(item, idx)}
                >
                  {item.title}
                </h3>
                <div className="showcase-location-row">
                  <FiMapPin size={14} style={{ color: '#074c3e' }} />
                  <span>{item.location}</span>
                </div>
                <div className="showcase-specs-badge">
                  <FiCheckCircle size={13} style={{ color: '#16a34a' }} />
                  <span>{item.specs}</span>
                </div>

                <div className="showcase-card-actions">
                  <Link
                    to={`/services/${item.serviceSlug}`}
                    className="showcase-details-link"
                  >
                    <span>View Service</span>
                    <FiArrowRight size={13} />
                  </Link>
                  <button
                    type="button"
                    className="showcase-inquire-btn"
                    onClick={() => openPopup(item, idx)}
                  >
                    View Photo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* On-Page Image Lightbox Popup Modal with Portal */}
      {selectedItem &&
        createPortal(
          <div
            className="showcase-lightbox-backdrop"
            onClick={closePopup}
            role="dialog"
            aria-modal="true"
            aria-label="Image Preview Modal"
          >
            <div
              className="showcase-lightbox-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                className="showcase-lightbox-close"
                onClick={closePopup}
                aria-label="Close image popup"
              >
                <FiX size={22} />
              </button>

              {/* Navigation Arrows */}
              <button
                type="button"
                className="showcase-lightbox-nav prev"
                onClick={handlePrev}
                aria-label="Previous project photo"
              >
                <FiChevronLeft size={28} />
              </button>

              <button
                type="button"
                className="showcase-lightbox-nav next"
                onClick={handleNext}
                aria-label="Next project photo"
              >
                <FiChevronRight size={28} />
              </button>

              {/* Main Preview Image */}
              <div className="showcase-lightbox-media">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="showcase-lightbox-img"
                />
              </div>

              {/* Project Details Footer Bar */}
              <div className="showcase-lightbox-info">
                <div className="showcase-lightbox-text">
                  <span className="showcase-lightbox-pill">{selectedItem.category}</span>
                  <h3 className="showcase-lightbox-title">{selectedItem.title}</h3>
                  <p className="showcase-lightbox-meta">
                    <FiMapPin size={14} style={{ marginRight: '5px' }} />
                    {selectedItem.location} • <strong>{selectedItem.specs}</strong>
                  </p>
                  {selectedItem.desc && (
                    <p className="showcase-lightbox-desc">{selectedItem.desc}</p>
                  )}
                </div>

                <div className="showcase-lightbox-actions">
                  <button
                    type="button"
                    className="showcase-lightbox-book-btn"
                    onClick={() => {
                      closePopup()
                      if (onOpenBooking) onOpenBooking()
                    }}
                  >
                    <FiCheckCircle size={15} />
                    <span>Book Free Inspection</span>
                  </button>
                  <a
                    href={`https://wa.me/919900020960?text=${encodeURIComponent(`Hi Harshitha Enterprises, I am inquiring about your recent project: ${selectedItem.title} (${selectedItem.location}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="showcase-lightbox-wa-btn"
                  >
                    <BsWhatsapp size={16} />
                    <span>WhatsApp</span>
                  </a>
                  <a href="tel:9900020960" className="showcase-lightbox-call-btn">
                    <FiPhoneCall size={15} />
                    <span>Call 9900020960</span>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  )
}
