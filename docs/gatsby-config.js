const siteUrl = 'https://gooey-react.netlify.app'

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: { siteUrl },
    },
    'gatsby-plugin-force-trailing-slashes',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-75278199-3' },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
  ],
  siteMetadata: { siteUrl },
}
