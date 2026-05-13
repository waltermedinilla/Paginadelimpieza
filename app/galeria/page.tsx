import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import GaleriaGrid from './GaleriaGrid'
import GlowingDivider from '@/components/GlowingDivider'

export const metadata: Metadata = {
  title: "Galería de Trabajos | AMENE'S Box",
  description: 'Conocé los resultados reales de nuestros servicios de limpieza profesional.',
}

const CATEGORIAS = ['Hogar', 'Industrial', 'Post-obra', 'Exterior']

interface GaleriaItem {
  src: string
  alt: string
  categoria: string
}

function getItems(): GaleriaItem[] {
  const items: GaleriaItem[] = []
  for (const cat of CATEGORIAS) {
    const dir = path.join(process.cwd(), 'public', 'galeria', cat.toLowerCase())
    try {
      const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g|webp|svg)$/i.test(f))
      for (const file of files) {
        items.push({
          src: `/galeria/${cat.toLowerCase()}/${file}`,
          alt: file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').trim(),
          categoria: cat,
        })
      }
    } catch {
      // carpeta vacía o inexistente — se ignora
    }
  }
  return items
}

export default function GaleriaPage() {
  const items = getItems()

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
        <GlowingDivider className="mb-6" />
        <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Resultados reales que reflejan nuestro compromiso con la excelencia.
          Cada trabajo es un estándar que superamos.
        </p>
      </section>

      <GaleriaGrid items={items} />
    </main>
  )
}
