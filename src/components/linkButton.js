import React from "react";
import linkButtonStyles from "./linkButton.module.css"

// const sayhi = console.log

export default (props) => (
  <div className={linkButtonStyles.linkButtonContainer}>
    <button className={linkButtonStyles.linkButton}>{props.buttonText}</button>
  </div>
);