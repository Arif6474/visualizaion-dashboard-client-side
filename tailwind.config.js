module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#029944",
          secondary: "#749503",
          accent: "#F9FAFA",
          neutral: "#3D474D",
        },
      },
      "light",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
