import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiArrowRight, FiClock, FiShield } from 'react-icons/fi'
import bannerImg from '../assets/banner.jpg'
import pigeonImg from '../assets/pigeon_net.jpg'
import sportsImg from '../assets/sports_net.jpg'
import childImg from '../assets/child_safety_after.jpg'
import ductImg from '../assets/duct_after.jpg'
import g2_3 from '../2/image.png'
import g2_4 from '../2/WhatsApp Image 2026-10-13 at 11.16.36 AM.jpeg'
import './HomeWhatWeDo.css'

export default function HomeWhatWeDo({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all')

  const allServices = [
    {
      id: 'invisible-grills',
      filterCategory: 'residential',
      category: 'Balcony & Windows',
      title: 'Invisible Safety Grills',
      desc: 'Modern safety systems constructed using high-tensile SS316 marine-grade stainless steel cables coated with UV-resistant nylon. Designed to provide maximum fall protection for kids and pets while maintaining an open, elegant, and unobstructed view of the outdoors.',
      image: bannerImg,
      time: 'Installed in 2-4 Hours',
      link: '/services/invisible-grills',
      features: [
        'SS316 Marine Grade Steel',
        '2mm to 3mm Cable Width',
        'Rust & Corrosion Resistant',
        'UV-Resistant Nylon Coat',
        'Child & Pet Safety',
        'Zero View Blockage',
      ],
    },
    // {
    //   id: 'cloth-hangers',
    //   filterCategory: 'residential',
    //   category: 'Utility & Balcony',
    //   title: 'Stainless Steel Cloth Hangers & Smart Dryers',
    //   desc: 'Premium stainless steel ceiling and wall-mounted cloth drying systems designed specifically for modern high-rise apartments. These durable space-saving mechanisms raise clothes to the ceiling level to utilize natural warm air, keeping utility space completely clutter-free.',
    //   image: g2_3,
    //   time: 'Installed in 1-2 Hours',
    //   link: '/services/cloth-hangers',
    //   features: [
    //     'SS304 Rust-Free Pipes',
    //     'Individual Rod Pulley Control',
    //     'Heavy Load Capacity (35kg+)',
    //     'Height-Adjustable Pulls',
    //     'Indoor / Outdoor Setup',
    //     'Foldable & Motorized Models',
    //   ],
    // },
    {
      id: 'safety-nets',
      filterCategory: 'residential',
      category: 'Child & Pet Protection',
      title: 'Balcony Fall-Arrest Safety Nets',
      desc: 'Engineered fall-arrest balcony safety nets create an impenetrable boundary for high-rise apartments. Woven from 100% virgin copolymer nylon, these nets safeguard toddlers and pets from accidental falls without darkening your indoor rooms.',
      image: childImg,
      time: 'Installed in 1-2 Hours',
      link: '/services/safety-nets',
      features: [
        '100% Virgin Garware Nylon',
        'Withstands 250kg+ Drop Load',
        'UV Heat Stabilized (5+ Years)',
        'Soft-Touch Non-Abrasive',
        'Zero Cage Feeling (92% Light)',
        'Stainless Steel Eye-Bolts',
      ],
    },
    {
      id: 'pigeon-nets',
      filterCategory: 'hygiene',
      category: 'Hygienic Bird Exclusion',
      title: 'Pigeon & Bird Safety Nets',
      desc: 'Permanent humane exclusion netting stopping pigeons, crows, and sparrows from nesting and roosting across balconies, AC ledges, and windows, protecting your home from acidic droppings, asthma risks, and bird parasites.',
      image: pigeonImg,
      time: 'Installed in 1-2 Hours',
      link: '/services/pigeon-nets',
      features: [
        '100% Bird Proofing Guarantee',
        'Translucent Sky-Blend Mesh',
        'AC Compressor Protection',
        '100% Humane Non-Injury Mesh',
        'Rot & Moisture Resistant',
        'SS Border Wire Rigging',
      ],
    },
    {
      id: 'duct-nets',
      filterCategory: 'hygiene',
      category: 'Plumbing Shaft Hygiene',
      title: 'Building Duct Area & Plumbing Shaft Nets',
      desc: 'Wall-to-wall vertical duct shaft coverage sealing open multi-story plumbing voids from roof to ground floor. Permanently stops hundreds of pigeons from nesting and dying inside inaccessible shafts, safeguarding apartment society health.',
      image: ductImg,
      time: 'Same-Day Society Setup',
      link: '/services/duct-nets',
      features: [
        'Full Vertical Shaft Seal',
        'Certified Rope Access Rigging',
        'Eliminates Foul Rot Odors',
        'Preserves Plumbing Ventilation',
        'High-Tensile Wire Core Border',
        '5 Years Society Warranty',
      ],
    },
    {
      id: 'sports-nets',
      filterCategory: 'commercial',
      category: 'Athletic & Practice Arenas',
      title: 'Sports & Cricket Practice Net Enclosures',
      desc: 'Engineered heavy-impact sports containment netting designed for residential societies, schools, academies, and commercial box cricket turfs. Absorbs high-velocity leather cricket ball impacts up to 150 km/h without tearing.',
      image: sportsImg,
      time: 'Turn-Key Pitch Fabrication',
      link: '/services/sports-nets',
      features: [
        'High Velocity Ball Damping',
        'Heavy Galvanized Iron (GI) Frame',
        'Rooftop Box Arena Fabrication',
        'All-Weather UV Treatment',
        'Perimeter Ball Containment',
        'Single & Dual Practice Lanes',
      ],
    },
    {
      id: 'construction-nets',
      filterCategory: 'commercial',
      category: 'Site Safety & OSHA Compliance',
      title: 'Construction & Fall Protection Safety Nets',
      desc: 'Heavy-duty industrial fall protection and debris containment safety nets compliant with Indian Standards (IS: 5175). Protects site workers from accidental falls from heights up to 6 meters and stops falling tools, bricks, and concrete fragments.',
      image: g2_4,
      time: 'Custom Site Rigging',
      link: '/services/construction-nets',
      features: [
        'IS: 5175 Fall Arrest Certified',
        'Dual-Layer Debris Overlay',
        'High-Tenacity Polypropylene',
        'Flame Retardant Options',
        '30kN+ Border Breaking Force',
        'Certified Batch Test Reports',
      ],
    },
  ]

  const filteredServices =
    activeTab === 'all'
      ? allServices
      : allServices.filter((s) => s.filterCategory === activeTab)

  return (
    <section className="home-what-we-do-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-pill">What We Do</span>
          <h2 className="section-title">Our Premium Installation Services</h2>
          <p className="section-desc">
            Explore our high-tensile safety systems and smart space-saving laundry solutions engineered for high-rise living.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="what-we-do-filter-tabs">
          <button
            type="button"
            className={`what-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Services ({allServices.length})
          </button>
          <button
            type="button"
            className={`what-tab-btn ${activeTab === 'residential' ? 'active' : ''}`}
            onClick={() => setActiveTab('residential')}
          >
            Balcony & Windows (3)
          </button>
          <button
            type="button"
            className={`what-tab-btn ${activeTab === 'hygiene' ? 'active' : ''}`}
            onClick={() => setActiveTab('hygiene')}
          >
            Bird & Duct Hygiene (2)
          </button>
          <button
            type="button"
            className={`what-tab-btn ${activeTab === 'commercial' ? 'active' : ''}`}
            onClick={() => setActiveTab('commercial')}
          >
            Sports & Commercial (2)
          </button>
        </div>

        {/* All Services Grid */}
        <div className="what-we-do-grid reveal-stagger">
          {filteredServices.map((item) => (
            <div key={item.id} className="what-service-card">
              <div className="what-service-media">
                <img src={item.image} alt={item.title} className="what-service-img" />
                <span className="what-service-category">{item.category}</span>
                <span className="what-service-time">
                  <FiClock size={13} style={{ marginRight: '5px' }} />
                  {item.time}
                </span>
              </div>

              <div className="what-service-body">
                <div className="same-day-badge">
                  <FiClock size={12} />
                  <span>Same-Day Installation</span>
                </div>
                <h3 className="what-service-title">{item.title}</h3>
                <p className="what-service-desc">{item.desc}</p>

                <div className="what-features-block">
                  <strong className="features-head-title">Key Features:</strong>
                  <div className="what-features-grid">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="what-feature-item">
                        <span className="feature-check-icon">
                          <FiCheck size={14} />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="what-service-actions">
                  <Link to={item.link} className="what-learn-btn">
                    <span>Learn Details</span>
                    <FiArrowRight size={15} />
                  </Link>

                  <button
                    type="button"
                    className="what-book-btn"
                    onClick={() => (onOpenBooking ? onOpenBooking() : null)}
                  >
                    <span>Book Free Survey</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
