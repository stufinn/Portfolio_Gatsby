import React from "react"

const Label = ({ children, text = "" }) => (
  <label className="grid text-tertiary">
    <span className="mb-1 text-white">{text}</span>
    {children}
  </label>
)

const ContactFormNew = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="grid gap-y-3 text-left  w-full max-w-2xl"
    >
      {/* If this hidden input isn't included, the form won't get to where it needs to go */}
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      {/* ref: https://cobwwweb.com/how-to-use-netlify-forms-with-gatsby || https://stackoverflow.com/questions/61318577/netify-gatsby-form-submission-not-working-with-custom-success-component*/}
      {/* Don't forget this field - won't work without it! */}
      {/* DOCS: https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-static-site-generators */}
      <input type="hidden" name="form-name" value="contact" />
      {/* HP */}
      <div className="hidden">
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
        <input name="bot-field" />
      </div>
      {/* End HP */}
      <Label text="Your name:">
        <input type="text" name="name" required />
      </Label>
      <Label text="Your email:">
        <input type="email" name="email" required />
      </Label>
      <Label text="Message:">
        <textarea name="message" required placeholder="Your Message"></textarea>
      </Label>
      <button
        type="submit"
        className="bg-main hover:bg-white font-semibold  text-tertiary mt-5 w-fit px-5 pb-2 pt-1 justify-self-end rounded-md "
      >
        Submit
      </button>
    </form>
  )
}

export default ContactFormNew
