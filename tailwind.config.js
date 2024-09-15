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
    },
  },
  plugins: [],
}
