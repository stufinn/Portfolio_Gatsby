import { Link } from "gatsby"
import React from "react"
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai"
import { Emph } from "./HelperComponents"

export const AboutMeSummary = () => {
  return (
    <div className="text-2xl max-w-6xl pt-12 ">
      <p>
        I am a <Emph>software developer</Emph> from Ontario, Canada.
      </p>
      <p>
        I'm currently <Emph>looking for part-time work</Emph> as a front-end
        developer.
      </p>
      <p className="mt-5">
        I've been building websites since 2017. In 2019, I started{" "}
        <a
          href="https://www.borealisweb.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Borealis Web Development
        </a>
        , a small web development agency that is focused on creating entirely
        custom and easy-to-use websites.{" "}
      </p>
      <Link to="/about" className="mt-2 text-right text-main hover:text-white">
        <div className="mt-5 text-right">
          More About Stu <AiOutlineArrowRight className="inline" />
        </div>
      </Link>
    </div>
  )
}
