/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#F64A35",
        "pale-color": "#434D56",
        "white-color": "#fff",
      },
      boxShadow: {
        bottom: "0 2px 4px rgb(0 0 0 / 10%)",
      },
    },
  },
  plugins: [],
};
