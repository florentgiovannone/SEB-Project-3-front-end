import { SyntheticEvent, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Footer from "./footer"
import { baseUrl } from "../config";
import React from "react";

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
      const resp = await axios.post(`${baseUrl}/rouge/login`, formData)
      localStorage.setItem('token', resp.data.token)
      console.log(resp.data)
      fetchUser()
      navigate('/')
    } catch (e: any) {
      setErrorMessage(e.response.data.message)
    }
  }
  console.log(formData)

  return <> <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field mt-4">
          <label className="label">Username <span className="has-text-danger">*</span></label>
          <div className="control">
            <input
              className="input border-is-rouge"
              placeholder="Username"
              type="text"
              name={'userName'}
              onChange={handleChange}
              value={formData.userName}
            />
          </div>
        </div>
        <div className="field mt-4">
          <label className="label">Password <span className="has-text-danger">*</span></label>
          <div className="control">
            <input
              className="input border-is-rouge"
              placeholder="Password"
              type="password"
              name={'password'}
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          {errorMessage && <small className="has-text-danger">{errorMessage}</small>}
        </div>
        <button className="button border-is-rouge mt-4">Submit</button>
      </form>
    </div>
  </div>
    <Footer />
  </>
}