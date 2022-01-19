import React from "react"
import Img from "gatsby-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TextLink } from "./HelperComponents"

const SubTitle = ({ children }) => (
  <h3 className=" text-xl  text-main">{children}</h3>
)

const SectionText = ({ children }) => (
  <div className="ml-3 flex items-end ">{children}</div>
)

export default ({ project, tileImage }) => {
  return (
    <div className="grid gap-y-3  ">
      <div className="border-b-2 border-main">
        <h2 className="text-2xl text-center md:text-left md:text-4xl font-bold tracking-wide text-main max-w-2xl mb-1">
          {project.name}
        </h2>
      </div>

      {/* <div className="projectTile__projectName">{project.name}</div> */}
      <GatsbyImage
        className="projectTile__image  rounded-md shadow-lg shadow-neutral-900"
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
          <div className="flex flex-col md:flex-row">
            <SubTitle>Project Description</SubTitle>
            <SectionText>
              <p>{project?.description}</p>
            </SectionText>
          </div>
        ) : null}
        <div className="flex flex-col md:flex-row">
          <SubTitle>Built with:</SubTitle>{" "}
          <SectionText>
            <p className="mb-0">{project?.builtWith}</p>
          </SectionText>
        </div>
        {project?.link && (
          <div className="flex flex-col md:flex-row">
            <SubTitle>Website:</SubTitle>
            <SectionText>
              <TextLink
                text={project.link}
                url={project.link}
                linkColor="text-white hover:text-main"
              />
            </SectionText>
          </div>
        )}
      </div>
    </div>
  )
}
