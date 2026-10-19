import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { FiLock } from 'react-icons/fi'
import { BsCheckCircleFill } from 'react-icons/bs'
import { FaCrown } from 'react-icons/fa'
import Typewriter from '../components/Typewriter'
import { openWhatsApp } from '../utils/whatsapp'
import './BookPage.css'

export default function BookPage() {
  const [searchParams] = useSearchParams()
  const initialService = searchParams.get('service') || 'Invisible Balcony Grills'

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'High-Rise Apartment',
    service: initialService,
    address: '',
    city: 'Chandigarh',
    date: '',
    timeSlot: 'Morning (9 AM - 1 PM)',
    notes: '',
  })

  useEffect(() => {
    const s = searchParams.get('service')
    if (s) {
      setFormData((prev) => ({ ...prev, service: s }))
    }
  }, [searchParams])

  const [submitted, setSubmitted] = useState(false)

  const servicesList = [
    'Invisible Balcony Grills',
    'Pigeon & Bird Safety Nets',
    'Children & Pet Safety Nets',
    'Sports & Cricket Practice Nets',
    'Building Duct Area Nets',
    'Construction Safety Nets',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg =
      `*Site Inspection Booking – Harshitha Enterprises*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      (formData.email ? `📧 *Email:* ${formData.email}\n` : '') +
      `🔧 *Service:* ${formData.service}\n` +
      `🏠 *Property Type:* ${formData.propertyType}\n` +
      `📍 *Address:* ${formData.address}, ${formData.city}\n` +
      `📅 *Preferred Date:* ${formData.date}\n` +
      `⏰ *Time Slot:* ${formData.timeSlot}\n` +
      (formData.notes ? `📝 *Notes:* ${formData.notes}` : '')
    openWhatsApp(msg)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      propertyType: 'High-Rise Apartment',
      service: 'Invisible Balcony Grills',
      address: '',
      city: 'Chandigarh',
      date: '',
      timeSlot: 'Morning (9 AM - 1 PM)',
      notes: '',
    })
  }

  return (
    <div className="book-page">
      {/* Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-badge">Free On-Site Service Booking</div>
          <h1 className="page-hero-title">
            Book a Free{' '}
            <Typewriter
              text="Site Inspection"
              loop={false}
              typingSpeed={65}
            />
          </h1>
          <p className="page-hero-subtitle">
            Schedule an expert visit for precise laser measurements, physical SS-316 & Garware sample check, and instant transparent estimates.
          </p>
        </div>
      </section>

      {/* Main Booking Container */}
      <section className="booking-form-section">
        <div className="container">
          <div className="booking-layout-grid">
            {/* Left: Interactive Form */}
            <div className="booking-form-box reveal-left">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="site-booking-form">
                  <div className="form-section-header">
                    <h3>1. Select Your Safety Solution</h3>
                    <p>Choose the net or grill system required for your property.</p>
                  </div>

                  <div className="service-choice-pills">
                    {servicesList.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        className={`service-choice-btn ${formData.service === svc ? 'selected' : ''}`}
                        onClick={() => setFormData((p) => ({ ...p, service: svc }))}
                      >
                        <span className="check-bullet">{formData.service === svc ? '●' : '○'}</span>
                        <span>{svc}</span>
                      </button>
                    ))}
                  </div>

                  <div className="form-section-header" style={{ marginTop: '32px' }}>
                    <h3>2. Property & Site Details</h3>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="propertyType">Property Type *</label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                      >
                        <option value="High-Rise Apartment">High-Rise Apartment Balcony</option>
                        <option value="Independent Villa / Kothi">Independent Villa / Kothi</option>
                        <option value="Society Terrace / Rooftop">Society Terrace / Rooftop</option>
                        <option value="Commercial / Hospital / School">Commercial Building / School</option>
                        <option value="Sports Arena">Sports Ground / Club</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="city">City / Region *</label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      >
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Mohali">Mohali</option>
                        <option value="Panchkula">Panchkula</option>
                        <option value="Zirakpur">Zirakpur</option>
                        <option value="Kharar">Kharar</option>
                        <option value="New Chandigarh">New Chandigarh</option>
                        <option value="Other">Other Surrounding Areas</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Apartment / Society Full Address *</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      placeholder="e.g. Flat 604, Tower B, ATS Casa Espana, Sector 121"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Preferred Inspection Date *</label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="timeSlot">Preferred Time Slot *</label>
                      <select
                        id="timeSlot"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                      >
                        <option value="Morning (9 AM - 1 PM)">Morning (9 AM - 1 PM)</option>
                        <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-section-header" style={{ marginTop: '32px' }}>
                    <h3>3. Contact Information</h3>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Sunita Verma"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Mobile Number (WhatsApp Enabled) *</label>
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
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Notes / Special Instructions (Optional)</label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows="2"
                      placeholder="Any specific height concerns, pets at home, or request for specific wire thickness..."
                      value={formData.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="booking-submit-btn">
                    <span>Confirm Free Site Inspection Booking</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>

                  <div className="booking-trust-note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <FiLock style={{ color: '#074c3e' }} />
                    <span>Zero Payment Required • Free Inspection & Instant Written Quote</span>
                  </div>
                </form>
              ) : (
                <div className="booking-confirmed-card">
                  <div className="confirmation-icon"><BsCheckCircleFill style={{ color: '#059669', fontSize: '48px' }} /></div>
                  <h2>Inspection Successfully Booked!</h2>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Your site visit request for <strong>{formData.service}</strong> at <strong>{formData.address}, {formData.city}</strong> has been logged.
                  </p>
                  <div className="booking-summary-pill">
                    <div className="summary-row">
                      <span>Service:</span>
                      <strong>{formData.service}</strong>
                    </div>
                    <div className="summary-row">
                      <span>Preferred Slot:</span>
                      <strong>{formData.date || 'Earliest available'} ({formData.timeSlot})</strong>
                    </div>
                    <div className="summary-row">
                      <span>Contact:</span>
                      <strong>{formData.phone}</strong>
                    </div>
                  </div>
                  <p className="sms-note">
                    Our lead field technician will call you 30 minutes prior to arrival.
                  </p>
                  <div className="confirmation-actions">
                    <button type="button" className="new-booking-btn" onClick={handleReset}>
                      Book Another Site
                    </button>
                    <Link to="/" className="home-return-btn">
                      Back to Home Page
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Guarantee & Benefits Sidebar */}
            <div className="booking-sidebar reveal-right">
              <div className="sidebar-card">
                <h3>What Happens Next?</h3>
                <ol className="next-steps-list reveal-stagger">
                  <li>
                    <div className="step-num">1</div>
                    <div>
                      <strong>Free Site Visit</strong>
                      <p>Technician arrives on your selected time slot equipped with laser tools.</p>
                    </div>
                  </li>
                  <li>
                    <div className="step-num">2</div>
                    <div>
                      <strong>Physical Samples Demonstration</strong>
                      <p>Inspect our genuine SS-316 invisible cables and Garware nylon netting in person.</p>
                    </div>
                  </li>
                  <li>
                    <div className="step-num">3</div>
                    <div>
                      <strong>Transparent Written Estimate</strong>
                      <p>Exact measurement-based quote with zero hidden charges or surprises.</p>
                    </div>
                  </li>
                  <li>
                    <div className="step-num">4</div>
                    <div>
                      <strong>Same-Day / Next-Day Installation</strong>
                      <p>Upon your approval, our rigging team completes the job within 2-4 hours.</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="sidebar-card trust-sidebar-box">
                <div className="trust-crown"><FaCrown style={{ color: '#f59e0b', fontSize: '36px' }} /></div>
                <h4>13+ Years of Safety Trust</h4>
                <p>
                  Over 15,000 satisfied installations across Chandigarh, Mohali & Panchkula with 100% safety record.
                </p>
                <div className="trust-highlights">
                  <span>✓ 5+ Years Warranty</span>
                  <span>✓ Marine Grade SS-316</span>
                  <span>✓ Insured Riggers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
