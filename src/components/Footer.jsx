import { Link } from 'react-router-dom'
import { FiPhoneCall, FiPhone, FiMail, FiMapPin, FiClock, FiShield, FiAward } from 'react-icons/fi'
import { FaCrown } from 'react-icons/fa'
import logoImg from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="global-site-footer">
      {/* Pre-Footer Action Banner */}
      <div className="footer-cta-ribbon">
        <div className="container footer-ribbon-content">
          <div className="ribbon-text">
            <span className="ribbon-pill">13+ Years of Trust</span>
            <h3>Need Expert Advice on Balcony Safety or Bird Control?</h3>
            <p>Our senior technicians provide free on-site inspections and transparent laser measurements across Chandigarh & Tricity.</p>
          </div>
          <div className="ribbon-actions">
            <a href="tel:9900020960" className="ribbon-call-btn">
              <FiPhoneCall size={18} />
              <span>Call: 9900020960</span>
            </a>
            <Link to="/book" className="ribbon-book-btn">
              Book Free Site Visit →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="footer-main-directory">
        <div className="container">
          <div className="footer-columns-grid reveal-stagger">
            {/* Column 1: Brand Info */}
            <div className="footer-col footer-col-brand">
              <Link to="/" className="footer-brand-logo-link">
                <img src={logoImg} alt="Harshitha Enterprises" className="footer-logo-img" />
                <div className="footer-brand-text">
                  <span className="footer-brand-name">Harshitha Enterprises</span>
                  <span className="footer-brand-tag">Complete Safety Solutions</span>
                </div>
              </Link>
              <p className="footer-brand-tagline">
                North India's premier safety solutions provider since 2013. Specializing in high-tensile SS-316 Invisible Balcony Grills, Garware Bird & Pigeon Nets, Children Fall Protection, Sports Enclosures & Industrial Shaft Netting.
              </p>
              <div className="footer-trust-pills">
                <span className="trust-pill">
                  <FaCrown style={{ color: '#d49b29', marginRight: '6px' }} /> 13+ Years of Excellence
                </span>
                <span className="trust-pill">
                  <FiShield style={{ color: '#6ee7b7', marginRight: '6px' }} /> Marine Grade SS-316
                </span>
                <span className="trust-pill">
                  <FiAward style={{ color: '#38bdf8', marginRight: '6px' }} /> 15,000+ Homes Protected
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">All Services</Link></li>
                <li><Link to="/projects">Recent Projects</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/book">Book Free Inspection</Link></li>
              </ul>
            </div>

            {/* Column 3: Net Solutions */}
            <div className="footer-col">
              <h4 className="footer-col-title">Safety Solutions</h4>
              <ul className="footer-nav-list">
                <li><Link to="/services/invisible-grills">Invisible Balcony Grills</Link></li>
                <li><Link to="/services/pigeon-nets">Pigeon & Bird Safety Nets</Link></li>
                <li><Link to="/services/safety-nets">Children & Pet Safety Nets</Link></li>
                <li><Link to="/services/cloth-hangers">Cloth Hangers & Smart Dryers</Link></li>
                <li><Link to="/services/sports-nets">Sports & Cricket Nets</Link></li>
                <li><Link to="/services/duct-nets">Building Duct Area Nets</Link></li>
                <li><Link to="/services">Construction Safety Nets</Link></li>
              </ul>
            </div>

            {/* Column 4: Legal & Policies */}
            <div className="footer-col">
              <h4 className="footer-col-title">Policies & Legal</h4>
              <ul className="footer-nav-list footer-policy-list">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                <li><Link to="/cancellation-refund-policy">Cancellation & Refund</Link></li>
                <li><Link to="/shipping-delivery-policy">Shipping & Delivery</Link></li>
                <li><Link to="/warranty-policy">Warranty Policy</Link></li>
                <li><Link to="/disclaimer">Website Disclaimer</Link></li>
                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Column 5: Direct Contact */}
            <div className="footer-col footer-col-contact">
              <h4 className="footer-col-title">Head Office & Contact</h4>
              <div className="footer-contact-details">
                <div className="footer-contact-item">
                  <span className="contact-icon"><FiMapPin style={{ color: '#6ee7b7' }} /></span>
                  <div>
                    <strong>Location:</strong>
                    <span>Chandigarh, India</span>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon"><FiPhone style={{ color: '#6ee7b7' }} /></span>
                  <div>
                    <strong>Phone / WhatsApp:</strong>
                    <a href="tel:9900020960" className="footer-phone-link">9900020960</a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon"><FiMail style={{ color: '#6ee7b7' }} /></span>
                  <div>
                    <strong>Email:</strong>
                    <a href="mailto:support@harshithaenterprises.com">support@harshithaenterprises.com</a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon"><FiClock style={{ color: '#6ee7b7' }} /></span>
                  <div>
                    <strong>Service Hours:</strong>
                    <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>HARSHITHA ENTERPRISES</strong>. All rights reserved. Chandigarh, India.
          </p>
          <div className="footer-legal-inline">
            <Link to="/privacy-policy">Privacy</Link>
            <span>•</span>
            <Link to="/terms-conditions">Terms</Link>
            <span>•</span>
            <Link to="/cancellation-refund-policy">Refunds</Link>
            <span>•</span>
            <Link to="/warranty-policy">Warranty</Link>
            <span>•</span>
            <Link to="/cookie-policy">Cookies</Link>
            <span>•</span>
            <Link to="/splash">Splash Screen</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
