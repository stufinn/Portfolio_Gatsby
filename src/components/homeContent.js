import React from "react"
import LinkButton from "../components/linkButton"

export default () => (
  <div className="homeContent">
    {/* <h3>I am</h3> */}
    <p className="statement">
      I am a <span>freelance web developer</span> specializing in cutting-edge
      JavaScript technologies
    </p>
    {/* <h3>I create</h3> */}
    <p className="statement">
      Working alongside clients like you, <span>I design and build</span> custom
      websites and web-applications.
    </p>
    <LinkButton buttonText="Get in touch!" />
  </div>
)
