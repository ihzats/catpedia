/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2dd4bf',
        dark: '#0f172a'
      },
      fontFamily: {
        'pacifico': ['Pacifico']
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
