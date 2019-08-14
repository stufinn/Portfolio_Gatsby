import React from "react"
import Helmet from "react-helmet"

export default () => (
  <div>
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>About</title>{" "}
    </Helmet>
    <div>
      <h2>About Stu</h2>
      <p>This website is under development</p>
    </div>
  </div>
)
