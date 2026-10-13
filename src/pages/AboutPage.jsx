import { Link } from 'react-router-dom'
import { FiShield, FiTarget, FiEye, FiCheckCircle, FiPhoneCall, FiAward } from 'react-icons/fi'
import { BsGem } from 'react-icons/bs'
import { FaHardHat, FaHandshake, FaTools, FaCheckDouble } from 'react-icons/fa'
import AnimatedCounter from '../components/AnimatedCounter'
import Typewriter from '../components/Typewriter'
import bannerImg from '../assets/banner.jpg'
import './AboutPage.css'

export default function AboutPage({ onOpenBooking }) {
  // 4 Trust Pillars matching the uploaded screenshot
  const trustPillars = [
    {
      icon: <FiShield style={{ color: '#074c3e' }} size={28} />,
      title: 'Uncompromising Safety',
      desc: 'All nets and cable systems are tested for tensile loads exceeding 250kg - 400kg.',
    },
    {
      icon: <BsGem style={{ color: '#0284c7' }} size={28} />,
      title: 'Marine Grade SS-316',
      desc: 'Rust-proof, weather-resistant materials designed to withstand extreme heat and monsoons.',
    },
    {
      icon: <FaHardHat style={{ color: '#d97706' }} size={28} />,
      title: 'Certified Riggers',
      desc: 'Our installers undergo rigorous height-safety training and carry full equipment insurance.',
    },
    {
      icon: <FaHandshake style={{ color: '#059669' }} size={28} />,
      title: '100% Free Consultation',
      desc: 'Free on-site measurements, sample demonstration, and straightforward written quotes.',
    },
  ]

  // Our Values
  const coreValues = [
    {
      icon: <FaTools size={26} style={{ color: '#074c3e' }} />,
      title: 'Professional Installation',
      desc: 'We never cut corners. Our technicians are certified to handle heavy-duty anchor drilling in concrete walls. Cables are tensioned using calibrated industrial tools to ensure safety parameters are exactly met.',
    },
    {
      icon: <BsGem size={26} style={{ color: '#0284c7' }} />,
      title: 'Premium Materials',
      desc: 'We strictly utilize authentic marine-grade SS316 stainless steel for invisible safety cables and rust-resistant SS304 for clothes drying pipes. Our fittings are corrosion-proof, ensuring a long structural lifecycle.',
    },
    {
      icon: <FaCheckDouble size={26} style={{ color: '#059669' }} />,
      title: 'Customer Satisfaction',
      desc: 'Our relationship does not end after drilling. We provide detailed walkthroughs on how to operate pulley rods and smart motorized hangers, and back our installations with active maintenance support.',
    },
  ]

  const milestones = [
    { year: '2013', title: 'Founded with a Vision', desc: 'Started in Chandigarh with a core mission to eliminate balcony accidents and pigeon infestations.' },
    { year: '2016', title: 'Pioneered Invisible Grills', desc: 'Introduced 316-grade high-tensile stainless steel invisible grills for luxury apartments.' },
    { year: '2020', title: '10,000+ Homes Milestone', desc: 'Expanded our operations across residential hubs with certified high-rise rigging teams.' },
    { year: 'Today', title: '13+ Years of Leadership', desc: 'Over 15,000+ satisfied residential & commercial installations with zero safety failures.' },
  ]

  return (
    <div className="about-page">
      {/* 1. Page Hero Banner */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-badge">Since 2013 • 13+ Years of Trust</div>
          <h1 className="page-hero-title">
            Protecting Families,{' '}
            <Typewriter
              words={['Securing Spaces', 'Preventing Hazards', '13+ Years of Trust', 'Pioneering Safety']}
              typingSpeed={70}
              deletingSpeed={40}
              pauseDuration={2200}
            />
          </h1>
          <p className="page-hero-subtitle">
            Harshitha Enterprises is North India's trusted pioneer in Invisible Balcony Grills, Bird Nets, and Architectural Safety Solutions.
          </p>
        </div>
      </section>

      {/* 2. 4 Trust Cards Grid (matching uploaded screenshot) */}
      <section className="trust-strip-section">
        <div className="container">
          <div className="trust-strip-grid reveal-stagger">
            {trustPillars.map((item, idx) => (
              <div key={idx} className="trust-strip-card">
                <div className="trust-card-icon-box">{item.icon}</div>
                <div className="trust-card-info">
                  <h3 className="trust-card-title">{item.title}</h3>
                  <p className="trust-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            {/* Mission Card */}
            <div className="mv-card mission-card reveal-left">
              <div className="mv-card-header">
                <div className="mv-icon-badge">
                  <FiTarget size={26} />
                </div>
                <span className="mv-pill">Core Purpose</span>
              </div>
              <h2 className="mv-title">Our Mission</h2>
              <p className="mv-desc">
                To provide homes in Hyderabad, Chandigarh Tricity, and across modern residential hubs with the absolute highest standards of balcony safety and utility space optimization. We aim to protect lives, prevent hazards, and offer clutter-free laundry solutions using state-of-the-art rust-proof technology that integrates seamlessly with modern architectural designs.
              </p>
            </div>

            {/* Vision Card */}
            <div className="mv-card vision-card reveal-right">
              <div className="mv-card-header">
                <div className="mv-icon-badge">
                  <FiEye size={26} />
                </div>
                <span className="mv-pill">Future Horizon</span>
              </div>
              <h2 className="mv-title">Our Vision</h2>
              <p className="mv-desc">
                To be recognized as the gold standard for home safety and smart utility installations across India. We strive to lead the market through continuous engineering innovation, professional crew standards, and an uncompromising commitment to customer satisfaction and premium aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Heritage & Story Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content reveal-left">
              <span className="section-pill">Our Heritage</span>
              <h2>Building a Safer Tomorrow for Every High-Rise Home</h2>
              <p>
                Founded in 2013, <strong>Harshitha Enterprises</strong> began with a clear purpose: ensuring that no homeowner has to compromise their panoramic balcony views for the sake of family safety.
              </p>
              <p>
                From modern high-rise apartments in Chandigarh, Mohali, and Panchkula to large-scale sports grounds and commercial complexes, we have engineered safety solutions that blend seamlessly into contemporary architecture.
              </p>
              <div className="story-stats-grid">
                <div className="story-stat-box">
                  <h3><AnimatedCounter value="15,000+" /></h3>
                  <p>Homes Protected</p>
                </div>
                <div className="story-stat-box">
                  <h3><AnimatedCounter value="13+" /></h3>
                  <p>Years Experience</p>
                </div>
                <div className="story-stat-box">
                  <h3><AnimatedCounter value="5 Years" /></h3>
                  <p>Written Warranty</p>
                </div>
                <div className="story-stat-box">
                  <h3><AnimatedCounter value="100%" /></h3>
                  <p>SS-316 Quality</p>
                </div>
              </div>
            </div>

            <div className="story-image-card reveal-right">
              <img src={bannerImg} alt="Harshitha Enterprises Project" />
              <div className="story-image-badge">
                <strong>Certified SS-316 Grade</strong>
                <span>Installed with millimeter precision</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Values • Why Customers Trust Us */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill">Our Values</span>
            <h2 className="section-title">Why Customers Trust Us</h2>
            <p className="section-desc">
              We follow strong core standards in every installation project we execute.
            </p>
          </div>

          <div className="values-cards-grid reveal-stagger">
            {coreValues.map((val, idx) => (
              <div key={idx} className="value-item-card">
                <div className="value-icon-circle">{val.icon}</div>
                <h3 className="value-card-title">{val.title}</h3>
                <p className="value-card-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Uncompromising Guarantee • Our Quality Commitment */}
      <section className="quality-commitment-section">
        <div className="container">
          <div className="commitment-card">
            <div className="commitment-header">
              <span className="commitment-pill">
                <FiAward size={14} style={{ marginRight: '6px' }} /> Uncompromising Guarantee
              </span>
              <h2 className="commitment-title">Our Quality Commitment</h2>
            </div>

            <blockquote className="commitment-quote">
              "At Harshitha Enterprises, quality is our promise. We pledge to only use genuine SS316 marine-grade steel cables, rust-free fasteners, and premium-grade structural tracks. We guarantee that your safety grills will withstand heavy wind pressure, temperature swings, and monsoon rain without structural sag or oxidation."
            </blockquote>

            <div className="commitment-author">
              <div className="author-dot"></div>
              <span>— The Harshitha Enterprises Engineering Team</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Timeline Milestones */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill">Our Journey</span>
            <h2 className="section-title">13 Years of Growth & Innovation</h2>
          </div>

          <div className="timeline-grid reveal-stagger">
            {milestones.map((m, idx) => (
              <div key={idx} className="timeline-card">
                <div className="timeline-year">{m.year}</div>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-card">
            <h2>Ready to Secure Your Home With Experts?</h2>
            <p>Get a free on-site measurement and transparent estimate from our senior technician today.</p>
            <div className="page-cta-buttons">
              <button
                type="button"
                className="cta-primary-btn"
                onClick={() => onOpenBooking ? onOpenBooking() : null}
              >
                Book Free Site Inspection →
              </button>
              <a href="tel:9900020960" className="cta-secondary-btn">
                <FiPhoneCall size={16} style={{ marginRight: '6px' }} /> Call 9900020960
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
