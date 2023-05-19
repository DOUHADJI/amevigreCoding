/** @type {import('tailwindcss').Config} */

const { withAnimations } = require('animated-tailwindcss')

module.exports = withAnimations({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "prompt" : ["prompt", "sans-serif", "..."],
        "eyesome" : ["eyesome", "sans-serif", "..."]
      },
      colors : {
        "appThemeColor" : "#040F5A",
        "appGreen" : "#C2E1C6",
        "cardColorOne" : "#6C587F"
      }
     
    },
    
  },
  plugins: [],
})