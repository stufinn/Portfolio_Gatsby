import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import ContactFormNew from "../components/ContactFormNew"
import { H1, H2 } from "../components/HelperComponents"
import Social from "../components/Social"
import { AiFillPhone } from "react-icons/ai"
// import Img from "gatsby-image"

// import ContactForm from "../components/contactForm"

const Contact = ({ data }) => (
  <div>
    {" "}
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>Contact</title>{" "}
    </Helmet>
    <div className=" grid mt-8 md:mt-0 text-3xl">
      <H1 className="projectsTitle text-center">Let's Connect</H1>
      <div className="mt-10  flex items-end justify-self-center text-main underline hover:text-white">
        <AiFillPhone className="mr-2" />
        <a
          href="tel:+18072200856"
          className="text-main hover:text-white justify-self-center "
        >
          (807) 220-0856
        </a>
      </div>
      <Social className="mt-10" />
      <div className="contactPage grid gap-y-5 mt-5 text-center">
        <H2 className="text-4xl  text-center  text-white max-w-sm md:max-w-xl">
          Or Send Me a Message:
        </H2>
        <div className="grid justify-items-center text-3xl">
          <ContactFormNew />
        </div>

        {/* <h3>other</h3>

        <div className="contactPage__iconContainer">
          <a
            href="https://twitter.com/stufinn"
            target="_blank"
            rel="noopener noreferrer"
            className="contactPage__icon"
          >
            <Img
              alt="Twitter icon"
              fixed={data.twitterImg.edges[0].node.childImageSharp.fixed}
              title="Twitter"
            />
          </a>
          <a
            href="https://github.com/stufinn"
            target="_blank"
            rel="noopener noreferrer"
            className="contactPage__icon"
          >
            <Img
              alt="GitHub icon"
              fixed={data.githubImg.edges[0].node.childImageSharp.fixed}
              title="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/stufinn/"
            target="_blank"
            rel="noopener noreferrer"
            className="contactPage__icon"
          >
            <Img
              alt="LinkedIn icon"
              fixed={data.linkedinImg.edges[0].node.childImageSharp.fixed}
              title="LinkedIn"
            />
          </a>
        </div> */}
      </div>
    </div>
  </div>
)

export default Contact

export const pageQuery = graphql`
  query contactQuery {
    twitterImg: allFile(filter: { name: { eq: "twitterIcon" } }) {
      edges {
        node {
          childImageSharp {
            fixed(height: 100, width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    githubImg: allFile(filter: { name: { eq: "githubIcon" } }) {
      edges {
        node {
          childImageSharp {
            fixed(height: 100, width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    linkedinImg: allFile(filter: { name: { eq: "linkedinIcon" } }) {
      edges {
        node {
          childImageSharp {
            fixed(height: 100, width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
