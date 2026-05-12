'use client'

import { useEffect, useState } from 'react'

type Theme = 'dark' | 'sage'


export default function ThemeSwitcher() {
  // Empezamos con 'dark' para que el SSR coincida con el HTML por defecto
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  // Solo en cliente: leer el tema guardado
  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem('lp-theme') as Theme | null
      if (saved === 'sage') {
        setTheme('sage')
      }
    } catch {}
  }, [])

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'sage' : 'dark'
    setTheme(next)
    // Aplica el atributo data-theme al elemento raíz
    if (next === 'dark') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', next)
    }
    try {
      localStorage.setItem('lp-theme', next)
    } catch {}
  }

  // Muestra el botón vacío durante SSR para evitar mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Cambiar tema"
        className="w-10 h-10 rounded-full border border-border opacity-0"
      />
    )
  }

  const nextIcon = theme === 'dark' ? '◑' : '◐'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Modo Lectura"
      className={`
        flex items-center gap-2 px-4 py-2
        rounded-full border border-border
        bg-bg-card text-text-secondary
        hover:border-accent-gold hover:text-accent-gold
        text-xs font-semibold tracking-wider uppercase
        transition-all duration-200
        select-none
      `.trim()}
    >
      <span className="text-lg leading-none flex-shrink-0">{nextIcon}</span>
      <span className="leading-tight text-center">Modo<br />Lectura</span>
    </button>
  )
}
