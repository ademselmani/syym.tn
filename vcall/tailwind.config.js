/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./vcall.html"], 
  theme: {
    extend: {
      colors: {
        'custom-bg': '#F7F3EE',
        'custom-button': '#4169E1',
        'custom-endcall': '#EB5757',
        'custom-text': '#000000',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
