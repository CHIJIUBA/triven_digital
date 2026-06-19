import { useUI } from '../UIContext.jsx'

export default function DarkModeToggleFixed() {
  const { darkMode, toggleDarkMode } = useUI()

  return (
    <button
      id="darkModeToggleFixed"
      className="dark-mode-toggle-fixed"
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
    >
      <span className={darkMode ? 'icon-sun-o' : 'icon-moon-o'}></span>
    </button>
  )
}
