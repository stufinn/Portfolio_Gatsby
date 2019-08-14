import React from "react"
import Helmet from "react-helmet"

import ProjectTile from "../components/projectTile"

const projects = [
  { name: "EWRB" },
  { name: "ScriptBae" },
  { name: "Reilly Scott's Electronic Press Kit" },
]

export default () => (
  <div>
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>Portfolio</title>{" "}
    </Helmet>
    <div>
      <h2 className="projectsTitle">Portfolio</h2>
      <div className="projects">
        {projects.map(project => (
          <ProjectTile key={project.name} projectName={project.name} />
        ))}
      </div>
    </div>
  </div>
)
