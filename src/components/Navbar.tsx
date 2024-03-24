import { Link, useNavigate } from "react-router-dom"
import { IUser } from "../interfaces/user"


interface NavbarProps {
  user: null | IUser, 
  setUser: Function
}

function Navbar({ user, setUser }: NavbarProps) {
  console.log("user in the navbar: ", user)
  const navigate = useNavigate()

  function logout() {
    localStorage.removeItem('token')
    setUser(null)
    navigate('/')
  }
  
  return (
    <>
      <header>
        <nav className="">
          <div className="">
            <div className="">
              <Link to="/" className=" ">
                Home
              </Link>
              <Link to="/wines" className=" ">
                Winelist API
              </Link>
            <Link to="/aboutus" className=" ">
                About Us
              </Link>
            <Link to="/contactus" className=" ">
                Contact Us
              </Link>
              {user && <Link to="/create" className="">
                Create Wines
                          </Link>}
            
              {user && <button onClick={logout} className="">Logout</button>}
              {!user && <Link to="/signup" className="">
                Sign Up
            </Link>}
              {!user && <Link to="/login" className="">
                Login
              </Link>}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar