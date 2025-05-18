module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Placeholder company primary color
        secondary: '#f59e42', // Placeholder company secondary color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
