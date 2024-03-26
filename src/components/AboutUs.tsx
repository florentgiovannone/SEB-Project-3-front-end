import React from "react"
import Footer from "./footer"

function AboutUs() {
  React.useEffect(() => {
    console.log("The about us Page has mounted")
  }, [])
  return (<>
    <section className="section is-flex is-flex-direction-column is-align-items-center is-justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="container text-center">
        <h1 className="title is-1">About Us 🍇</h1>
        <p className="subtitle is-3">
          Discover the story behind Rouge Wine.
        </p>
        <div className="content">
          <p>
            At Rouge Wine, the rich world of wines is brought to your screen with finesse by
            Dinul Haque and Florent Giovannone, a duo of design and wine expertise.
          </p>
          <p>
            While Dinul's eye for design transforms your browsing experience,
            Florent's extensive knowledge ensures that only the finest wines make it to your glass.
            Together, they've melded HTML, CSS (Bulma), MongoDB, and TypeScript into
            this seamless platform.
          </p>
          <p>
            We invite you to explore our wine selections within a site themed after the classic
            allure of wine cellars, paired with modern design elements.
          </p>
          <p>👨‍💻 Meet the Team:</p>
          <ul className="list-disc list-inside">
            <li>Florent Giovannone - The Wine Expert & Software Engineer</li>
            <li>Dinul Haque - Software Engineer</li>
          </ul>
        </div>
      </div>
    </section>
    <Footer />
  </>
  );
};
export default AboutUs