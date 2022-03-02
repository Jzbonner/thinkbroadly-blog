// Use tailwind config for setting up animations, plugins, and variants
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-tan": "#FAF6EB",
        "light-grey": "#DCD9D9",
        "dark-grey": "#b2b5a3",
        "blue-border": "#647f92",
      },
    },
  },
  plugins: [],
}
