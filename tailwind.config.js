/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#399E5A',
        secondary: '#A6CFD5',
        tertiary: '#F6E27F',
        metablack: '#232528',
        metawhite: '#EAF6FF',
      },
    },
  },
  plugins: [],
};
