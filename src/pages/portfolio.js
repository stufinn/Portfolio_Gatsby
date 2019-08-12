import React from "react"
import Helmet from "react-helmet"

import ProjectTile from "../components/projectTile"
import portfolioStyles from "./portfolio.module.css"

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
      <h2 className={portfolioStyles.projectsTitle}>Projects</h2>
      <div className={portfolioStyles.projects}>
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  </div>
)
