/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#FF7518',
        'secondary' : '#5D3A7D',
        'red': '#FF0000',
        'dark' : '#190c24ff',
        'green' : '#7FFF00',
        
      },
       fontFamily: {
        myFont: ['Comico-Regular', 'sans-serif'],
         creepy: ['Creepster', 'cursive'],
      },
   textShadow: {
        orange: '6px 6px 9px rgba(255, 117, 24, 0.9)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.shadow-orange': {
          textShadow: '6px 6px 9px  rgba(255, 117, 24, 0.9)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],

};
