/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./vite.config.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,md}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
