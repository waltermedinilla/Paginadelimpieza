# AMENE'S Box — Limpieza & Servicios Profesionales

Landing page de servicios de limpieza profesional para **AMENE'S Box**. Construida con Next.js 16 App Router, Tailwind CSS y TypeScript. Sin base de datos ni autenticación — todo el contenido es estático.

---

## Requisitos previos

- Node.js 18+ instalado
- Cuenta en [GitHub](https://github.com)
- Cuenta en [Vercel](https://vercel.com) (gratis) o plataforma similar

---

## 1. Instalación local

```bash
# Instalar dependencias
npm install

# Crear archivo de variables de entorno
# (ya existe .env.local, editarlo con el número real)
```

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Para exponer en la red local:
```bash
npm run dev -- -H 192.168.1.42
```

Abrir [http://localhost:3000](http://localhost:3000)

---

## 2. Variables de entorno

Editar `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5491122334455
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n.
```

> ⚠️ **Nunca subas `.env.local` a Git.** Ya está en `.gitignore`.

---

## 3. Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de producción (verifica errores TS y lint)
npm run start     # Servidor de producción (requiere build previo)
npm run lint      # ESLint sobre app/ y components/
```

---

## 4. Desplegar en Vercel

1. Ir a [vercel.com/new](https://vercel.com/new)
2. Importar el repositorio de GitHub
3. Vercel detecta Next.js automáticamente
4. Agregar variables de entorno:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_WHATSAPP_MESSAGE`
5. Clic en **Deploy**

---

## 5. Estructura del proyecto

```
/app
  layout.tsx              — Root layout, fuente, metadatos, script anti-FOUC
  page.tsx                — Página principal (hero, sectores, planes, servicios, CTA, socios)
  globals.css             — Variables CSS de temas, animaciones, botones, scrollbar
  nosotros/page.tsx       — Página "Sobre Nosotros"
  presupuesto/page.tsx    — Formulario de presupuesto (vía WhatsApp)
  galeria/page.tsx        — Galería de trabajos (con filtros por categoría)
  galeria/GaleriaGrid.tsx — Grid interactivo con filtros (cliente)
  blog/page.tsx           — Blog placeholder

/components
  Header.tsx              — Header sticky con logo y navegación
  Footer.tsx              — Footer con links y copyright
  MobileMenu.tsx          — Menú hamburguesa responsive
  ThemeSwitcher.tsx       — Botón de cambio de tema (dark/sage)
  ServiceCarousel.tsx     — Carrusel de planes (scroll-snap nativo)
  WhatsAppButton.tsx      — Botones flotantes (WhatsApp + Instagram + tema)

/public
  empresas/conjunto/      — Logos de socios comerciales
  galeria/                — Imágenes de galería (hogar, industrial, post-obra, exterior)
  propio/                 — Assets de la marca
  Palmera.jpeg            — Imagen decorativa del hero
```

---

## 6. Personalización

### Cambiar número de WhatsApp
Editar `NEXT_PUBLIC_WHATSAPP_NUMBER` en `.env.local`.

### Agregar socios comerciales
Colocar el logo en `public/empresas/conjunto/`. El server component lo lee automáticamente.

### Agregar imágenes a la galería
Colocar imágenes en `public/galeria/[categoria]/`. Compatible con las categorías: hogar, industrial, post-obra, exterior.

### Modificar planes
Editar el array `tiers` en `components/ServiceCarousel.tsx`.

### Modificar servicios del recuadro de profesiones
Editar el array de oficios en `app/page.tsx`.

### Navegación duplicada
El array `navLinks` está repetido en `Header.tsx`, `Footer.tsx` y `MobileMenu.tsx`. Si se agregan o remueven páginas, actualizar los tres.

### Sistema de temas
Variables CSS en `app/globals.css`:
- `:root` — tema oscuro por defecto
- `[data-theme="sage"]` — tema claro (verde salvia)

Mapeadas a Tailwind en `tailwind.config.ts`.

---

## 7. Tecnologías utilizadas

- [Next.js 16](https://nextjs.org) — App Router, Server Components
- [Tailwind CSS 3](https://tailwindcss.com) — Utilidades CSS
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — Tipografía vía `next/font`
- CSS Variables nativas — Sistema de temas sin librerías externas
- CSS Scroll Snap — Carrusel sin dependencias
