import React from "react"
import { Link } from "gatsby"

const MobileNav = () => (
  <nav className="mobileNav  flex justify-around md:hidden mx-3 justify-self-center items-center  mt-7 text-xl">
    <Link className="mobileNav__link px-2" to="/" activeClassName="text-main">
      Home
    </Link>
    <Link
      className="mobileNav__link px-2"
      to="/about"
      activeClassName="text-main"
    >
      About
    </Link>
    <Link
      className="mobileNav__link px-2"
      to="/portfolio"
      activeClassName="text-main"
    >
      Portfolio
    </Link>
    <Link
      className="mobileNav__link px-2"
      to="/contact"
      activeClassName="text-main"
    >
      Contact
    </Link>
  </nav>
)

export default MobileNav
