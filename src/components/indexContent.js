import React from "react"
import indexStyles from "./indexContent.module.css"
import LinkButton from "../components/linkButton"

export default () => (
  <div className={indexStyles.indexContent}>
    {/* <h3>I am</h3> */}
    <p className={indexStyles.statement}>
      <span>I am</span> a freelance web developer, specializing in cutting-edge
      JavaScript technologies
    </p>
    {/* <h3>I create</h3> */}
    <p className={indexStyles.statement}>
      <span>I create</span> sharp, functional, mobile-friendly, and fast
      websites
    </p>
    <LinkButton buttonText="Get in touch!" />
    {/* <h3>I can</h3> */}
    {/* <p className={indexStyles.statement}>
      <span>I can</span> help you with your next website
    </p> */}
  </div>
)
