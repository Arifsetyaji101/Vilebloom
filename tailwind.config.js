/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'blue-vb': '#2D5773',
      'purple-vb': '#D9799E',
      'pink-vb': '#FB929E',
      'orange-vb': '#FDC9AB',
      'gray-vb': '#F9F9FB',
      'blue-vb-80': '#397094',
      'purple-vb-80': '#F694BA',
      'pink-vb-80': '##FEA9B3',
      'orange-vb-80': '#FFD4BB',
      neutral: '#ffffff'

    },
    extend: {}
  },
  plugins: []
}
