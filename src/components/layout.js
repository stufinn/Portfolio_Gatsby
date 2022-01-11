import React from "react"
import Header from "./header"
// import "../styles/components/layout.scss"
import Navbar from "./navbar"
import ContentBox from "./contentBox"

export default ({ children }) => (
  <div className="layout min-h-screen  font-body font-normal ">
    {/* <div className={layoutStyles.mainContent}> */}
    <Navbar />
    <Header />
    <ContentBox>{children}</ContentBox>
    {/* </div> */}
  </div>
)
