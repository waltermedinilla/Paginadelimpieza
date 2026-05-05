import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Galería de Trabajos | AMENE'S Box",
  description: 'Conocé los resultados reales de nuestros servicios de limpieza profesional.',
}

const categorias = ['Todos', 'Hogar', 'Industrial', 'Post-obra', 'Exterior']

const placeholders = [
  { cat: 'Hogar', titulo: 'Limpieza profunda de departamento' },
  { cat: 'Industrial', titulo: 'Limpieza de planta industrial' },
  { cat: 'Post-obra', titulo: 'Limpieza post-construcción' },
  { cat: 'Exterior', titulo: 'Limpieza de espacios exteriores' },
  { cat: 'Hogar', titulo: 'Limpieza de residencia privada' },
  { cat: 'Industrial', titulo: 'Desinfección de oficinas' },
]

export default function GaleriaPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}
      >
        <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>
          Nuestro trabajo
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Galería de Trabajos
        </h1>
        <div className="gold-divider mb-6" />
        <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Resultados reales que reflejan nuestro compromiso con la excelencia.
          Cada trabajo es un estándar que superamos.
        </p>
      </section>

      {/* Filtros */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categorias.map((cat) => (
              <span
                key={cat}
                className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border cursor-pointer transition-all duration-200"
                style={{
                  borderColor: cat === 'Todos' ? 'var(--accent-gold)' : 'var(--border-color)',
                  color: cat === 'Todos' ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  background: 'var(--bg-card)',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid de trabajos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholders.map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden card-hover"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
              >
                <div
                  className="h-52 flex flex-col items-center justify-center gap-2"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <span className="text-3xl" style={{ color: 'var(--border-color)' }}>◈</span>
                  <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    Foto próximamente
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--accent-gold)' }}>
                    {item.cat}
                  </p>
                  <h3 className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {item.titulo}
                  </h3>
                </div>
              </div>
            ))}
          </div>

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
    </main>
  )
}
