import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'mango77x-theme'

function getInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const current = document.documentElement.dataset.theme
    if (current === 'light' || current === 'dark') return current
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  return 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem(STORAGE_KEY, theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#171b1c' : '#eeede8')
  }, [theme])

  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      type="button"
      className="theme-control"
      onClick={() => setTheme(nextTheme)}
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      {theme === 'light' ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="3.8" />
          <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.55 1.55m11.04 11.04 1.55 1.55M2 12h2.2m15.6 0H22M4.93 19.07l1.55-1.55M17.52 6.48l1.55-1.55" />
        </svg>
      )}
      <span>{theme === 'light' ? 'Dark' : 'Light'} mode</span>
    </button>
  )
}
