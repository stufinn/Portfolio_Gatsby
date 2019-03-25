import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import contactStyles from "./contact.module.css"

export default () => (
  <div>
    {" "}
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>Contact</title>{" "}
    </Helmet>
    <Layout>
      <div className={contactStyles.contactContent}>
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
          github: <a href="https://github.com/stufinn">github.com/stufinn</a>
        </p>
      </div>
    </Layout>
  </div>
)
