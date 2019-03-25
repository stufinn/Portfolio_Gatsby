import React from "react"
import Header from "./header"
import layoutStyles from "./layout.module.css"
import Navbar from "./navbar"
import ContentBox from "./contentBox"

export default ({ children }) => (
  <div className={layoutStyles.layout}>
    <div className={layoutStyles.mainContent}>
      <Header />
      <ContentBox className={layoutStyles.contentStuff}>{children}</ContentBox>
    </div>
    <Navbar />
  </div>
)
