/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
        pacifico: ["Pacifico", "cursive"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
