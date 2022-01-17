import React from "react"
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai"
import { LogoContainer, LogoLink } from "./HelperComponents"
import HorizontalSection from "./HorizontalSection"

const Social = () => {
  return (
    <div className="ml-5 grid gap-y-2 mt-10 justify-items-center">
      <LogoLink url="https://github.com/stufinn/">
        <LogoContainer>
          <AiFillGithub />
        </LogoContainer>
        GitHub
      </LogoLink>

      <LogoLink url="https://www.linkedin.com/in/stufinn/">
        <LogoContainer>
          <AiFillLinkedin />
        </LogoContainer>
        LinkedIn
      </LogoLink>

      <LogoLink url="https://twitter.com/stufinn">
        <LogoContainer>
          <AiFillTwitterCircle />
        </LogoContainer>
        Twitter
      </LogoLink>
    </div>
  )
}

export default Social
