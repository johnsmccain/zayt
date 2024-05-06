/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mdisplay: ["MDisplay", "sans-sarif"],
        rdisplay: ["RDisplay", "sans-sarif"],
        sbdisplay: ["SBDisplay", "sans-sarif"],
        sdisplay: ["SDisplay", "sans-sarif"],
        routfit: ["ROutfit", "sans-sarif"],
        loutfit: ["LOutfit", "sans-sarif"],
        moutfit: ["MOutfit", "sans-sarif"],
      },
      backgroundColor:{
        customPrimary: "#426162",
        customSecondary: "#F66D2A"
      },
      textColor:{
        customPrimary: "#426162",
        customSecondary: "#F66D2A"
      }
    },

  },
  plugins: [],
}