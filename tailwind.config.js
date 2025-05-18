export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Placeholder company primary color
        secondary: '#f59e42', // Placeholder company secondary color
        picton: {
          50: '#eff9ff',
          100: '#def1ff',
          200: '#b6e5ff',
          300: '#75d3ff',
          400: '#2cbdff',
          500: '#00aaff',
          600: '#0083d4',
          700: '#0068ab',
          800: '#00588d',
          900: '#064974',
          950: '#042e4d',
        },
      },
    },
  },
  plugins: [],
}
