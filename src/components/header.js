import React from "react"
import { StaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.css"

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
      <div className={headerStyles.header}>
        <div className={headerStyles.headerText}>
          <h1 className={headerStyles.mainName}>
            {data.site.siteMetadata.title}
          </h1>
          <div className={headerStyles.headLine} />
          <h2 className={headerStyles.subTitle}>Web design & development</h2>
        </div>
        {/* <img src={stuImg} alt="Stu Finn" className={headerStyles.stuImg} /> */}

        {/* <div style={imgStyle} /> */}
      </div>
    )}
  />
)
