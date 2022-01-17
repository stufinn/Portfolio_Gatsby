import React from "react"

export const Emph = ({ children, className = "" }) => (
  <span className={`text-main text-3xl ${className}`}>{children}</span>
)

export const H1 = ({ children, className = "" }) => (
  <h1 className={` text-5xl md:text-6xl text-center ${className}`}>
    {children}
  </h1>
)

export const H2 = ({ children, onClick = null, className = "" }) => (
  <h2
    onClick={onClick}
    className={`mt-10 mb-5 text-4xl md:text-5xl text-main ${className}`}
  >
    {children}
  </h2>
)

export const LogoLink = ({ url = "/", children }) => (
  <Emph>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex text-white hover:text-main  items-center"
    >
      {children}
    </a>
  </Emph>
)

export const LogoContainer = ({ children }) => (
  <span className="inline-flex flex-col mr-1 text-3xl ">{children}</span>
)
