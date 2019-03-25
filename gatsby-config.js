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
        name: "Projects",
        link: `/projects`,
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
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline",
    {
      plugins: [`gatsby-plugin-react-helmet`],
    },
  ],
}
