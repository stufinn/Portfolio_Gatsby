import React from "react"
import { Emph } from "./HelperComponents"

const LogoLink = ({ url = "/", children }) => (
  <Emph>
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      {children}
    </a>
  </Emph>
)

export default LogoLink
