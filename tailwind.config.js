/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ]
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  important: '#app',
  theme: {
    fontFamily: {
      edusa: ['EduSABeginner', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      white: '#fff',
      black: '#000',
      gray: '#f3f4f6',
      red: '#ef4444',
      primary: '#fff',
      secondary: '#fff',
      neutral: '#fff'
    },
    extend: {}
  },
  plugins: []
}
