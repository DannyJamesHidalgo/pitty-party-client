import React, { useEffect, useState } from "react";
import { getallDogs } from "../services/dog.js";
import { useNavigate } from 'react-router-dom';
import { getAllApplicationsByAdopterId } from "../services/application.js";

export const MyAdoptions=({currentUser})=>{
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate(); 

    
// const [currentUser, setCurrentUser] = useState({})
  
  
//   useEffect(() => {
//     const localUser = localStorage.getItem("pitty_token")
//     const UserObject = JSON.parse(localUser)
//     // debugger
//     setCurrentUser(UserObject)
//     // fetchTheDogs(currentUser)
    
            
//   }, [])
    

  useEffect(()=>{
    getAllApplicationsByAdopterId(currentUser.id).then(dogsArray =>{
        setApplications(dogsArray)
    })

  },[currentUser])


    
    
    
    
    
  return (
    <main className='bg-gray-100 min-h-screen flex items-center justify-center p-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto'>
            {applications.map((application, index) => (
                <div key={application.id} className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6'>
                    <img className='w-full h-48 object-cover' src={application.dog?.image_url || "https://via.placeholder.com/150"} alt={`Dog ${index + 1}`} />
                    <div className='mt-4'>
                        <div className='font-bold text-xl mb-2'>{application.dog?.name}</div>
                        <p className='text-gray-700'>Age: {application.dog?.age}</p>
                        <p className='text-gray-700'>Breed: {application.dog?.breed}</p>
                    </div>
                    <div className='mt-4'>
                        <button onClick={() => navigate(`/applicationreview/${application.id}`)} className="inline-block bg-blue-500 text-white px-4 py-2 rounded transition duration-150 ease-in-out transform hover:scale-105">
                            View Application
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </main>
);
}