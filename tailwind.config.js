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
      olive: "#25291c",
      white: "#F3EDE2",
      lightBeige: "#F4EBD0",
      mdBrown: "#725E54",
      staleBrown: "#4D473F",
      mdWhite: "#FFF6EA",
      black: "#000000",
      brightWhite: "#FFFAF2",
      lightGreen: "#ADB690"
    },
    backgroundImage: {
      "home-bg": "url('/src/assets/LVM_Background.png')",
      "about-bg": "url('/src/assets/LVM_Home_Background.png')",

    },
    extend: {},
  },
  plugins: [],
};
