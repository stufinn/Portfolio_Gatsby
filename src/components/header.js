import React from "react"
import { StaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.css"
import Img from "gatsby-image"
// import stuImg from "../images/stuPic.jpg"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        stuPic: file(relativePath: { eq: "images/stuPic.jpg" }) {
          childImageSharp {
            fixed(grayscale: true, width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className={headerStyles.header}>
        <div className={headerStyles.headerText}>
          <h1 className={headerStyles.mainName}>
            {data.site.siteMetadata.title}
          </h1>
          <div className={headerStyles.headLine} />
          <h2 className={headerStyles.subTitle}>Web design & development</h2>
        </div>
        {/* <img src={stuImg} alt="Stu Finn" className={headerStyles.stuImg} /> */}
        <Img
          fixed={data.stuPic.childImageSharp.fixed}
          alt=""
          className={headerStyles.stuImg}
        />
      </div>
    )}
  />
)
