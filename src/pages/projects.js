import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import ProjectTile from "../components/projectTile"
import projectStyles from "./projects.module.css"

export default () => (
  <div>
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>Projects</title>{" "}
    </Helmet>
    <Layout>
      <h2 className={projectStyles.projectsTitle}>Projects</h2>
      <div className={projectStyles.projects}>
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </Layout>
  </div>
)
