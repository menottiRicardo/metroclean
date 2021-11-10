const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      colors: {
        primary: {
          400: "#00E0F3",
          500: "#00c4fd",
        },
        dark: "#222222",
        accent: {
          100: "#DBFF00",
          200: "#00FF94",
          300: "#00E0F3",
        },
      },
    },
  },
  variants: {
  extend: {
    scale: ["active"],
    backgroundColor: ["active", "first"],
    animation: ["motion-safe"],
  },
},
  plugins: [],
};
