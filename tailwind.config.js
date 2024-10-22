module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      primary: "#191919",
      second: "#292929",
      accent: {
        DEFAULT: "#FFA62B",
        darkest: "#FF990A",
      },
    },
    extend: {
      fontFamily: {
        customFont: ["Roboto", "RobotoSerif"],
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
