import React from "react"
import Helmet from "react-helmet"

export default () => (
  <div className="aboutContent">
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>About</title>{" "}
    </Helmet>
    <div>
      <h2 className="projectsTitle">About Stu</h2>
      <p style={{ paddingTop: 50 }}>
        [ This page is currently under development. Check back soon! ]
      </p>
    </div>
  </div>
)
