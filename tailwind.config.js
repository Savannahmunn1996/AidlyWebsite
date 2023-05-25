/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "Dpurp": "#6F00C9",
        "back": "#F6F6F4",
        "footz": "#22062F"
      },
      fontFamily: {
        "robo": ["Roboto", "sans-serif"],
       
      },
    },
  },
  plugins: [],

}