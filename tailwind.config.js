/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#234876',
          800: '#1e3a5c',
          900: '#1a2942',
        },
        gold: {
          400: '#e0bb40',
          500: '#d4af37',
        },
      },
    },
  },
  plugins: [],
};