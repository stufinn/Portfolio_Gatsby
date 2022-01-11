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
      <Img
        className="projectTile__image opacity-100 hover:opacity-50 rounded-md"
        fixed={tileImage.fixed}
      />
    </a>
  )
}
