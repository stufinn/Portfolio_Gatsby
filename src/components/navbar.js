import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const ListLink = props => (
  <li>
    {/* can't use scss variables in activeStyle? - check */}
    <Link className="navbar__link" to={props.to} activeClassName="text-primary">
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
      <nav className="navbar">
        <ul className="allLinks">
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
