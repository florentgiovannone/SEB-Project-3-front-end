import React, { SyntheticEvent, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Footer from "./footer"
import { IWines } from "../interfaces/wine"
import { IUser } from "../interfaces/user"

export default function updateAccount({ user }: { user: null | IUser }) {

    const { userId } = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        console.log("The wine Page has mounted")
    }, [])

    React.useEffect(() => {
        async function fetchwines() {
            const resp = await fetch(`/api/rouge/user/${userId}`)
            const winesData = await resp.json()
            setFormData(winesData)
        }
        fetchwines()
    }, [])

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
        image: "",
        password: "",
        passwordConfirmation: ""
    }
    )

    function handleChange(e: any) {
        const fieldName = e.target.name
        const newFormData = structuredClone(formData)
        newFormData[fieldName as keyof typeof formData] = e.target.value
        setFormData(newFormData)
    }

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        const token = localStorage.getItem('token')
        const newFormData = structuredClone(formData)

        const resp = await axios.put(`/api/rouge/user/${userId}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(resp.data)
        navigate(`/dashboard`)
        window.location.reload();
    }
    console.log(formData)


    return <> <div className="section">
        <div className="container">
            <form >
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
                    </div>
                </div>
                {/* <div className="field  mt-4">
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
                    </div>
                </div> */}
                <div>{user &&<button onClick={handleSubmit} className="button m-6  border-is-rouge">Update</button>}</div>
            </form>
        </div>

    </div>
            <Footer/></>
}