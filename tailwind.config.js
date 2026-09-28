/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        srm: {
          navy: '#0b3366',
          darkNavy: '#07244a',
          blue: '#0c4da2',
          darkBlue: '#08326b',
          lightBlue: '#1a6ee0',
          accent: '#f8a51d',
          gold: '#e69500',
          softBlue: '#edf3fc'
        },
        dark: {
          bg: '#0a0d14',
          surface: '#121826',
          card: '#182234',
          border: '#223048',
          text: '#e2e8f0',
          muted: '#94a3b8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Roboto Slab"', 'Merriweather', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
