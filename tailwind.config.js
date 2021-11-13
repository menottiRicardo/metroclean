const colors = require('tailwindcss/colors')
module.exports = {
  mode:'jit',
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
          400: "#FE7A00",
          500: "#F7F7F7",
          600: "#F87700"
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
    scale: ["active", "hover"],
    backgroundColor: ["active", "first"],
    animation: ["motion-safe"],
  },
},
  plugins: [require("tailwind-scrollbar-hide")],
};
