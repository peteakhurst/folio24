/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    extract,
  },
  theme: {
    screens,
    fontSize,
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true,
    },
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
  plugins: [fluid],
};
