import { useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FiPhoneCall } from 'react-icons/fi'
import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
  const [activeTooltip, setActiveTooltip] = useState(null)
  const phoneNumber = '9900020960'
  const waCountryCode = '91'
  const message = 'Hello Harshitha Enterprises, I would like to inquire about your balcony safety nets, invisible grills, and cloth hanger installation services.'
  const whatsappUrl = `https://wa.me/${waCountryCode}${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <aside className="quick-float-wrapper" aria-label="Quick contact floating actions">
      {/* 1. Floating Call Button */}
      <div 
        className="quick-float-item"
        onMouseEnter={() => setActiveTooltip('call')}
        onMouseLeave={() => setActiveTooltip(null)}
      >
        <div className={`quick-float-tooltip ${activeTooltip === 'call' ? 'visible' : ''}`} role="tooltip">
          <span className="tooltip-call-dot"></span>
          <span className="tooltip-text">Call: +91 {phoneNumber}</span>
        </div>

        <a
          href={`tel:${phoneNumber}`}
          className="quick-float-btn call-float-btn"
          aria-label={`Call Harshitha Enterprises at ${phoneNumber}`}
          id="call-floating-button"
        >
          <span className="call-pulse-ring"></span>
          <span className="call-pulse-ring delay"></span>
          <FiPhoneCall className="quick-float-icon call-icon" />
        </a>
      </div>

      {/* 2. Floating WhatsApp Button */}
      <div 
        className="quick-float-item"
        onMouseEnter={() => setActiveTooltip('whatsapp')}
        onMouseLeave={() => setActiveTooltip(null)}
      >
        <div className={`quick-float-tooltip ${activeTooltip === 'whatsapp' ? 'visible' : ''}`} role="tooltip">
          <span className="tooltip-online-dot"></span>
          <span className="tooltip-text">Chat on WhatsApp</span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="quick-float-btn whatsapp-float-btn"
          aria-label="Chat with Harshitha Enterprises on WhatsApp"
          id="whatsapp-floating-button"
        >
          <span className="whatsapp-pulse-ring"></span>
          <span className="whatsapp-pulse-ring delay"></span>
          <BsWhatsapp className="quick-float-icon wa-icon" />
        </a>
      </div>
    </aside>
  )
}
