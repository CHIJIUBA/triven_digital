import { useEffect, useState } from 'react'
import { useUI } from '../UIContext.jsx'
import { Sun, Moon } from 'lucide-react'

const NAV_LINKS = [
  { href: '#home-section', label: 'Home' },
  { href: '#features-section', label: 'Services' },
  { href: '#pricing-section', label: 'Pricing' },
  { href: '#about-section', label: 'About' },
  { href: '#contact-section', label: 'Contact' },
]

export default function Navbar() {
  const { darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen, openAuth } = useUI()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav dark js-site-navbar mb-5 site-navbar-target${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className="site-navigation">
          <a href="#home-section" className="logo m-0 float-start">
			<img src="/images/triven_didgital_logo.png" alt="Triven Digital Logo"  height={75}/>
			Triven Digital<span className="text-primary">.</span>
          </a>

          <ul className="d-none d-lg-inline-block site-menu float-start" style={{ fontSize: 35 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className={link.children ? 'has-children' : undefined}>
                <a href={link.href ?? '#'} className="nav-link">{link.label}</a>
                {link.children && (
                  <ul className="dropdown">
                    {link.children.map((child) => (
                      <li key={child.label} className={child.children ? 'has-children' : undefined}>
                        <a href={child.href ?? '#'} className="nav-link">{child.label}</a>
                        {child.children && (
                          <ul className="dropdown">
                            {child.children.map((grandchild) => (
                              <li key={grandchild.label}>
                                <a href={grandchild.href} className="nav-link">{grandchild.label}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <ul className="d-none mt-1 d-lg-inline-block site-menu float-end">
            <li className="cta-button-outline dark-mode-toggle">
              <a href="#" aria-label="Toggle dark mode" onClick={(e) => { e.preventDefault(); toggleDarkMode() }}>
                {/* <span className={darkMode ? 'icon-sun-o' : 'icon-moon-o'}></span> */}
				 <span className={darkMode ? <Sun size={20} /> : <Moon size={20} />}></span>
              </a>
            </li>
          </ul>

          <a
            href="#"
            className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
            onClick={(e) => { e.preventDefault(); setMobileMenuOpen(true) }}
          >
            <span></span>
          </a>
        </div>
      </div>
    </nav>
  )
}
