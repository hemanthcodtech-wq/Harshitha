import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  FiShield,
  FiPhoneCall,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiTool,
  FiArrowRight,
  FiLayers,
  FiCheckCircle,
} from 'react-icons/fi'
import { BsWhatsapp, BsCheckCircleFill } from 'react-icons/bs'
import { servicesData } from '../data/servicesData'
import InstallationProcess from '../components/InstallationProcess'
import Typewriter from '../components/Typewriter'
import './ServiceDetailsPage.css'

export default function ServiceDetailsPage({ onOpenBooking }) {
  const { serviceId } = useParams()
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  // Find matching service
  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0]

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx))
  }

  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <div className="service-details-page">
      {/* 1. Hero Banner */}
      <section className="service-hero-section">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="service-breadcrumbs">
            <Link to="/">Home</Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{service.shortTitle}</span>
          </nav>

          <div className="service-hero-grid">
            <div className="service-hero-content reveal-left">
              <span className="service-category-badge">
                <FiShield style={{ marginRight: '6px' }} />
                {service.categoryBadge} •{' '}
                <Typewriter
                  words={['Expert Craftsmanship', '5-Year Warranty', 'Marine Grade SS-316', 'Free Site Inspection']}
                  typingSpeed={70}
                  deletingSpeed={40}
                  pauseDuration={2200}
                />
              </span>

              <h1 className="service-hero-title">{service.title}</h1>

              <p className="service-hero-lead">{service.overview}</p>

              {service.subOverview && (
                <p className="service-hero-sublead">{service.subOverview}</p>
              )}

              {/* Showcase Book Option and Contact Option */}
              <div className="service-hero-actions">
                <button
                  type="button"
                  className="btn-book-survey"
                  onClick={() => onOpenBooking ? onOpenBooking() : null}
                >
                  <FiCheckCircle size={18} />
                  <span>Book Free Site Survey</span>
                </button>

                <a href="tel:9900020960" className="btn-call-expert">
                  <FiPhoneCall size={17} />
                  <span>Call 9900020960</span>
                </a>

                <a
                  href={`https://wa.me/919900020960?text=${encodeURIComponent(
                    `Hi Harshitha Enterprises, I am interested in ${service.title}. Please share quotation & details.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-chat"
                >
                  <BsWhatsapp size={17} />
                  <span>WhatsApp Estimate</span>
                </a>
              </div>
            </div>

            <div className="service-hero-visual reveal-right">
              <div className="visual-image-wrapper">
                <img src={service.image} alt={service.title} className="visual-hero-img" />
                <div className="visual-badge-overlay">
                  <strong>5-Year Warranty</strong>
                  <span>Genuine Certified Material</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Pillars / Highlights Grid */}
      {service.highlights && service.highlights.length > 0 && (
        <section className="service-pillars-section">
          <div className="container">
            <div className="pillars-grid reveal-stagger">
              {service.highlights.map((item, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon-box">
                    <BsCheckCircleFill style={{ color: '#074c3e', fontSize: '22px' }} />
                  </div>
                  <div className="pillar-text">
                    <h3 className="pillar-title">{item.title}</h3>
                    <p className="pillar-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Technical Specifications & Applications Section */}
      <section className="service-specs-section">
        <div className="container">
          <div className="specs-layout-grid">
            {/* Left: Technical Specifications */}
            <div className="specs-card-container reveal-left">
              <div className="section-mini-header">
                <span className="spec-pill">
                  <FiTool style={{ marginRight: '6px' }} /> Engineering Standards
                </span>
                <h2 className="spec-heading">Technical Specifications</h2>
                <p className="spec-sub">
                  Precision engineered to deliver unmatched tensile endurance and architectural luxury.
                </p>
              </div>

              <div className="specs-table-list">
                {service.technicalSpecs.map((spec, i) => (
                  <div key={i} className="spec-row-item">
                    <span className="spec-label">{spec.label}</span>
                    <strong className="spec-value">{spec.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Applications & Installation & Care */}
            <div className="applications-stack reveal-right">
              {/* Applications Card */}
              <div className="app-card-box">
                <div className="app-card-header">
                  <span className="spec-pill">
                    <FiLayers style={{ marginRight: '6px' }} /> Versatile Coverage
                  </span>
                  <h3>Ideal Applications</h3>
                  <p>Engineered for all residential, commercial, and multi-story structural configurations.</p>
                </div>

                <div className="app-tags-grid">
                  {service.applications.map((app, i) => (
                    <div key={i} className="app-tag-item">
                      <FiCheck className="app-check-icon" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Installation & Care Card */}
              <div className="care-card-box">
                <div className="care-header">
                  <span className="spec-pill">
                    <FiClock style={{ marginRight: '6px' }} /> Timeline & Maintenance
                  </span>
                  <h3>Installation & Care</h3>
                </div>

                <div className="care-body">
                  <div className="care-point">
                    <strong>Estimated Installation Time:</strong>
                    <p>{service.installationAndCare.time}</p>
                  </div>
                  <div className="care-point">
                    <strong>Maintenance Guidelines:</strong>
                    <p>{service.installationAndCare.maintenance}</p>
                  </div>
                </div>

                <div className="care-cta-footer">
                  <button
                    type="button"
                    className="care-book-btn"
                    onClick={() => onOpenBooking ? onOpenBooking() : null}
                  >
                    <span>Book Site Survey</span>
                    <FiArrowRight />
                  </button>
                  <a href="tel:9900020960" className="care-phone-link">
                    Direct Call: 9900020960
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Comparison Table (e.g. Invisible Grills vs Traditional Iron Grills) */}
      {service.comparison && (
        <section className="service-comparison-section">
          <div className="container">
            <div className="comparison-header-center">
              <span className="section-pill">Smart Comparison</span>
              <h2 className="comparison-title">{service.comparison.title}</h2>
              <p className="comparison-sub">{service.comparison.subtitle}</p>
            </div>

            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    {service.comparison.headers.map((h, idx) => (
                      <th
                        key={idx}
                        className={idx === 1 ? 'col-highlighted-head' : ''}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.comparison.rows.map((row, rIdx) => (
                    <tr key={rIdx}>
                      <td className="col-feature-title">{row[0]}</td>
                      <td className="col-primary-feature">
                        <div className="feature-pill-good">
                          <FiCheck className="feature-icon-good" />
                          <span>{row[1]}</span>
                        </div>
                      </td>
                      <td className="col-traditional-feature">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 5. Available Models & Configurations */}
      {service.models && service.models.length > 0 && (
        <section className="service-models-section">
          <div className="container">
            <div className="models-header-center">
              <span className="section-pill">Custom Options</span>
              <h2 className="models-title">Available Models & Configurations</h2>
              <p className="models-sub">
                Select the ideal structural setup tailored to your balcony layout and functional preference.
              </p>
            </div>

            <div className="models-cards-grid reveal-stagger">
              {service.models.map((model, idx) => (
                <div key={idx} className="model-config-card">
                  <div className="model-card-top">
                    <span className="model-time-badge">
                      <FiClock size={13} style={{ marginRight: '5px' }} /> Setup: {model.setup}
                    </span>
                    <h3 className="model-name">{model.name}</h3>
                  </div>
                  <p className="model-description">{model.desc}</p>
                  <div className="model-card-bottom">
                    <button
                      type="button"
                      className="model-choose-btn"
                      onClick={() => onOpenBooking ? onOpenBooking() : null}
                    >
                      <span>Inquire This Model</span>
                      <FiArrowRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. How We Work • 5-Step Installation Process */}
      <InstallationProcess />

      {/* 7. Service Specific FAQ Section (1-by-1 Accordion with Dropdown Arrow) */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="service-faq-section">
          <div className="container">
            <div className="section-header-center">
              <span className="section-pill">Instant Answers</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-desc">
                Find instant answers to common queries about {service.shortTitle} materials, safety, and installation.
              </p>
            </div>

            <div className="faq-accordion-centered reveal-stagger">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx
                return (
                  <div
                    key={idx}
                    className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
                  >
                    <button
                      type="button"
                      className="faq-question-btn"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">
                        <span className="faq-number">
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        {faq.q}
                      </span>
                      <span className={`faq-arrow-icon ${isOpen ? 'rotated' : ''}`}>
                        <FiChevronDown size={20} />
                      </span>
                    </button>

                    <div className={`faq-answer-drawer ${isOpen ? 'open' : ''}`}>
                      <div className="faq-answer-inner">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8. Bottom Sticky Consultation & Booking Strip */}
      <section className="service-bottom-cta-strip">
        <div className="container">
          <div className="bottom-cta-card">
            <div className="bottom-cta-info">
              <span className="cta-pill">100% Free Site Inspection</span>
              <h3>Ready to Secure Your Balcony with {service.shortTitle}?</h3>
              <p>
                Our senior safety engineer will visit your apartment, take laser measurements, and show real physical samples with zero obligation.
              </p>
            </div>

            {/* Showcase Book option and Contact option */}
            <div className="bottom-cta-actions">
              <button
                type="button"
                className="cta-book-action-btn"
                onClick={() => onOpenBooking ? onOpenBooking() : null}
              >
                <span>Book Free Inspection</span>
                <FiArrowRight size={17} />
              </button>

              <a href="tel:9900020960" className="cta-call-action-btn">
                <FiPhoneCall size={16} />
                <span>Call 9900020960</span>
              </a>

              <Link to="/contact" className="cta-contact-action-btn">
                <span>View Contact Page</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Explore Other Services Grid */}
      <section className="other-services-section">
        <div className="container">
          <div className="other-services-head">
            <h3>Explore Other Net & Grill Solutions</h3>
            <Link to="/services" className="view-all-link">
              <span>View All Services</span>
              <FiArrowRight />
            </Link>
          </div>

          <div className="other-services-grid reveal-stagger">
            {otherServices.map((item) => (
              <Link
                key={item.id}
                to={`/services/${item.id}`}
                className="other-service-card"
              >
                <div className="other-card-img-wrap">
                  <img src={item.image} alt={item.shortTitle} />
                </div>
                <div className="other-card-content">
                  <h4>{item.shortTitle}</h4>
                  <p>{item.shortDesc}</p>
                  <span className="other-read-more">
                    <span>Learn More</span>
                    <FiArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
