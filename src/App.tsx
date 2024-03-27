import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from './components/Home'
import Navbar from "./components/Navbar"
import WineList from "./components/Winelist"
import UserList from "./components/userList";
import Signup from "./components/Signup"
import Login from "./components/Login"
import Create from "./components/Create"
import UpdateWine from "./components/Update";
import { useEffect, useState } from "react"
import axios from "axios"
import ShowWine from "./components/ShowWine"
import ShowUser from "./components/ShowUser";
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Dashboard from "./components/dashboard";
import UpdateAccount from "./components/UpdateAccount";



function App() {
  
  const [user, setUser] = useState(null)


  async function fetchUser() {
    const token = localStorage.getItem('token')
    const resp = await axios.get(`/api/rouge/user`, {
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
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/wines" element={<WineList />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/create" element={<Create  />} />
        <Route path="/update/:wineId" element={<UpdateWine user={user} />} />
        <Route path="/updateaccount/:userId" element={<UpdateAccount user={user} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login fetchUser={fetchUser}/>} />
        <Route path="/dashboard" element={<Dashboard user={user}/>} />
        <Route path="/wines/:wineId" element={<ShowWine user={user} />}/>
        <Route path="/user/:userId" element={<ShowUser user={user} />}/>
      </Routes>
    </Router>
  )
}

export default App
