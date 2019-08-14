import React from "react"

export default ({ projectName }) => (
  <div onClick={() => console.log(projectName)} className="projectTile">
    {projectName}
  </div>
)
