/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        txtPurple: '#343045',
        customPurple: '#8176AF',
        customIndigo: '#C0B7E8',
        customGray: {
          100: '#F5F6F7',
          200: '#E5E7EB',
          300: '#D1D5DB',
        },
      },
      fontFamily: {
        mono: "'Montserrat',serif",
      },
    },
  },
  plugins: [],
};
