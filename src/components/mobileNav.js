import React from "react"
import { Link } from "gatsby"

const MobileNav = () => (
  <nav className="mobileNav">
    <Link className="mobileNav__link" to="/">
      Home
    </Link>
    <Link className="mobileNav__link" to="/about">
      About
    </Link>
    <Link className="mobileNav__link" to="/portfolio">
      Portfolio
    </Link>
    <Link className="mobileNav__link" to="/contact">
      Contact
    </Link>
  </nav>
)

export default MobileNav
