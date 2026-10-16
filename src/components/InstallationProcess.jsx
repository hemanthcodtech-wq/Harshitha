import { FiPhoneCall, FiCompass, FiFileText, FiTool, FiCheckCircle } from 'react-icons/fi'
import './InstallationProcess.css'

export const installationSteps = [
  {
    step: '1',
    title: 'Contact Us',
    desc: 'Dial or WhatsApp our expert staff at 9900020960 to schedule a convenient time slot.',
    icon: <FiPhoneCall />,
  },
  {
    step: '2',
    title: 'Free Site Check',
    desc: 'Our technician inspects balcony structures, presents real material samples, and takes laser measures.',
    icon: <FiCompass />,
  },
  {
    step: '3',
    title: 'Quotation',
    desc: 'Receive an immediate, transparent cost estimation based on exact size with zero hidden fees.',
    icon: <FiFileText />,
  },
  {
    step: '4',
    title: 'Installation',
    desc: 'Our certified rigging technicians drill, align, tension, and secure your grills, nets, or hangers.',
    icon: <FiTool />,
  },
  {
    step: '5',
    title: 'Quality Check',
    desc: 'Final load test on wire tension and functionality demo, followed by handover of your 15-year warranty card.',
    icon: <FiCheckCircle />,
  },
]

export default function InstallationProcess() {
  return (
    <section className="installation-process-section">
      <div className="container">
        <div className="process-header-center">
          <span className="section-pill">How We Work</span>
          <h2 className="process-title">Our 5-Step Installation Process</h2>
          <p className="process-subtitle">
            Five simple, systematic steps to securing and optimizing your balcony utility without hassle.
          </p>
        </div>

        <div className="process-steps-grid reveal-stagger">
          {installationSteps.map((item) => (
            <div key={item.step} className="process-step-card">
              <div className="step-badge-number">{item.step}</div>
              <div className="step-icon-wrapper">{item.icon}</div>
              <h3 className="step-card-title">{item.title}</h3>
              <p className="step-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
