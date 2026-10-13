/**
 * Premium Scroll Reveal Controller for Harshitha Enterprises
 * Uses native IntersectionObserver for 60fps hardware-accelerated entrance animations.
 * Unobserves elements once revealed to prevent repeated replaying.
 * Fully respects prefers-reduced-motion.
 */

const REVEAL_CLASSES = [
  'reveal-up','reveal-stagger','reveal-left','reveal-right',
  'reveal-flip','reveal-blur','reveal-zoom','reveal-down','reveal-scale','reveal-fade','reveal-on-scroll'
]

const ANIMATION_MAP = {
  '.section-header-center': 'reveal-blur',
  '.showcase-header-bar': 'reveal-blur',
  '.process-header-center': 'reveal-blur',
  '.testimonials-header-bar': 'reveal-blur',
  '.page-hero-section': 'reveal-down',
  '.services-hero-banner': 'reveal-down',
  '.projects-hero-banner': 'reveal-down',
  '.policy-hero-section': 'reveal-down',
  '.timeline-container': 'reveal-up',
  '.timeline-item': 'reveal-flip',
  '.value-item-card': 'reveal-zoom',
  '.trust-strip-card': 'reveal-zoom',
  '.service-card-item': 'reveal-zoom',
  '.gallery-item-card': 'reveal-zoom',
  '.showcase-item-card': 'reveal-zoom',
  '.process-step-card': 'reveal-flip',
  '.trust-pillar-card': 'reveal-zoom',
  '.advantage-card-box': 'reveal-up',
  '.mv-card': 'reveal-scale',
  '.commitment-card': 'reveal-scale',
  '.story-stat-box': 'reveal-up',
  '.contact-card-box': 'reveal-left',
  '.sidebar-card': 'reveal-right',
  '.faq-accordion-item': 'reveal-up',
  '.ribbon-card-info': 'reveal-left',
  '.ribbon-card-actions': 'reveal-right',
  '.projects-ribbon-card': 'reveal-scale',
  '.quality-strip-card': 'reveal-scale',
  '.page-cta-card': 'reveal-zoom',
  '.booking-confirmed-card': 'reveal-zoom',
  '.video-feat-item': 'reveal-left',
  '.next-steps-list li': 'reveal-up',
  '.trust-highlights': 'reveal-fade',
  '.map-card-container': 'reveal-scale',
  '.faq-support-callout': 'reveal-up',
  '.document-section-item': 'reveal-up',
  '.what-service-card': 'reveal-zoom',
  '.footer-col': 'reveal-up',
  '.locations-group-block': 'reveal-up',
  '.locations-quick-callout': 'reveal-up',
  '.about-overview-card': 'reveal-up',
  '.stat-counter-box': 'reveal-up',
  '.footer-cta-ribbon': 'reveal-up',
}

const AUTO_SELECTORS = [
  '.section-header-center',
  '.showcase-header-bar',
  '.process-header-center',
  '.testimonials-header-bar',
  '.what-we-do-grid',
  '.home-what-we-do-section',
  '.process-steps-grid',
  '.installation-process-section',
  '.showcase-grid',
  '.gallery-showcase-section',
  '.testimonials-slider-track',
  '.home-testimonials-section',
  '.services-cards-grid',
  '.services-catalogue-section',
  '.projects-grid',
  '.gallery-main-section',
  '.gallery-cards-grid',
  '.featured-video-section',
  '.video-card-container',
  '.advantages-grid',
  '.advantages-side-img',
  '.advantages-checklist',
  '.home-advantages-section',
  '.stats-grid',
  '.home-about-stats-section',
  '.about-page-section',
  '.about-mission-grid',
  '.about-stats-strip',
  '.trust-grid',
  '.values-grid',
  '.timeline-list',
  '.timeline-item',
  '.pillars-grid',
  '.service-pillars-section',
  '.specs-layout-grid',
  '.service-specs-section',
  '.models-cards-grid',
  '.service-models-section',
  '.other-services-grid',
  '.other-services-section',
  '.contact-cards-grid',
  '.contact-form-card',
  '.contact-info-card',
  '.contact-main-section',
  '.contact-section',
  '.about-section',
  '.faq-section-block',
  '.service-faq-section',
  '.book-form-card',
  '.book-trust-sidebar',
  '.booking-page-section',
  '.policy-body-section',
  '.policy-document-card',
  '.footer-cta-ribbon',
  '.footer-columns-grid',
  '.service-hero-grid',
  '.service-content-column',
  '.service-sidebar-column',
  '.locations-cards-grid',
  '.locations-section',
  '.before-after-section',
  '.slider-comparison-card',
]

function hasRevealClass(el) {
  return REVEAL_CLASSES.some((c) => el.classList.contains(c))
}

function assignRevealClass(el, selector) {
  if (!hasRevealClass(el)) {
    el.classList.add(ANIMATION_MAP[selector] || 'reveal-up')
  }
}

export function initScrollReveal() {
  if (typeof window === 'undefined') return () => {}

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    document.querySelectorAll(REVEAL_CLASSES.map((c) => `.${c}`).join(', ')).forEach((el) => {
      el.classList.add('is-revealed')
    })
    return () => {}
  }

  const observerOptions = {
    root: null,
    rootMargin: '40px 0px -20px 0px',
    threshold: 0.04,
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        obs.unobserve(entry.target)
      }
    })
  }, observerOptions)

  function observeElement(el) {
    if (el._revealObserved) return
    el._revealObserved = true
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-revealed')
    } else {
      observer.observe(el)
    }
  }

  function scanAndObserve() {
    const elementsToObserve = new Set()

    // Explicit reveal classes
    document.querySelectorAll(REVEAL_CLASSES.map((c) => `.${c}`).join(', ')).forEach((el) => {
      elementsToObserve.add(el)
    })

    // Auto-selectors
    AUTO_SELECTORS.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        const isSectionWrapper = sel.includes('-section')
        if (!isSectionWrapper) assignRevealClass(el, sel)
        elementsToObserve.add(el)
      })
    })

    // Animation map targets
    Object.entries(ANIMATION_MAP).forEach(([sel, cls]) => {
      document.querySelectorAll(sel).forEach((el) => {
        if (!hasRevealClass(el)) el.classList.add(cls)
        elementsToObserve.add(el)
      })
    })

    elementsToObserve.forEach(observeElement)
  }

  scanAndObserve()

  // MutationObserver: re-scan when DOM changes (tab filters, dynamic content)
  const mutationObserver = new MutationObserver(() => {
    scanAndObserve()
  })

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
  })

  return () => {
    observer.disconnect()
    mutationObserver.disconnect()
  }
}
