import React from "react"
import Helmet from "react-helmet"
import LinkButton from "../components/linkButton"
// import HomeContent from "../components/homeContent"

// const sayHello = () =>

const Highlight = ({ children }) => (
  <span className="text-main text-5xl">{children}</span>
)

const Index = () => {
  return (
    <div className="text-center w-11/12 flex flex-col  items-center">
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
      <p className="statement mb-7 text-4xl max-w-md">
        <Highlight>Blazing fast,</Highlight> modern and secure{" "}
        <Highlight>custom-built websites</Highlight> and web applications.
      </p>

      <div className="index__links mt-24">
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
