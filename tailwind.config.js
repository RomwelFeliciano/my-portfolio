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
        // 087f8c mint color
        main: "#5b2a86",
        second: "#eaf4f4",
        body: "#EEEEEE",
        accent: "#1D1D1D",
        night: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
