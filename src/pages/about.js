import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

export default () => (
  <div className="aboutContent">
    <Helmet>
      {" "}
      <meta charSet="utf-8" /> <title>About</title>{" "}
    </Helmet>
    <div>
      <h2 className="projectsTitle">About Stu</h2>
      <p style={{ paddingTop: 50 }} className="aboutPage__text">
        Hi! <span role="img">👋</span> I am a{" "}
        <span className="aboutPage--emph">software developer</span> based out of
        a beautiful little town called Sioux Lookout in Northwestern Ontario.
      </p>
      <p className="aboutPage__text">
        I have a passion for creating{" "}
        <span className="aboutPage--emph">interesting</span>,{" "}
        <span className="aboutPage--emph">helpful</span>, and hopefully even{" "}
        <span className="aboutPage--emph">beautiful</span> things with{" "}
        <span className="aboutPage--emph">code</span>. I’ve got a background in
        web development (surprise, surprise), biological sciences (Honours
        Bsc.), international development (minor), and environmental studies
        (Masters). I am also a certified professional project manager (PMP),
        when my credential isn’t lapsed that is (<span role="img">😬</span>… I’m
        on it!).
      </p>
      <p className="aboutPage__text">
        The websites that I create are often inspired by{" "}
        <span className="aboutPage--emph">nature</span> and{" "}
        <span className="aboutPage--emph">minimalistic design</span>. I love
        building products that look amazing and are easy to use. If you are
        interested in my work, please check out{" "}
        <Link to="/portfolio" className="aboutPage--emph">
          my portfolio
        </Link>{" "}
        page or{" "}
        <Link to="/contact" className="aboutPage--emph">
          contact me
        </Link>
        .
      </p>
    </div>
  </div>
)
