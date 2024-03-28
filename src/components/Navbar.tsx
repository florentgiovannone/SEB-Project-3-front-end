import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/user";
import Logo from "../assets/images/rouge_logo.png";
import { useState } from "react";

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

function Navbar({ user, setUser }: NavbarProps) {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  function toggleNavbar() {
    setIsActive(!isActive);
  }

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: "70px",
              width: "70px",
              objectFit: "cover",
            }}
          />
        </Link>
        <a
          role="button"
          className={`navbar-burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleNavbar}
          style={{ padding: "1rem" }} // Add padding to the toggle button
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start" style={{ padding: "1rem" }}> {/* Add padding to the menu items */}
          <Link
            to="/"
            className="navbar-item is-size-6 has-text-weight-semibold py-4" // Increase font size and padding
          >
            Home
          </Link>
          <Link
            to="/wines"
            className="navbar-item is-size-6 has-text-weight-semibold py-4" // Increase font size and padding
          >
            Wine List API
          </Link>
          <Link
            to="/aboutus"
            className="navbar-item is-size-6 has-text-weight-semibold py-4" // Increase font size and padding
          >
            About us
          </Link>
          <Link
            to="/contactus"
            className="navbar-item is-size-6 has-text-weight-semibold py-4" // Increase font size and padding
          >
            Contact us
          </Link>
          {user && (
            <Link
              to="/create"
              className="navbar-item is-size-6 has-text-weight-semibold py-4" // Increase font size and padding
            >
              Create Wines
            </Link>
          )}
        </div>

        <div className="navbar-end">
          <div className="navbar-item py-0 px-3">
            <div className="buttons">
              {user ? (
                <>
                  <button
                    onClick={logout}
                    className="button is-light is-size-6 has-text-weight-semibold"
                  >
                    Logout
                  </button>
                  <Link
                    to="/dashboard"
                    className="navbar-item is-size-6 has-text-weight-semibold"
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="button is-rouge is-light is-size-5 has-text-weight-semibold button-wrapper"
                  >
                    <strong>Sign up</strong>
                  </Link>
                  <Link
                    to="/login"
                    className="button is-rouge is-light is-size-5 has-text-weight-semibold button-wrapper"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;