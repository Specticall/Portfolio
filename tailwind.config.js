/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#19181B",
        lighter: "#A49EB6",
        accent: "#4200FF",
        highlight: "#FF9AA0",
        border: "#383838",
        darker: "#737373",
      },
    },
  },
  plugins: [],
};
