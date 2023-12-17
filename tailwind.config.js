/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
      spacing: {
        '550': '550px',
      },
      colors: {
        verdeNutrix: {
          25: '#DAEDD9',
          50: '#B5DBB3',
          75: '#90C98D',
          100: '#6BB767',
        },
        cremaNutrix: '#FAF9F8'
      }
    },
    plugins: [],
  }
}

