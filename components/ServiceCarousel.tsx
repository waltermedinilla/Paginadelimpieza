'use client'

import { useRef } from 'react'

// ─── Tipos ───────────────────────────────────────────────────────────────────
interface ServiceTier {
  id: string
  name: string
  tagline: string
  color: string        // Color del badge
  textColor: string    // Color del texto en el badge
  borderColor: string  // Borde izquierdo de la tarjeta
  icon: React.ReactNode
  frequency: string
  specs: string[]
  highlight?: boolean  // Tarjeta destacada (Oro)
}

// ─── Icono de corona SVG inline ──────────────────────────────────────────────
function CrownIcon({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M2 20h20v2H2v-2zm2-4l3-8 4 4 3-6 3 6 4-4 3 8H4z" />
    </svg>
  )
}

// ─── Definición de planes ────────────────────────────────────────────────────
const tiers: ServiceTier[] = [
  {
    id: 'bronze',
    name: 'Bronce',
    tagline: 'Esencial & Confiable',
    color: '#A0522D',
    textColor: '#FFFFFF',
    borderColor: '#A0522D',
    frequency: 'Semanal o quincenal',
    icon: <CrownIcon color="#A0522D" size={32} />,
    specs: [
      'Limpieza general de ambientes',
      'Barrido y trapeado de pisos',
      'Desinfección de baños',
      'Limpieza de cocina superficial',
      'Retiro de residuos',
      'Sacudido de muebles accesibles',
    ],
  },
  {
    id: 'silver',
    name: 'Plata',
    tagline: 'Completo & Detallado',
    color: '#8A9BB0',
    textColor: '#FFFFFF',
    borderColor: '#8A9BB0',
    frequency: 'Semanal',
    icon: <CrownIcon color="#8A9BB0" size={32} />,
    specs: [
      'Todo lo incluido en Bronce',
      'Limpieza profunda de cocina',
      'Desengrase de mesadas y artefactos',
      'Limpieza de vidrios interiores',
      'Aspirado de tapizados',
      'Limpieza de zócalos y cornisas',
      'Desinfección de manijas y botoneras',
    ],
  },
  {
    id: 'gold',
    name: 'Oro',
    tagline: 'Premium & Exclusivo',
    color: '#C9A84C',
    textColor: '#1C1A18',
    borderColor: '#C9A84C',
    frequency: '2–3 veces por semana',
    icon: <CrownIcon color="#C9A84C" size={32} />,
    highlight: true,
    specs: [
      'Todo lo incluido en Plata',
      'Lavado y planchado de ropa de cama',
      'Limpieza de electrodomésticos internos',
      'Pulido de pisos de madera o porcellanato',
      'Limpieza de vidrios exteriores (PB)',
      'Organización de alacenas y cajones',
      'Desinfección con productos bactericidas',
      'Informe mensual de estado del hogar',
    ],
  },
  {
    id: 'diamond',
    name: 'Diamante',
    tagline: 'Total & Sin Límites',
    color: '#B0D4E8',
    textColor: '#1C1A18',
    borderColor: '#B0D4E8',
    frequency: 'Diario / A demanda',
    icon: (
      <svg width={32} height={32} viewBox="0 0 24 24" fill="#B0D4E8" aria-hidden="true">
        <path d="M6 2l-6 8 12 12L24 10 18 2H6zm1.5 2h9l4 5.333L12 19.5 3.5 9.333 7.5 4z" />
      </svg>
    ),
    specs: [
      'Todo lo incluido en Oro',
      'Servicio de mayordomo / ama de llaves',
      'Limpieza de pileta y espacios exteriores',
      'Mantenimiento de jardín básico',
      'Compras de limpieza incluidas',
      'Disponibilidad los 7 días de la semana',
      'Personal exclusivo asignado',
      'Protocolo personalizado por cliente',
      'Seguro de responsabilidad civil incluido',
    ],
  },
]

// ─── Componente principal ────────────────────────────────────────────────────
export default function ServiceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scroll(dir: 'left' | 'right') {
    if (!trackRef.current) return
    const card = trackRef.current.querySelector('.carousel-card') as HTMLElement
    const offset = (card?.offsetWidth ?? 320) + 24 // ancho de tarjeta + gap
    trackRef.current.scrollBy({ left: dir === 'right' ? offset : -offset, behavior: 'smooth' })
  }

  return (
    <section
      id="planes"
      className="py-20 px-4 relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Encabezado de sección */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <p
          className="text-xs uppercase tracking-[0.3em] mb-3"
          style={{ color: 'var(--accent-gold)' }}
        >
          Nuestros Planes
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          Elige tu Nivel de Excelencia
        </h2>
        <div className="gold-divider mb-4" />
        <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Cuatro categorías diseñadas para adaptarse a cada necesidad, desde el mantenimiento
          esencial hasta el servicio total sin límites.
        </p>
      </div>

      {/* Flechas de navegación (desktop) */}
      <div className="max-w-6xl mx-auto relative">
        <button
          onClick={() => scroll('left')}
          aria-label="Anterior plan"
          className="
            hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full items-center justify-center
            border transition-all duration-200
            hover:scale-110
          "
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          ‹
        </button>
        <button
          onClick={() => scroll('right')}
          aria-label="Siguiente plan"
          className="
            hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10
            w-10 h-10 rounded-full items-center justify-center
            border transition-all duration-200
            hover:scale-110
          "
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          ›
        </button>

        {/* Track con scroll-snap */}
        <div ref={trackRef} className="carousel-track">
          {tiers.map((tier) => (
            <CarouselCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>

      {/* Indicadores táctiles */}
      <div className="flex justify-center gap-2 mt-4">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className="w-1.5 h-1.5 rounded-full transition-all"
            style={{ background: 'var(--border-color)' }}
          />
        ))}
      </div>
    </section>
  )
}

// ─── Tarjeta individual ──────────────────────────────────────────────────────
function CarouselCard({ tier }: { tier: ServiceTier }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5491100000000'
  const message = encodeURIComponent(
    `Hola, me interesa el plan *${tier.name}*. ¿Podrían darme más información y una cotización?`
  )
  const href = `https://wa.me/${number}?text=${message}`

  return (
    <div
      className={`carousel-card card-hover relative rounded-sm overflow-hidden flex flex-col`}
      style={{
        background: 'var(--bg-card)',
        borderLeft: `3px solid ${tier.borderColor}`,
        boxShadow: tier.highlight
          ? `0 4px 24px rgba(${201},${168},${76}, 0.18)`
          : '0 2px 12px var(--shadow-color)',
      }}
    >
      {/* Badge "Más Popular" en plan Oro */}
      {tier.highlight && (
        <div
          className="absolute top-0 right-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1"
          style={{
            background: tier.color,
            color: tier.textColor,
          }}
        >
          Más Popular
        </div>
      )}

      {/* Header de la tarjeta */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3 mb-3">
          {tier.icon}
          <div>
            <span
              className="text-xs font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm"
              style={{ background: `${tier.color}22`, color: tier.color }}
            >
              {tier.name}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
          {tier.tagline}
        </h3>
        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {tier.frequency}
        </p>
      </div>

      {/* Divisor */}
      <div className="mx-6 border-t" style={{ borderColor: 'var(--border-color)' }} />

      {/* Lista de especificaciones */}
      <ul className="p-6 pt-4 flex-1 space-y-2.5">
        {tier.specs.map((spec, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span className="mt-0.5 text-xs flex-shrink-0" style={{ color: tier.color }}>
              ✦
            </span>
            {spec}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="p-6 pt-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
          style={{
            background: tier.highlight
              ? `linear-gradient(135deg, ${tier.color}, #E8C870)`
              : 'transparent',
            color: tier.highlight ? tier.textColor : tier.color,
            border: tier.highlight ? 'none' : `1px solid ${tier.color}`,
          }}
        >
          Cotizar este plan
        </a>
      </div>
    </div>
  )
}
