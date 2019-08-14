import React from "react"
import Helmet from "react-helmet"

import ContactForm from "../components/contactForm"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.handleHideForm = this.handleHideForm.bind(this)
    this.handleDisplaySubmitMsg = this.handleDisplaySubmitMsg.bind(this)
    this.handleHideSubmitMsg = this.handleHideSubmitMsg.bind(this)
    this.state = {
      submitted: false,
      displayForm: true,
    }
  }

  handleHideForm() {
    this.setState(prevState => {
      return {
        displayForm: false,
      }
    })
  }

  handleDisplaySubmitMsg() {
    this.setState(() => {
      return {
        submitted: true,
      }
    })
  }

  handleHideSubmitMsg() {
    this.setState(() => {
      return {
        submitted: false,
      }
    })
  }

  render() {
    return (
      <div>
        {" "}
        <Helmet>
          {" "}
          <meta charSet="utf-8" /> <title>Contact</title>{" "}
        </Helmet>
        <div>
          <div className="contactPage">
            <h2>Contact Stu</h2>
            <h3>phone</h3>
            <p>807.220.0856</p>
            <h3>email</h3>
            <p>
              <a href="mailto:stu.finn@gmail.com">stu.finn@gmail.com</a>
            </p>
            <h3>social</h3>
            <p>
              twitter: <a href="https://twitter.com/stufinn">@stufinn</a>
            </p>
            <p>
              github:{" "}
              <a href="https://github.com/stufinn">github.com/stufinn</a>
            </p>
            {/* <h3>...or send a message!</h3>
            {this.state.displayForm && (
              <ContactForm
                handleHideForm={this.handleHideForm}
                handleDisplaySubmitMsg={this.handleDisplaySubmitMsg}
              />
            )}
            {this.state.submitted && (
              <div className="contactPage__formResponse">
                <p>Thanks for your message!</p>
                <p>I'll be in touch soon.</p>
                <button>Send another</button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
