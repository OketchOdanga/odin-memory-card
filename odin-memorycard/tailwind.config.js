/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily :{
      main : ['Work Sans', 'sans-serif'],
    },
    fontSize : {
      'heading' : ['25px', {
        fontWeight : '700'
      }],
      'regular' : ['18px', {
        fontWeight : '400'
      }]
    },
    screens : {
      'mb' : '375px',
      'md' : '640px',
    },
    extend: {},
  },
  plugins: [],
}