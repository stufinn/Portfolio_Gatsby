import React from "react"
import Header from "./header"
import "../styles/components/layout.scss"
import Navbar from "./navbar"
import ContentBox from "./contentBox"

export default ({ children }) => (
  <div className="layout">
    {/* <div className={layoutStyles.mainContent}> */}
    <Header />
    <ContentBox>{children}</ContentBox>
    {/* </div> */}
    <Navbar />
  </div>
)
