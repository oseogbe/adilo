/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "55px",
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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