'use client'

import { useState } from 'react'

const navLinks = [
  { href: '/#sectores', label: 'Servicios' },
  { href: '/#planes', label: 'Planes' },
  { href: '/galeria', label: 'Galería' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/presupuesto', label: 'Presupuesto' },
  { href: '/blog', label: 'Blog' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      {/* Botón hamburguesa */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        className="flex flex-col justify-center items-center w-9 h-9 gap-1.5"
      >
        <span
          className="block w-6 h-0.5 transition-all duration-300 origin-center"
          style={{
            background: 'var(--accent-gold)',
            transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
          }}
        />
        <span
          className="block w-6 h-0.5 transition-all duration-300"
          style={{
            background: 'var(--accent-gold)',
            opacity: open ? 0 : 1,
          }}
        />
        <span
          className="block w-6 h-0.5 transition-all duration-300 origin-center"
          style={{
            background: 'var(--accent-gold)',
            transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {/* Menú desplegable */}
      {open && (
        <div
          className="absolute top-16 left-0 right-0 z-50 px-4 py-4 flex flex-col gap-1 shadow-xl"
          style={{
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
