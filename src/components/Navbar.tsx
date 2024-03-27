import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/user";
import Logo from "../assets/rouge_logo.png"

interface NavbarProps {
  user: null | IUser, 
  setUser: Function
}

function Navbar({ user, setUser }: NavbarProps) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  }
  
  return (
    <div className="has-background-white">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand" >
          <Link to="/" >
            <img
              alt="Logo"
              src={Logo}
              style={{
                height: '80px',
                width: '80px',
                objectFit: 'cover',
              }}
            />
          </Link>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item is-size-5 has-text-weight-semibold">
              Home
            </Link>
            <Link to="/wines" className="navbar-item is-size-5 has-text-weight-semibold">
              Wine List API
            </Link>
            <Link to="/aboutus" className="navbar-item is-size-5 has-text-weight-semibold">
              About us
            </Link>
            <Link to="/contactus" className="navbar-item is-size-5 has-text-weight-semibold">
              Contact us
            </Link>
            {user && <Link to="/create" className="navbar-item is-size-5 has-text-weight-semibold">
              Create Wines
            </Link>}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {user ? (<>
                  <button onClick={logout} className="button is-light is-size-5 has-text-weight-semibold">
                    Logout
                  </button>
                              {user && <Link to="/dashboard" className="navbar-item is-size-5 has-text-weight-semibold">
                  Dashboard
                  </Link>}
                  </>
                ) : (
                  <>
                    <Link to="/signup" className="button is-rouge is-light is-size-5 has-text-weight-semibold button-wrapper">
                      Sign Up
                    </Link>
                    <Link to="/login" className="button is-rouge is-light is-size-5 has-text-weight-semibold button-wrapper">
                      Login
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;