import React from "react"
import { Link } from "gatsby"
// import { Link } from "gatsby"

class LinkButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="linkButtonContainer flex justify-center mt-7  ">
        <Link
          to={`/${this.props.linkToPage}`}
          className="linkButton text-tertiary hover:text-secondary text-4xl font-semibold p-4 rounded-2xl  bg-main relative "
        >
          {this.props.buttonText}
        </Link>
      </div>
    )
  }
}

export default LinkButton
