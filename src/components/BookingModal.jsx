import { useState, useEffect, useRef } from 'react'
import { openWhatsApp } from '../utils/whatsapp'
import './BookingModal.css'

function launchConfetti(canvas) {
  const ctx = canvas.getContext('2d')
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
  const pieces = Array.from({ length: 80 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height * 0.4 - canvas.height * 0.2,
    r: Math.random() * 7 + 4,
    d: Math.random() * 3 + 1,
    color: ['#074c3e','#10b981','#d6b66b','#6ee7b7','#f59e0b','#34d399'][Math.floor(Math.random() * 6)],
    tilt: Math.random() * 10 - 5,
    tiltSpeed: Math.random() * 0.1 + 0.05,
    opacity: 1,
  }))
  let frame
  let tick = 0
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tick++
    pieces.forEach((p) => {
      p.y += p.d
      p.tilt += p.tiltSpeed
      p.opacity -= 0.008
      ctx.save()
      ctx.globalAlpha = Math.max(0, p.opacity)
      ctx.fillStyle = p.color
      ctx.beginPath()
      ctx.ellipse(p.x + Math.sin(p.tilt) * 8, p.y, p.r, p.r * 0.5, p.tilt, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    })
    if (pieces.some((p) => p.opacity > 0)) {
      frame = requestAnimationFrame(draw)
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }
  frame = requestAnimationFrame(draw)
  return () => cancelAnimationFrame(frame)
}

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Invisible Grills',
    address: '',
    date: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    if (submitted && canvasRef.current) {
      const stop = launchConfetti(canvasRef.current)
      return stop
    }
  }, [submitted])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg =
      `*New Booking Request – Harshitha Enterprises*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🔧 *Service:* ${formData.service}\n` +
      `📍 *Location:* ${formData.address}\n` +
      (formData.date ? `📅 *Preferred Date:* ${formData.date}\n` : '') +
      (formData.notes ? `📝 *Notes:* ${formData.notes}` : '')
    openWhatsApp(msg)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      phone: '',
      service: 'Invisible Grills',
      address: '',
      date: '',
      notes: '',
    })
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <div className="modal-badge">13+ Years of Excellence</div>
              <h2 id="modal-title" className="modal-title">Book a Free Site Inspection</h2>
              <p className="modal-subtitle">
                Schedule an expert technician visit for measurement, material demonstration & instant quotation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
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
                  <label htmlFor="service">Required Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Invisible Grills">Invisible Balcony Grills</option>
                    <option value="Balcony Safety Nets">Balcony Safety Nets</option>
                    <option value="Pigeon Bird Nets">Pigeon & Bird Nets</option>
                    <option value="Children Safety Nets">Children Safety Nets</option>
                    <option value="Sports Cricket Nets">Sports & Cricket Nets</option>
                    <option value="Construction Nets">Construction Safety Nets</option>
                    <option value="Duct Area Nets">Duct Area Safety Nets</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="address">Installation City / Address *</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    placeholder="e.g. Chandigarh / Mohali / Panchkula"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="notes">Additional Requirements (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="2"
                  placeholder="Tell us about your balcony size, floor, or specific concerns..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="modal-submit-btn">
                <span>Confirm Free Site Booking</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>

              <div className="modal-guarantee">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Zero Obligation • 100% Free Measurement & Estimate</span>
              </div>
            </form>
          </>
        ) : (
          <div className="modal-success-state">
            <canvas ref={canvasRef} className="confetti-canvas" aria-hidden="true" />
            <div className="success-icon-wrapper">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3>Inspection Booked Successfully!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. Our safety installation expert will reach out to you shortly at <strong>{formData.phone}</strong> to confirm your site visit.
            </p>
            <div className="success-details-pill">
              <div><strong>Service:</strong> {formData.service}</div>
              <div><strong>Location:</strong> {formData.address}</div>
            </div>
            <button type="button" className="modal-done-btn" onClick={handleReset}>
              Close & Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
