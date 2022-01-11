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
      <div className="header text-center md:text-left mt-5 md:mb-24 md:ml-24 ">
        <div className="headerText md:grid ">
          <Link
            className="header__link flex  justify-center md:justify-start "
            to="/"
          >
            <h1 className=" font-heading mainName  border-b-2 border-main w-fit px-4 md:pl-0 md:pr-12 pb-1 text-center">
              {data.site.siteMetadata.title}
            </h1>
          </Link>

          <h2 className="text-main">Developer</h2>
          <MobileNav />
        </div>
      </div>
    )}
  />
)
