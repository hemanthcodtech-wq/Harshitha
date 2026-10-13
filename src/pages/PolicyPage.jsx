import { useParams, Link, useLocation } from 'react-router-dom'
import {
  FiLock,
  FiFileText,
  FiCreditCard,
  FiTruck,
  FiShield,
  FiAlertTriangle,
  FiPhone,
} from 'react-icons/fi'
import { FaCookieBite, FaCircle } from 'react-icons/fa'
import { POLICIES } from '../data/policyData'
import Typewriter from '../components/Typewriter'
import './PolicyPage.css'

const POLICY_NAV = [
  { slug: 'privacy-policy', label: 'Privacy Policy', icon: <FiLock /> },
  { slug: 'terms-conditions', label: 'Terms & Conditions', icon: <FiFileText /> },
  { slug: 'cancellation-refund-policy', label: 'Cancellation & Refund', icon: <FiCreditCard /> },
  { slug: 'shipping-delivery-policy', label: 'Shipping & Delivery', icon: <FiTruck /> },
  { slug: 'warranty-policy', label: 'Warranty Policy', icon: <FiShield /> },
  { slug: 'disclaimer', label: 'Website Disclaimer', icon: <FiAlertTriangle /> },
  { slug: 'cookie-policy', label: 'Cookie Policy', icon: <FaCookieBite /> },
]

export default function PolicyPage({ defaultSlug }) {
  const params = useParams()
  const location = useLocation()

  // Determine current policy slug from path or prop
  let currentSlug = defaultSlug || params.slug
  if (!currentSlug) {
    const path = location.pathname.replace(/^\//, '')
    currentSlug = POLICIES[path] ? path : 'privacy-policy'
  }

  const policy = POLICIES[currentSlug] || POLICIES['privacy-policy']

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="policy-page">
      {/* Policy Hero Header */}
      <section className="policy-hero-section">
        <div className="container">
          <div className="policy-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Legal & Policies</span>
            <span>/</span>
            <span className="current-crumb">{policy.title}</span>
          </div>

          <div className="policy-hero-badge">
            Official Legal Document •{' '}
            <Typewriter
              text="Verified Customer Protection Standards"
              loop={false}
              typingSpeed={60}
            />
          </div>
          <h1 className="policy-hero-title">{policy.title}</h1>
          <p className="policy-hero-subtitle">{policy.subtitle}</p>

          <div className="policy-meta-bar">
            <span><strong>Company:</strong> {policy.company}</span>
            <span className="meta-sep">•</span>
            <span><strong>Location:</strong> {policy.location}</span>
            <span className="meta-sep">•</span>
            <span><strong>Contact:</strong> {policy.contact}</span>
            <span className="meta-sep">•</span>
            <span><strong>Effective:</strong> {policy.effectiveDate}</span>
          </div>
        </div>
      </section>

      {/* Main Legal Content & Sidebar */}
      <section className="policy-body-section">
        <div className="container">
          <div className="policy-layout-grid">
            {/* Sticky Navigation Sidebar */}
            <aside className="policy-sidebar reveal-left">
              <div className="policy-sidebar-card">
                <h3 className="sidebar-title">All Legal Documents</h3>
                <nav className="policy-nav-menu">
                  {POLICY_NAV.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/${item.slug}`}
                      className={`policy-nav-link ${currentSlug === item.slug ? 'active' : ''}`}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                      {currentSlug === item.slug && <span className="active-dot">●</span>}
                    </Link>
                  ))}
                </nav>

                <div className="sidebar-help-box">
                  <h4>Need Assistance?</h4>
                  <p>For inquiries regarding our terms, contracts, or consumer rights:</p>
                  <a href="tel:9900020960" className="sidebar-call-btn">
                    <FiPhone style={{ marginRight: '6px' }} /> 9900020960
                  </a>
                </div>
              </div>
            </aside>

            {/* Document Reader Area */}
            <main className="policy-document-card reveal-right">
              <div className="document-actions-bar">
                <span className="document-status-pill">Active & Enforceable</span>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="document-print-btn"
                  title="Print this document"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                  <span>Print Document</span>
                </button>
              </div>

              <div className="document-heading-box">
                <h2>{policy.title}</h2>
                <div className="document-submeta">
                  <strong>{policy.company}</strong> | Location: {policy.location} | Phone/WhatsApp: {policy.contact}
                </div>
              </div>

              <div className="document-sections-list reveal-stagger">
                {policy.sections.map((section, idx) => (
                  <article key={idx} className="document-section-item">
                    <h3 className="section-heading">
                      <span className="section-num">{section.num}.</span>
                      <span>{section.title}</span>
                    </h3>
                    <div className="section-paragraphs">
                      {section.content.map((p, pIdx) => {
                        if (p.startsWith('•')) {
                          return (
                            <div key={pIdx} className="bullet-point-line">
                              <span className="bullet-disc">
                                <FaCircle size={6} style={{ color: '#074c3e' }} />
                              </span>
                              <span>{p.replace(/^•\s*/, '')}</span>
                            </div>
                          )
                        }
                        return <p key={pIdx}>{p}</p>
                      })}
                    </div>
                  </article>
                ))}
              </div>

              {/* Document Signoff Footer */}
              <div className="document-signoff-box">
                <h4>Questions Regarding This Document?</h4>
                <p>
                  Please direct all formal inquiries to <strong>Harshitha Enterprises</strong> at{' '}
                  <a href="tel:9900020960">9900020960</a> or via email at{' '}
                  <a href="mailto:harshithaenterprises91@gmail.com">harshithaenterprises91@gmail.com</a>.
                </p>
                <div className="signoff-location">
                  Chandigarh, Punjab & Haryana, India
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}
