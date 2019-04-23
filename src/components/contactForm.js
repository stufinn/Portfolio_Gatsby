import React from "react"
import contactFormStyles from "./contactForm.module.css"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const name = e.target.elements.name.value
    if (name) {
      console.log(name)
      // this.props.handleShowForm()
      this.props.handleDisplaySubmitMsg()
      this.props.handleHideForm()
      // alert("Submitted!")
      e.target.elements.name.value = ""
    }
  }
  render() {
    return (
      <div className={contactFormStyles.contactFormContainer}>
        <form
          onSubmit={this.handleSubmit}
          className={contactFormStyles.contactForm}
        >
          <input
            type="text"
            placeholder="Your name here"
            name="name"
            className={contactFormStyles.formField}
            required
          />
          <input
            type="email"
            placeholder="email address"
            className={contactFormStyles.formField}
            name="email"
          />

          <textarea
            rows="4"
            cols="30"
            name="message"
            placeholder="Your message here"
            className={contactFormStyles.formField}
          />

          <button type="submit" className={contactFormStyles.button}>
            Send message
          </button>
        </form>
      </div>
    )
  }
}

export default ContactForm
