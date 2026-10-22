import { useEffect } from 'react'

// SEO Configuration for all pages
export const SEO_CONFIG = {
  home: {
    title: 'Harshitha Enterprises | Invisible Grills, Balcony Safety Nets & Net Solutions in Chandigarh',
    description: 'Leading provider of Invisible Grills, Balcony Safety Nets, Pigeon Nets, Sports Nets & Construction Safety Nets in Chandigarh, Mohali, Panchkula. 13+ Years Experience, 15,000+ Installations. SS-316 Marine Grade Quality. Call 9900020960.',
    keywords: 'invisible grills, balcony safety nets, pigeon nets, sports nets, construction safety nets, bird nets, children safety nets, cloth hangers, Chandigarh, Mohali, Panchkula, Zirakpur, Ludhiana, SS-316, marine grade',
    url: 'https://www.harshithaenterprise.com/'
  },
  about: {
    title: 'About Us | Harshitha Enterprises - 13+ Years of Safety Excellence in Chandigarh',
    description: 'Learn about Harshitha Enterprises, Chandigarh\'s trusted safety solutions provider since 2013. We specialize in Invisible Grills, Balcony Safety Nets, and Bird Nets with 15,000+ successful installations and 5 to 15 year written warranties.',
    keywords: 'about harshitha enterprises, invisible grills chandigarh, safety nets company, bird nets providers, 13 years experience, SS-316 marine grade, certified riggers',
    url: 'https://www.harshithaenterprise.com/about'
  },
  services: {
    title: 'Our Services | Invisible Grills, Safety Nets & Net Solutions - Harshitha Enterprises',
    description: 'Explore our complete range of net solutions: Invisible Grills, Balcony Safety Nets, Pigeon Nets, Sports Nets, Construction Safety Nets & Cloth Hangers. Same-Day Installation Available. Call 9900020960.',
    keywords: 'invisible grills services, balcony safety nets, pigeon bird nets, sports cricket nets, construction safety nets, cloth hangers, net installation services chandigarh',
    url: 'https://www.harshithaenterprise.com/services'
  },
  projects: {
    title: 'Recent Projects Gallery | Installation Portfolio - Harshitha Enterprises',
    description: 'View our recent installation projects across Chandigarh, Mohali, Panchkula & Zirakpur. See Invisible Grills, Balcony Safety Nets, and Bird Net installations completed by our certified team.',
    keywords: 'installation projects gallery, completed installations, invisible grill photos, safety net projects, balcony grill images, chandigarh projects',
    url: 'https://www.harshithaenterprise.com/projects'
  },
  contact: {
    title: 'Contact Us | Harshitha Enterprises - Free Site Inspection & Quote',
    description: 'Contact Harshitha Enterprises for Invisible Grills and Safety Net installations. Free on-site inspection, transparent quotes. Call 9900020960 or WhatsApp us. Serving Chandigarh, Mohali, Panchkula.',
    keywords: 'contact harshitha enterprises, free site inspection, get quote, invisible grills contact, safety nets inquiry, chandigarh location, phone number',
    url: 'https://www.harshithaenterprise.com/contact'
  },
  book: {
    title: 'Book Free Site Inspection | Harshitha Enterprises',
    description: 'Book a free site inspection for Invisible Grills, Safety Nets, or Bird Nets. Our certified technicians will visit your location, take measurements, and provide a transparent quote. No payment required.',
    keywords: 'book free inspection, schedule site visit, book installation, free measurement, invisible grill booking, safety nets quote',
    url: 'https://www.harshithaenterprise.com/book'
  },
  'invisible-grills': {
    title: 'Invisible Safety Grills | SS-316 Marine Grade - Harshitha Enterprises',
    description: 'Premium Invisible Safety Grills made from SS-316 Marine Grade Stainless Steel. Transparent, rust-proof, and child-safe. 400kg+ tensile strength. Same-Day Installation Available. Call 9900020960.',
    keywords: 'invisible safety grills, SS-316 marine grade, transparent balcony grills, child safety grills, rust proof grills, high tensile steel cables',
    url: 'https://www.harshithaenterprise.com/services/invisible-grills'
  },
  'safety-nets': {
    title: 'Children & Family Balcony Safety Nets | Harshitha Enterprises',
    description: 'Engineered fall-arrest balcony safety nets for children and pets. Made from 100% Virgin Garware Nylon, UV-stabilized, 250kg+ impact tested. Protect your loved ones with our certified safety nets.',
    keywords: 'children safety nets, balcony fall protection, pet safety nets, fall arrest nets, garware nylon nets, child proof balcony',
    url: 'https://www.harshithaenterprise.com/services/safety-nets'
  },
  'pigeon-nets': {
    title: 'Pigeon & Bird Safety Nets | Humane Bird Exclusion - Harshitha Enterprises',
    description: 'Effective pigeon and bird exclusion nets. 100% humane, UV-stabilized, translucent. Stop pigeon nesting and droppings without harming birds. Ideal for balconies, AC units, and windows.',
    keywords: 'pigeon nets, bird exclusion nets, balcony bird proofing, humane bird control, pigeon droppings protection, AC unit bird nets',
    url: 'https://www.harshithaenterprise.com/services/pigeon-nets'
  },
  'cloth-hangers': {
    title: 'Stainless Steel Cloth Hangers & Smart Dryers | Harshitha Enterprises',
    description: 'Space-saving ceiling-mounted cloth hangers and smart dryers. Made from SS-304 rust-free stainless steel. Pulley system and motorized options available. Maximize your balcony space.',
    keywords: 'cloth hangers, smart dryers, ceiling mounted clothes dryer, pulley clothes hanger, stainless steel cloth drying rack, space saving laundry',
    url: 'https://www.harshithaenterprise.com/services/cloth-hangers'
  },
  'sports-nets': {
    title: 'Sports & Cricket Practice Net Enclosures | Harshitha Enterprises',
    description: 'Heavy-duty sports netting for cricket, football, and practice arenas. UV-stabilized, high-impact absorption. Custom GI frame fabrication. Turn-key installation for societies and clubs.',
    keywords: 'sports nets, cricket practice nets, box cricket netting, football turf nets, sports arena netting, practice cage nets',
    url: 'https://www.harshithaenterprise.com/services/sports-nets'
  },
  'construction-nets': {
    title: 'Construction & Fall Protection Safety Nets | Harshitha Enterprises',
    description: 'IS:5175 certified construction safety nets and fall protection systems. Heavy-duty debris containment and personnel safety. Compliant with international safety standards. Quick deployment.',
    keywords: 'construction safety nets, fall protection nets, debris containment nets, site safety netting, OSHA compliant nets, construction site protection',
    url: 'https://www.harshithaenterprise.com/services/construction-nets'
  },
  'building-covering-nets': {
    title: 'Building Covering & Facade Renovation Nets | Harshitha Enterprises',
    description: 'High-density HDPE covering nets for building facades during renovation. Dust and paint containment. 50-75% shade factor. Quick setup for society painting projects.',
    keywords: 'building covering nets, facade renovation nets, dust containment nets, painting protection nets, HDPE shading nets, construction wrap',
    url: 'https://www.harshithaenterprise.com/services/building-covering-nets'
  },
  'duct-nets': {
    title: 'Building Duct Area & Plumbing Shaft Safety Nets | Harshitha Enterprises',
    description: 'Complete duct shaft bird-proofing using rope access techniques. Seal multi-story plumbing shafts from roof to ground. Eliminate pigeon nesting and foul odors permanently.',
    keywords: 'duct area nets, plumbing shaft nets, bird proofing ducts, shaft sealing nets, multi-story duct protection, rope access installation',
    url: 'https://www.harshithaenterprise.com/services/duct-nets'
  }
}

export default function SEO({ page = 'home', schema = null }) {
  useEffect(() => {
    const config = SEO_CONFIG[page] || SEO_CONFIG.home
    
    // Update title
    document.title = config.title
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]')
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    
    if (metaDescription) {
      metaDescription.setAttribute('content', config.description)
    }
    
    if (metaKeywords) {
      metaKeywords.setAttribute('content', config.keywords)
    }
    
    if (canonicalLink) {
      canonicalLink.setAttribute('href', config.url)
    }
    
    if (ogTitle) {
      ogTitle.setAttribute('content', config.title)
    }
    
    if (ogDescription) {
      ogDescription.setAttribute('content', config.description)
    }
    
    if (ogUrl) {
      ogUrl.setAttribute('content', config.url)
    }
    
    if (twitterTitle) {
      twitterTitle.setAttribute('content', config.title)
    }
    
    if (twitterDescription) {
      twitterDescription.setAttribute('content', config.description)
    }
    
    // Add structured data if provided
    if (schema) {
      // Remove existing schema of same type
      const existingScript = document.querySelector(`script[type="application/ld+json"][data-seo-schema="${schema.type}"]`)
      if (existingScript) {
        existingScript.remove()
      }
      
      // Add new schema
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-schema', schema.type)
      script.textContent = JSON.stringify(schema.data)
      document.head.appendChild(script)
    }
    
    // Cleanup function
    return () => {
      // Reset to default on unmount
      document.title = SEO_CONFIG.home.title
      const defaultMeta = document.querySelector('meta[name="description"]')
      if (defaultMeta) {
        defaultMeta.setAttribute('content', SEO_CONFIG.home.description)
      }
    }
  }, [page, schema])
  
  return null
}

// Helper function to generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

// Helper function to generate FAQ schema
export function generateFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Helper function to generate service schema
export function generateServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Harshitha Enterprises',
      url: 'https://www.harshithaenterprise.com'
    },
    areaServed: {
      '@type': 'Place',
      name: 'Chandigarh, Mohali, Panchkula, Zirakpur, Ludhiana, North India'
    },
    priceRange: service.priceRange || '₹130 - ₹500 per sq ft',
    serviceType: service.name,
    url: service.url
  }
}