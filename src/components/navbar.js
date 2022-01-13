import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const ListLink = props => (
  <li className=" mt-5 text-xl first:mt-0">
    <Link
      className="navbar__link relative text-xl hover:text-primary"
      to={props.to}
      activeClassName="text-main"
    >
      {props.children}
    </Link>
  </li>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar  hidden md:block absolute z-20 top-0 right-0   mt-6 mr-9">
        <ul className=" px-3 pl-4 leading-normal  border-main border-l-2">
          {data.site.siteMetadata.menuLinks.map(link => (
            <ListLink to={link.link} key={link.name}>
              {" "}
              {/*  Give better key */}
              {link.name}
            </ListLink>
          ))}
        </ul>
      </nav>
    )}
  />
)
