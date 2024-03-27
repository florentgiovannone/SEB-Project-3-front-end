import { IUser } from "../interfaces/user"
import { IWines } from "../interfaces/wine";
import Footer from "./footer";
import React, { SyntheticEvent, useEffect, useState } from "react"
import axios from "axios";
import WineCardDashboard from "./Winecard dashboard";

type Wines = null | Array<IWines>
export default function Dashboard({ user }: { user: null | IUser }) {

    const [currentUser, updateCurrentUser] = useState(null)

    async function fetchUser() {
        const token = localStorage.getItem('token')
        const resp = await axios.get(`/api/rouge/user`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        updateCurrentUser(resp.data._id)
    }
    console.log(currentUser);
    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) fetchUser()
    }, [])

    const [wines, setWines] = React.useState<Wines>(null)

    React.useEffect(() => {
        async function fetchWines() {
            const token = localStorage.getItem('token')
            const resp = await fetch(`/api/rouge/user/cave/${currentUser}`)
            const data = await resp.json()
            setWines(data.myCave)

        }
        fetchWines()
    }, [currentUser])
    console.log("wines", wines);

    return <>

        <h1 className="title has-text-centered is-rouge mt-6">My Dashboard</h1>
        <div className=" columns is-centered">
            <div className="account column is-rounded background-is-grey is-two-fifths m-6">
                <h5 className="title has-text-black has-text-centered mb-6">My Account</h5>
                <p className="is-rouge has-text-weight-semibold has-text-centered mb-3"><span className="title has-text-black is-rouge is-4">{`Firstname:`}</span> {user?.firstName}</p>
                <p className="is-rouge has-text-weight-semibold has-text-centered mb-3"><span className="title has-text-black is-rouge is-4">{`Lastname:`}</span> {user?.lastName}</p>
                <p className="is-rouge has-text-weight-semibold has-text-centered mb-3"><span className="title has-text-black is-rouge is-4">{`Username:`}</span> {user?.userName}</p>
                <p className="is-rouge has-text-weight-semibold has-text-centered mb-3"><span className="title has-text-black is-rouge is-4">{`Email:`}</span> {user?.email}</p>
            </div>
            <div className="account column is-rounded background-is-grey has-text-centered is-two-fifths m-6">
                <h5 className="title has-text-black has-text-centered mb-6">My Cave</h5>
                <div className="columns is-centered m-6">
                    <div className="columns is-multiline">
                        {wines?.map((wine) => {
                            return <WineCardDashboard
                                key={wine._id}
                                {...wine}
                            />
                        })}
                    </div>
                </div>

            </div>
        </div>
        <Footer />
    </>
}