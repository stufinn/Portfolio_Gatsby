import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import ProjectTile from "../components/projectTile"

const Portfolio = ({ data }) => {
  // console.log(data.epkImg)

  const projects = [
    {
      name: "The Hub Roastery",
      link: "https://www.thehubroastery.ca",
      builtWith: "GatsbyJS, React, Tailwind CSS, Shopify, Sanity CMS",
      projectDescription: null,
      imageRef: data.hubRoasteryImg,
      design: {
        by: "BlueBird Design",
        url: "https://www.bluebirddesigncompany.com/",
      },
    },
    {
      name: "Sioux Lookout Regional Physician Services Inc.",
      link: "https://www.siouxlookoutareadocs.ca/",
      builtWith: "GatsbyJS, React, Tailwind CSS, Sanity CMS",
      imageRef: data.SLRPSIImg,
      design: {
        by: "BlueBird Design",
        url: "https://www.bluebirddesigncompany.com/",
      },
    },
    {
      name: "Northern Ontario First Nations Enviroment Conference",
      link: "https://www.nofnec.ca/",
      builtWith: "GatsbyJS, React, Tailwind CSS, Sanity CMS",
      projectDescription: null,
      imageRef: data.NOFNECImg,
      design: {
        by: "BlueBird Design",
        url: "https://www.bluebirddesigncompany.com/",
      },
    },
    {
      name: "WINKS Youth Program",
      link: "https://www.winksyouthprogram.com/",
      builtWith: "GatsbyJS, React, Tailwind CSS, Sanity CMS",
      projectDescription: null,
      imageRef: data.WINKSYouthImg,
      design: {
        by: "BlueBird Design",
        url: "https://www.bluebirddesigncompany.com/",
      },
    },
  ]
  return (
    <div>
      <Helmet>
        {" "}
        <meta charSet="utf-8" /> <title>Portfolio</title>{" "}
      </Helmet>
      <div className="mx-5">
        <h1 className="projectsTitle text-center text-5xl md:text-6xl mt-7 md:mt-0">
          Recent Client Projects
        </h1>
        <div className="projects grid grid-cols-1  gap-y-9 gap-x-11 mt-12 max-w-3xl">
          {projects.map(project => (
            <ProjectTile
              key={project.name}
              project={project}
              tileImage={project.imageRef}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query portfolioQuery {
    epkImg: allFile(filter: { name: { eq: "epk" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 300, width: 300, fit: FILL) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    ewrbImg: allFile(filter: { name: { eq: "ewrb" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 300, width: 300, fit: FILL) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    slmhaImg: allFile(filter: { name: { eq: "slmha" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 300, width: 300, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    scriptbaeImg: allFile(filter: { name: { eq: "scriptbae" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed(height: 300, width: 300, fit: FILL) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    hubRoasteryImg: file(
      relativePath: { eq: "images/projects/Hub Roastery.png" }
    ) {
      id
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    SLRPSIImg: file(relativePath: { eq: "images/projects/SLRPSI.png" }) {
      id
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    NOFNECImg: file(relativePath: { eq: "images/projects/NOFNEC.png" }) {
      id
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    WINKSYouthImg: file(relativePath: { eq: "images/projects/WINKS.png" }) {
      id
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
export default Portfolio
