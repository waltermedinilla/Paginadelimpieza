import MobileMenu from './MobileMenu'

function LogoAmenes() {
  return (
    <a href="/" className="flex flex-col leading-tight select-none flex-shrink-0">
      <div className="flex items-baseline">
        <span className="font-extrabold text-3xl tracking-wide" style={{ color: '#C9A84C' }}>
          AMENE&apos;S&nbsp;
        </span>
        <span className="font-extrabold text-3xl tracking-wide" style={{ color: '#CC0000' }}>
          Box.
        </span>
      </div>
      <span
        className="font-medium tracking-[0.2em] uppercase"
        style={{ color: '#9CA3AF', fontSize: '0.6rem' }}
      >
        Limpieza &amp; Servicios
      </span>
    </a>
  )
}

const navLinks = [
  { href: '/#sectores', label: 'Servicios' },
  { href: '/#planes', label: 'Planes' },
  { href: '/galeria', label: 'Galería' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/presupuesto', label: 'Presupuesto' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-md relative"
      style={{
        background: 'rgba(var(--bg-secondary-rgb, 28,26,24), 0.92)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo centrado (absoluto) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <LogoAmenes />
        </div>

        {/* Nav izquierda — primeros 3 links */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.slice(0, 3).map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Nav derecha — últimos 3 links + hamburguesa mobile */}
        <div className="flex items-center gap-5 ml-auto">
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.slice(3).map(({ href, label }) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
