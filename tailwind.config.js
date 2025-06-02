/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        xl: '3.4rem',
      },
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        "primary-blue":"#2358DE"
      },
      boxShadow: {
        "btn": "0px 13px 40.5px 0px rgba(39, 48, 146, 0.35)"
      }
    },
  },
  plugins: [],
} 