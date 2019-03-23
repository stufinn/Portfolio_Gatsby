import React from "react"
import headerStyles from "./header.module.css"

export default () => (
  <div className={headerStyles.header}>
    <div>
      <h1 className={headerStyles.mainName}>Stu Finn</h1>
      <div className={headerStyles.headLine} />
      <h2 className={headerStyles.subTitle}>Web design & development</h2>
    </div>
  </div>
)
