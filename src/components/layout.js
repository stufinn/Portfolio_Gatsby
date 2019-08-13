import React from "react"
import Header from "./header"
import "../styles/components/layout.scss"
import layoutStyles from "./layout.module.css"
import Navbar from "./navbar"
import ContentBox from "./contentBox"

export default ({ children }) => (
  <div className={layoutStyles.layout}>
    {/* <div className={layoutStyles.mainContent}> */}
    <Header />
    <ContentBox>{children}</ContentBox>
    {/* </div> */}
    <Navbar />
  </div>
)
