/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        metropolis: ['Metropolis', 'sans-serif'],
      },
      height: {
        '96': '24rem',  
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem', 
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem', 
        '240': '60rem', 
      },
      width: {
        '96': '24rem',  
        '112': '28rem',
        '128': '32rem',
        '144': '36rem', 
        '160': '40rem',
        '176': '44rem', 
        '192': '48rem', 
        '208': '52rem', 
        '224': '56rem', 
        '240': '60rem',
        '286': '72rem',
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
        'red-maroon':'#DB3022',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}