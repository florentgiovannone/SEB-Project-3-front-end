import React, { SyntheticEvent } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IWines } from "../interfaces/wine"
import ProductPage from "./ProductPage"
import WineCard from "./Winecard"
import axios from "axios"
import { IUser } from "../interfaces/user"
import Footer from "./footer"


function Showwine({ user }: { user: null | IUser }) {
    const [wine, updatewines] = React.useState<IWines | null>(null)
    const { wineId } = useParams()
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
    console.log(wine);
    console.log(user);


    return <> <section className="section">
        <div className="container has-text-centered is-widescreen">

                {wine && <ProductPage
                    key={wine._id}
                    {...wine}
                />}
                
            {wine && user && (user._id === wine.userName) && <button onClick={deleteWine} className="button m-6  border-is-rouge">Delete</button>}
            {wine && user && (user._id === wine.userName) && <button onClick={deleteWine} className="button m-6  border-is-rouge">Update</button>}</div>
            
    </section>
      <Footer /> </>
}

export default Showwine
