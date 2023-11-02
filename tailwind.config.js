/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        main: "#6DD9D2",
        second: "#393E46",
        body: "#EEEEEE",
        accent: "#1D1D1D",
        night: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
