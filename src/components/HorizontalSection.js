import React from "react"

const HorizontalSection = ({
  title = "TITLE_ERROR",
  children = null,
  vertical = false,
  titleClass = "w-64",
  className = "",
}) => {
  return (
    <div className={`flex justify-stretch ${className}`}>
      <div
        className={`flex flex-col ${vertical ? "" : "lg:flex-row"}  width-full`}
      >
        <div
          className={`grid pb-1 mb-3 border-b-2 ${
            vertical
              ? ""
              : "lg:border-b-0 lg:border-r-2 lg:pr-5 lg:mr-5 lg:pb-0 lg:mb-0"
          }   border-main   `}
        >
          <h2 className={` self-start ${titleClass} text-main `}>{title}</h2>
        </div>
        <div
          className={`grid gap-y-3 md:gap-y-5 ${
            vertical ? "" : "max-w-xl"
          }  mb-0`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default HorizontalSection
