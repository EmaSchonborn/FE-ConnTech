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
<<<<<<< HEAD
  plugins: [],
};
=======
  plugins: [require("daisyui")],
};
>>>>>>> 149a9bbcf576be49f74c934ec93cbf8057c63a67
