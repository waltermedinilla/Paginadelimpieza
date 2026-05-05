import ThemeSwitcher from './ThemeSwitcher'
import MobileMenu from './MobileMenu'

function LogoAmenes() {
  return (
    <a href="/" className="flex flex-col leading-tight select-none flex-shrink-0">
      <div className="flex items-baseline">
        <span
          className="font-extrabold text-xl tracking-wide"
          style={{
            background: 'linear-gradient(90deg, #6B4C11 0%, #C9943A 25%, #F5D485 50%, #C9943A 75%, #6B4C11 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          AMENE&apos;S&nbsp;
        </span>
        <span className="font-extrabold text-xl tracking-wide" style={{ color: '#CC2222' }}>
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <LogoAmenes />

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
