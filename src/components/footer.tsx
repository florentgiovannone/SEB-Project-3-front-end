import { Link, useNavigate } from "react-router-dom"
import { IUser } from "../interfaces/user"
import Wave from "react-wavify"


function Footer() {

  return (<>< Wave
    fill='#9F2A43'
    paused={false}
    style={{ display: 'flex' }}
    options={{
      height: 20,
      amplitude: 50,
      speed: 0.3,
      points: 3
    }} />
    <footer className="footer background-is-rouge p-0">
      <div className="content has-text-white has-text-centered">
        <Link to="/" className="m-6 is-grey">
          Home
        </Link>
        <Link to="/wines" className="m-6 is-grey">
          Winelist API
        </Link>
        <Link to="/aboutus" className="m-6 is-grey">
          About Us
        </Link>
        <Link to="/contactus" className="
        m-6 is-grey">
          Contact Us
        </Link>
      </div>
      <div className="has-text-centered is-grey">
        <div className="centered-container">
          <figure className=" p-4 image is-96x96">
            <img src="src/assets/rouge_logo.png" alt="Rouge Logo" />
          </figure>
          <h3>&copy; Rouge</h3>
        </div>
      </div>

    </footer>
  </>
  )
}

export default Footer