import { Link } from 'react-router-dom'
import {
  FiShield,
  FiTarget,
  FiEye,
  FiCheckCircle,
  FiPhoneCall,
  FiAward,
  FiFlag,
  FiUsers,
  FiTrendingUp,
  FiCalendar,
  FiArrowRight
} from 'react-icons/fi'
import { BsGem, BsCheckCircleFill } from 'react-icons/bs'
import { FaHardHat, FaHandshake, FaTools, FaCheckDouble, FaBuilding } from 'react-icons/fa'
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

  // Enhanced 13-Year Journey Milestones
  const milestones = [
    {
      year: '2013',
      phase: 'Inception',
      title: 'Founded With a Vision',
      subtitle: 'The Safety Pioneer in Chandigarh',
      desc: 'Launched in Chandigarh with a passionate rigging crew committed to eliminating high-rise balcony hazards and bird infestations without compromising building aesthetics or harming wildlife.',
      badge: 'First Dedicated Crew',
      metric: 'Chandigarh Tricity Launch',
      icon: <FiFlag size={18} />,
      accentColor: '#074c3e',
      highlights: ['Safety-first protocol', 'High-altitude rigger training', 'Zero bird-harm deterrence']
    },
    {
      year: '2015',
      phase: 'Innovation',
      title: 'Engineered Bird Net Systems',
      subtitle: 'UV-Stabilized High-Density Copolymer',
      desc: 'Introduced high-grade, UV-treated Garware polymer nets. These high-tensile, translucent barriers preserve sunlight, natural breezes, and panoramic views while creating an impenetrable, long-lasting pigeon deterrent.',
      badge: '2,500+ Homes Secured',
      metric: 'UV-Stabilized Durability',
      icon: <FiShield size={18} />,
      accentColor: '#0d7862',
      highlights: ['Translucent optical clarity', 'Weather & monsoon endurance', 'Zero sag structural stability']
    },
    {
      year: '2017',
      phase: 'Breakthrough',
      title: 'Pioneered SS-316 Invisible Grills',
      subtitle: 'Modern High-Rise Balcony Safety',
      desc: 'Brought authentic Marine-Grade SS-316 invisible grills to luxury apartments across Chandigarh, Mohali, and Panchkula. Featuring 2.5mm–3mm nylon-sheathed high-tensile steel cables tested to withstand 400kg+ impact loads.',
      badge: '400kg+ Impact Certified',
      metric: 'Marine Grade SS-316',
      icon: <BsGem size={18} />,
      accentColor: '#0284c7',
      highlights: ['Unobstructed skyline views', 'Emergency egress cut capability', 'Corrosion-proof lifetime']
    },
    {
      year: '2019',
      phase: 'Expansion',
      title: 'Industrial Ducts & Sports Box Netting',
      subtitle: 'Commercial Towers, IT Parks & Sports Arenas',
      desc: 'Scaled operations into commercial duct shaft bird-proofing for hospitals, corporate parks, and residential societies, alongside heavy-duty box cricket and sports perimeter nets for sports clubs and academies.',
      badge: '150+ Commercial Ducts',
      metric: 'Institutional Scale',
      icon: <FaBuilding size={18} />,
      accentColor: '#d97706',
      highlights: ['High-rise industrial rigging', 'Custom turf perimeter nets', 'Anti-debris safety netting']
    },
    {
      year: '2021',
      phase: 'Scale & Utility',
      title: '10,000+ Families & Smart Laundry Space',
      subtitle: 'Comprehensive High-Rise Space Optimization',
      desc: 'Crossed the 10,000 homes barrier with zero safety incidents. Expanded into smart ceiling clothes drying hangers (pulley systems & remote motorized hangers) to maximize compact modern balcony utility space.',
      badge: '10,000+ Homes Landmark',
      metric: 'Zero Safety Incidents',
      icon: <FiUsers size={18} />,
      accentColor: '#7c3aed',
      highlights: ['Pulley & motorized hangers', 'Space-saving ceiling designs', 'Precision anchor mounting']
    },
    {
      year: 'Present',
      phase: 'Market Leader',
      title: '13+ Years of Leadership & Excellence',
      subtitle: 'Tricity’s #1 Most Recommended Safety Team',
      desc: 'Today, Harshitha Enterprises protects over 15,000+ residences and commercial complexes across Chandigarh Tricity and neighboring regions. Backed by authentic SS-316 certification, 5 to 15 year written warranties (5 years for safety nets & 15 years for grills), and top customer ratings.',
      badge: '15,000+ Protected Homes',
      metric: '100% Quality & 0 Failures',
      icon: <FiAward size={18} />,
      accentColor: '#074c3e',
      isCurrent: true,
      highlights: ['15,000+ satisfied clients', '5 to 15 Year written warranty', 'Free on-site inspection']
    },
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
              text="Securing Spaces"
              loop={false}
              typingSpeed={65}
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
                  <h3><AnimatedCounter value="Up to 15 Yrs" /></h3>
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

      {/* 7. Timeline Milestones - Enhanced Journey Section */}
      <section className="timeline-section" id="journey">
        <div className="container">
          <div className="section-header-center">
            <span className="section-pill">
              <FiCalendar style={{ marginRight: '6px' }} /> Our Journey Since 2013
            </span>
            <h2 className="section-title">13 Years of Engineering, Growth & Trust</h2>
            <p className="section-desc">
              From our humble beginnings in Chandigarh with a single rigger van to safeguarding over 15,000+ homes across North India — explore how we built the region’s premier architectural safety enterprise.
            </p>
          </div>

          {/* Quick Journey Highlights Strip */}
          <div className="journey-summary-strip reveal-stagger">
            <div className="journey-stat-card">
              <span className="journey-stat-num">2013</span>
              <span className="journey-stat-label">Inception in Chandigarh</span>
            </div>
            <div className="journey-stat-card">
              <span className="journey-stat-num">15,000+</span>
              <span className="journey-stat-label">Homes Protected</span>
            </div>
            <div className="journey-stat-card">
              <span className="journey-stat-num">400kg+</span>
              <span className="journey-stat-label">Tensile Load Tested</span>
            </div>
            <div className="journey-stat-card highlight">
              <span className="journey-stat-num">0 Failures</span>
              <span className="journey-stat-label">100% Safety Record</span>
            </div>
          </div>

          {/* Timeline Interactive Roadmap */}
          <div className="timeline-container reveal-stagger">
            <div className="timeline-center-line">
              <div className="timeline-line-glow"></div>
            </div>

            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={idx}
                  className={`timeline-row ${isEven ? 'year-left' : 'year-right'} ${m.isCurrent ? 'highlight' : ''}`}
                >
                  {/* Left Column (Desktop) */}
                  <div className="timeline-side timeline-year-side">
                    <div className="timeline-badge-group">
                      <span className="timeline-phase-pill">{m.phase}</span>
                      <div className="timeline-year-badge">
                        <span>{m.year}</span>
                        {m.isCurrent && <span className="timeline-current-pulse" />}
                      </div>
                      <span className="timeline-year-subtitle">{m.metric}</span>
                    </div>
                  </div>

                  {/* Center Node Indicator with Icon */}
                  <div className="timeline-center-dot">
                    <div className="dot-icon-inner">{m.icon}</div>
                    <div className="dot-ripple-ring"></div>
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className="timeline-side timeline-content-side">
                    <div className="timeline-content-card">
                      <div className="timeline-card-header">
                        <div className="timeline-card-title-wrap">
                          <span className="timeline-mobile-phase">{m.phase} • {m.year}</span>
                          <h3 className="timeline-card-title">{m.title}</h3>
                          <span className="timeline-card-subtitle">{m.subtitle}</span>
                        </div>
                        <div className="timeline-card-icon-bubble" style={{ color: m.accentColor }}>
                          {m.icon}
                        </div>
                      </div>

                      <p className="timeline-card-desc">{m.desc}</p>

                      {/* Highlights Pill List */}
                      {m.highlights && m.highlights.length > 0 && (
                        <div className="timeline-highlights-list">
                          {m.highlights.map((h, hIdx) => (
                            <span key={hIdx} className="timeline-highlight-chip">
                              <FiCheckCircle className="chip-check-icon" /> {h}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bottom Milestone Footer Ribbon */}
                      <div className="timeline-card-footer">
                        <span className="timeline-achievement-badge">
                          <BsGem className="achievement-icon" /> {m.badge}
                        </span>
                        {m.isCurrent && (
                          <span className="timeline-live-status">
                            <span className="live-status-dot"></span> Active Standard
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Journey Callout Card */}
          <div className="journey-bottom-card reveal-up">
            <div className="journey-bottom-content">
              <div className="journey-bottom-badge">
                <FiAward size={18} /> 13 Years of Proven Safety
              </div>
              <h3>Looking for Expert Installation for Your Home or Complex?</h3>
              <p>Experience the precision, marine-grade materials, and trained riggers that 15,000+ homeowners trust.</p>
            </div>
            <div className="journey-bottom-actions">
              <button
                type="button"
                className="journey-cta-btn"
                onClick={() => onOpenBooking ? onOpenBooking() : null}
              >
                Schedule Free Site Inspection <FiArrowRight style={{ marginLeft: '6px' }} />
              </button>
            </div>
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
