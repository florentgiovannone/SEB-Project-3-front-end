import React, { SyntheticEvent, useEffect, useState, Component } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { IWines } from "../interfaces/wine"
import ProductPage from "./ProductPage"
import axios from "axios"
import { IUser } from "../interfaces/user"
import Footer from "./footer"
import { baseUrl } from "../config";

function Showwine(this: any, { user }: { user: null | IUser }) {

    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [wine, updatewines] = React.useState<IWines | null>(null)
    const [currentUser, updateCurrentUser] = useState<IUser | null>(null);
    const { wineId } = useParams()
    const navigate = useNavigate()

 



    React.useEffect(() => {
        console.log("The wine Page has mounted")
    }, [])

    React.useEffect(() => {
        async function fetchwines() {
            const resp = await fetch(`${baseUrl}/rouge/wines/${wineId}`)
            const winesData = await resp.json()
            updatewines(winesData)
        }
        fetchwines()
    }, [])

    const [text, setText] = useState("")

    function handleOpenNotification() {
        setIsNotificationOpen(true);
    }

    async function fetchUser() {
        const token = localStorage.getItem('token')
        const resp = await axios.get(`${baseUrl}/rouge/user`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        updateCurrentUser(resp.data)
    }
    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) fetchUser()
    }, [])

    const currentUserID = currentUser?._id
    const currentUserCave = currentUser?.myCave

    async function deleteWine(e: SyntheticEvent) {
        try {
            const token = localStorage.getItem('token')
            const resp = await axios.delete('${baseUrl}/rouge/wines/' + wineId, {
                headers: { Authorization: `Bearer ${token}` }
            })
            navigate('/wines')
        } catch (error) {

        }

    }

    async function addToCave(e: SyntheticEvent) {
        try {
            if (!currentUserCave) {
                setText("User's cave information not available.")
                return;
            }

            const wineAlreadyInCave = currentUserCave.some((wine: any) => wine._id === wineId);
            if (wineAlreadyInCave) {
                setText("This wine is already in your cave.");
                return;
            }

            const token = localStorage.getItem('token');
            if (!token) {
                setText("Token not available.");
                return;
            }

            setText("The wine was added");
            e.preventDefault();


            const resp = await axios.post(`${baseUrl}/rouge/user/cave/${currentUserID}`, wine, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (e) {
            setText("Error adding wine to your cave.");
        }
    }
    console.log(currentUser);
    class Parent extends React.Component {
        state = { isModalOpen: false };

        render() {
            return (<div>
                {this.state.isModalOpen &&
                    <Component onClose={() => this.setState({ isModalOpen: false })
                } />
                }
      // Stuff
            </div>);
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
            <div>{text && (
                <div className="notification is-grey background-is-rouge" >
                    <button className="delete" onClick={() => { setText(''); window.location.reload(); }} ></button>
                    {text}
                </div>)}
            </div>
        </div>


    </section>
        <Footer /> </>
}

export default Showwine
