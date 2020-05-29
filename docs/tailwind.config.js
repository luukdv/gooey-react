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
        '8': '2rem',
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
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  purge: {
    content: ['./src/**/*.tsx'],
    mode: 'all',
  },
}
