# Limpieza Profesional — Sitio Web

Landing page de servicios de limpieza profesional construida con Next.js 14, Tailwind CSS y TypeScript.

---

## Requisitos previos

- Node.js 18+ instalado
- Cuenta en [GitHub](https://github.com)
- Cuenta en [Vercel](https://vercel.com) (gratis)

---

## 1. Instalación local

```bash
# Instalar dependencias
npm install

# Crear archivo de variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tu número de WhatsApp real

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

---

## 2. Variables de entorno

Editar `.env.local`:

```env
# Número de WhatsApp sin + ni espacios (código de país + número)
# Ejemplo Argentina: 5491122334455
NEXT_PUBLIC_WHATSAPP_NUMBER=5491122334455

# Mensaje predeterminado (URL-encoded)
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hola%2C%20quisiera%20solicitar%20una%20cotizaci%C3%B3n.
```

> ⚠️ **Nunca subas `.env.local` a Git.** Ya está en `.gitignore`.

---

## 3. Subir a GitHub

```bash
# Inicializar repositorio Git
git init
git add .
git commit -m "feat: sitio web limpieza profesional"

# Crear repositorio en GitHub (sin README ni licencia)
# Luego conectar el remoto:
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

---

## 4. Desplegar en Vercel

### Opción A — Dashboard (recomendado)

1. Ir a [vercel.com/new](https://vercel.com/new)
2. Importar el repositorio de GitHub
3. Vercel detecta Next.js automáticamente
4. Agregar variables de entorno en la sección **Environment Variables**:
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
   - `NEXT_PUBLIC_WHATSAPP_MESSAGE`
5. Clic en **Deploy**

### Opción B — CLI (desde terminal)

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Desplegar (sigue el asistente interactivo)
npx vercel

# Para producción
npx vercel --prod
```

---

## 5. Personalización

### Cambiar número de WhatsApp
Editar `NEXT_PUBLIC_WHATSAPP_NUMBER` en `.env.local` o en Vercel Dashboard.

### Cambiar nombre/marca
Editar `app/page.tsx` — buscar "Limpieza Profesional" y reemplazar con tu nombre.

### Reemplazar imágenes placeholder
Buscar en `app/page.tsx` las líneas con:
```
https://placehold.co/560x380/...
```
Reemplazar con URLs reales o rutas a imágenes en `/public`.

### Modificar planes y servicios
Editar el array `tiers` en `components/ServiceCarousel.tsx`.

### Modificar colores del tema
Editar las variables CSS en `app/globals.css` — sección `:root` (tema oscuro) y `[data-theme="sage"]` (tema claro).

---

## 6. Estructura del proyecto

```
/app
  layout.tsx        — Root layout, fuente, metadatos, script anti-FOUC
  page.tsx          — Página principal (todas las secciones)
  globals.css       — Variables CSS de temas, animaciones, base styles

/components
  ThemeSwitcher.tsx — Botón de cambio de tema (localStorage, sin hidratación)
  ServiceCarousel.tsx — Carrusel Bronce/Plata/Oro/Diamante (scroll-snap nativo)
  WhatsAppButton.tsx  — Botón flotante fijo

/public
  placeholder.svg   — SVG placeholder (reemplazar por assets reales)

tailwind.config.ts  — Colores mapeados a variables CSS
next.config.ts      — Configuración Next.js para producción
.env.local          — Variables de entorno (NO subir a Git)
```

---

## 7. Build de producción

```bash
npm run build
npm run start
```

---

## Tecnologías utilizadas

- [Next.js 14](https://nextjs.org) — App Router, Server Components
- [Tailwind CSS 3](https://tailwindcss.com) — Utilidades CSS
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) — Tipografía via `next/font`
- CSS Variables nativas — Sistema de temas sin librerías externas
- CSS Scroll Snap — Carrusel sin dependencias
