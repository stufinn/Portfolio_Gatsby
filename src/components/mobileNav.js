import React from "react"
import { Link } from "gatsby"

const MobileNav = () => (
  <nav className="mobileNav grid md:hidden gap-x-7  justify-self-center items-center  mt-7">
    <Link className="mobileNav__link" to="/" activeStyle={{ color: "#35cb70" }}>
      Home
    </Link>
    <Link
      className="mobileNav__link"
      to="/about"
      activeStyle={{ color: "#35cb70" }}
    >
      About
    </Link>
    <Link
      className="mobileNav__link"
      to="/portfolio"
      activeStyle={{ color: "#35cb70" }}
    >
      Portfolio
    </Link>
    <Link
      className="mobileNav__link"
      to="/contact"
      activeStyle={{ color: "#35cb70" }}
    >
      Contact
    </Link>
  </nav>
)

export default MobileNav
