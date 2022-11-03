/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#bac8ff",
        dark: "rgb(9, 34, 56)",
        "btn-dark": "#4c6ef5",
        "btn-light": "#91a7ff",
      },
    },
  },
  plugins: [],
};
