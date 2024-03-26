import { SyntheticEvent, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function CreateWine() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({

        winery: "",
        wineName: "",
        country: "",
        region: "",
        style: "",
        grapes: "",
        vintage: ""
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

        const resp = await axios.post('/api/rouge/wines', formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(resp.data)
        navigate('/wines')
    }
    console.log(formData)


    return <div className="section">
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Winery</label>
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
                    <label className="label">Wine name</label>
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
                    <label className="label">Country</label>
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
                    <label className="label">Region</label>
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
                    <label className="label">Grapes</label>
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
                    <label className="label">Style</label>
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
                    <label className="label">Vintage</label>
                    <div className="control">
                        <input
                            className="input border-is-rouge"
                            placeholder="Vintage"
                            type="text"
                            name={'vintage'}
                            onChange={handleChange}
                            value={formData.vintage}
                        />
                    </div>
                </div>
                <button className="mt-4 button border-is-rouge">Submit</button>
            </form>
        </div>
    </div>
}