require("dotenv").config()

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `Starter Blog`,
    subtitle: `Built with React and Gatsby`,
    author: `Kyle Robles`,
    description: `A blog that shows you the awesome power of gatsby.`,
    bio: `Learning Web Development one google search at a time`,
    social: {
      twitter: ``,
    },
    siteUrl: `https://localhost:9000`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Starter Blog`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `content/assets/cheese-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-191807928-1`,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-NJ3SJD6`,
        includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
  ],
}
