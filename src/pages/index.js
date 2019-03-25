import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import IndexContent from "../components/indexContent"

export default () => (
  <div>
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>Stu Finn</title>{" "}
    </Helmet>

    <Layout>
      <IndexContent />
    </Layout>
  </div>
)
