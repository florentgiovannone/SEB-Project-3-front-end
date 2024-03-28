import { Link } from "react-router-dom";
import Wave from "react-wavify";
import footerLogo from "../assets/rougepict.png";

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function Footer() {
  return (
    <>
      <Wave
        fill="#9F2A43"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.3,
          points: 3,
        }}
      />
      <footer className="footer background-is-rouge p-0">
        <div className="content has-text-white has-text-centered">
          <div className="level">
            <div className="level-left">
              <Link to="/" className="m-6 is-grey">
                Home
              </Link>
              <Link to="/wines" className="m-6 is-grey">
                Winelist API
              </Link>
              <Link to="/aboutus" className="m-6 is-grey">
                About Us
              </Link>
              <Link to="/contactus" className="m-6 is-grey">
                Contact Us
              </Link>
            </div>
            <div className="level-right m-6 is-grey">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="text-white hover:text-gray-300" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <XIcon className="text-white hover:text-gray-300" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="text-white hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="text-white hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="has-text-centered is-grey">
          <div className="centered-container">
            <figure className="p-4 image is-96x96">
              <img src={footerLogo} alt="Rouge Logo" />
            </figure>
            <h3>&copy; Rouge</h3>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;