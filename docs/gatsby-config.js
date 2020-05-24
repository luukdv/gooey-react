module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gooey-react.netlify.app',
      },
    },
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    'gatsby-plugin-typescript',
  ],
}
