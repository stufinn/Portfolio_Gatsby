import React from "react"
import projectTileStyles from "./projectTile.module.css"

export default () => <div onClick={() => console.log("Hello")} className={projectTileStyles.projectTile} />
