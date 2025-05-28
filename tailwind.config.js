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
    },
  },
  plugins: [],
} 