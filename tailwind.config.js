//tailwind.config.js
module.exports = {
  purge: [], //remove this line 
  purge: ['./components/**/*.tsx', './pages/**/*.tsx','./public/**/*.html'], //add this line
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-color": {
          "main-1": "#15182B",    // navbar background color
          "main-2": "#21243B",    // light panel background color
          "main-3": "#292F56",    // navbar border color
          "main-4": "#272C48",    // icon-button background color
          "main-99": "#070A20",   // background color
        },
        "light-color": {
          "main-1": "#EDEEF5",    // navbar background color
          "main-2": "#FCFCFF",    // light panel background color
          "main-3": "#DADCEC",    // navbar border color
          "main-4": "#DADCEC",    // icon-button background color
          "main-99": "#E0E1EB",   // background color
        },
        minHeight: {
          '0': '0',
          '1/4': '25vh',
          '1/2': '50vh',
          '3/4': '75vh',
        },
        totalColor: {
          "board-font-color": "#8388A8"
        },
        hrColor: {
          "hr-col": '#3E4466'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
