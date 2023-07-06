/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '2.6rem',
      '6xl':  '3.5rem'
    },
    extend: {
      colors: {
        'primary' : 'hsl(234, 29%, 20%)',
        'charcolgrey' : 'hsl(235, 18%, 26%)',
        'grey' : 'hsl(231, 7%, 60%)',
        'tomato' : 'hsl(4, 100%, 67%)',
        'shadowtomato': 'hsl(4, 56%, 38%)',
        'darkgrey': 'hsl(234, 29%, 20%)'
      }
    },
  },
  plugins: [],
}

