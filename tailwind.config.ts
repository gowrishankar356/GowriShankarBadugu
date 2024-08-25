/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            danger: "#ff0000",
            primary: "#5EA800",
          },
        },
        light: {
          colors: {
            primary: {
              DEFAULT: "#3EB489",
              foreground: "#000000",
            },
            focus: "#3EB489",
          },
        },
      },
    }),
  ],
};
