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
      <h2 className="projectsTitle">Contact Stu</h2>

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
        <h3>social / other</h3>

        <Img fixed={data.twitterImg.edges[0].node.childImageSharp.fixed} />

        <img
          className="aboutPage__icon"
          src="../images/epk.png"
          alt="twitterIcon"
        ></img>
        <p>
          twitter: <a href="https://twitter.com/stufinn">@stufinn</a>
        </p>
        <p>
          github: <a href="https://github.com/stufinn">github.com/stufinn</a>
        </p>
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
  }
`
