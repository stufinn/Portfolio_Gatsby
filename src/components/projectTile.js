import React from "react"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TextLink } from "./HelperComponents"

const SubTitle = ({ children }) => (
  <h3 className=" text-xl md:text-2xl text-white">{children}</h3>
)

const SectionText = ({ children }) => <div className="ml-3">{children}</div>

export default ({ project, tileImage }) => {
  return (
    <div className="grid gap-y-3 ">
      <div className="border-b-2 border-main">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-main max-w-2xl mb-1">
          {project.name}
        </h2>
      </div>

      {/* <div className="projectTile__projectName">{project.name}</div> */}
      <GatsbyImage
        className="projectTile__image  rounded-md "
        image={getImage(tileImage)}
        alt={`${project.name} website`}
        title={project.name}
      />

      <div className="grid gap-y-2">
        {/* <div className="italic">
          A{" "}
          <TextLink
            url="https://www.borealisweb.ca"
            text={"Borealis Web Development"}
          />{" "}
          project
        </div> */}
        {/* <div>
          Web Design:{" "}
          <TextLink text={project.design.by} url={project.design.url} />
        </div> */}
        {project.description ? (
          <div>
            <SubTitle>Project Description</SubTitle>
            <SectionText>
              <p>{project?.description}</p>
            </SectionText>
          </div>
        ) : null}
        <div>
          <SubTitle>Built with</SubTitle>{" "}
          <SectionText>
            <p>GatsbyJS, React, Tailwind CSS, Shopify, Sanity CMS</p>
          </SectionText>
        </div>
        <div>
          <SubTitle>Live website</SubTitle>
          <SectionText>
            <TextLink text={project.link} url={project.link} />
          </SectionText>
        </div>
      </div>
    </div>
  )
}
