/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "430px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 1024px) { ... }

      lg: "1024px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      darkBrown: "#282120",
      darkTeal: "#4E6766",
    },
    extend: {},
  },
  plugins: [],
};
