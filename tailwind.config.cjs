/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rocksalt: ["Rock Salt", "cursive"],
        newscycle: ["News Cycle", "sans-serif"],
      },
      colors: {
        "red-mistermenu": "#71130B",
      },
      fontSize: {
        xs: ["7px", "16px"],
        sm: ["11px", "16px"],
        base: ["14px", "24px"],
        lg: ["16px", "28px"],
      },
    },
  },
  plugins: [],
};
