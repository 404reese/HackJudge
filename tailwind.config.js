module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure you add paths to your components
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ["Minecraft", "sans-serif"], // Custom font name
      },
    },
  },
  plugins: [],
}
