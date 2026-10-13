import { Link } from 'react-router-dom'
import bannerImg from '../assets/banner.jpg'
import pigeonImg from '../assets/pigeon_net.jpg'
import sportsImg from '../assets/sports_net.jpg'
import './ServicesOverview.css'

export default function ServicesOverview({ onOpenBooking }) {
  const services = [
    {
      id: 'invisible-grills',
      title: 'Invisible Balcony Grills',
      desc: 'High-tensile 316 marine-grade stainless steel cables providing unblocked panoramic views with maximum safety for children and pets.',
      img: bannerImg,
      badge: 'Most Popular',
      features: ['Rust Proof SS-316', 'Transparent View', 'Withstands 400kg+ load'],
    },
    {
      id: 'pigeon-nets',
      title: 'Pigeon & Bird Safety Nets',
      desc: 'Durable copolymer nylon nets that keep pigeons and birds away from your balconies and ducts without harming them.',
      img: pigeonImg,
      badge: 'UV Stabilized',
      features: ['Garware Best Quality', 'Non-obstructive', '5 Years Warranty'],
    },
    {
      id: 'sports-nets',
      title: 'Sports & Cricket Practice Nets',
      desc: 'Heavy-duty impact absorbing net enclosures for residential societies, schools, terraces, and commercial practice arenas.',
      img: sportsImg,
      badge: 'High Impact',
      features: ['High Durability', 'Custom Dimensions', 'All-weather Resistant'],
    },
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header-center">
          <div className="section-pill">Trusted Net Solutions</div>
          <h2 className="section-title">Our Premium Safety Solutions</h2>
          <p className="section-desc">
            Engineered with high-grade materials and installed by certified professionals across residential & commercial spaces.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-image-wrapper">
                <img src={service.img} alt={service.title} className="service-card-image" />
                <span className="service-badge">{service.badge}</span>
              </div>
              <div className="service-card-content">
                <h3 className="service-card-title">
                  <Link to={`/services/${service.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {service.title}
                  </Link>
                </h3>
                <p className="service-card-desc">{service.desc}</p>
                <ul className="service-features-list">
                  {service.features.map((feat, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#074c3e" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: 'auto', paddingTop: '12px' }}>
                  <button
                    type="button"
                    className="service-book-btn"
                    onClick={onOpenBooking}
                    style={{ flex: 1 }}
                  >
                    Book Visit
                  </button>
                  <Link
                    to={`/services/${service.id}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '11px 16px',
                      background: '#eef7f4',
                      color: '#074c3e',
                      borderRadius: '9999px',
                      fontWeight: 700,
                      fontSize: '13.5px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
