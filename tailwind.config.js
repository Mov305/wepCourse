/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./javascript/**/*.{html,js}', './index.html', './about/**/*.html', './program/**/*.html'],
  theme: {
    extend: {
      screens: {
        sm: '500px',
      },
    },
  },
  plugins: [],
};
