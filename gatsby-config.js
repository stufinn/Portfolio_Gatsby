module.exports = {
  siteMetadata: {
    title: `Stu Finn`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: `/about`,
      },
      {
        name: "Portfolio",
        link: `/portfolio`,
      },
      {
        name: "Contact",
        link: `/contact`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Stu Finn",
        short_name: "stufinn",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "ffffff",
        display: "standalone",
        icon: "src/images/stuCircle2019.png",
      },
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/layout`),
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-147966659-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
  ],
}
