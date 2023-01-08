const { fontFamily, screens } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": {
            transform: "rotate(0deg)",
            transformOrigin: "bottom right",
          },
          "20%": {
            transform: "rotate(-10deg)",
            transformOrigin: "bottom right",
          },
          "40%": {
            transform: "rotate(10deg)",
            transformOrigin: "bottom right",
          },
          "60%": {
            transform: "rotate(-10deg)",
            transformOrigin: "bottom right",
          },
          "80%": {
            transform: "rotate(10deg)",
            transformOrigin: "bottom right",
          },
          "100%": {
            transform: "rotate(0deg)",
            transformOrigin: "bottom right",
          },
        },
        fadein: {
          "0%": {
            transform: "translateY(-10px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 100,
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out 1",
        fadein: "fadein 1s ease 1",
      },
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
