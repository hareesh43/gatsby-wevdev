/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `node`,
        path: `${__dirname}/src/node/`,
      },
    },
  ],
  siteMetadata: {
    title: "Web Worrier",
    description: "web developer",
    copyright: "Copyright 2021 web worrier",
  },
}
