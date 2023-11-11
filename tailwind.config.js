/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'primary': '#A6CF98',
        'secondary': "#557C55",
        'third': '#F2FFE9',
        'four': '#FA7070'
      },
      fontFamily: {
        body: ['Roboto']
      }
    },
  },
  plugins: [],
}

