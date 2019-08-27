import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <div className="aboutContent">
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>About</title>{" "}
    </Helmet>
    <h2 className="projectsTitle">About Stu</h2>
    <Img
      className="aboutPage__pic"
      fixed={data.stuImg.edges[0].node.childImageSharp.fixed}
    />
    <div className="aboutPage__text"></div>
    <p>
      Hi!{" "}
      <span role="img" aria-label="hand-wave emoji">
        👋
      </span>{" "}
      I am a <span className="aboutPage--emph">software developer</span> based
      out of a beautiful little town called Sioux Lookout, in Northwestern
      Ontario, Canada.
    </p>
    <p>
      I have a passion for creating{" "}
      <span className="aboutPage--emph">interesting</span>,{" "}
      <span className="aboutPage--emph">helpful</span>, and hopefully even{" "}
      <span className="aboutPage--emph">beautiful</span> things with{" "}
      <span className="aboutPage--emph">code</span>.
    </p>{" "}
    <p>
      I’ve got a background in web development (surprise, surprise), an
      undergrad in biological sciences and international development, as well as
      a masters degree in environmental studies. I am also trained as project
      manager.
    </p>
    <p>
      The websites that I create are often inspired by{" "}
      <span className="aboutPage--emph">nature</span> and{" "}
      <span className="aboutPage--emph">minimalistic design</span>. I love
      building products that look amazing and are easy to use. If you are
      interested in my work, please check out{" "}
      <Link to="/portfolio" className="aboutPage--emph">
        my portfolio
      </Link>{" "}
      or{" "}
      <Link to="/contact" className="aboutPage--emph">
        contact me
      </Link>
      .
    </p>
  </div>
)

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
