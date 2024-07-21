/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        seashell: "#f8f3ec",
        antiquewhite: "#dbccba",
        gray: "#2c2c2c",
        black: "#000",
        dimgray: "#4e4e4e",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        carme: "Carme",
        "kopub-batang": "'KoPub Batang'",
        shanti: "Shanti",
      },
      borderRadius: {
        "8xs": "5px",
        xl: "20px",
      },
    },
    fontSize: {
      mid: "17px",
      xl: "20px",
      base: "16px",
      mini: "15px",
      "7xl": "26px",
      "2xl": "21px",
      lg: "18px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      "51xl": "70px",
      "23xl": "42px",
      "37xl": "56px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
