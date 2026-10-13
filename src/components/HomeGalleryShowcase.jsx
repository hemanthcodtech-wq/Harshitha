import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import g2_1 from '../2/WhatsApp Image 2026-10-13 at 11.14.59 AM.jpeg'
import g2_2 from '../2/WhatsApp Image 2026-10-13 at 11.15.01 AM.jpeg'
import g2_3 from '../2/image.png'
import g2_4 from '../2/WhatsApp Image 2026-10-13 at 11.16.36 AM.jpeg'
import './HomeGalleryShowcase.css'

export default function HomeGalleryShowcase({ onOpenBooking }) {
  const showcaseProjects = [
    {
      id: 'showcase-1',
      category: 'Balcony Grill',
      title: 'High-Rise Balcony Installation',
      location: 'Wave Estate, Sector 85, Mohali',
      image: g2_1,
      specs: 'SS-316 Marine Grade Cables',
      serviceSlug: 'invisible-grills',
    },
    {
      id: 'showcase-2',
      category: 'Window Grill',
      title: 'French Window Safety Grill',
      location: 'Sector 8 Luxury Villa, Chandigarh',
      image: g2_2,
      specs: '6063-T6 Aluminum Track',
      serviceSlug: 'invisible-grills',
    },
    {
      id: 'showcase-3',
      category: 'Cloth Hanger',
      title: 'Motorized Smart Dryer Installation',
      location: 'DLF The Valley, Panchkula',
      image: g2_3,
      specs: 'Heavy Duty SS-304 Rods',
      serviceSlug: 'cloth-hangers',
    },
    {
      id: 'showcase-4',
      category: 'Pigeon Netting',
      title: 'Balcony Bird Exclusion Barrier',
      location: 'Sushma Grande, Zirakpur',
      image: g2_4,
      specs: '25mm Garware Nylon Mesh',
      serviceSlug: 'pigeon-nets',
    },
  ]

  return (
    <section className="home-gallery-showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="showcase-header-bar">
          <div className="showcase-header-text">
            <span className="section-pill">Gallery Showcase</span>
            <h2 className="showcase-title">Recent Installation Projects</h2>
            <p className="showcase-subtitle">
              Take a look at genuine on-site balcony safety and utility installations executed across Chandigarh Tricity's top apartment complexes.
            </p>
          </div>

          <Link to="/projects" className="view-all-showcase-btn">
            <span>View All Installations</span>
            <FiArrowRight size={16} />
          </Link>
        </div>

        {/* 4 Cards Showcase Grid */}
        <div className="showcase-cards-grid reveal-stagger">
          {showcaseProjects.map((item) => (
            <div key={item.id} className="showcase-item-card">
              <div className="showcase-image-wrapper">
                <img src={item.image} alt={item.title} className="showcase-img" />
                <span className="showcase-category-pill">{item.category}</span>
              </div>

              <div className="showcase-card-body">
                <h3 className="showcase-card-title">{item.title}</h3>
                <div className="showcase-location-row">
                  <FiMapPin size={14} style={{ color: '#074c3e' }} />
                  <span>{item.location}</span>
                </div>
                <div className="showcase-specs-badge">
                  <FiCheckCircle size={13} style={{ color: '#16a34a' }} />
                  <span>{item.specs}</span>
                </div>

                <div className="showcase-card-actions">
                  <Link
                    to={`/services/${item.serviceSlug}`}
                    className="showcase-details-link"
                  >
                    <span>View Service</span>
                    <FiArrowRight size={13} />
                  </Link>
                  <button
                    type="button"
                    className="showcase-inquire-btn"
                    onClick={() => onOpenBooking ? onOpenBooking() : null}
                  >
                    Inquire
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
