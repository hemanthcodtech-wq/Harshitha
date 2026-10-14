import { Link } from 'react-router-dom'
import { FiMapPin, FiPhoneCall } from 'react-icons/fi'
import './HomeLocations.css'

export default function HomeLocations() {
  const tricityLocations = [
    'Sector 34, Chandigarh',
    'Sector 17, Chandigarh',
    'Sector 35, Chandigarh',
    'Sector 8, Chandigarh',
    'Sector 9, Chandigarh',
    'Sector 22, Chandigarh',
    'Sector 43, Chandigarh',
    'Sector 20, Chandigarh',
    'Wave Estate, Mohali',
    'Sector 70, Mohali',
    'Sector 68, Mohali',
    'Phase 7, Mohali',
    'Phase 3B2, Mohali',
    'Aerocity, Mohali',
    'IT City, Mohali',
    'Sector 20, Panchkula',
    'Sector 12, Panchkula',
    'Sector 4, Panchkula',
    'MDC, Panchkula',
    'DLF The Valley, Panchkula',
    'Pinjore & Kalka',
    'VIP Road, Zirakpur',
    'Sushma Grande, Zirakpur',
    'Maya Garden, Zirakpur',
    'Highland Park, Zirakpur',
    'Dhakoli, Zirakpur',
    'Kharar & Sunny Enclave',
    'New Chandigarh (Omaxe)',
    'New Chandigarh (Mullanpur)',
    'Ludhiana City Center',
    'Ludhiana Sarabha Nagar',
    'Ludhiana Model Town',
    'Dera Bassi Complexes',
  ]

  const hyderabadLocations = [
    'Madhapur',
    'Banjara Hills',
    'Jubilee Hills',
    'Gachibowli',
    'HITEC City',
    'Manikonda',
    'Kukatpally',
    'Khajaguda',
    'Attapur',
    'Secunderabad',
    'Ameerpet',
    'Panjagutta',
  ]

  return (
    <section className="home-locations-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-pill">Locations We Serve</span>
          <h2 className="section-title">Serving Across Chandigarh Tricity & Key Metros</h2>
          <p className="section-desc">
            We provide swift same-day laser measurements and guaranteed same-week installation across all major residential sectors, townships, and villas.
          </p>
        </div>

        {/* Chandigarh Tricity Localities */}
        <div className="locations-group-block">
          <div className="locations-group-head">
            <FiMapPin style={{ color: '#074c3e' }} />
            <h3>Chandigarh, Mohali, Panchkula & Zirakpur Hubs</h3>
          </div>
          <div className="locations-pills-wrap reveal-stagger">
            {tricityLocations.map((loc, idx) => (
              <Link
                key={idx}
                to={`/contact?area=${encodeURIComponent(loc)}`}
                className="location-pill-item"
              >
                <span>{loc}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Hyderabad & South Hubs */}
        <div className="locations-group-block sub-locations">
          <div className="locations-group-head">
            <FiMapPin style={{ color: '#0284c7' }} />
            <h3>Hyderabad Regional Expansion Network</h3>
          </div>
          <div className="locations-pills-wrap reveal-stagger">
            {hyderabadLocations.map((loc, idx) => (
              <Link
                key={idx}
                to={`/contact?area=${encodeURIComponent(loc)}`}
                className="location-pill-item alt-pill"
              >
                <span>{loc}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Locations Callout Banner */}
        <div className="locations-quick-callout reveal-up">
          <div className="callout-content-left">
            <strong>Don't see your specific sector or apartment listed?</strong>
            <p>Our mobile rigging technicians cover a 50 km perimeter across North India with zero travel charges.</p>
          </div>
          <a href="tel:9900020960" className="callout-phone-link">
            <FiPhoneCall size={16} />
            <span>Call 9900020960</span>
          </a>
        </div>
      </div>
    </section>
  )
}
