/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        "green-light": "hsla(160, 100%, 37%, 1)",
      },
    },
  },
  plugins: [],
};
