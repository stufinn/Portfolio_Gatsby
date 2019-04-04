import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import IndexContent from "../components/indexContent"
import LinkButton from "../components/linkButton"


export default () => (
  <div>
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>Stu Finn</title>{" "}
    </Helmet>

    <Layout>
      <IndexContent />
      <LinkButton buttonText="Get in touch!"></LinkButton>
    </Layout>

  </div>
)
