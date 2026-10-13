// Images from src/1
import g1_1 from '../1/WhatsApp Image 2026-10-13 at 11.18.30 AM.jpeg'
import g1_2 from '../1/WhatsApp Image 2026-10-13 at 11.18.43 AM.jpeg'
import g1_3 from '../1/WhatsApp Image 2026-10-13 at 11.18.48 AM.jpeg'

// Images & Video from src/2
import g2_1 from '../2/WhatsApp Image 2026-10-13 at 11.14.59 AM.jpeg'
import g2_2 from '../2/WhatsApp Image 2026-10-13 at 11.15.01 AM.jpeg'
import g2_3 from '../2/image.png'
import g2_4 from '../2/WhatsApp Image 2026-10-13 at 11.16.36 AM.jpeg'
import g2_5 from '../2/WhatsApp Image 2026-10-13 at 11.16.39 AM.jpeg'
import g2_6 from '../2/WhatsApp Image 2026-10-13 at 11.16.42 AM.jpeg'
import g2_7 from '../2/WhatsApp Image 2026-10-13 at 11.16.43 AM.jpeg'
import g2_8 from '../2/WhatsApp Image 2026-10-13 at 11.16.45 AM.jpeg'
import g2_video from '../2/WhatsApp Video 2026-10-13 at 11.23.36 AM.mp4'

// AI Generated Architectural Images from src/assets
import ai_invisible from '../assets/banner.jpg'
import ai_balcony from '../assets/balcony_invisible_after.jpg'
import ai_pigeon from '../assets/pigeon_after.jpg'
import ai_child from '../assets/child_safety_after.jpg'
import ai_sports from '../assets/sports_net.jpg'
import ai_duct from '../assets/duct_after.jpg'

export const projectsVideo = {
  id: 'video-demo-1',
  title: 'Live On-Site Balcony Installation & Tensioning Demo',
  category: 'Live Demonstration',
  location: 'Luxury Apartment Complex, Mohali',
  mediaType: 'video',
  src: g2_video,
  desc: 'Watch our certified rigging team drill concrete anchors, align horizontal tracks, and calibrate high-tensile wire tension.',
  duration: 'Live Footage',
}

export const projectsGallery = [
  // Video Feature Item
  {
    id: 'vid-1',
    title: 'On-Site Rigging & Tensioning Process',
    category: 'Video Demo',
    tag: 'Live Project Video',
    location: 'Sector 70, Mohali',
    mediaType: 'video',
    src: g2_video,
    desc: 'Real footage of our certified technicians installing SS-316 cables and performing tension calibration.',
    specs: 'Calibrated Tensile Rigging',
  },

  // From src/1 (Real Site Photos)
  {
    id: 'p1-1',
    title: 'High-Rise Balcony Net Protection',
    category: 'Balcony Protection',
    tag: 'Real Installation',
    location: 'Sector 34-A, Chandigarh',
    mediaType: 'image',
    src: g1_1,
    desc: 'Full envelope balcony protection with heavy-duty anchors securing ledges against fall hazards.',
    specs: 'Garware Certified Polymer',
  },
  {
    id: 'p1-2',
    title: 'Residential Window & Ledge Netting',
    category: 'Bird Nets',
    tag: 'Real Installation',
    location: 'Sector 20, Panchkula',
    mediaType: 'image',
    src: g1_2,
    desc: 'Invisible transparent pigeon netting covering external window sill and air conditioner outdoor compressor.',
    specs: '25mm UV-Treated Mesh',
  },
  {
    id: 'p1-3',
    title: 'Apartment Veranda Safety Shield',
    category: 'Child Safety',
    tag: 'Real Installation',
    location: 'VIP Road, Zirakpur',
    mediaType: 'image',
    src: g1_3,
    desc: 'Seamless child-safe net barrier attached to upper concrete beam and lower balcony railing.',
    specs: '250kg+ Load Tested',
  },

  // From src/2 (Real Site Photos)
  {
    id: 'p2-1',
    title: 'High-Rise Balcony Invisible Grill System',
    category: 'Invisible Grills',
    tag: 'Real Installation',
    location: 'Wave Estate, Mohali',
    mediaType: 'image',
    src: g2_1,
    desc: 'Sleek 2-inch spaced marine-grade SS316 cables providing uncompromised panoramic views.',
    specs: 'Marine Grade SS-316',
  },
  {
    id: 'p2-2',
    title: 'Luxury Villa Glass Facade Protection',
    category: 'Invisible Grills',
    tag: 'Real Installation',
    location: 'Sector 8, Chandigarh',
    mediaType: 'image',
    src: g2_2,
    desc: 'Precision horizontal grill track mounted directly into RCC ceiling beam without tile cracking.',
    specs: '6063-T6 Aluminum Track',
  },
  {
    id: 'p2-3',
    title: 'Balcony Ceiling Cloth Hanger Setup',
    category: 'Cloth Dryers',
    tag: 'Real Installation',
    location: 'Sector 68, Mohali',
    mediaType: 'image',
    src: g2_3,
    desc: '6-pipe heavy duty SS-304 stainless steel ceiling pulley clothes drying hanger with dual brass bearings.',
    specs: 'SS-304 Heavy Rods',
  },
  {
    id: 'p2-4',
    title: 'Pigeon Exclusion Balcony Barrier',
    category: 'Bird Nets',
    tag: 'Real Installation',
    location: 'Kharar Road, Mohali',
    mediaType: 'image',
    src: g2_4,
    desc: 'Hygienic transparent bird net keeping pigeons from roosting on balcony railings and AC pipes.',
    specs: 'Zero View Obstruction',
  },
  {
    id: 'p2-5',
    title: 'Multi-Floor Open Corridor Fall Arrest',
    category: 'Child Safety',
    tag: 'Real Installation',
    location: 'Sector 12, Panchkula',
    mediaType: 'image',
    src: g2_5,
    desc: 'Vertical void protection netting installed along multi-floor society corridor walkways.',
    specs: 'IS: 5175 Fall Arrest Mesh',
  },
  {
    id: 'p2-6',
    title: 'High-Rise Balcony Full Enclosure',
    category: 'Invisible Grills',
    tag: 'Real Installation',
    location: 'New Chandigarh',
    mediaType: 'image',
    src: g2_6,
    desc: 'Full floor-to-ceiling invisible grill installation on 18th floor luxury penthouse.',
    specs: 'SS-316 High Tensile',
  },
  {
    id: 'p2-7',
    title: 'Utility Balcony Bird & Dust Shield',
    category: 'Bird Nets',
    tag: 'Real Installation',
    location: 'Dera Bassi Residential Complex',
    mediaType: 'image',
    src: g2_7,
    desc: 'Complete utility shaft and wash balcony netting keeping pigeon waste away from laundry.',
    specs: '100% Weatherproof',
  },
  {
    id: 'p2-8',
    title: 'Terrace Perimeter Safety Installation',
    category: 'Balcony Protection',
    tag: 'Real Installation',
    location: 'Sector 38, Chandigarh',
    mediaType: 'image',
    src: g2_8,
    desc: 'Tensioned perimeter safety net preventing toys and small pets from slipping through wide railings.',
    specs: 'UV 50+ Inhibitor',
  },

  // AI-Generated High-End Showcase Items
  {
    id: 'ai-1',
    title: 'Modern Luxury Penthouse Invisible Grills',
    category: 'Invisible Grills',
    tag: 'Architectural Render',
    location: 'Sector 9, Chandigarh',
    mediaType: 'image',
    src: ai_invisible,
    desc: 'Ultra-clear 2.5mm SS-316 cables providing 98% visual transparency with 400kg+ breaking load.',
    specs: 'SS-316 Marine Grade',
  },
  {
    id: 'ai-2',
    title: 'Panoramic Balcony Invisible Barrier',
    category: 'Invisible Grills',
    tag: 'Architectural Render',
    location: 'Aerocity, Mohali',
    mediaType: 'image',
    src: ai_balcony,
    desc: 'Modern apartment balcony with invisible grills tensioned for optimal safety and aesthetics.',
    specs: 'Anti-Rust Coating',
  },
  {
    id: 'ai-3',
    title: 'Hygienic Bird Exclusion Envelope',
    category: 'Bird Nets',
    tag: 'Architectural Render',
    location: 'Panchkula Golf Greens',
    mediaType: 'image',
    src: ai_pigeon,
    desc: 'Humane bird netting installed across wide apartment balconies keeping outdoor living areas clean.',
    specs: 'Garware Copolymer',
  },
  {
    id: 'ai-4',
    title: 'Child Safety Fall-Arrest Balcony Mesh',
    category: 'Child Safety',
    tag: 'Architectural Render',
    location: 'High-Rise Towers, Zirakpur',
    mediaType: 'image',
    src: ai_child,
    desc: 'Certified high-impact fall protection netting with child-friendly knotless nylon weave.',
    specs: '250kg Load Tested',
  },
  {
    id: 'ai-5',
    title: 'Professional Cricket Practice Enclosure',
    category: 'Sports Nets',
    tag: 'Architectural Render',
    location: 'Sports Complex, Sector 42',
    mediaType: 'image',
    src: ai_sports,
    desc: 'Heavy-duty braided nylon containment net with galvanized iron frame for leather cricket ball practice.',
    specs: '150 km/h Impact Rated',
  },
  {
    id: 'ai-6',
    title: 'Building Plumbing Duct Shaft Enclosure',
    category: 'Duct Nets',
    tag: 'Architectural Render',
    location: 'Mega Society, Mohali',
    mediaType: 'image',
    src: ai_duct,
    desc: 'Rope-access industrial netting sealing vertical multi-story shafts to eliminate bird infestation.',
    specs: 'Industrial Rigging',
  },
]
