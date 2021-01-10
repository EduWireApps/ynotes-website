const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        space: {
          100: "#c9ccea",
          200: "#9299d6",
          300: "#5c66c1",
          400: "#3a4398",
          500: "#252b62",
          600: "#20234F",
          700: "#181B3D",
          800: "#11132B",
          900: "#0A0B19"
        }
      },
      minHeight: {
        "24": defaultTheme.spacing[24]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
