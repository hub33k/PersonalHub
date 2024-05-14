const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [
    //
    require('@ph/config/tailwind/tailwind.config.cjs'),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
module.exports = config;
