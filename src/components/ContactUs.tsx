import React from "react"

function ContactUs() {
  React.useEffect(() => {
    console.log("The Contact Us Page has mounted")
  }, [])
  return (
    <section>
    <p>Contact Us</p>
    </section>
  )
}
export default ContactUs