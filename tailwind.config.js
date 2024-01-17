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
        verdeOscuroTognis: '#365F3D',
        verdeClaroTognis: '#AFC126',
        cremaTognis: '#F0EEE3',
        negroTognis: '#202020',
      }
    },
    plugins: [],
  }
}

