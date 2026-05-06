'use client'

import { useState } from 'react'

const CATEGORIAS = ['Todos', 'Hogar', 'Industrial', 'Post-obra', 'Exterior']

interface GaleriaItem {
  src: string
  alt: string
  categoria: string
}

export default function GaleriaGrid({ items }: { items: GaleriaItem[] }) {
  const [activo, setActivo] = useState('Todos')

  const filtrados = activo === 'Todos' ? items : items.filter((i) => i.categoria === activo)

  return (
    <section className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActivo(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border transition-all duration-200"
              style={{
                borderColor: activo === cat ? 'var(--accent-gold)' : 'var(--border-color)',
                color: activo === cat ? 'var(--accent-gold)' : 'var(--text-secondary)',
                background: 'var(--bg-card)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtrados.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden card-hover"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
              >
                <div className="h-52 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--accent-gold)' }}>
                    {item.categoria}
                  </p>
                  <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {item.alt}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
              >
                <div
                  className="h-52 flex flex-col items-center justify-center gap-2"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <span className="text-3xl" style={{ color: 'var(--border-color)' }}>◈</span>
                  <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    Fotos próximamente
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-center text-sm mt-12" style={{ color: 'var(--text-muted)' }}>
          Más trabajos próximamente. ¿Querés ver ejemplos específicos?{' '}
          <a
            href="https://www.instagram.com/amenes_box_solutions"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-gold)' }}
          >
            Visitá nuestro Instagram
          </a>
        </p>
      </div>
    </section>
  )
}
