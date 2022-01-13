import { Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import ContactFormNew from "../components/ContactFormNew"
import { Emph, H1 } from "../components/HelperComponents"
import LinkButton from "../components/linkButton"
// import HomeContent from "../components/homeContent"

// const sayHello = () =>

const Highlight = ({ children }) => (
  <span className="text-main text-5xl">{children}</span>
)

const EmphIndex = ({ children }) => (
  <Emph className=" text-4xl md:text-5xl">{children}</Emph>
)

const TextContainer = ({ children, title = "" }) => (
  <div className=" text-center  mt-16 first:mt-0">
    <H1 className="">{title}</H1>

    <div className="mt-5">{children}</div>
  </div>
)

const Index = () => {
  return (
    <div className="text-3xl md:text-4xl  ">
      <Helmet>
        {" "}
        <meta charSet="utf-8" /> <title>Stu Finn, Web Developer</title>{" "}
      </Helmet>

      {/* 
      <p className="statement">
        <span>Custom websites and web-based applications</span>
      </p> */}
      {/* <HomeContent /> */}

      {/* <h3>I am</h3> */}

      <TextContainer>
        <p>
          I am a <EmphIndex>front-end web developer</EmphIndex> based in
          Northwestern Ontario, Canada.
        </p>
        <p className="mt-5">
          I'm currently{" "}
          <EmphIndex className="text-4xl">looking for part time work</EmphIndex>{" "}
          as a software developer (remote).
        </p>
      </TextContainer>

      <TextContainer title="My Work">
        <p>
          Check out some of my recent projects <Link to="/portfolio">here</Link>
          .
        </p>
      </TextContainer>
      <TextContainer title="Contact Me">
        <div className="grid justify-items-center">
          <ContactFormNew />
        </div>
      </TextContainer>

      {/* <div className="index__links mt-24">
        <LinkButton buttonText="Get In Touch!" linkToPage="contact" />
      </div> */}

      {/* <h3>I create</h3> */}
      {/* <p className="statement">
        I help clients like you to <span>design & build</span> custom websites
        and web applications.
      </p> */}
    </div>
  )
}

export default Index
