import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog & Consejos | AMENE'S Box",
  description: 'Consejos de limpieza, mantenimiento del hogar y novedades del sector.',
}

const articulos = [
  {
    categoria: 'Hogar',
    titulo: '5 errores comunes al limpiar el baño (y cómo evitarlos)',
    resumen: 'Muchos productos populares pueden dañar superficies o no eliminar gérmenes correctamente. Conocé los errores más frecuentes.',
    fecha: 'Próximamente',
    icono: '🧹',
  },
  {
    categoria: 'Productos',
    titulo: 'Productos biodegradables vs. convencionales: ¿cuál elegir?',
    resumen: 'Analizamos el impacto ambiental y la eficacia de los principales productos de limpieza del mercado.',
    fecha: 'Próximamente',
    icono: '🌿',
  },
  {
    categoria: 'Industrial',
    titulo: 'Protocolo de desinfección para espacios de salud',
    resumen: 'Los geriátricos y clínicas requieren un nivel de higiene superior. Estos son los estándares que aplicamos.',
    fecha: 'Próximamente',
    icono: '🏥',
  },
  {
    categoria: 'Consejos',
    titulo: 'Cómo mantener el hogar limpio entre visitas del servicio',
    resumen: 'Pequeños hábitos diarios que mantienen la higiene profunda por más tiempo y reducen el esfuerzo semanal.',
    fecha: 'Próximamente',
    icono: '✨',
  },
  {
    categoria: 'Post-obra',
    titulo: 'Limpieza post-obra: qué esperar y cómo prepararse',
    resumen: 'Una reforma o construcción deja mucho más que polvo. Conocé todo el proceso de limpieza profesional post-obra.',
    fecha: 'Próximamente',
    icono: '🏗️',
  },
  {
    categoria: 'Consejos',
    titulo: 'Los mejores productos para cada tipo de superficie',
    resumen: 'Porcellanato, madera, acero inoxidable, mármol — cada material necesita un tratamiento específico.',
    fecha: 'Próximamente',
    icono: '🪴',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}
      >
        <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>
          Consejos & Novedades
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Blog
        </h1>
        <div className="gold-divider mb-6" />
        <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Compartimos conocimiento sobre limpieza profesional, productos y buenas prácticas
          para que tu hogar o negocio siempre esté en las mejores condiciones.
        </p>
      </section>

      {/* Artículos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articulos.map((art, i) => (
              <article
                key={i}
                className="flex flex-col rounded-xl overflow-hidden card-hover"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
              >
                {/* Imagen placeholder */}
                <div
                  className="h-40 flex flex-col items-center justify-center gap-2"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <span className="text-4xl">{art.icono}</span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm"
                      style={{ background: 'var(--accent-gold)22', color: 'var(--accent-gold)' }}
                    >
                      {art.categoria}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{art.fecha}</span>
                  </div>
                  <h2 className="font-bold text-base mb-2 leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {art.titulo}
                  </h2>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {art.resumen}
                  </p>
                  <span
                    className="mt-4 text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Artículo próximamente →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
