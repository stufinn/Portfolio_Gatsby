import React from "react"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default ({ project, tileImage }) => {
  const image = getImage(tileImage)
  debugger
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="projectTile relative z-0 "
    >
      {/* <div className="projectTile__projectName">{project.name}</div> */}
      <GatsbyImage
        className="projectTile__image opacity-100 hover:opacity-50 rounded-md "
        image={getImage(tileImage)}
        alt={`${project.name} website`}
        title={project.name}
      />
    </a>
  )
}
