import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"

import ProjectTile from "../components/projectTile"

export default ({ data }) => {
  // console.log(data.epkImg)

  const projects = [
    {
      name: "Sioux Lookout Minor Hockey Association",
      link: "https://slmha.net",
      imageRef: data.slmhaImg.edges[0].node.childImageSharp,
    },
    {
      name: "EWRB",
      link: "https://www.ewrb.ca",
      imageRef: data.ewrbImg.edges[0].node.childImageSharp,
    },
    {
      name: "ScriptBae",
      link: "https://www.scriptbae.com",
      imageRef: data.scriptbaeImg.edges[0].node.childImageSharp,
    },
    {
      name: "Reilly Scott's Electronic Press Kit",
      link: "https://www.reillyscott.ca/epk",
      imageRef: data.epkImg.edges[0].node.childImageSharp,
    },
  ]
  return (
    <div>
      <Helmet>
        {" "}
        <meta charSet="utf-8" /> <title>Portfolio</title>{" "}
      </Helmet>
      <div>
        <h2 className="projectsTitle">Portfolio</h2>
        <div className="projects">
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
  }
`
