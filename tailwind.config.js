/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    colors:{
      yellow: '#ECA539',
      red: '#F22539',
      darkRed: '#C00E20',
      darkGrey: '#353535',
      grey: '#5E5E5E',
      lightGrey: '#BFBFBF',
      white1: '#F5F5F5',
      white2: '#F9F9F9',
      white: '#FFFFFF',
      darkBg: '#242424'
    },
    extend: {
      fontSize:{
        "2.5xl":"26px"
      },
      screens:{
        "h-xs": { 'raw': '(min-height: 400px)' },
        "h-sm": { 'raw': '(min-height: 500px)' },
        "h-md": { 'raw': '(min-height: 650px)' },
        
        
      }
    },
  },
  plugins: [],
}

