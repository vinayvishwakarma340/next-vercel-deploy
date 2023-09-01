/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",

  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        playfairDisplay: [
          "'Playfair Display'",
          ...defaultTheme.fontFamily.sans,
        ],
        sourceSerif: ["'Source Serif 4'", ...defaultTheme.fontFamily.sans],
      },
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
        6000: "6000ms",
      },
      colors: {
        tahiti: "#cffafe",
        timesPurple: "#5400c2",
        timesHoverBtn: "#6c2bd9",
        timesRed: "#f02f39",
        pageBackgroundGray: "#f3f4f6",
        grape: colors.purple,
      },

      container: {
        // screens: {
        //   mobile: "1280px",
        //   tablet: "1400px",
        //   desktop: "1600px",
        // },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '0rem',
          xl: '3rem',
          '2xl': '6rem',
        },
        center: "true"
      },


    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

// "lint": "next lint",
// "dev": "node server.js",
// "build": "next build",
// "start": "NODE_ENV=production node server.js"

// [&>*>img]:transition [&>*>img]:duration-300  [&>*>img]:scale-100 [&>*>img]:hover:scale-105
