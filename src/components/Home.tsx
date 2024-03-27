import React from "react"
import Footer from "./footer"
import { IUser } from "../interfaces/user";

interface NavbarProps {
  user: null | IUser,
  setUser: Function
}

function Home({ user, setUser }: NavbarProps) {
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
              {!user && <a href="/signup"><button className="button background-is-rouge m-4"  >Get Started</button></a>}
              {user && <a href="/wines"><button className="button background-is-rouge m-4"  >See all wines</button></a>}
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