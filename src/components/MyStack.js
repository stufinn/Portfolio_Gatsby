import React from "react"
import { Emph } from "./HelperComponents"
import HorizontalSection from "./HorizontalSection"

const MyStack = ({ className = "" }) => {
  return (
    <HorizontalSection title="My Stack" className={`${className}`}>
      <p>
        These days, my web technologies of choice are{" "}
        <Emph> JavaScript, React, Gatsby, Node.js</Emph>, and of course{" "}
        <Emph>HTML</Emph> and <Emph>CSS</Emph>.
      </p>{" "}
      <p>
        It doesn’t stop there; as a self-taught developer, I am always looking
        for ways to strengthen and extend my skillset.{" "}
      </p>
    </HorizontalSection>
  )
}

export default MyStack
