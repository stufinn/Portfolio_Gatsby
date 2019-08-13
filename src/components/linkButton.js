import React from "react"
import { Link } from "gatsby"
// import { Link } from "gatsby"

class LinkButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    alert("Link to contact page!")
  }

  render() {
    return (
      <div className="linkButtonContainer">
        <Link to="/contact" className="linkButton">
          {this.props.buttonText}
        </Link>
      </div>
    )
  }
}

export default LinkButton
