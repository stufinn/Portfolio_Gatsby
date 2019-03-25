import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"

export default () => (
  <div>
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>About</title>{" "}
    </Helmet>
    <Layout>
      <h2>About Me</h2>
      <p>
        Bacon ipsum dolor amet short loin shank cow tri-tip, pastrami alcatra
        ground round drumstick bacon swine landjaeger kielbasa. Frankfurter jowl
        porchetta cow shoulder tri-tip short ribs andouille alcatra buffalo
        pancetta kevin.
      </p>
      <p>
        Prosciutto bresaola pork belly shankle, turducken venison swine buffalo
        biltong frankfurter ground round. Turducken ball tip leberkas shank cow
        frankfurter pancetta ribeye tongue sausage picanha alcatra salami
        hamburger ground round.
      </p>
    </Layout>
  </div>
)
