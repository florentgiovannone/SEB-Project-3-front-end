import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Navbar from "./components/Navbar"
import WineList from "./components/Winelist"
import Signup from "./components/Signup"
import Login from "./components/Login"
// import Create from "./components/"
import { useEffect, useState } from "react"
import axios from "axios"
// import ShowWine from "./components/ShowWine"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"




function App() {
  
  const [user, setUser] = useState(null)

  async function fetchUser() {
    const token = localStorage.getItem('token')
    const resp = await axios.get('/api/rouge/user', {
      headers: { Authorization: `Bearer ${token}` }
    })
    setUser(resp.data)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) fetchUser()
  }, [])
  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/wines" element={<WineList />} />
        {/* <Route path="/create" element={<Create />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login fetchUser={fetchUser}/>} />
        {/* <Route path="/wines/:wineId" element={<ShowWine user={user}/>} /> */}
      </Routes>
    </Router>
  )
}

export default App
