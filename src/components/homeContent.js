import React from "react"
import homeStyles from "./homeContent.module.css"
import LinkButton from "../components/linkButton"

export default () => (
  <div className={homeStyles.homeContent}>
    {/* <h3>I am</h3> */}
    <p className={homeStyles.statement}>
      I am a <span>freelance web developer</span> specializing in cutting-edge
      JavaScript technologies
    </p>
    {/* <h3>I create</h3> */}
    <p className={homeStyles.statement}>
      Working alongside clients like you, <span>I design and build</span> custom
      websites and web-applications.
    </p>
    <LinkButton buttonText="Get in touch!" />
    {/* <h3>I can</h3> */}
    {/* <p className={homeStyles.statement}>
      <span>I can</span> help you with your next website
    </p> */}
  </div>
)
