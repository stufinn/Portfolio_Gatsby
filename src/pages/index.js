import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import HomeContent from "../components/homeContent"

// const sayHello = () =>

const Index = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <meta charSet="utf-8" /> <title>Stu Finn</title>{" "}
      </Helmet>

      <Layout>
        <HomeContent />
      </Layout>
    </div>
  )
}

export default Index
