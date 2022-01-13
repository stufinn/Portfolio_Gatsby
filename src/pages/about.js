import React, { useState } from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineArrowDown,
} from "react-icons/ai"
import { Emph, H1, H2 } from "../components/HelperComponents"

const Li = ({ children }) => <li className="list-disc ml-10">{children}</li>

const LogoContainer = ({ children }) => (
  <span className="inline-flex flex-col mr-1 text-3xl ">{children}</span>
)

const LogoLink = ({ url = "/", children }) => (
  <Emph>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </Emph>
)

const About = ({ data }) => {
  return (
    <div className="aboutPage flex flex-col items-center mx-3">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Stu Finn</title>{" "}
      </Helmet>
      {/* Profile photo with wrapper for gradient border */}
      <H1 className="mt-10 md:mt-0">About Stu</H1>
      <div className="grid  justify-items-center md:block mt-5 md:mt-10">
        <div className="aboutPage__borderGradientContainer aboutFloat grid bg-gradient-to-br from-main to-quaternary w-fit p-1 rounded-full my-6 mr-5  ">
          <Img
            className="aboutPage__pic rounded-full"
            fixed={data.stuImg.edges[0].node.childImageSharp.fixed}
            title="Stu Finn"
            alt="Stu Finn"
          />
        </div>
        <div className="aboutPage__text aboutText text-2xl">
          <p>
            I am a <Emph>software developer</Emph> from Ontario, Canada. I've
            been building websites since 2017 and in 2019, I started{" "}
            <a
              href="https://www.borealisweb.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              Borealis Web Development
            </a>
            , a small design and development agency that is focused on creating
            entirely custom and easy-to-use websites.{" "}
            <a href="#more">
              <p className="mt-2 text-right">
                More About Stu <AiOutlineArrowDown className="inline" />
              </p>
            </a>
          </p>
          <H2 className="animate-pulse">*Hire Me!*</H2>
          <p>
            I am currently <Emph>looking for work</Emph> as a part time
            front-end developer for a remote-first company.
          </p>
          <div>
            <H2>Get In Touch</H2>

            <p>
              For more info check me out on{" "}
              <LogoLink url="https://github.com/stufinn/">
                <LogoContainer>
                  <AiFillGithub />
                </LogoContainer>
                GitHub
              </LogoLink>
              ,{" "}
              <LogoLink url="https://www.linkedin.com/in/stufinn/">
                <LogoContainer>
                  <AiFillLinkedin />
                </LogoContainer>
                LinkedIn
              </LogoLink>
              ,{" "}
              <LogoLink url="https://twitter.com/stufinn">
                <LogoContainer>
                  <AiFillTwitterCircle />
                </LogoContainer>
                Twitter
              </LogoLink>
              , or just{" "}
              <Emph>
                <Link to="/contact">drop me a line</Link>
              </Emph>
              !
            </p>
            {/* <p>
              If you are interested in Stu's work, please check out{" "}
              <Emph>
                <Link to="/portfolio" className="aboutPage--emph">
                  his portfolio
                </Link>
              </Emph>{" "}
              or{" "}
              <Emph>
                <Link to="/contact" className="aboutPage--emph">
                  get in touch
                </Link>
              </Emph>
              !
            </p> */}
          </div>
          <H1 className="mt-20" id="more">
            Even More Info
          </H1>
          <div>
            <H2>The Stack</H2>
            <p>
              These days, my web technologies of choice are{" "}
              <Emph> JavaScript, React, Gatsby, Node.js</Emph>, and of course{" "}
              <Emph>HTML</Emph> and <Emph>CSS</Emph>. But it doesn’t stop there;
              as a self-taught developer, I am always looking for ways to
              strengthen and extend my skillset.{" "}
            </p>
            <H2>The Before (Dev) Times</H2>
            <p>
              Before to becoming a full time developer in 2018, I was
              alternately a project manager, a museum curator, an environmental
              scientist, and a barista among other things. I hold an
              undergraduate degree in Biology (minor in International
              Development), a masters degree in Environmental Studies, and a
              certification in Project Management. I lots of stuff!
            </p>
            <H2>The Fun Stuff</H2>

            <p>
              I am a quirky mix between tech-kid and outdoorsman. When I'm not
              building things at my computer I love spending time with my family
              on the lake near my home in remote Northern Ontario, or in the
              nearby woods camping, biking, or skiing.
            </p>
            <div className="ml-5">
              <h3 className="text-white font-thin text-4xl mt-5 mb-3">
                Fun Facts
              </h3>
              <ul className="mb-5 grid gap-y-2">
                <Li>
                  I love to travel ✈️. To date I've visited more than 20
                  countries and I am eager to do more.
                </Li>
                <Li>
                  I am an enthusiastic sailor. To date I have competed in a
                  300-mile and a 90-mile sailing race on Lake Ontario. I won a
                  grand total of zero of those races, but I always have a blast
                  doing them.
                </Li>
                <Li>
                  On warm summer evenings you can usually find me sitting around
                  a camp fire with friends, often with a guitar in my lap.
                </Li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query aboutQuery {
    stuImg: allFile(filter: { name: { eq: "Stu2019" } }) {
      edges {
        node {
          childImageSharp {
            fixed(height: 300, width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
export default About
