module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", //false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#EC9322",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
