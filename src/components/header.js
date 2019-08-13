import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="header">
        <div className="headerText">
          <h1 className="mainName">{data.site.siteMetadata.title}</h1>
          <div className="headLine" />
          <h2 className="subTitle">Web development & design</h2>
        </div>
        {/* <img src={stuImg} alt="Stu Finn" className={headerStyles.stuImg} /> */}

        {/* <div style={imgStyle} /> */}
      </div>
    )}
  />
)
