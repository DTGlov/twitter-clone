module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          primary: "#ed4956",
        },
        gray: {
          base: "#616161",
          background: "#fafafa",
          primary: "#dbdbdb",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
