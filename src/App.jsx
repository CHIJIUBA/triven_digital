import { useEffect, useState } from 'react'
import AOS from 'aos'
import { UIProvider } from './UIContext.jsx'
import Navbar from './components/Navbar.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import AuthModal from './components/AuthModal.jsx'
import Hero from './components/Hero.jsx'
import FeaturesIntro from './components/FeaturesIntro.jsx'
import FeaturesTabSlider from './components/FeaturesTabSlider.jsx'
import ServiceGrid from './components/ServiceGrid.jsx'
import Pricing from './components/Pricing.jsx'
import Advantages from './components/Advantages.jsx'
import TestimonialsSlider from './components/TestimonialsSlider.jsx'
import About from './components/About.jsx'
import News from './components/News.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import DarkModeToggleFixed from './components/DarkModeToggleFixed.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({ duration: 600, once: true })
    const t = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <UIProvider>
      <div className="lines-wrap">
        <div className="lines-inner">
          <div className="lines"></div>
        </div>
      </div>

      <MobileMenu />
      <AuthModal />

      <Navbar />

      <main id="main-content">
        <Hero />
        <FeaturesIntro />
        <FeaturesTabSlider />
        <ServiceGrid />
        <Pricing />
        <Advantages />
        <TestimonialsSlider />
        <About />
        <News />
        <Contact />
      </main>

      <Footer />

      <DarkModeToggleFixed />

      {loading && (
        <div className="loader">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </UIProvider>
  )
}
