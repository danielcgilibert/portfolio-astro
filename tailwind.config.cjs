/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
      },

      backgroundColor: {
        dark: '#1E1E1E',
      },
      colors: {
        yellow: '#FDE48B',
        gray: '#888888',
      },
    },
  },
  plugins: [],
}
