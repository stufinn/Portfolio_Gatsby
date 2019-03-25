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
  ],
}
