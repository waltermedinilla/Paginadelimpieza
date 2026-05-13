import type { Metadata } from 'next'
import GlowingDivider from '@/components/GlowingDivider'

export const metadata: Metadata = {
  title: "Sobre Nosotros | AMENE'S Box",
  description: "Conocé la historia, valores y equipo de AMENE'S Box Limpieza & Servicios.",
}

const valores = [
  { icon: '◈', titulo: 'Excelencia', desc: 'Cada trabajo es una oportunidad de superar las expectativas del cliente.' },
  { icon: '◈', titulo: 'Compromiso', desc: 'Cumplimos lo que prometemos, siempre, con contratos certificados.' },
  { icon: '◈', titulo: 'Confianza', desc: 'Personal verificado, seguros vigentes y protocolos transparentes.' },
  { icon: '◈', titulo: 'Innovación', desc: 'Usamos técnicas y productos de vanguardia para resultados superiores.' },
  { icon: '◈', titulo: 'Responsabilidad', desc: 'Cuidamos el medioambiente con productos certificados y biodegradables.' },
  { icon: '◈', titulo: 'Cercanía', desc: 'Trato personalizado. Cada cliente tiene un referente asignado.' },
]

const hitos = [
  { año: '2021', evento: 'Fundación de AMENE\'S Box Limpieza & Servicios' },
  { año: '2022', evento: 'Primeros contratos con empresas y geriátricos' },
  { año: '2023', evento: 'Incorporación de protocolos de certificación de personal' },
  { año: '2024', evento: 'Expansión a limpieza de espacios exteriores y post-obra' },
  { año: '2025', evento: 'Firma de contratos ante escribanía pública' },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}
      >
        <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>
          Quiénes somos
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Sobre Nosotros
        </h1>
        <GlowingDivider className="mb-6" />
        <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Somos <strong style={{ color: 'var(--text-primary)' }}>AMENE&apos;S Box Limpieza & Servicios</strong>,
          una empresa nacida con el propósito de elevar el estándar de la limpieza profesional.
          No vendemos un servicio — transformamos espacios y generamos bienestar.
        </p>
      </section>

      {/* Misión */}
      <section className="py-16 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>Nuestra misión</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Creamos Seguridad,<br />Bio-Bienestar &amp; Confort.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Creemos que un espacio limpio y ordenado impacta directamente en la salud, la productividad
            y el bienestar de las personas. Por eso trabajamos con protocolos rigurosos, productos
            certificados y personal altamente capacitado, respaldados por contratos oficiales.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 px-4" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>Lo que nos define</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Nuestros Valores
            </h2>
            <GlowingDivider />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v) => (
              <div
                key={v.titulo}
                className="p-6 rounded-xl card-hover"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
              >
                <span className="text-2xl block mb-3" style={{ color: 'var(--accent-gold)' }}>{v.icon}</span>
                <h3 className="font-bold text-base mb-2" style={{ color: 'var(--text-primary)' }}>{v.titulo}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 px-4" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>Trayectoria</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Nuestra Historia
            </h2>
            <GlowingDivider />
          </div>
          <div className="space-y-6">
            {hitos.map((hito, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div
                  className="flex-shrink-0 w-16 text-right font-bold text-sm"
                  style={{ color: 'var(--accent-gold)' }}
                >
                  {hito.año}
                </div>
                <div
                  className="flex-shrink-0 w-px self-stretch mt-1"
                  style={{ background: 'var(--border-color)' }}
                />
                <p className="text-sm leading-relaxed pt-0.5" style={{ color: 'var(--text-secondary)' }}>
                  {hito.evento}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
