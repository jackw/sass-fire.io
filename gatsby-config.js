module.exports = {
  siteMetadata: {
    title: `Sass-fire`,
    description: `Give your sass a little flame with some functional functions`,
    author: `@jackwestbrook`,
  },
  pathPrefix: "/sass-fire.io",
  plugins: [
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sassfire`,
        path: `${__dirname}/src/data/sassfire`,
        ignore: [`**/\.*`],
        typeName: "Json",
      },
    },
  ],
}
