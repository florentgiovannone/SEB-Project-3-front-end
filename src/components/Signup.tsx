import { SyntheticEvent, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Footer from "./footer"
import { baseUrl } from "../config";
import React from "react";

export default function Signup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    firstName:"",
    lastName:"",
    userName: "",
    image: "",
    password: "",
    passwordConfirmation: ""
  })

  const [errorData, setErrorData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    image: "",
    password: "",
    passwordConfirmation: ""
  })

  function handleChange(e: any) {
    const fieldName = e.target.name
    const newFormData = structuredClone(formData)
    newFormData[fieldName as keyof typeof formData] = e.target.value
    setFormData(newFormData)
  }

  async function handleSubmit(e: SyntheticEvent) {
    try {
      e.preventDefault()
      const resp = await axios.post(`${baseUrl}/rouge/user`, formData)
      console.log(resp.data)
      navigate('/login')
    } catch (e: any) {
      setErrorData(e.response.data.errors)
    }
  }

  console.log(errorData)

  return <><div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field  mt-4">
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
            {errorData.userName && <small className="has-text-danger">{errorData.userName}</small>}
          </div>
        </div>
        <div className="field  mt-4">
          <label className="label">Firstname <span className="has-text-danger">*</span></label>
          <div className="control">
            <input
              className="input border-is-rouge"
              placeholder="Firstname"
              type="text"
              name={'firstName'}
              onChange={handleChange}
              value={formData.firstName}
            />
            {errorData.firstName && <small className="has-text-danger">{errorData.firstName}</small>}
          </div>
        </div>
        <div className="field  mt-4">
          <label className="label">Lastname <span className="has-text-danger">*</span></label>
          <div className="control">
            <input
              className="input border-is-rouge"
              placeholder="Lastname"
              type="text"
              name={'lastName'}
              onChange={handleChange}
              value={formData.lastName}
            />
            {errorData.lastName && <small className="has-text-danger">{errorData.lastName}</small>}
          </div>
        </div>
        <div className="field  mt-4">
          <label className="label">Email <span className="has-text-danger">*</span></label>
          <div className="control">
            <input
              className="input border-is-rouge"
              placeholder="Email"
              type="text"
              name={'email'}
              onChange={handleChange}
              value={formData.email}
            />
            {errorData.email && <small className="has-text-danger">{errorData.email}</small>}
          </div>
        </div>
        <div className="field  mt-4">
          <label className="label">Avatar <span className="has-text-danger">*</span></label>
          <div className="control">
            <input
              className="input border-is-rouge"
              placeholder="http image link"
              type="text"
              name={'image'}
              onChange={handleChange}
              value={formData.image}
            />
            {errorData.email && <small className="has-text-danger">{errorData.email}</small>}
          </div>
        </div>
        <div className="field  mt-4">
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
            {errorData.password && <small className="has-text-danger">{errorData.password}</small>}
          </div>
        </div>
        <div className="field  mt-4">
          <label className="label">Confirm password <span className="has-text-danger">*</span></label>
          <div className="control">
            <input
              className="input border-is-rouge"
              placeholder="Confirm password"
              type="password"
              name={'passwordConfirmation'}
              onChange={handleChange}
              value={formData.passwordConfirmation}
            />
            {errorData.passwordConfirmation && <small className="has-text-danger">{errorData.passwordConfirmation}</small>}
          </div>
        </div>
        <button className="button border-is-rouge  mt-4">Submit</button>
      </form>
    </div>
  </div>
  <Footer/>
  </>
}