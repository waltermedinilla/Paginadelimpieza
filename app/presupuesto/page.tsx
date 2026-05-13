'use client'

import { useState } from 'react'
import GlowingDivider from '@/components/GlowingDivider'

const servicios = [
  'Limpieza general de hogar',
  'Limpieza profunda residencial',
  'Limpieza industrial / comercial',
  'Limpieza post-obra',
  'Desinfección de ambientes',
  'Limpieza de espacios exteriores',
  'Otro (especificar en descripción)',
]

export default function PresupuestoPage() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    descripcion: '',
  })
  const [enviado, setEnviado] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5491100000000'
    const msg = encodeURIComponent(
      `Hola! Quisiera solicitar un presupuesto.\n\n` +
      `*Nombre:* ${form.nombre}\n` +
      `*Teléfono:* ${form.telefono}\n` +
      `*Servicio:* ${form.servicio}\n` +
      `*Descripción:* ${form.descripcion}`
    )
    window.open(`https://wa.me/${number}?text=${msg}`, '_blank')
    setEnviado(true)
  }

  const inputStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    width: '100%',
    fontSize: '0.875rem',
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    marginBottom: '0.5rem',
    color: 'var(--text-secondary)',
  }

  return (
    <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}
      >
        <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-gold)' }}>
          Sin costo ni compromiso
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Solicitar Presupuesto
        </h1>
        <GlowingDivider className="mb-6" />
        <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Completá el formulario y nos ponemos en contacto por WhatsApp en minutos.
          Cotización personalizada, sin letras chicas.
        </p>
      </section>

      {/* Formulario */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          {enviado ? (
            <div
              className="text-center p-10 rounded-xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
            >
              <p className="text-4xl mb-4">✅</p>
              <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                ¡Mensaje enviado!
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Se abrió WhatsApp con tu solicitud. Te respondemos a la brevedad.
              </p>
              <button
                onClick={() => setEnviado(false)}
                className="mt-6 text-xs uppercase tracking-widest font-bold"
                style={{ color: 'var(--accent-gold)' }}
              >
                Enviar otro presupuesto
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
            >
              <div>
                <label htmlFor="nombre" style={labelStyle}>Nombre completo</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="telefono" style={labelStyle}>Teléfono</label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  placeholder="Ej: 11 1234-5678"
                  value={form.telefono}
                  onChange={handleChange}
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="servicio" style={labelStyle}>Tipo de servicio</label>
                <select
                  id="servicio"
                  name="servicio"
                  required
                  value={form.servicio}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Seleccioná un servicio</option>
                  {servicios.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="descripcion" style={labelStyle}>Descripción del espacio</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows={4}
                  placeholder="Contanos el tamaño, cantidad de ambientes, frecuencia deseada, etc."
                  value={form.descripcion}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn-gold w-full justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.531 5.845L.057 23.535a.75.75 0 00.918.943l5.84-1.53A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.375l-.375-.213-3.886 1.02 1.037-3.795-.232-.389A9.957 9.957 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Enviar por WhatsApp
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
