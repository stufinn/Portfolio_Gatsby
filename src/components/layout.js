import React from "react"
import Header from "./header"
// import "../styles/components/layout.scss"
import Navbar from "./navbar"

export default ({ children }) => (
  <div className="layout  flex flex-col min-h-screen  font-body font-normal ">
    {/* <div className={layoutStyles.mainContent}> */}
    <Navbar />
    <Header />
    <div className="flex-grow border grid justify-items-center mt-5 md:mt-0 md:w-8/12 self-center">
      {children}
    </div>

    {/* </div> */}
  </div>
)
