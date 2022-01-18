import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const ProfileImage = ({ className = "" }) => {
  const data = useStaticQuery(graphql`
    query ProfileImageQuery {
      stuImg: allFile(filter: { name: { eq: "Stu2019" } }) {
        edges {
          node {
            childImageSharp {
              fixed(height: 300, width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div
      className={`aboutFloat grid  w-fit p-1 rounded-full my-6 md:mr-5 relative shadow-lg shadow-neutral-900 ${className}`}
    >
      <div className="absolute  top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-main to-quaternary rounded-full animate-spin "></div>
      <Img
        className="aboutPage__pic rounded-full"
        fixed={data.stuImg.edges[0].node.childImageSharp.fixed}
        title="Stu Finn"
        alt="Stu Finn"
      />
    </div>
  )
}

export default ProfileImage
