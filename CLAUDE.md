# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos principales

```bash
npm run dev       # Servidor de desarrollo en http://localhost:3000
npm run build     # Build de producción (verifica errores TS y lint)
npm run start     # Servidor de producción (requiere build previo)
npm run lint      # ESLint sobre app/ y components/
```

No hay tests automatizados en este proyecto.

## Variables de entorno

Crear `.env.local` (no se commitea):

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5491122334455
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n.
```

Si no está definido, el fallback hardcodeado es `5491100000000`. El número se consume en `app/page.tsx`, `components/ServiceCarousel.tsx`, `components/WhatsAppButton.tsx` y `app/presupuesto/page.tsx`.

## Arquitectura

**Next.js 16 App Router** sin base de datos ni autenticación. Todo el contenido es estático (datos hardcodeados en cada archivo). No hay API routes.

### Sistema de temas

Los temas se implementan 100% con CSS custom properties en `app/globals.css`. Hay dos temas:
- **dark** (por defecto): `:root { --bg-primary: #272422; --accent-gold: #C9A84C; … }`
- **sage** (claro): `[data-theme="sage"] { --bg-primary: #F5F3EE; --accent-gold: #5F8C6A; … }`

El cambio de tema se gestiona en `components/ThemeSwitcher.tsx`: escribe `data-theme` en `<html>` y persiste en `localStorage` bajo la clave `lp-theme`. Para evitar FOUC hay un script inline en `app/layout.tsx` que aplica el tema antes del primer render.

Tailwind está configurado en `tailwind.config.ts` para mapear sus tokens de color (`bg-bg-primary`, `text-accent-gold`, etc.) a las mismas variables CSS. Se puede usar tanto `style={{ color: 'var(--accent-gold)' }}` como `className="text-accent-gold"` indistintamente — el proyecto mezcla ambos enfoques.

### Carrusel de planes

`components/ServiceCarousel.tsx` es el único componente con lógica compleja. Usa **CSS Scroll Snap nativo** (`scroll-snap-type: x mandatory` en `.carousel-track`, `scroll-snap-align: start` en `.carousel-card` — definidos en `globals.css`). Los botones de flecha llaman a `scrollBy()` con el ancho de una card. Los indicadores dot se sincronizan vía listener `scroll` en un `useEffect`.

### Socios comerciales

La sección "Empresas que nos acompañan" en `app/page.tsx` se alimenta automáticamente leyendo `public/empresas/` con `fs.readdirSync` en el Server Component (`getSocios()`). Para agregar un socio basta con colocar su logo en esa carpeta — no hace falta tocar el código.

- `public/empresas/conjunto/` → logos de empresas que trabajan en conjunto (se muestran en la sección "Empresas que nos acompañan")
- `public/propio/` → assets de la propia marca (ej. `amenes-box.png`), no se muestran en esa sección

### Navegación duplicada

El array `navLinks` está repetido en `components/Header.tsx`, `components/Footer.tsx` y `components/MobileMenu.tsx`. Si se agregan o remueven páginas, hay que actualizar los tres archivos.

### Páginas en estado placeholder

- `app/galeria/page.tsx` — grid de tarjetas con "Foto próximamente"; los filtros de categoría son `<span>` sin funcionalidad real.
- `app/blog/page.tsx` — artículos con fecha "Próximamente", sin rutas dinámicas ni contenido real.
- Las imágenes de las tarjetas de sectores en `app/page.tsx` apuntan a `placehold.co`.
