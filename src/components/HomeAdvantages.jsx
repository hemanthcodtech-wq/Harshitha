import { FiShield, FiEye, FiWind } from 'react-icons/fi'
import './HomeAdvantages.css'

export default function HomeAdvantages() {
  const advantages = [
    {
      icon: <FiShield size={32} style={{ color: '#074c3e' }} />,
      title: '100% Child & Pet Safety',
      desc: 'Eliminates high-rise risks completely. Tensioned stainless steel cords block narrow gaps securely to protect toddlers, elderly members, and curious pets from accidental slips.',
    },
    {
      icon: <FiEye size={32} style={{ color: '#0284c7' }} />,
      title: 'Unblocked Panoramic Views',
      desc: 'Unlike thick cage-like traditional iron bars, these thin 2mm-3mm steel cables are virtually invisible from a distance. Experience open, clear sunrise and sunset balcony views.',
    },
    {
      icon: <FiWind size={32} style={{ color: '#059669' }} />,
      title: 'Optimal Light & Airflow',
      desc: 'Perfect air passage and ambient light ventilation. These installations do not trap dust, heat, or darkness in your balconies or utility rooms, preserving structural openness.',
    },
  ]

  return (
    <section className="home-advantages-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-pill">Major Advantages</span>
          <h2 className="section-title">Safety Meets Modern Design</h2>
          <p className="section-desc">
            Providing maximum protection while elevating home design aesthetics and lifestyle comfort.
          </p>
        </div>

        <div className="advantages-cards-grid">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className={`advantage-card-box ${idx === 0 ? 'reveal-left' : idx === 2 ? 'reveal-right' : 'reveal-up'}`}
            >
              <div className="advantage-icon-wrapper">{adv.icon}</div>
              <h3 className="advantage-card-title">{adv.title}</h3>
              <p className="advantage-card-desc">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
