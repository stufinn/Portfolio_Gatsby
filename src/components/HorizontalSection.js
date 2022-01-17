import React from "react"

const HorizontalSection = ({ title = "TITLE_ERROR", children = null }) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row mt-10">
        <div className="grid border-b-2 lg:border-b-0 lg:border-r-2 border-main pb-1 mb-3 lg:pr-5 lg:mr-5 ">
          <h2 className=" font-bold self-start">{title}</h2>
        </div>
        <p className="items-center max-w-xl mb-0 ">{children}</p>
      </div>
    </div>
  )
}

export default HorizontalSection
