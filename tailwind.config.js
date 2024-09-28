/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0' },
          '60%': { backgroundPosition: '600px' },
          '100%': { backgroundPosition: '600px' },
        },
      },
      animation: {
        shine: 'shine 6s linear infinite',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        courgette: ['Courgette', 'cursive']
      },
      height: {
        '192': '36rem', 
      },
      colors: {
        background: '#F5F5F5',
        main: '#E6E6FA',
        accent: '#FFC0CB',
        neutral: '#36454F',
        purple: '#663399'
      },
    },
  },
  plugins: [],
}
