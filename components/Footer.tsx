const navLinks = [
  { href: '/#sectores', label: 'Servicios' },
  { href: '/#planes', label: 'Planes' },
  { href: '/galeria', label: 'Galería' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/presupuesto', label: 'Presupuesto' },
  { href: '/blog', label: 'Blog' },
]

export default function Footer() {
  return (
    <footer
      className="py-10 px-4"
      style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex flex-col items-center leading-tight select-none">
            <div className="flex items-baseline">
              <span className="font-extrabold text-xl" style={{ color: '#C9A84C' }}>
                AMENE&apos;S&nbsp;
              </span>
              <span className="font-extrabold text-xl" style={{ color: '#CC0000' }}>
                Box.
              </span>
            </div>
            <span
              className="font-medium tracking-[0.2em] uppercase"
              style={{ color: '#9CA3AF', fontSize: '0.5rem' }}
            >
              Limpieza &amp; Servicios
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} className="footer-link">
                {label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} AMENE&apos;S Box
          </p>
        </div>
      </div>
    </footer>
  )
}
