import { useUI } from '../UIContext.jsx'

export default function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen, openAuth } = useUI()

  return (
    <div className={`site-mobile-menu site-navbar-target${mobileMenuOpen ? ' d-block' : ''}`}>
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
          <span className="icofont-close js-menu-toggle">&times;</span>
        </div>
      </div>
      <div className="site-mobile-menu-body">
        <ul className="site-menu">
          <li><a href="#home-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#features-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
          <li><a href="#pricing-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a></li>
          <li><a href="#about-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#testimonials-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact-section" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); openAuth('signin') }}>
              Sign in
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); openAuth('register') }}>
              Register
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
