import React from "react"
import ButtonLink from "../components/ButtonLink"

const NotFoundPage = () => {
  return (
    <div className="">
      <div className="grid justify-items-center">
        <p className="text-4xl text-center mt-10">
          Sorry, the page you are looking for isn't here!
        </p>
        <ButtonLink text="Home Page" className="text-2xl mt-10" />
      </div>
    </div>
  )
}

export default NotFoundPage
