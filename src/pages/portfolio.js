import React from "react"
import Helmet from "react-helmet"

import ProjectTile from "../components/projectTile"

const projects = [
  { name: "EWRB", link: "https://www.ewrb.ca" },
  { name: "ScriptBae", link: "https://www.scriptbae.com" },
  {
    name: "Reilly Scott's Electronic Press Kit",
    link: "https://www.reillyscott.ca/epk",
    imageRef: "epk",
  },
  {
    name: "Sioux Lookout Minor Hockey Association",
    link: "https://slmha-site.netlify.com",
  },
]

export default ({ data }) => {
  // console.log(data.epkImg)
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
              tileImage={data.ewrbImg.edges[0].node.childImageSharp}
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
            fixed(height: 300, width: 300, cropFocus: CENTER) {
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
            fixed(height: 300, width: 300, cropFocus: CENTER) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
