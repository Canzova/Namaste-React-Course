/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Basic", "sans-serif"],
        title : ["Bricolage Grotesque", "sans-serif"],
      },
    },
    plugins: [],
  },
};
