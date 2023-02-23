/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        trying: "max-content 200px 1fr",
      },
      fontFamily: {
        rocksalt: ["Rock Salt", "cursive"],
      },
      colors: {
        "red-mistermenu": "#71130B",
      },
    },
  },
  plugins: [],
};
