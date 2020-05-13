const colors = require('@tailwindcss/ui/colors')

module.exports = {
  theme: {
    extend: {
      fontFamily: {},
    },
    colors,
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  // https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
  variants: {},
}
