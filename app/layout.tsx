import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

// Fuente con subset latin para rendimiento óptimo
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Limpieza Profesional | Servicios Premium para Hogar e Industria',
  description:
    'Servicios de limpieza profesional de alta gama. Planes Bronce, Plata, Oro y Diamante para hogares, empresas, geriátricos y centros comerciales. Cotización inmediata por WhatsApp.',
  keywords: 'limpieza profesional, servicio de limpieza, limpieza hogar, limpieza industrial, limpieza empresas',
  authors: [{ name: 'Limpieza Profesional' }],
  openGraph: {
    title: 'Limpieza Profesional | Servicios Premium',
    description: 'Planes de limpieza Bronce, Plata, Oro y Diamante. Hogar e Industria.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#272422',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* suppressHydrationWarning evita el error de hidratación cuando el
       ThemeSwitcher modifica el atributo data-theme en el cliente */
    <html lang="es" suppressHydrationWarning className={jakarta.variable}>
      <head>
        {/* Script inline que lee localStorage ANTES de que React hidrate,
            previniendo el destello del tema equivocado (FOUC) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('lp-theme');
                  if (t && t !== 'dark') {
                    document.documentElement.setAttribute('data-theme', t);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
