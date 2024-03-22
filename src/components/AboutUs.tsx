import React from "react"
function AboutUs() {
  React.useEffect(() => {
    console.log("The about us Page has mounted")
  }, [])
  return (
    <section>
    <p>About us</p>
    </section>
  )
}
export default AboutUs