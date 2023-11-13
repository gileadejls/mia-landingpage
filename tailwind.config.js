/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        'primary': '#82a677',
        'secondary': "#435d44",
        'third': '#171e15',
        'four': '#FA7070',
        'back': '#f1f4f0'
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

