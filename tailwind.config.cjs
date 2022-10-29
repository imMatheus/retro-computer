/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          "": "#ffffff",
          dimmed: "#c0c0c0",
          dark: "#808080",
        },
        text: {
          dimmed: "#c0c0c0",
        },
      },
    },
  },
  plugins: [],
};
