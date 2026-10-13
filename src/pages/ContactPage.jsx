import { useState } from 'react'
import { FiPhoneCall, FiMail, FiMapPin, FiClock, FiChevronDown, FiExternalLink, FiHelpCircle } from 'react-icons/fi'
import { BsWhatsapp, BsCheckCircleFill } from 'react-icons/bs'
import Typewriter from '../components/Typewriter'
import { openWhatsApp } from '../utils/whatsapp'
import './ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: 'Invisible Grills',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(0) // First FAQ open by default

  const faqs = [
    {
      q: 'Do you charge any fee for on-site inspection & measurements?',
      a: 'No! Our site visits, laser measurements, and physical material demonstrations are 100% free with zero obligation across Chandigarh, Mohali, Panchkula, and Zirakpur. You only pay after you approve the estimate.',
    },
    {
      q: 'What is the estimated cost per square foot for invisible grills and pigeon nets?',
      a: 'Invisible grills typically range from ₹130 to ₹190 per sq. ft. depending on cable grade (SS-316 vs SS-316L) and cable thickness (2.5mm / 3.0mm). Garware pigeon nets range from ₹18 to ₹35 per sq. ft. including installation, SS anchors, and turnbuckles. We provide a clear itemized quote with zero hidden charges.',
    },
    {
      q: 'How much time does a typical balcony installation take?',
      a: 'Most standard apartment balcony installations (whether SS-316 Invisible Grills or Garware Bird Nets) are completed within 2 to 4 hours by our certified 2-person rigging team without disrupting your daily routine.',
    },
    {
      q: 'Why do you use SS-316 marine-grade steel instead of standard SS-304?',
      a: 'SS-304 contains lower nickel and lacks molybdenum, which causes it to pit and discolor over time when exposed to monsoon humidity and outdoor pollution. SS-316 has 2% molybdenum added, providing complete corrosion immunity, rust resistance, and high tensile strength for 15+ years of outdoor exposure.',
    },
    {
      q: 'Can invisible grills be cut during fire emergencies?',
      a: 'Yes! Life-safety compliance is our top priority. In an emergency, our invisible grills can be severed in seconds using standard wire cable cutters by rescue personnel, ensuring both reliable child safety and swift fire evacuation.',
    },
    {
      q: 'Are invisible grills and safety nets safe for cats and climbing pets?',
      a: 'Absolutely. For pet parents, our invisible grills offer narrow 2-inch cable spacing that prevents cats and dogs from slipping or squeezing through. The clear nylon coating on SS-316 cables prevents paw irritation and withstands biting or claw scratching.',
    },
    {
      q: 'Do you provide an official written warranty card?',
      a: 'Yes, we provide an official 5-year written warranty card covering genuine SS-316 marine-grade cables, stainless steel turnbuckles, aluminum track anchors, and UV-stabilized nylon netting against rust, sagging, or manufacturer defects.',
    },
    {
      q: 'What materials are used for pigeon and bird safety nets?',
      a: 'We exclusively use 100% virgin copolymer nylon nets manufactured by Garware Technical Fibres. They are UV-stabilized, weather-proof, highly transparent from a distance, and prevent pigeons from perching without causing harm to birds.',
    },
    {
      q: 'Can invisible grills or pigeon nets be installed in rented apartments?',
      a: 'Yes! We use minimally invasive anchor tracks and ceiling anchor points that cause negligible structural alteration. If you relocate in the future, the systems can be cleanly dismantled and the small drill holes neatly filled with white cement/putty.',
    },
    {
      q: 'How are invisible grills and nets anchored into the balcony walls?',
      a: 'We use high-grade heavy-duty expansion anchor bolts drilled directly into the concrete beam and ceiling slabs, secured inside custom powder-coated aluminum tracks for a sleek, flush finish that withstands high wind loads.',
    },
    {
      q: 'Do the nets or invisible grills block sunlight or natural breeze?',
      a: 'Not at all! Invisible grills feature slim 2.5mm / 3.0mm clear-sheathed cables that offer 98% visual transparency, allowing unrestricted outdoor panoramas, full sunlight, and natural cross-ventilation.',
    },
    {
      q: 'How do I clean and maintain invisible grills and balcony nets?',
      a: 'Invisible grills require virtually zero maintenance. You can simply wipe the nylon-sheathed cables with a damp microfiber cloth or rinse them during routine balcony washing. Pigeon nets are self-draining and do not collect dust, moss, or rainwater.',
    },
    {
      q: 'What if I need to paint or renovate my balcony in the future?',
      a: 'If you are undertaking major exterior painting or civil renovation, our technical team can temporarily unhook the netting or cables and re-tension them once your painters finish, ensuring your installation remains in warranty.',
    },
    {
      q: 'What is your service coverage area across North India?',
      a: 'Our primary service hubs cover Chandigarh, Mohali, Panchkula, Zirakpur, Kharar, Dera Bassi, and New Chandigarh, with dedicated mobile technician teams available 7 days a week.',
    },
    {
      q: 'Can I request a custom mesh size or specific wire thickness?',
      a: 'Yes! During your free site inspection, our senior engineer carries full sample kits showing different cable thicknesses (2.0mm, 2.5mm, 3.0mm) and mesh dimensions (20mm, 30mm, 40mm, 50mm) customized for your exact apartment layout.',
    },
    {
      q: 'How quickly can you schedule an inspection after I contact you?',
      a: 'We offer same-day or next-day site visits across Chandigarh Tricity. Simply call or WhatsApp us at 9900020960, and a certified technician will visit your location at your preferred time slot.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg =
      `*Contact Form Inquiry – Harshitha Enterprises*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      (formData.email ? `📧 *Email:* ${formData.email}\n` : '') +
      `📍 *City:* ${formData.city}\n` +
      `🔧 *Service:* ${formData.service}\n` +
      (formData.message ? `📝 *Message:* ${formData.message}` : '')
    openWhatsApp(msg)
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-badge">Direct Support & Inquiries</div>
          <h1 className="page-hero-title">
            Contact Our{' '}
            <Typewriter
              text="Safety Experts"
              loop={false}
              typingSpeed={65}
            />
          </h1>
          <p className="page-hero-subtitle">
            Have questions about net materials, pricing, or want an expert to visit your apartment? Reach out directly.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* 1. Left Header / Intro (Row 1, Column 1) */}
            <div className="contact-info-header">
              <span className="section-pill">Fast Communication</span>
              <h2 className="contact-main-heading">We're Here to Help Keep Your Home Safe</h2>
              <p className="contact-main-subtext">
                Whether you need immediate pigeon relief or wish to child-proof your balcony with invisible grills, our customer engineers are available 7 days a week.
              </p>
            </div>

            {/* 2. Top-Right Trust Callout (Row 1, Column 2) */}
            <div className="contact-top-support-pill">
              <div className="support-guarantee-badge">
                <span className="support-badge-dot"></span>
                <span>Live Technician Support • 8 AM - 8 PM</span>
              </div>
            </div>

            {/* 3. Left Contact Cards (Row 2, Column 1 - starts at Phone Helpline) */}
            <div className="contact-cards-stack reveal-left">
              {/* Card 1: Phone Helpline */}
              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <FiPhoneCall style={{ color: '#074c3e' }} />
                </div>
                <div className="contact-card-info">
                  <strong>Phone Helpline</strong>
                  <a href="tel:9900020960" className="contact-primary-number">9900020960</a>
                </div>
              </div>

              {/* Card 2: WhatsApp Quick Chat */}
              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <BsWhatsapp style={{ color: '#16a34a' }} />
                </div>
                <div className="contact-card-info">
                  <strong>WhatsApp Quick Chat</strong>
                  <p>Instant estimates & photo measurement</p>
                  <a
                    href="https://wa.me/919900020960"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp-link"
                  >
                    Chat on WhatsApp (9900020960) →
                  </a>
                </div>
              </div>

              {/* Card 3: Email Support */}
              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <FiMail style={{ color: '#074c3e' }} />
                </div>
                <div className="contact-card-info">
                  <strong>Email Support</strong>
                  <a href="mailto:support@harshithaenterprises.com">support@harshithaenterprises.com</a>
                  <a href="mailto:sales@harshithaenterprises.com">sales@harshithaenterprises.com</a>
                </div>
              </div>

              {/* Card 4: Head Office & Warehouse */}
              <div className="contact-card-box">
                <div className="contact-card-icon">
                  <FiMapPin style={{ color: '#074c3e' }} />
                </div>
                <div className="contact-card-info">
                  <strong>Head Office & Warehouse</strong>
                  <p>SCO 142, Sector 34-A, Chandigarh, Punjab 160022</p>
                  <span className="area-coverage">Serving Chandigarh, Mohali, Panchkula & Zirakpur</span>
                </div>
              </div>
            </div>

            {/* 4. Right Form Column (Row 2, Column 2 - Aligned horizontally with Phone Helpline!) */}
            <div className="contact-form-column reveal-right">
              <div className="form-card-container">
                {!submitted ? (
                  <>
                    <div className="form-header-line">
                      <h3>Send a Direct Message</h3>
                    </div>
                    <p className="form-subtitle">Fill out the details below and an engineer will reply within 30 minutes.</p>

                    <form onSubmit={handleSubmit} className="contact-direct-form">
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="e.g. Vikram Sharma"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number *</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="vikram@example.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="city">City / Area *</label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            required
                            placeholder="e.g. Mohali Sector 70"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="service">Service Needed *</label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                          >
                            <option value="Invisible Grills">Invisible Balcony Grills</option>
                            <option value="Pigeon Nets">Pigeon & Bird Nets</option>
                            <option value="Children Nets">Children Safety Nets</option>
                            <option value="Sports Nets">Sports & Cricket Nets</option>
                            <option value="Duct Nets">Building Duct Area Nets</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Message / Questions (Optional)</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="3"
                          placeholder="Please mention balcony dimensions or specific requirements..."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>

                      <button type="submit" className="form-send-btn">
                        <span>Send Message</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="contact-success-state">
                    <div className="success-check-badge">
                      <BsCheckCircleFill size={40} style={{ color: '#059669' }} />
                    </div>
                    <h3>Message Received!</h3>
                    <p>
                      Thank you, <strong>{formData.name}</strong>. Our team has received your inquiry for <strong>{formData.service}</strong> in <strong>{formData.city}</strong>. We will contact you at <strong>{formData.phone}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      className="reset-contact-btn"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="contact-map-section">
        <div className="container">
          <div className="map-card-container">
            <div className="map-header-bar">
              <div className="map-header-info">
                <span className="map-pill">
                  <FiMapPin style={{ color: '#074c3e' }} /> Central Hub
                </span>
                <h3>Harshitha Enterprises Head Office & Workshop</h3>
                <p>SCO 142, Sector 34-A, Chandigarh, Punjab 160022 • Open Mon - Sun: 8:00 AM - 8:00 PM</p>
              </div>

              <a
                href="https://maps.google.com/?q=Sector+34A+Chandigarh"
                target="_blank"
                rel="noreferrer"
                className="map-directions-btn"
              >
                <span>Get Directions</span>
                <FiExternalLink size={15} />
              </a>
            </div>

            {/* Google Maps Iframe */}
            <div className="map-iframe-wrapper">
              <iframe
                title="Harshitha Enterprises Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13719.689617260533!2d76.76214534437257!3d30.72051838634563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed1b3f9c6d3d%3A0xe54c1bbd067677a2!2sSector%2034A%2C%20Sector%2034%2C%20Chandigarh%2C%20160022!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="map-footer-strip">
              <div className="service-radius-pill">
                <strong>Fast Dispatch Area:</strong>
                <span>Chandigarh • Mohali • Panchkula • Zirakpur • Kharar • New Chandigarh</span>
              </div>
              <div className="service-phone-callout">
                <span>Free On-Site Visit: </span>
                <a href="tel:9900020960">9900020960</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Accordion FAQ Section - Center 1 by 1 */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill">
              <FiHelpCircle style={{ marginRight: '6px' }} /> Clear Answers
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Everything you need to know about safety nets, invisible grills, installation procedures, and warranties.
            </p>
          </div>

          {/* Centered 1-by-1 Accordion Container */}
          <div className="faq-accordion-centered reveal-stagger">
            {faqs.map((faq, idx) => {
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
                      <span className="faq-number">{String(idx + 1).padStart(2, '0')}.</span>
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

          {/* Still have questions banner */}
          <div className="faq-support-callout">
            <div className="callout-text">
              <h4>Still have a question not listed here?</h4>
              <p>Our senior safety engineers are ready to answer your questions and arrange a free site inspection.</p>
            </div>
            <div className="callout-actions">
              <a href="tel:9900020960" className="callout-btn-primary">
                Call 9900020960
              </a>
              <a href="https://wa.me/919900020960" target="_blank" rel="noreferrer" className="callout-btn-whatsapp">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
