/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: './tailwind.config.js',
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '4rem',
      }
    },
    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}