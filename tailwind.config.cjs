/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#3887CA",
          text: "#687782",
          "blue-500": "#3887CA",
        },
      },
    },
  },
  plugins: [],
}
