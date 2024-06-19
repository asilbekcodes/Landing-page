/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green': '#22A75D',
        'blue': '#2278D4',
        'lightBlack': '#191B21',
        'lightGray': '#F2F0F4',
        'dark': '#1D1534',
      },
    },
    fontFamily: {
      'roboto': "'Roboto', sans-serif",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'lg': '5rem',
        'md': '2.5rem',
        'sm': '1rem',
      },
    },
  },
  plugins: [],
};
