/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors:{
        orange: '#D87D4A',
        blackLight:'#101010',
        grey: '#858585',
        greyLigth: '#9B9B9B',
        orangeHover:'#fbaf85',
        white:'#ffffff',
        black: '#000000',
        transparent: 'rgba(0,0,0,0)'

      }, 
      fontFamily: {
        font: 'Manrope'
      },
    },
    plugins: [],
  }