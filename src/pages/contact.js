import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// import ContactForm from "../components/contactForm"

const Contact = ({ data }) => (
  <div>
    {" "}
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>Contact</title>{" "}
    </Helmet>
    <div>
      <h2 className="projectsTitle">Let's Connect!</h2>

      <div className="contactPage">
        <h3>phone</h3>
        <p>
          <a href="tel:+18072200856">807.220.0856</a>
        </p>
        <h3>email</h3>
        <p>
          <a href="mailto:stufinn@gmail.com?subject=Website">
            stufinn@gmail.com
          </a>
        </p>
        <h3>other</h3>

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
        </div>
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
