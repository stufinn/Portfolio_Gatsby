import React from "react"
import Helmet from "react-helmet"

import ProjectTile from "../components/projectTile"
import projectStyles from "./projects.module.css"

// const sayHi = () => {
//   console.log("Hi!");
// };

export default () => (
  <div>
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>Projects</title>{" "}
    </Helmet>
    <div>
      <h2 className={projectStyles.projectsTitle}>Projects</h2>
      <div className={projectStyles.projects}>
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  </div>
)
