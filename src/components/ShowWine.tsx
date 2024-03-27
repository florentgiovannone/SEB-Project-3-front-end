import React, { SyntheticEvent, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IWines } from "../interfaces/wine"
import ProductPage from "./ProductPage"
import axios from "axios"
import { IUser } from "../interfaces/user"
import Footer from "./footer"


function Showwine({ user }: { user: null | IUser }) {
    const [wine, updatewines] = React.useState<IWines | null>(null)
    const [currentUser, updateCurrentUser] = useState(null)
    const { wineId} = useParams()
    const navigate = useNavigate()

    React.useEffect(() => {
        console.log("The wine Page has mounted")
    }, [])

    React.useEffect(() => {
        async function fetchwines() {
            const resp = await fetch(`/api/rouge/wines/${wineId}`)
            const winesData = await resp.json()
            updatewines(winesData)
        }
        fetchwines()
    }, [])

    const [text, setText] = useState("")

    async function fetchUser() {
        const token = localStorage.getItem('token')
        const resp = await axios.get(`/api/rouge/user`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        updateCurrentUser(resp.data._id)     
    }
    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) fetchUser()
    }, [])
    



    async function deleteWine(e: SyntheticEvent) {
        try {
            const token = localStorage.getItem('token')
            const resp = await axios.delete('/api/rouge/wines/' + wineId, {
                headers: { Authorization: `Bearer ${token}` }
            })
            navigate('/wines')
        } catch (error) {

        }

    }
    console.log(wine)
    console.log(currentUser)

    async function addToCave(e: SyntheticEvent){
        try {setText(<div className="notification is-grey background-is-rouge" >
                The wine was added
            </div>)
            e.preventDefault()
            const token = localStorage.getItem('token')
            const resp = await axios.post(`/api/rouge/user/cave/${currentUser}`, wine, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (e) {
        }
    }
    
    return <> <section className="section">
        <div className="container has-text-centered is-widescreen">

            {wine && <ProductPage
                key={wine._id}
                {...wine}
            />}

            {wine && user && (user.userName === wine.user.userName) && <button onClick={deleteWine} className="button m-6  border-is-rouge">Delete</button>}
            {wine && user && (user.userName === wine.user.userName) && <a href={`/update/${wineId}`}><button className="button m-6  border-is-rouge">Update</button></a>}
            {user && <button className="button m-6  border-is-rouge" onClick={addToCave}>Add to your Cave</button>}
            <div>{text}</div></div>


    </section>
        <Footer /> </>
}

export default Showwine
