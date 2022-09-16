module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f4e14e",

          secondary: "#1d6cc6",

          accent: "#62f23a",

          neutral: "#1C141F",

          "base-100": "#262244",

          info: "#648FDD",

          success: "#2CC38F",

          warning: "#F4A443",

          error: "#F2407B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
