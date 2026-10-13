import {
  FiShield,
  FiTool,
  FiUsers,
  FiDollarSign,
  FiSliders,
  FiClock,
  FiLayout,
  FiHeadphones,
  FiStar,
  FiMapPin,
  FiCheckCircle,
} from 'react-icons/fi'
import AnimatedCounter from './AnimatedCounter'
import './HomeAboutStats.css'

export default function HomeAboutStats() {
  const stats = [
    { num: '15,000+', label: 'Completed Projects' },
    { num: '100%', label: 'Rust-Proof Materials' },
    { num: '13+', label: 'Years Experience' },
    { num: '24/7', label: 'Customer Support' },
  ]

  const trustPillars = [
    {
      icon: <FiShield style={{ color: '#074c3e' }} size={22} />,
      title: 'Premium Materials',
      desc: 'SS316 marine-grade wire rope and UV-resistant virgin nylon casings.',
    },
    {
      icon: <FiTool style={{ color: '#0284c7' }} size={22} />,
      title: 'Professional Setup',
      desc: 'Highly engineered structure installation for maximum structural rigidity.',
    },
    {
      icon: <FiUsers style={{ color: '#d97706' }} size={22} />,
      title: 'Experienced Team',
      desc: 'Trained technicians who understand exact height and structural safety standards.',
    },
    {
      icon: <FiDollarSign style={{ color: '#059669' }} size={22} />,
      title: 'Affordable Pricing',
      desc: 'Premium specifications at a direct, competitive factory-to-home price.',
    },
    {
      icon: <FiSliders style={{ color: '#7c3aed' }} size={22} />,
      title: 'Custom Solutions',
      desc: 'Tailored spacing and layouts for balconies, window grills, or cloth hangers.',
    },
    {
      icon: <FiClock style={{ color: '#ea580c' }} size={22} />,
      title: 'On-Time Project',
      desc: 'Swift and neat executions to meet agreed client timelines without delays.',
    },
    {
      icon: <FiLayout style={{ color: '#0891b2' }} size={22} />,
      title: 'Modern Designs',
      desc: 'Aesthetic structures that blend perfectly with contemporary architecture.',
    },
    {
      icon: <FiHeadphones style={{ color: '#16a34a' }} size={22} />,
      title: 'After Installation Support',
      desc: 'Dedicated support and maintenance guarantees post-installation.',
    },
    {
      icon: <FiStar style={{ color: '#eab308' }} size={22} />,
      title: 'Customer Satisfaction',
      desc: '5-star rating across major high-rise residential societies and villas.',
    },
    {
      icon: <FiMapPin style={{ color: '#dc2626' }} size={22} />,
      title: 'Tricity Wide Coverage',
      desc: 'Complete service footprint across Chandigarh, Mohali, Panchkula & Zirakpur.',
    },
  ]

  return (
    <section className="home-about-stats-section">
      <div className="container">
        {/* About Overview Block */}
        <div className="about-overview-card">
          <div className="about-overview-text reveal-left">
            <span className="section-pill">About Harshitha Enterprises</span>
            <h2 className="about-overview-title">
              Expert Safety and Drying Solutions
            </h2>
            <p className="about-overview-desc">
              Harshitha Enterprises is committed to making modern homes safer, smarter, and more elegant. We combine state-of-the-art materials like high-tensile SS316 marine-grade steel cables with engineered ceiling systems to provide maximum security for balconies, windows, and utility spaces without compromising on structural ventilation or scenic views.
            </p>
          </div>

          {/* 4 Stats Grid */}
          <div className="about-stats-grid reveal-right">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-counter-box">
                <span className="stat-number">
                  <AnimatedCounter value={s.num} />
                </span>
                <span className="stat-caption">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Unmatched Standard: 10 Trust Pillars */}
        <div className="unmatched-standard-block">
          <div className="section-header-center">
            <span className="section-pill">Unmatched Standard</span>
            <h2 className="section-title">Why Customers Trust Harshitha Enterprises</h2>
            <p className="section-desc">
              We focus on professional craftsmanship, high-grade components, and long-term structural durability.
            </p>
          </div>

          <div className="trust-pillars-10-grid reveal-stagger">
            {trustPillars.map((p, idx) => (
              <div key={idx} className="trust-pillar-card">
                <div className="pillar-icon-box">{p.icon}</div>
                <div className="pillar-content">
                  <h3 className="pillar-heading">{p.title}</h3>
                  <p className="pillar-para">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
