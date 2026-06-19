import { createContext, useContext, useEffect, useState } from 'react'

const UIContext = createContext(null)

export function UIProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)
  const [authView, setAuthView] = useState('signin') // 'signin' | 'register'

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Lock body scroll while a modal/menu is open, like the original theme does.
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || authOpen ? 'hidden' : ''
  }, [mobileMenuOpen, authOpen])

  const openAuth = (view = 'signin') => {
    setAuthView(view)
    setAuthOpen(true)
  }

  const value = {
    darkMode,
    toggleDarkMode: () => setDarkMode((d) => !d),
    mobileMenuOpen,
    setMobileMenuOpen,
    authOpen,
    setAuthOpen,
    authView,
    setAuthView,
    openAuth,
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used within UIProvider')
  return ctx
}
