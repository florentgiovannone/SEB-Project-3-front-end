import React from "react"
import UserCard from "./userCard"
import { IUser } from "../interfaces/user"
import Footer from "./footer"
import { baseUrl } from "../config"


type User = null | Array<IUser>
function UserList() {
  const [user, setUser] = React.useState<User>(null)
  React.useEffect(() => {
    async function fetchuser() {
      const resp = await fetch(`${baseUrl}/rouge/users`)
      const data = await resp.json()
      setUser(data)
    }
    fetchuser()
  }, [])

  const [search, setSearch] = React.useState("");

  function handleChange(e: any) {
    setSearch(e.currentTarget.value);
  }

  function filterWines() {
    return user?.filter((user: { firstName: string }) => {
      return user.firstName.toLowerCase().includes(search.toLowerCase())
    });
  }
  return (<><section className="container m-8">
    <div className="columns is-centered m-6">
      <div className="container">

        <input
          className="input background-is-rouge is-rounded mb-3"
          placeholder="Search character..."
          onChange={handleChange}
          value={search}
        />
        <div className="columns is-multiline is-centered mb-6">
          {filterWines()?.map((user) => {
            return <UserCard
              key={user._id}
              {...user}
            />
          })}
        </div>

      </div>
    </div>
    <div className="container mb-6">
      <div className="container mb-6">
        <div className="container mb-6">

        </div>
      </div>
    </div>


  </section>

    <Footer />
  </>)
}
export default UserList