/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-custom': '#181818',
        'light-blue': '#3ab8ee',
        'gray-custom': '#282828',
        'light-gray': '#b3b3b3',
      },
      boxShadow: {
        'custom': '0 4px 8px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}


