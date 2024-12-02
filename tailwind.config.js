/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        darkblue: {
          DEFAULT: '#0A192F'
        },
        blue: {
          DEFAULT: '#031c4f'
        },
        lightblue: {
          DEFAULT: '#e8f1ff'
        },
        yellow: {
          DEFAULT: '#ffb703'
        },
        orange: {
          DEFAULT: '#fb8500'
        },
        gray : {
          DEFAULT : '#a3a2a2'
        }, 
        white : {
          DEFAULT : '#f3f3f3'
        }
      }
    },
  },
  plugins: [],
}