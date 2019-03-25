import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import navbarStyles from "./navbar.module.css"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
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
      <nav className={navbarStyles.navbar}>
        <ul className={navbarStyles.allLinks}>
          {data.site.siteMetadata.menuLinks.map(link => (
            <ListLink to={link.link} key={link.name}>
              {" "}
              {/*  Give better key */}
              {link.name}
            </ListLink>
          ))}
          {/* <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
          <ListLink to="/projects">Projects</ListLink>
          <ListLink to="/contact">Contact</ListLink>
          <ListLink to="/blog">Blog</ListLink> */}
        </ul>
      </nav>
    )}
  />
)
