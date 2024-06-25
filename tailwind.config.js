/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        oliveGreen: '#40531B',
        coral: '#EFC8E3',
        lightGreen: '#D7F9F1',
        cream: '#F4F1DE',
      },
      fontFamily: {
        source: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
