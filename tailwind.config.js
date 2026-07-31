/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        careViolet: {
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED',
          light: '#A78BFA',
          soft: '#F3E8FF',
          50: '#F5F3FF',
        },
        careBg: '#FAF7F5',
        careTopBar: '#FAF5EF',
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(124, 58, 237, 0.08)',
        'soft-lg': '0 20px 40px -15px rgba(124, 58, 237, 0.12)',
        'violet': '0 10px 25px -5px rgba(139, 92, 246, 0.3)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
