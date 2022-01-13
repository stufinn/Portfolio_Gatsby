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
      className="grid gap-y-3 text-left  w-full max-w-2xl"
    >
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
        className="bg-main hover:bg-white hover:text-main mt-5 w-fit px-5 pb-2 pt-1 justify-self-end rounded-md "
      >
        Submit
      </button>
    </form>
  )
}

export default ContactFormNew
