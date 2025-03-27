/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans, sans-serif'],
        publicsans: ['Public Sans', 'sans-serif'],

      },
    },
  },
  plugins: [],
};

