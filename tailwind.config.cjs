/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#718096",
        dark: "rgb(9, 34, 56)",
        footer: "rgb(4, 17, 27)",
        "btn-dark": "#364fc7",
        "btn-light": "#91a7ff",
        "badge-dark": "#fbd38d",
        "badge-light": "#fbd38d4d",
        "discount-percent": "#d53f8c",
        "discount-value": "#38a169",
      },
    },
  },
  plugins: [],
};
