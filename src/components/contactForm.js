import React from "react"

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
      <div className="contactForm__Container">
        <form onSubmit={this.handleSubmit} className="contactForm">
          <input
            type="text"
            placeholder="Your name here"
            name="name"
            className="contactPage__formField"
            required
          />
          <input
            type="email"
            placeholder="email address"
            className="contactPage__formField"
            name="email"
          />

          <textarea
            rows="4"
            cols="30"
            name="message"
            placeholder="Your message here"
            className="contactPage__formField"
          />

          <button type="submit" className="contactForm__button">
            Send message
          </button>
        </form>
      </div>
    )
  }
}

export default ContactForm
