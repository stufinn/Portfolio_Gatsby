import React from "react"
import ButtonLink from "../components/ButtonLink"

const Success = () => {
  return (
    <div className="">
      <div className="grid justify-items-center text-4xl text-center mt-10 ">
        <p className="">Thank you - your message has been submitted!</p>
        <p className="mt-5 ">I'll be in touch with you soon.</p>
        <ButtonLink text="Home Page" className="text-2xl mt-10" />
      </div>
    </div>
  )
}

export default Success
