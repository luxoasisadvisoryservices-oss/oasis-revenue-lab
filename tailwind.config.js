/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'Helvetica Neue', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        sand: {
          50: '#faf8f5',
          100: '#f4f0e8',
          200: '#e8dfd0',
          300: '#d5c5aa',
          400: '#bfa882',
          500: '#a8895e',
          600: '#8e6e45',
          700: '#735638',
          800: '#5e4430',
          900: '#4d382a',
        },
        slate: {
          850: '#1a2332',
          950: '#0d1520',
        },
        gold: {
          400: '#d4a843',
          500: '#c49632',
          600: '#a87d22',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
