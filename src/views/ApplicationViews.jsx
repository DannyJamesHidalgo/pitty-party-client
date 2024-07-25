import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../components/auth/Login.jsx"
import Home from "../components/Home"
import { Register } from '../components/auth/Register.jsx'
import { DogDetails } from '../components/DogDetails.jsx'
import { AdoptionApplicationForm } from '../components/ApplicationForm.jsx'
import { MyAdoptions } from '../components/MyAdoptions.jsx'
import { ApplicationReview } from '../components/ApplicationReview.jsx'


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
      const localUser = localStorage.getItem("pitty_token")
      const UserObject = JSON.parse(localUser)
      setCurrentUser(UserObject)
    }, [])

    return (<BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/">
                <Route index element={<Home />}/>
                <Route path='dogs/:id' element={<DogDetails />}/>
                <Route path='application/:dogId' element={<AdoptionApplicationForm/>}/>
                <Route path='myadoptions' element={<MyAdoptions currentUser={currentUser}/>}/>
                <Route path='applicationreview/:id' element={<ApplicationReview currentUser={currentUser}/>}/>

                <Route/>
                
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>)
}