const colors = require('@tailwindcss/ui/colors')
const theme = require('tailwindcss/defaultTheme')

const tempFont = theme.fontFamily.sans.slice(4)

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Gooey', ...tempFont], // https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap&text=acefghorRTty
        temp: tempFont,
      },
    },
    colors,
    screens: {
      xs: '480px',
      ...theme.screens,
    },
  },
  // https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
  variants: {},
}
