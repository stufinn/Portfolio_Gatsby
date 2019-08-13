import React from "react"
import Helmet from "react-helmet"

import ProjectTile from "../components/projectTile"

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
      <h2 className="projectsTitle">Projects</h2>
      <div className="projects">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  </div>
)
