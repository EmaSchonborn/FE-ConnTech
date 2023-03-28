module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false,
  theme: {
    extend: {
    },
    fontFamily: {
      'D-DIN': ['D-DIN', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};