import React from "react"
import Helmet from "react-helmet"

import HomeContent from "../components/homeContent"

// const sayHello = () =>

const Index = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <meta charSet="utf-8" /> <title>Stu Finn</title>{" "}
      </Helmet>

      <div>
        <HomeContent />
      </div>
    </div>
  )
}

export default Index
