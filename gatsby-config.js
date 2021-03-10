require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `GoTellTales`,
    siteTitleAlt: `GoTellTales - Story telling beyond boundaries.`,
    siteHeadline: `GoTellTales - Story telling beyond boundaries.`,
    siteUrl: `https://jodie.lekoarts.de`,
    siteDescription: `Full scale content production. Story telling beyond boundaries.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Projects`, slug: `/projects` },
          { name: `Instagram`, slug: `/instagram` },
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `2315642426`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GoTellTales - @lekoarts/gatsby-theme-jodie`,
        short_name: `GoTellTales`,
        description: `Story telling beyond boundaries.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
