/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
colors:{
"Dpurp":"#6F00C9",
"back":"#F6F6F4"
},
      fontFamily: {
      "robo" : ["Roboto", "sans-serif"]
    
    },
    },
  },
  plugins: [],

}