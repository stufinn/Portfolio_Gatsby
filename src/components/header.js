import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import MobileNav from "../components/mobileNav"

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
          <Link className="header__link" to="/">
            <h1 className="mainName">{data.site.siteMetadata.title}</h1>
          </Link>

          <h2 className="header__subTitle">
            Web development{" "}
            <span className="header__br">
              <br />
            </span>{" "}
            & design
          </h2>
          <MobileNav />
        </div>
      </div>
    )}
  />
)
