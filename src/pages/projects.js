import React from "react"
import Layout from "../components/layout"
import ProjectTile from "../components/projectTile"
import projectStyles from "./projects.module.css"

export default () => (
  <Layout>
    <h2 className={projectStyles.projectsTitle}>Projects</h2>
    <div className={projectStyles.projects}>
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
      <ProjectTile />
    </div>
  </Layout>
)
