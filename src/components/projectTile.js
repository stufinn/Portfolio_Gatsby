import React from "react"
import Img from "gatsby-image"

export default ({ project, tileImage }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="projectTile"
    >
      {/* <div className="projectTile__projectName">{project.name}</div> */}
      <Img className="projectTile__image" fixed={tileImage.fixed} />
    </a>
  )
}
