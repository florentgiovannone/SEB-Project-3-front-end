import React, { SyntheticEvent, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IWines } from "../interfaces/wine"
import ProductPage from "./ProductPage"
import axios from "axios"
import { IUser } from "../interfaces/user"
import Footer from "./footer"
import WineCardDashboard from "./WinecardDashboard"
import { baseUrl } from "../config";
type Wines = null | Array<IWines>
function ShowUser({ user }: { user: null | IUser }) {

    const { userId } = useParams()

    React.useEffect(() => {
        console.log("The dash Page has mounted")
    }, [])



    const [neededUser, setUser] = React.useState<IUser | null>(null)
    React.useEffect(() => {
        async function fetchwines() {
            const resp = await fetch(`${baseUrl}/rouge/user/${userId}`)
            const userData = await resp.json()
            setUser(userData)
        }
        fetchwines()
    }, [])

    const [wines, setWines] = React.useState<Wines>(null)
    React.useEffect(() => {
        async function fetchWines() {
            const token = localStorage.getItem('token')
            const resp = await fetch(`${baseUrl}/rouge/user/cave/${neededUser?._id}`)
            const data = await resp.json()
            setWines(data.myCave)

        }
        fetchWines()
    }, [neededUser?._id])
    console.log(wines);

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
                        {wines?.map((wine: JSX.IntrinsicAttributes & IWines) => {
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
