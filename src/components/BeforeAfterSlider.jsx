import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import invisibleBefore from '../assets/balcony_invisible_before.jpg'
import invisibleAfter from '../assets/balcony_invisible_after.jpg'
import pigeonBefore from '../assets/pigeon_before.jpg'
import pigeonAfter from '../assets/pigeon_after.jpg'
import childBefore from '../assets/child_safety_before.jpg'
import childAfter from '../assets/child_safety_after.jpg'
import ductBefore from '../assets/duct_before.jpg'
import ductAfter from '../assets/duct_after.jpg'
import clothHangerBefore from '../assets/cloth_hanger_before.jpg'
import clothHangerAfter from '../assets/cloth_hanger_after.jpg'
import './BeforeAfterSlider.css'

export const NET_COMPARISONS = [
  {
    id: 'invisible-grills',
    name: 'Balcony Invisible Grills',
    badge: 'High-Tensile SS-316',
    tagline: 'Modern Elegance Meets 100% Fall Protection',
    beforeImg: invisibleBefore,
    afterImg: invisibleAfter,
    beforeLabel: 'Before: Open & Unsafe Balcony',
    afterLabel: 'After: High-Tensile Invisible Grills',
    beforeDesc: 'Hazardous open balcony ledge, height drop risk for family and pets without safety barriers.',
    afterDesc: 'High-strength 316 marine-grade cables installed with zero obstruction to the scenic skyline view.',
    serviceSlug: 'invisible-grills',
  },
  {
    id: 'pigeon-nets',
    name: 'Pigeon & Bird Safety Nets',
    badge: 'Garware Virgin Nylon',
    tagline: 'Permanent Bird Control Without Ruining Your Balcony',
    beforeImg: pigeonBefore,
    afterImg: pigeonAfter,
    beforeLabel: 'Before: Bird Infestation & Droppings',
    afterLabel: 'After: Hygienic Pigeon Netting',
    beforeDesc: 'Pigeons perching on railings & AC units, unhealthy droppings and airborne feather allergens.',
    afterDesc: 'UV-stabilized transparent netting seals off balcony ledges while allowing complete sunlight & breeze.',
    serviceSlug: 'pigeon-nets',
  },
  {
    id: 'cloth-hangers',
    name: 'Ceiling Cloth Hangers & Dryers',
    badge: 'Rust-Proof SS-304 / SS-316',
    tagline: 'Reclaim 100% Balcony Floor Space with Pulley System',
    beforeImg: clothHangerBefore,
    afterImg: clothHangerAfter,
    beforeLabel: 'Before: Cluttered Floor Drying Rack',
    afterLabel: 'After: Space-Saving Ceiling Hangers',
    beforeDesc: 'Bulky floor stand blocks walkway, tips over in winds, and leaves balcony cramped and untidy.',
    afterDesc: 'Heavy-duty ceiling pulley system raises wet clothes overhead, maximizing warm airflow & open floor area.',
    serviceSlug: 'cloth-hangers',
  },
  {
    id: 'child-safety',
    name: 'Children & Pet Safety Nets',
    badge: 'Heavy-Duty Fall Protection',
    tagline: 'Absolute Peace of Mind on High-Rise Floors',
    beforeImg: childBefore,
    afterImg: childAfter,
    beforeLabel: 'Before: Dangerous Railing Voids',
    afterLabel: 'After: Secured Fall-Arrest Netting',
    beforeDesc: 'Wide railing gaps pose serious hazards for active toddlers, children, and indoor pets.',
    afterDesc: 'Precision tensioning tested up to 250kg impact resistance, safeguarding children completely.',
    serviceSlug: 'safety-nets',
  },
  {
    id: 'duct-nets',
    name: 'Building Duct Area Nets',
    badge: 'Shaft Hygiene Netting',
    tagline: 'Sealing Internal Shafts From Pigeons & Waste',
    beforeImg: ductBefore,
    afterImg: ductAfter,
    beforeLabel: 'Before: Open Infested Plumbing Shaft',
    afterLabel: 'After: Wall-to-Wall Duct Net',
    beforeDesc: 'Open ventilation shafts turn into bird nesting grounds causing foul odors and plumbing hazards.',
    afterDesc: 'Industrial grade netting covers the entire vertical shaft, keeping apartments clean and bird-free.',
    serviceSlug: 'duct-nets',
  },
]

// Single Independent Interactive Comparison Card
function ComparisonSliderCard({ item, onOpenBooking, index }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const containerRef = useRef(null)

  // One-time nudge hint on mount after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setSliderPosition(38)
        setTimeout(() => setSliderPosition(62), 420)
        setTimeout(() => setSliderPosition(50), 840)
      }
    }, 900 + index * 300)
    return () => clearTimeout(timer)
  }, [])

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = () => { setIsDragging(true); setHasInteracted(true) }
  const handleTouchStart = () => { setIsDragging(true); setHasInteracted(true) }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    const handleMouseMove = (e) => {
      if (!isDragging) return
      updatePosition(e.clientX)
    }
    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches[0]) return
      updatePosition(e.touches[0].clientX)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging, updatePosition])

  const handleContainerClick = (e) => {
    updatePosition(e.clientX)
  }

  return (
    <div className={`single-comparison-card ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}>
      {/* Card Header */}
      <div className="single-card-header">
        <div className="header-left-info">
          <span className="card-badge-pill">{item.badge}</span>
          <h3 className="card-service-title">{item.name}</h3>
          <p className="card-service-tagline">{item.tagline}</p>
        </div>
      </div>

      {/* Interactive Split Slider Box */}
      <div
        className="slider-viewer-box"
        ref={containerRef}
        onClick={handleContainerClick}
      >
        {/* Background Image: AFTER Image (Full Width Underneath) */}
        <img
          src={item.afterImg}
          alt={item.afterLabel}
          className="slider-img slider-img-after"
          draggable="false"
        />

        {/* Foreground Image: BEFORE Image (Clipped) */}
        <img
          src={item.beforeImg}
          alt={item.beforeLabel}
          className="slider-img slider-img-before"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            WebkitClipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            transition: isDragging ? 'none' : 'clip-path 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          draggable="false"
        />

        {/* Draggable Divider Handle Line */}
        <div
          className="slider-divider-line"
          style={{
            left: `${sliderPosition}%`,
            transition: isDragging ? 'none' : 'left 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="slider-handle-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="11 17 6 12 11 7"></polyline>
              <polyline points="13 7 18 12 13 17"></polyline>
            </svg>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="badge-overlay badge-before" style={{ opacity: sliderPosition < 15 ? 0 : 1 }}>
          <span className="badge-dot before-dot"></span>
          <span>BEFORE</span>
        </div>

        <div className="badge-overlay badge-after" style={{ opacity: sliderPosition > 85 ? 0 : 1 }}>
          <span className="badge-dot after-dot"></span>
          <span>AFTER (INSTALLED)</span>
        </div>

        {/* Helper Hint */}
        <div className="slider-helper-hint">
          <span>◂ Drag slider left & right to compare ▸</span>
        </div>
      </div>

      {/* Range Slider for Accessible Touch / Keyboard Navigation */}
      <div className="slider-range-bar">
        <span className="range-label-left">
          <span className="label-full">◀ 100% Before</span>
          <span className="label-mobile">◀ Before</span>
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="comparison-range-input"
          aria-label={`${item.name} slider comparison position`}
        />
        <span className="range-label-right">
          <span className="label-full">100% After (Installed) ▶</span>
          <span className="label-mobile">After ▶</span>
        </span>
      </div>

      {/* Comparative Details Cards Below Slider */}
      <div className="comparison-details-grid">
        <div className="detail-side-card detail-before">
          <div className="detail-tag before-tag">BEFORE</div>
          <h4>{item.beforeLabel}</h4>
          <p>{item.beforeDesc}</p>
        </div>

        <div className="detail-side-card detail-after">
          <div className="detail-tag after-tag">AFTER</div>
          <h4>{item.afterLabel}</h4>
          <p>{item.afterDesc}</p>
        </div>
      </div>

      {/* Action Footer for This Comparison */}
      <div className="card-action-footer">
        <button
          type="button"
          className="card-book-btn"
          onClick={() => onOpenBooking ? onOpenBooking() : null}
        >
          <FiCheckCircle size={15} />
          <span>Book Free Site Visit</span>
        </button>

        <Link to={`/services/${item.serviceSlug}`} className="card-details-btn">
          <span>Explore Details</span>
          <FiArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}

export default function BeforeAfterSlider({ onOpenBooking }) {
  return (
    <section className="before-after-section" id="comparisons">
      <div className="container">
        {/* Section Header */}
        <div className="before-after-header">
          <div className="section-pill">Interactive Transformations</div>
          <h2 className="before-after-title">
            See the Difference: Before & After Installation
          </h2>
          <p className="before-after-subtitle">
            Slide the dividers left and right across our genuine installation projects to inspect how we transform unsafe balconies, bird-infested ledges, and building shafts.
          </p>
        </div>

        {/* 2 per row on Desktop, 1 per row on Mobile */}
        <div className="before-after-grid">
          {NET_COMPARISONS.map((item, index) => (
            <ComparisonSliderCard
              key={item.id}
              item={item}
              index={index}
              onOpenBooking={onOpenBooking}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
