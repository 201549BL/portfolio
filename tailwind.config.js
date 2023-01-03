const { fontFamily, screens } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "th-background": "var(--th-background)",
        "th-background-shaded": "var(--th-background-shaded)",
        "th-contrast": "var(--th-contrast)",
        "th-contrast-shaded": "var(--th-contrast-shaded)",
      },
      width: {
        "var-max": "var(--max-width)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      screens: {
        xs: "320px",
        ...screens,
        sm: "512px",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
  darkMode: ["class", "[data-theme='dark']"],
};
