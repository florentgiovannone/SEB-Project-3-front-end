import { SyntheticEvent, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Footer from "./footer"
import React from "react"
import { baseUrl } from "../config";

export default function CreateWine() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({

        winery: "",
        wineName: "",
        country: "",
        region: "",
        style: "",
        grapes: "",
        vintage: "",
        image:""
    }
    )

    const [errorData, setErrorData] = useState("")

    function handleChange(e: any) {
        const fieldName = e.target.name
        const newFormData = structuredClone(formData)
        newFormData[fieldName as keyof typeof formData] = e.target.value
        setFormData(newFormData)
        setErrorData("")
    }

    async function handleSubmit(e: SyntheticEvent) {
        try {
            e.preventDefault()
            const token = localStorage.getItem('token')
            const resp = await axios.post(`${baseUrl}/rouge/wines`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newFormData = structuredClone(formData)
            if (resp.data.message) {throw new Error(resp.data.message);
            }
            navigate('/wines')
        } catch (e: any) {
            setErrorData(e.message)
        }
    }


    return <> <div className="section">
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Winery <span className="has-text-danger">*</span></label>
                    <div className="control">
                        <input
                            className="input border-is-rouge"
                            placeholder="Winery"
                            type="text"
                            name={'winery'}
                            onChange={handleChange}
                            value={formData.winery}
                        />
                    </div>
                </div>
                <div className="field mt-4">
                    <label className="label">Wine name <span className="has-text-danger">*</span></label>
                    <div className="control">
                        <input
                            className="input border-is-rouge"
                            placeholder="Wine name"
                            type="text"
                            name={'wineName'}
                            onChange={handleChange}
                            value={formData.wineName}
                        />
                    </div>
                </div>
                <div className="field mt-4">
                    <label className="label">Country <span className="has-text-danger">*</span></label>
                    <div className="control">
                        <input
                            className="input border-is-rouge"
                            placeholder="Country"
                            type="text"
                            name={'country'}
                            onChange={handleChange}
                            value={formData.country}
                        />
                    </div>
                </div>
                <div className="field mt-4">
                    <label className="label">Region <span className="has-text-danger">*</span></label>
                    <div className="control">
                        <input
                            className="input border-is-rouge"
                            placeholder="Region"
                            type="text"
                            name={'region'}
                            onChange={handleChange}
                            value={formData.region}
                        />
                    </div>
                </div>
                <div className="field mt-4">
                    <label className="label">Grapes <span className="has-text-danger">*</span></label>
                    <div className="control">
                        <input
                            className="input border-is-rouge"
                            placeholder="Grapes"
                            type="text"
                            name={'grapes'}
                            onChange={handleChange}
                            value={formData.grapes}
                        />
                    </div>
                </div>
                <div className="field mt-4">
                    <label className="label">Style <span className="has-text-danger">*</span></label>
                    <div className="control ">
                        <div className="select">
                            <select
                                className="input border-is-rouge"
                                name={'style'} onChange={handleChange}
                                value={formData.style}>
                                <option value="" disabled selected>- Choose from the below -</option>
                                <option value="Sparkling">Sparkling</option>
                                <option value="White">White</option>
                                <option value="Red">Red</option>
                                <option value="Rose">Rose</option>
                                <option value="Sweet">Sweet</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field mt-4">
                    <label className="label">Vintage <span className="has-text-danger">*</span></label>
                    <div className="control">
                        <input
                            className="input border-is-rouge"
                            placeholder="Vintage"
                            type="text"
                            name={'vintage'}
                            onChange={handleChange}
                            value={formData.vintage}
                        />
                        {errorData && <small className="has-text-danger">{errorData}</small>}

                    </div>
                </div>
                <div className="field  mt-4">
                    <label className="label">image <span className="has-text-danger">*</span></label>
                    <div className="control">
                        <input
                            className="input border-is-rouge"
                            placeholder="http image link"
                            type="text"
                            name={'Image'}
                            onChange={handleChange}
                            value={formData.image}
                        />
                    </div>
                </div>
                <button className="mt-4 button border-is-rouge">Submit</button>
            </form>
        </div>

    </div>
        <Footer /></>
}