import Banner from '../components/Banner'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import HomeGalleryShowcase from '../components/HomeGalleryShowcase'
import HomeWhatWeDo from '../components/HomeWhatWeDo'
import HomeAdvantages from '../components/HomeAdvantages'
import HomeLocations from '../components/HomeLocations'
import HomeAboutStats from '../components/HomeAboutStats'
import HomeTestimonials from '../components/HomeTestimonials'
import AboutAndContact from '../components/AboutAndContact'

export default function HomePage({ onOpenBooking }) {
  const handleExploreServices = () => {
    const servicesElem = document.getElementById('services')
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="home-page">
      {/* 1. Hero Banner */}
      <Banner
        onOpenBooking={onOpenBooking}
        onExploreServices={handleExploreServices}
      />

      {/* 2. Before & After Slider Section directly below hero */}
      <BeforeAfterSlider onOpenBooking={onOpenBooking} />

      {/* 3. Gallery Showcase: Recent Installation Projects */}
      <HomeGalleryShowcase onOpenBooking={onOpenBooking} />

      {/* 4. What We Do: Our Premium Installation Services */}
      <HomeWhatWeDo onOpenBooking={onOpenBooking} />

      {/* 5. Major Advantages: Safety Meets Modern Design */}
      <HomeAdvantages />

      {/* 6. Locations We Serve */}
      <HomeLocations />

      {/* 7. About Harshitha Enterprises & 10 Unmatched Standards */}
      <HomeAboutStats />

      {/* 8. Testimonials: What Our Customers Say */}
      <HomeTestimonials />

      {/* 9. Instant Booking & Contact Strip */}
      <AboutAndContact onOpenBooking={onOpenBooking} />
    </div>
  )
}
