import { SyntheticEvent, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function Login({ fetchUser }: { fetchUser: Function }) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    userName: "",
    password: ""
  })

  const [errorMessage, setErrorMessage] = useState("")

  function handleChange(e: any) {
    const fieldName = e.target.name
    const newFormData = structuredClone(formData)
    newFormData[fieldName as keyof typeof formData] = e.target.value
    setFormData(newFormData)
    setErrorMessage("")
  }

  async function handleSubmit(e: SyntheticEvent) {
    try {
      e.preventDefault()
      const resp = await axios.post('/api/rouge/login', formData)
      localStorage.setItem('token', resp.data.token)
      console.log(resp.data)
      fetchUser()
      navigate('/')
    } catch (e: any) {
      setErrorMessage(e.response.data.message)
    }
  }

  console.log(formData)

  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'userName'}
              onChange={handleChange}
              value={formData.userName}
            />
          </div>
        </div>
        <div className="">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name={'password'}
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          {errorMessage && <small className="has-text-danger">{errorMessage}</small>}
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}