import React, { SyntheticEvent, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IWines } from "../interfaces/wine"
import ProductPage from "./ProductPage"
import axios from "axios"
import { IUser } from "../interfaces/user"
import Footer from "./footer"
import WineCardDashboard from "./Winecard dashboard"


function ShowUser({ user }: { user: null | IUser }) {
    const [neededUser, setUser] = React.useState<IUser | null>(null)
    const { userId} = useParams()

    React.useEffect(() => {
        console.log("The dash Page has mounted")
    }, [])

    React.useEffect(() => {
        async function fetchwines() {
            const resp = await fetch(`/api/rouge/user/${userId}`)
            const userData = await resp.json()
            setUser(userData)
        }
        fetchwines()
    }, [])

    
const wines = neededUser?.myCave 
    console.log(neededUser?.myCave);
    
    return <> <section className="section">
        <div className="container has-text-centered is-widescreen">

            <div className="account column is-rounded background-is-grey is-centered m-6">
                <h5 className="title has-text-black has-text-centered mb-6">{`${neededUser?.userName}'s Account`}</h5>
                <p className="is-rouge has-text-weight-semibold has-text-centered mb-3"><span className="title has-text-black is-rouge is-4">{`Firstname:`}</span> {neededUser?.firstName}</p>
                <p className="is-rouge has-text-weight-semibold has-text-centered mb-3"><span className="title has-text-black is-rouge is-4">{`Lastname:`}</span> {neededUser?.lastName}</p>
                <p className="is-rouge has-text-weight-semibold has-text-centered mb-3"><span className="title has-text-black is-rouge is-4">{`Username:`}</span> {neededUser?.userName}</p>
                <p className="is-rouge has-text-weight-semibold has-text-centered mb-3"><span className="title has-text-black is-rouge is-4">{`Email:`}</span> {neededUser?.email}</p>
            </div>
            <div className="account column is-rounded has-text-centered is-centered background-is-grey  m-6">
                <h5 className="title has-text-black has-text-centered mb-6">{`${neededUser?.userName}'s Cave`}</h5>
                <div className="columns has-text-centered is-centered m-6">
                    <div className="columns is-centered is-multiline">
                        {wines?.map((wine) => {
                            return <WineCardDashboard
                                key={wine.image}
                                {...wine}
                            />
                        })}
                    </div>
                </div>

            </div>
</div>

    </section>
        <Footer /> </>
}

export default ShowUser
