import React from "react"

export default ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="projectTile"
  >
    <div className="projectTile__projectName">{project.name}</div>
  </a>
)
