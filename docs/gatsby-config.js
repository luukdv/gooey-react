module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: { siteUrl: 'https://gooey-react.netlify.app' },
    },
    'gatsby-plugin-force-trailing-slashes',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-75278199-3' },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    'gatsby-plugin-typescript',
  ],
}
