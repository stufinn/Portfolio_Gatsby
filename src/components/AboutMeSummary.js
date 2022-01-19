import { Link } from "gatsby"
import React from "react"
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai"
import { Emph } from "./HelperComponents"

export const AboutMeSummary = ({
  className = "",
  moreLink = false,
  lookingForWork = false,
}) => {
  return (
    <div className={` max-w-6xl pt-5 md:pt-12 ${className}`}>
      <p>
        I'm a <Emph>software developer</Emph> from Ontario, Canada.
      </p>
      {lookingForWork && (
        <p className="mt-5">
          Currently, I'm <Emph>looking for part-time work</Emph> as a front-end
          developer.
        </p>
      )}
      <p className="mt-5">
        I've been building websites since 2017 and in 2019, I started{" "}
        <a
          href="https://www.borealisweb.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Borealis Web Development
        </a>
        , a small web development agency that creates custom-designed,
        easy-to-use websites.{" "}
      </p>
      {moreLink && (
        <Link
          to="/about"
          className="mt-2 text-right text-main hover:text-white"
        >
          <div className="mt-5 text-right">
            More About Stu <AiOutlineArrowRight className="inline" />
          </div>
        </Link>
      )}
    </div>
  )
}
