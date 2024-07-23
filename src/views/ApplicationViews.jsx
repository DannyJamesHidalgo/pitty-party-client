import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../components/auth/Login.jsx"
import Home from "../components/Home"
import { Register } from '../components/auth/Register.jsx'
import { DogDetails } from '../components/DogDetails.jsx'
import { AdoptionApplicationForm } from '../components/ApplicationForm.jsx'


export const ApplicationViews = () => {
    // const [rocksState, setRocksState] = useState([{
    //     id: 1,
    //     name: "Sample",
    //     type: {
    //         id: 1,
    //         label: "Volcanic"
    //     }
    // }])

    // const fetchRocksFromAPI = async (showAll) => {
    //     let url =  "http://localhost:8000/rocks"
        
    //     if (showAll !== true){
    //         url = "http://localhost:8000/rocks?owner=current"
    //     }
        
        
    //     const response = await fetch(url,
    //         {
    //             headers: {
    //                 Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
    //             }
    //         })
    //     const rocks = await response.json()
    //     setRocksState(rocks)
    // }

    return (<BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/">
                <Route index element={<Home />}/>
                <Route path='dogs/:id' element={<DogDetails />}/>
                <Route path='application/:dogId' element={<AdoptionApplicationForm/>}/>

                <Route/>
                
            </Route>
          </Route>
        </Routes>
    </BrowserRouter>)
}