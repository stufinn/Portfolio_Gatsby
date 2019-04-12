import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import IndexContent from "../components/indexContent"
import LinkButton from "../components/linkButton"
import ContactForm from "../components/contactForm"
import indexStyles from "./index.module.css"

// const sayHello = () =>

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.handleShowForm = this.handleShowForm.bind(this)
    this.handleHideForm = this.handleHideForm.bind(this)
    this.handleDisplaySubmitMsg = this.handleDisplaySubmitMsg.bind(this)
    this.handleHideSubmitMsg = this.handleHideSubmitMsg.bind(this)
    this.state = {
      displayForm: false,
      submitted: false,
    }
  }

  // displayForm = false

  // clickHandler() {
  //   let tempState = { ...this.state.pageDetails }
  //   // tempState = !tempState
  //   console.log(tempState)
  //   // this.setState({ displayForm: tempState })
  //   // alert(tempState.displayForm)
  // }

  handleShowForm() {
    this.setState(prevState => {
      return {
        displayForm: true,
      }
    })
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
    // let displayForm = false

    return (
      <div>
        <Helmet>
          {" "}
          <meta charSet="utf-8" /> <title>Stu Finn</title>{" "}
        </Helmet>

        <Layout>
          <IndexContent />
          <LinkButton
            buttonText="Get in touch!"
            handleShowForm={this.handleShowForm}
            handleHideSubmitMsg={this.handleHideSubmitMsg}
          />
          {this.state.displayForm && (
            <ContactForm
              handleHideForm={this.handleHideForm}
              handleDisplaySubmitMsg={this.handleDisplaySubmitMsg}
            />
          )}
          {this.state.submitted && (
            <div className={indexStyles.formResponse}>
              <h2>Thanks for your message.</h2>
              <p>I'll be in touch soon!</p>
            </div>
          )}
        </Layout>
      </div>
    )
  }
}

// export default () => (
//   <div>
//     <Helmet>
//       {" "}
//       <meta charSet="utf-8" /> <title>Stu Finn</title>{" "}
//     </Helmet>

//     <Layout>
//       <IndexContent />
//       <LinkButton buttonText="Get in touch!" sayHello={sayHello} />
//     </Layout>
//   </div>
// )

export default Index
