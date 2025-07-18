const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans JP'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#f472b6",
        secondary: "#a5b4fc",
        fuwari: "#63b3ff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
