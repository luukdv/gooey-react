const colors = require('@tailwindcss/ui/colors')
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['Gooey', ...theme.fontFamily.sans],
      },
      inset: {
        '1/2': '50%',
      },
      spacing: {
        '80': '20rem',
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
