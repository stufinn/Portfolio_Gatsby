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
        <span>Blazing fast</span>, modern and secure{" "}
        <span>custom-built websites</span> and web applications.
      </p>

      <div className="index__links">
        {/* <LinkButton buttonText="See My Work" linkToPage="portfolio" /> */}
        <LinkButton buttonText="Get In Touch!" linkToPage="contact" />
      </div>

      {/* <h3>I create</h3> */}
      {/* <p className="statement">
        I help clients like you to <span>design & build</span> custom websites
        and web applications.
      </p> */}
    </div>
  )
}

export default Index
