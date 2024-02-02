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
        textGrey: '#f5ded1',
        greyLight: '#f1f1f1',
        orangeHover:'#fbaf85',
        white:'#ffffff',
        black: '#000000',
        transparent: 'rgba(0,0,0,0)',
        greyTransparent: 'rgba(0,0,0,0.7)'

      }, 
      fontFamily: {
        font: 'Manrope'
      },
    },
    plugins: [],
  }