'use client'

// ─── Icono SVG de WhatsApp (inline, sin dependencias) ───────────────────────
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.118 1.531 5.845L.057 23.535a.75.75 0 0 0 .918.943l5.84-1.53A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.5-5.24-1.375l-.375-.213-3.886 1.02 1.037-3.795-.232-.389A9.957 9.957 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  )
}

export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5491100000000'
  const message =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
    'Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n%20de%20limpieza%20profesional.'
  const href = `https://wa.me/${number}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotización rápida por WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-accent-gold text-bg-secondary
        px-4 py-3 rounded-full
        font-bold text-sm tracking-wide
        shadow-2xl
        animate-pulse-soft
        hover:scale-105
        transition-transform duration-200
      "
      style={{ boxShadow: '0 8px 32px rgba(var(--accent-gold-rgb), 0.4)' }}
    >
      <WhatsAppIcon />
      {/* Texto visible solo en pantallas medianas en adelante */}
      <span className="hidden md:inline whitespace-nowrap">Cotización Rápida</span>
    </a>
  )
}
