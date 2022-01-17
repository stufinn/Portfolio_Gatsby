import React from "react"
import { Link } from "gatsby"

const ButtonLink = ({
  to = "/",
  text = "TEXTERROR",
  className = "",
  bgColor = "bg-main hover:bg-white",
  textColor = "text-tertiary hover:text-tertiary",
}) => {
  return (
    <Link
      to={to}
      className={`${bgColor} ${textColor} font-heading font-semibold w-fit px-5 pb-2 pt-1  rounded-md ${className} `}
    >
      {text}
    </Link>
  )
}

export default ButtonLink
