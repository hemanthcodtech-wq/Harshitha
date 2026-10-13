import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhoneCall, FiCheckCircle } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { servicesData } from '../data/servicesData'
import InstallationProcess from '../components/InstallationProcess'
import Typewriter from '../components/Typewriter'
import './ServicesPage.css'

export default function ServicesPage({ onOpenBooking }) {
  const [filter, setFilter] = useState('all')

  const filteredServices = servicesData.filter((service) => {
    if (filter === 'all') return true
    return service.category === filter
  })

  return (
    <div className="services-page">
      {/* 1. Hero Banner matching Reference Image */}
      <section className="services-hero-banner">
        <div className="services-hero-overlay"></div>
        <div className="container services-hero-content">
          <h1 className="services-main-title">
            Our{' '}
            <Typewriter
              words={['Services', 'Safety Nets', 'Invisible Grills', 'Sports Enclosures', 'Bird Proofing']}
              typingSpeed={75}
              deletingSpeed={45}
              pauseDuration={2000}
              className="typewriter-gold"
            />
          </h1>
          <p className="services-main-subtitle">
            High quality net solutions for homes, commercial spaces, sports facilities and construction sites.
          </p>
        </div>
      </section>

      {/* 2. Services Catalogue Section */}
      <section className="services-grid-section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="services-category-tabs">
            <button
              type="button"
              className={`cat-tab-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Services ({servicesData.length})
            </button>
            <button
              type="button"
              className={`cat-tab-btn ${filter === 'residential' ? 'active' : ''}`}
              onClick={() => setFilter('residential')}
            >
              Residential & Balcony (4)
            </button>
            <button
              type="button"
              className={`cat-tab-btn ${filter === 'commercial' ? 'active' : ''}`}
              onClick={() => setFilter('commercial')}
            >
              Commercial & Sports (4)
            </button>
          </div>

          {/* Cards Grid Matching Reference Design */}
          <div className="services-cards-grid reveal-stagger">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card-item">
                <Link to={`/services/${service.id}`} className="service-card-link">
                  {/* Card Media with Image */}
                  <div className="service-card-image-wrap">
                    <img
                      src={service.image}
                      alt={service.shortTitle}
                      className="service-card-img"
                    />
                    <span className="service-card-category-tag">
                      {service.categoryBadge}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="service-card-body">
                    <div className="service-card-text">
                      <h2 className="service-card-title">{service.shortTitle}</h2>
                      <p className="service-card-desc">{service.shortDesc}</p>
                    </div>

                    {/* Circular Arrow Button (matching reference) */}
                    <div className="service-card-action">
                      <span className="card-arrow-circle" aria-label={`View details for ${service.shortTitle}`}>
                        <FiArrowRight size={18} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5-Step Systematic Installation Process */}
      <InstallationProcess />

      {/* 4. Quality Standards Strip */}
      <section className="services-quality-strip">
        <div className="container">
          <div className="quality-strip-card">
            <div className="quality-strip-info">
              <span className="quality-pill">Certified Standards</span>
              <h2>Why Harshitha Net Solutions Lead the Industry</h2>
              <p>
                We use 100% genuine SS-316 marine-grade cables and Garware UV-stabilized copolymer nylon. With 13+ years of experience, our certified rigging technicians deliver zero-sag, life-safety certified installations backed by 5-year written warranties.
              </p>
            </div>

            <div className="quality-strip-ctas">
              <button
                type="button"
                className="quality-book-btn"
                onClick={() => onOpenBooking ? onOpenBooking() : null}
              >
                <FiCheckCircle size={18} />
                <span>Book Free Site Visit</span>
              </button>

              <a href="tel:9900020960" className="quality-call-btn">
                <FiPhoneCall size={17} />
                <span>Call 9900020960</span>
              </a>

              <a
                href="https://wa.me/919900020960?text=Hello%2C%20I%20would%20like%20a%20free%20quote%20for%20balcony%20nets."
                target="_blank"
                rel="noreferrer"
                className="quality-whatsapp-btn"
              >
                <BsWhatsapp size={17} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
