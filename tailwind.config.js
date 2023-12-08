/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        royalblue: "#0074f0",
        ffffff: "#fff",
        darkslategray: "#494949",
        orange: "#ffa700",
        gray: "#1c1b1f",
        silver: "#b6b6ba",
        ff4454: "#ff4454",
        b566: "#61b566",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "arial-rounded-mt-bold": "'Arial Rounded MT Bold'",
      },
      borderRadius: {
        "8xs": "5px",
        "14xl": "33px",
        "mid-5": "17.5px",
        "11xs-5": "1.5px",
      },
    },
    fontSize: {
      xl: "20px",
      lg: "18px",
      "29xl": "48px",
      "5xl": "24px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
