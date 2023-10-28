/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        motif: "#cf8b67",
        accent: "#67ABCF",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
