module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        hackerGreen: "#00FF00",
        darkBg: "#0D0D0D",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};