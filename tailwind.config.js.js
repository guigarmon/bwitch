/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bwitch-bg': '#24103a',
        'bwitch-gold': '#b38f4b',
        'bwitch-text': '#f7e5be'
      }
    },
    fontFamily: {
      montserrat: ['Montserrat', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}