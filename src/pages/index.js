import React from "react"
import Helmet from "react-helmet"
// import HomeContent from "../components/homeContent"

// const sayHello = () =>

const Index = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <meta charSet="utf-8" /> <title>Stu Finn</title>{" "}
      </Helmet>

      <div />
      {/* 
      <p className="statement">
        <span>Custom websites and web-based applications</span>
      </p> */}
      {/* <HomeContent /> */}
      <div className="homeContent">
        {/* <h3>I am</h3> */}
        <p className="statement">
          I am a <span>developer</span> who specializes in cutting-edge web
          technologies.
        </p>
        {/* <h3>I create</h3> */}
        <p className="statement">
          I help clients like you to, <span>design & build</span> custom
          websites and web applications.
        </p>
      </div>
    </div>
  )
}

export default Index
