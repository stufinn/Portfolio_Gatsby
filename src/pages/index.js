import React from "react"
import Helmet from "react-helmet"
import LinkButton from "../components/linkButton"
// import HomeContent from "../components/homeContent"

// const sayHello = () =>

const Index = () => {
  return (
    <div className="homeContent">
      <Helmet>
        {" "}
        <meta charSet="utf-8" /> <title>Stu Finn</title>{" "}
      </Helmet>

      {/* 
      <p className="statement">
        <span>Custom websites and web-based applications</span>
      </p> */}
      {/* <HomeContent /> */}

      {/* <h3>I am</h3> */}
      <p className="statement">
        Working with <span>clients like you</span> to build modern,{" "}
        <span>custom</span> websites and web applications.
      </p>

      <LinkButton buttonText="Samples of My Work" linkToPage="portfolio" />
      <LinkButton buttonText="Get In Touch" linkToPage="portfolio" />

      {/* <h3>I create</h3> */}
      {/* <p className="statement">
        I help clients like you to <span>design & build</span> custom websites
        and web applications.
      </p> */}
    </div>
  )
}

export default Index
