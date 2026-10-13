import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiClock, FiCheck, FiCalendar, FiArrowRight, FiPhoneCall } from 'react-icons/fi'
import { BsLightningChargeFill } from 'react-icons/bs'
import AnimatedCounter from './AnimatedCounter'
import logoImg from '../assets/logo.png'
import './AboutAndContact.css'

export default function AboutAndContact({ onOpenBooking }) {
  return (
    <>
      {/* About Us Summary Strip */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-content reveal-left">
              <div className="section-pill">About Harshitha Enterprises</div>
              <h2 className="about-heading">13+ Years of Safeguarding Homes and Commercial Spaces</h2>
              <p className="about-paragraph">
                Established in 2013, Harshitha Enterprises has evolved into the region's premier safety solutions provider. We specialize in high-precision Invisible Balcony Grills, Pigeon & Bird Netting, Children Protection Systems, and Industrial Safety Nets.
              </p>
              <div className="about-stats-row">
                <div className="stat-card">
                  <div className="stat-num"><AnimatedCounter value="15,000+" /></div>
                  <div className="stat-label">Homes Protected</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num"><AnimatedCounter value="13+" /></div>
                  <div className="stat-label">Years Operating</div>
                </div>
                <div className="stat-card">
                  <div className="stat-num"><AnimatedCounter value="100%" /></div>
                  <div className="stat-label">SS-316 Quality</div>
                </div>
              </div>
            </div>

            <div className="about-benefits-card reveal-right">
              <h3>Why Choose Harshitha Enterprises?</h3>
              <ul className="benefits-list">
                <li>
                  <div className="benefit-icon"><FiCheck style={{ color: '#074c3e' }} /></div>
                  <div>
                    <strong>ISO Certified Durability</strong>
                    <p>High tensile stainless steel cables and UV-treated copolymer nets.</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon"><FiCheck style={{ color: '#074c3e' }} /></div>
                  <div>
                    <strong>Trained & Insured Installers</strong>
                    <p>Safety-equipped certified personnel for high-rise installations.</p>
                  </div>
                </li>
                <li>
                  <div className="benefit-icon"><FiCheck style={{ color: '#074c3e' }} /></div>
                  <div>
                    <strong>Zero-Cost Site Measurement</strong>
                    <p>Transparent pricing with free on-site consultation and samples.</p>
                  </div>
                </li>
              </ul>
              <Link to="/book" className="about-cta-button" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                Schedule Free Site Inspection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-box">
            <div className="contact-text-area reveal-left">
              <div className="section-pill contact-pill">Get In Touch</div>
              <h2 className="contact-title">Ready to Make Your Home & Balcony Safe?</h2>
              <p className="contact-desc">
                Contact our expert team today for immediate quotations, site inspections, and customized safety recommendations.
              </p>

              <div className="contact-items-list">
                <div className="contact-item">
                  <div className="contact-icon"><FiMapPin style={{ color: '#074c3e' }} /></div>
                  <div>
                    <strong>Service Coverage:</strong>
                    <span>Chandigarh, Mohali, Panchkula, Zirakpur & Surrounding Areas</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><FiPhone style={{ color: '#074c3e' }} /></div>
                  <div>
                    <strong>Direct Helpline:</strong>
                    <span>9900020960</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><FiMail style={{ color: '#074c3e' }} /></div>
                  <div>
                    <strong>Email:</strong>
                    <span>support@harshithaenterprises.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon"><FiClock style={{ color: '#074c3e' }} /></div>
                  <div>
                    <strong>Working Hours:</strong>
                    <span>Mon - Sun: 8:00 AM - 8:00 PM (Emergency Assistance Available)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-quick-action-card reveal-right">
              <div className="instant-card-icon-box">
                <BsLightningChargeFill size={24} />
              </div>
              <h3>Instant Booking</h3>
              <p>Skip the wait and get connected with an engineer in under 15 minutes.</p>
              <Link to="/book" className="contact-quick-btn" style={{ textDecoration: 'none' }}>
                <FiCalendar size={16} />
                <span>Book Inspection Now</span>
                <FiArrowRight size={15} />
              </Link>
              <a
                href="tel:9900020960"
                className="contact-call-btn"
              >
                <FiPhoneCall size={16} />
                <span>Call 9900020960</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

