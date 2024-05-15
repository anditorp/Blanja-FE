/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        metropolis: ['Metropolis', 'sans-serif'],
      },
      margin: {
        '81': '22rem',
        '83': '23rem',
        '84': '23.5rem',
        '85': '24rem',
        '100': '25rem',
        '105': '26rem',
        '110': '30rem',
        '120': '35rem',
        '140': '40rem',
        '150': '45rem',
        '160': '50rem',
        '170': '55rem',
        '180': '60rem',
        '190': '65rem',
        '200': '70rem',
        '210': '80rem',
        '220': '90rem',
        '250': '100rem',
        '260': '110rem',
        '270': '120rem',
        '280': '130rem',
        '300': '150rem',
      },
      padding: {
        '88': '22rem',
        '100': '25rem',
        '105': '26rem',
        '110': '30rem',
        '120': '35rem',
        '140': '40rem',
        '145': '43rem',
        '150': '45rem',
        '160': '50rem',
        '170': '55rem',
        '180': '60rem',
        '190': '65rem',
        '200': '70rem',
        '210': '80rem',
        '220': '90rem',
        '250': '100rem',
        '260': '110rem',
        '270': '120rem',
        '280': '130rem',
        '300': '150rem',
      },
      colors: {
        'red-maroon':'#DB3022'
      }
    },
  },
  plugins: [],
}