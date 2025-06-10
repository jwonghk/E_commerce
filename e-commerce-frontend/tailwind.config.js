/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'], // use like `font-inter` in Tailwind class
      },
    },
  },
  plugins: [],
}
