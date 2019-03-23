import React from "react"
import { Link } from "gatsby"
import navbarStyles from "./navbar.module.css"

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <nav className={navbarStyles.navbar}>
    <ul className={navbarStyles.allLinks}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/projects">Projects</ListLink>
      <ListLink to="/contact">Contact</ListLink>
      <ListLink to="/blog">Blog</ListLink>
    </ul>
  </nav>
)
