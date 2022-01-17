import { Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import ButtonLink from "../components/ButtonLink"
import ContactFormNew from "../components/ContactFormNew"
import { Emph, H1 } from "../components/HelperComponents"
import HorizontalSection from "../components/HorizontalSection"
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

      {/* <TextContainer>
        <p>
          I am a <EmphIndex>front-end web developer</EmphIndex> based in
          Northwestern Ontario, Canada.
        </p>
        <p className="mt-5">
          I'm currently{" "}
          <EmphIndex className="text-4xl">looking for part time work</EmphIndex>{" "}
          as a software developer (remote).
        </p>
        <div className="mt-10 grid ">
          <ButtonLink
            to="/about"
            text="Learn More"
            bgColor="bg-main hover:bg-white"
            className="  font-roboto font-semibold  text-tertiary w-fit px-5 pb-2 pt-1 justify-self-center rounded-md  "
          />
        </div>
      </TextContainer> */}
      <HorizontalSection title="About Stu">
        <p>
          I am a <EmphIndex>front-end web developer</EmphIndex> based in
          Northwestern Ontario, Canada.
        </p>
        <p className="mt-5">
          I'm currently{" "}
          <EmphIndex className="text-4xl">looking for part time work</EmphIndex>{" "}
          as a software developer (remote).
        </p>
        <div className="mt-8 grid">
          <ButtonLink
            to="/about"
            text="Learn More"
            bgColor="bg-main hover:bg-white"
            className="no-underline font-roboto font-semibold  text-tertiary w-fit px-5 pb-2 pt-1 rounded-md justify-self-end"
          />
        </div>
      </HorizontalSection>

      {/* <TextContainer title="Portfolio">
        <p>
          Check out some of my recent projects <Link to="/portfolio">here</Link>
          .
        </p>
      </TextContainer> */}
      <div className="flex justify-center">
        <div className="flex mt-10">
          <h1 className=" border-r-2 border-main pr-2 mr-5">Portfolio</h1>
          <p className="items-center max-w-xl mb-0 ">
            Check out some of my <Link to="/portfolio">recent projects</Link>.
          </p>
        </div>
      </div>
      {/* <TextContainer title="Contact Me">
        <div className="grid justify-items-center">
          <ContactFormNew />
        </div>
      </TextContainer> */}
      <div className="flex justify-center mt-20">
        <ButtonLink className="" to="/contact" text="Contact Stu" />
      </div>

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
