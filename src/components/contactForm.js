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
            placeholder="You name here"
            name="name"
            classname={contactFormStyles.formField}
            required
          />
          <input type="email" placeholder="email address" name="email" />

          <textarea
            rows="4"
            cols="50"
            name="message"
            required="true"
            placeholder="Your message here"
            classname={contactFormStyles.formField}
          />

          <button type="submit">Send message</button>
        </form>
      </div>
    )
  }
}

export default ContactForm
