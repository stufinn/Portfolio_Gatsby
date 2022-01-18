import { Link } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import { AiOutlineArrowRight } from "react-icons/ai"
import { AboutMeSummary } from "../components/AboutMeSummary"
import ButtonLink from "../components/ButtonLink"
import ContactFormNew from "../components/ContactFormNew"
import { Emph, H1 } from "../components/HelperComponents"
import HorizontalSection from "../components/HorizontalSection"
import LinkButton from "../components/linkButton"
import ProfileImage from "../components/ProfileImage"
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
    <div className="text-3xl md:text-4xl mx-2">
      <Helmet>
        {" "}
        <meta charSet="utf-8" /> <title>Stu Finn, Web Developer</title>{" "}
      </Helmet>
      <div className="grid justify-items-center md:block">
        {/* Profile image floats left */}
        <ProfileImage />
        <AboutMeSummary />
      </div>
      <div className="clear-both grid justify-items-center">
        <HorizontalSection title="My Stack">
          <p>
            These days, my web technologies of choice are{" "}
            <Emph> JavaScript, React, Gatsby, Node.js</Emph>, and of course{" "}
            <Emph>HTML</Emph> and <Emph>CSS</Emph>. But it doesn’t stop there;
            as a self-taught developer, I am always looking for ways to
            strengthen and extend my skillset.{" "}
          </p>
        </HorizontalSection>

        <HorizontalSection title="My Work" vertical className="mt-10">
          <p className="">
            Check out some of my{" "}
            <Link to="/portfolio" className="">
              recent projects <AiOutlineArrowRight className="inline " />
            </Link>
          </p>
        </HorizontalSection>

        <div className="flex justify-end mt-20">
          <ButtonLink className=" text-3xl" to="/contact" text="Contact Stu" />
        </div>
      </div>
    </div>
  )
}

export default Index
