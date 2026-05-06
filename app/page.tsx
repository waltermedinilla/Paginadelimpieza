import fs from 'fs'
import path from 'path'
import ServiceCarousel from '@/components/ServiceCarousel'
import FloatingButtons from '@/components/WhatsAppButton'

function HomeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <path d="M9 21V12h6v9"/>
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="1"/>
      <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

const sectors = [
  {
    id: 'hogar',
    icon: <HomeIcon />,
    title: 'Hogar & Residencias',
    subtitle: 'Para domicilios particulares y barrios privados',
    description:
      'Cuidamos cada rincón de tu hogar con productos especializados, personal capacitado y protocolos que garantizan higiene profunda sin dañar superficies ni objetos de valor.',
    items: [
      'Casas y departamentos particulares',
      'Countries y barrios privados',
      'Propiedades de alquiler temporario',
      'Limpieza post-obra residencial',
    ],
    image: 'https://placehold.co/560x380/2A2825/C9A84C?text=Limpieza+Hogar',
  },
  {
    id: 'industria',
    icon: <BuildingIcon />,
    title: 'Industria & Comercios',
    subtitle: 'Para empresas, geriátricos y centros comerciales',
    description:
      'Ofrecemos soluciones de limpieza industrial con equipamiento profesional, productos certificados y frecuencia adaptada a la operación de cada negocio.',
    items: [
      'Oficinas y edificios corporativos',
      'Geriátricos y centros de salud',
      'Centros comerciales y locales',
      'Plantas industriales y depósitos',
    ],
    image: 'https://placehold.co/560x380/2A2825/C9A84C?text=Limpieza+Industrial',
  },
]

const features = [
  { icon: '◈', title: 'Personal Certificado', desc: 'Todo nuestro equipo cuenta con capacitación en protocolos de limpieza y manipulación de productos.' },
  { icon: '◈', title: 'Productos Homologados', desc: 'Usamos exclusivamente productos certificados, respetuosos con el medio ambiente y las superficies.' },
  { icon: '◈', title: 'Seguro de Responsabilidad', desc: 'Contamos con cobertura de responsabilidad civil para cada servicio realizado.' },
  { icon: '◈', title: 'Disponibilidad 24hs/7', desc: 'Atendemos todos los días de la semana, incluyendo feriados y horarios especiales.' },
  { icon: '◈', title: 'Contratos Reales y Seguros en Escribanía', desc: 'Cada servicio respaldado por documentación oficial ante escribano público.' },
  { icon: '◈', title: 'Garantía de Satisfacción', desc: 'Si no quedás conforme, volvemos sin cargo adicional hasta que el resultado sea perfecto.' },
]

function getSocios(): { name: string; logo: string }[] {
  const dir = path.join(process.cwd(), 'public', 'empresas', 'conjunto')
  try {
    return fs.readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp|svg)$/i.test(f))
      .map((f) => ({
        name: f.replace(/\.[^.]+$/, '').replace(/[_-]/g, ' ').trim(),
        logo: `/empresas/conjunto/${f}`,
      }))
  } catch {
    return []
  }
}

export default function Page() {
  const socios = getSocios()
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5491100000000'
  const defaultMsg = 'Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20de%20limpieza%20profesional.'
  const waHref = `https://wa.me/${number}?text=${defaultMsg}`

  return (
    <>
      <main>
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section
          id="inicio"
          className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/Palmera.jpeg')",
              opacity: 0.18,
              filter: 'brightness(1.4) saturate(0.6)',
            }}
          />
          <div className="absolute inset-0" style={{ background: 'var(--bg-primary)', opacity: 0.6 }} />

          <div className="relative z-10 max-w-3xl mx-auto text-center animate-fade-in-up">
            <p className="text-xs uppercase tracking-[0.4em] mb-6 inline-block" style={{ color: 'var(--accent-gold)' }}>
              ✦ &nbsp; Excelencia en cada detalle &nbsp; ✦
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span style={{ color: 'var(--text-primary)' }}>No Hacemos Limpieza,</span>
              <br />
              <span className="text-shimmer">Creamos Bio-Bienestar</span>
            </h1>
            <p className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Servicios profesionales de alta gama para hogares e industria. Personal
              certificado, productos homologados y planes personalizados desde el nivel
              Bronce hasta el exclusivo Diamante.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.531 5.845L.057 23.535a.75.75 0 00.918.943l5.84-1.53A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.375l-.375-.213-3.886 1.02 1.037-3.795-.232-.389A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Cotización Rápida
              </a>
              <a href="#planes" className="btn-gold-outline">Ver Planes</a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
              {[
                { value: '+15', label: 'Clientes activos' },
                { value: '+3', label: 'Años de experiencia' },
                { value: '100%', label: 'Satisfacción garantizada' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold" style={{ color: 'var(--accent-gold)' }}>{stat.value}</p>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTORES
        ══════════════════════════════════════════ */}
        <section id="sectores" className="py-20 px-4" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>Sectores</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                ¿Dónde necesitás limpieza?
              </h2>
              <div className="gold-divider" />
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
              {sectors.map((sector, idx) => (
                <div
                  key={sector.id}
                  className="card-hover rounded-sm overflow-hidden"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={sector.image} alt={sector.title} className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 60%)' }} />
                    <div className="absolute bottom-4 left-5">{sector.icon}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--accent-gold)' }}>{sector.subtitle}</p>
                    <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{sector.title}</h3>
                    <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{sector.description}</p>
                    <ul className="space-y-2">
                      {sector.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                          <CheckIcon />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CARRUSEL DE PLANES
        ══════════════════════════════════════════ */}
        <ServiceCarousel />

        {/* ══════════════════════════════════════════
            POR QUÉ ELEGIRNOS
        ══════════════════════════════════════════ */}
        <section id="nosotros" className="py-20 px-4 relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[2px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)' }} />
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>Por qué elegirnos</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Creamos Seguridad,<br />Bio-Bienestar &amp; Confort.
              </h2>
              <div className="gold-divider" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, idx) => (
                <div
                  key={feat.title}
                  className="p-6 rounded-sm card-hover"
                  style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="text-2xl block mb-4" style={{ color: 'var(--accent-gold)' }}>{feat.icon}</span>
                  <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{feat.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA CONTACTO
        ══════════════════════════════════════════ */}
        <section id="contacto" className="py-20 px-4 relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-xs uppercase tracking-[0.4em] mb-4" style={{ color: 'var(--accent-gold)' }}>
              ✦ &nbsp; Contacto &nbsp; ✦
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
              Empezá hoy.
              <br />
              <span className="text-shimmer">Sin compromisos.</span>
            </h2>
            <p className="text-base mb-10 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Escribinos por WhatsApp y recibí una cotización personalizada en minutos.
              Con contratos Certificados y Responsabilidad.
            </p>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm" style={{ padding: '1rem 3rem' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.531 5.845L.057 23.535a.75.75 0 00.918.943l5.84-1.53A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.375l-.375-.213-3.886 1.02 1.037-3.795-.232-.389A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Cotizar por WhatsApp ahora
            </a>
            <div className="flex items-center justify-center gap-4 mt-14 mb-2">
              <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
              <span className="text-lg" style={{ color: 'var(--accent-gold)' }}>✿</span>
              <span className="text-sm" style={{ color: 'var(--accent-gold)' }}>✦</span>
              <span className="text-lg" style={{ color: 'var(--accent-gold)' }}>✿</span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            EMPRESAS QUE NOS ACOMPAÑAN
        ══════════════════════════════════════════ */}
        <section className="py-16 px-4" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>
                Socios comerciales
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Empresas que nos acompañan
              </h2>
              <div className="gold-divider" />
            </div>

            {socios.length > 0 ? (
              <div className="flex flex-wrap items-center justify-center gap-10">
                {socios.map((socio) => (
                  <div
                    key={socio.name}
                    className="flex items-center justify-center p-5 rounded-xl"
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', minWidth: '160px' }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={socio.logo}
                      alt={socio.name}
                      className="h-14 w-auto object-contain opacity-80"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center p-5 rounded-xl"
                    style={{ background: 'var(--bg-card)', border: '1px dashed var(--border-color)', minWidth: '160px', minHeight: '80px' }}
                  >
                    <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                      Próximamente
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <FloatingButtons />
    </>
  )
}
