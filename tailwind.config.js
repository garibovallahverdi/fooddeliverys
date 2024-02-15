/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        screens:{
         xs:'100%',
         sm:'100%',
         md:'100%',
         lg:'900px',
         xl:'1200px',
        },
     },
     backgroundImage:{
      'bg-hero':"url('/src/assets/2/635a1a21989f0f8051a9071d_hero-bg-pattern.png')"
     },
      colors:{
        primary:"#f29c52",
        secondary:"#492d13",
        border:"#f7ece3"
      },
      fontFamily: {
        outfit:['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}