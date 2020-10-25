const colors = require('./colors')
const config = require('tailwindcss/defaultConfig')
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  future: 'all',
  purge: {
    content: ['./src/**/*.tsx'],
    mode: 'all',
  },
  theme: {
    extend: {
      fontFamily: {
        heading: ['Gooey', ...theme.fontFamily.sans],
      },
      inset: {
        8: '2rem',
      },
      spacing: {
        80: '20rem',
      },
    },
    colors,
    screens: {
      xs: '480px',
      ...theme.screens,
    },
  },
  variants: {
    textColor: [...config.variants.textColor, 'group-hover'],
  },
}
