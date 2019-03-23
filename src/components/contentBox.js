import React from "react"
import contentBoxStyles from "./contentBox.module.css"

export default ({ children }) => (
  <div className={contentBoxStyles.contentBox}>{children}</div>
)
