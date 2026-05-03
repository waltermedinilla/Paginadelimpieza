import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Colores mapeados a variables CSS para soporte de temas
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
        },
        accent: {
          gold: 'var(--accent-gold)',
          'gold-light': 'var(--accent-gold-light)',
          'gold-muted': 'var(--accent-gold-muted)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        border: 'var(--border-color)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      // Animación de pulso suave para el botón WhatsApp
      keyframes: {
        pulse_soft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(var(--accent-gold-rgb), 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(var(--accent-gold-rgb), 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        pulse_soft: 'pulse_soft 2.5s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
