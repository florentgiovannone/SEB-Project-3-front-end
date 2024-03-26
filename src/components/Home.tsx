import React from "react"
import Footer from "./footer"



function Home() {
  React.useEffect(() => {
    console.log("The Home Page is ready!")
  }, [])

  return (<>
    <section className="hero is-fullheight" style={{ position: "relative" }}>
      <div className="hero-body p-6">
        <div className="container has-text-centered p-6">
          <div className="columns is-centered">
          <div className="column is-half">
          <h1 className="title has-text-white">
            Rouge
          </h1>
          <h2 className="subtitle has-text-white">
            an intuitiven & powerfull ine cellar builder
          </h2>
              <a href="/signup"><button className="button background-is-rouge m-4"  >Get Started</button></a>
          </div>
          </div>
        </div>
      </div>
      <Footer />
      <div className="hero-filter p-6"></div>

    </section>

  </>
  );
}

export default Home