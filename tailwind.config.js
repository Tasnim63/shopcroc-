/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      
    },
    container: {
      width:"80%",
      
    },
    colors: {
      pink:"#fecaca",
      blue:"#6366f1",
      white: '#FFFFFF',
      lightGray:"#e5e5e5",
      button:"#8ba73b",
      gradientOne:"#F5F5F5",
      black:"#171717",
      gradientTwo:"#FFFFFF",
      },
    extend: {},
  },
  plugins: [],
}
