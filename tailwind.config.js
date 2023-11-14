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
        // eaf4f4 lightsky blue color
        main: "#5b2a86",
        second: "#EAEAFF",
        body: "#EEEEEE",
        accent: "#1D1D1D",
        night: "#0B0E14",
      },
    },
  },
  plugins: [],
};
