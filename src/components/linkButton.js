import React from "react"
import linkButtonStyles from "./linkButton.module.css"
import ContactForm from "../components/contactForm"

// const sayhi = console.log

// const form = () => <p>Form Goes Here</p>
// let showForm = false

class LinkButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleShowForm()
    this.props.handleHideSubmitMsg()
  }

  render() {
    return (
      <div className={linkButtonStyles.linkButtonContainer}>
        <button
          className={linkButtonStyles.linkButton}
          onClick={this.handleClick}
        >
          {this.props.buttonText}
        </button>
      </div>
    )
  }
}

export default LinkButton
