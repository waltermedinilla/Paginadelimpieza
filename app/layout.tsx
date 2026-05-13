import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopLine from '@/components/TopLine'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "AMENE'S Box | Limpieza & Servicios Profesionales",
  description:
    "Servicios de limpieza profesional de alta gama. Planes Bronce, Plata, Oro y Diamante para hogares, empresas, geriátricos y centros comerciales. Cotización inmediata por WhatsApp.",
  keywords: 'limpieza profesional, servicio de limpieza, limpieza hogar, limpieza industrial',
  authors: [{ name: "AMENE'S Box Limpieza & Servicios" }],
  openGraph: {
    title: "AMENE'S Box | Limpieza & Servicios",
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
    <html lang="es" suppressHydrationWarning className={jakarta.variable}>
      <head>
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
      <body>
        <TopLine />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
