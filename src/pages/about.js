import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const Emph = ({ children }) => (
  <span className="text-main text-3xl">{children}</span>
)

const About = ({ data }) => (
  <div className="aboutPage flex flex-col items-center">
    <Helmet>
      <meta charSet="utf-8" />
      <title>About Stu</title>{" "}
    </Helmet>
    {/* Profile photo with wrapper for gradient border */}
    <h2 className="projectsTitle">About Stu</h2>
    <div className="grid  justify-items-center md:block">
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
          Stu is <Emph className="aboutPage--emph">software developer</Emph>{" "}
          based in Northwestern Ontario, Canada.
        </p>
        <p>
          He has a passion for creating <Emph>interesting</Emph>,{" "}
          <Emph>helpful</Emph>, and hopefully even <Emph>beautiful</Emph> things
          with <Emph>code</Emph>.
        </p>{" "}
        <p>
          Stu has background in web development, an undergrad in biology and
          international development, as well as a masters degree in
          environmental studies. He am also trained as a project manager.
        </p>
        <p>
          The websites that Stu creates are often inspired by{" "}
          <Emph>nature</Emph> and <Emph>minimalistic design</Emph>. He loves
          building products that look amazing and are easy to use.
        </p>
        <p>
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
        </p>
      </div>
    </div>
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
export default About
