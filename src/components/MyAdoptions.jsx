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

//    const fetchTheDogs =(currentUser)=>{getAllApplicationsByAdopterId(parseInt(currentUser.id)).then(dogsArray =>{
//     setDogs(dogsArray)
// })}
    
    
    
    // useEffect(() => {
    //     getAllApplicationsByAdopterId(parseInt(currentUser.id)).then(dogsArray =>{
    //         setDogs(dogsArray)
    //     })
        
    // }, [currentUser]);
    
    
    
    
    
    return (
        <main className='bg-gray-100 min-h-screen flex items-center justify-center'>
            <div className='grid grid-cols-4 gap-6'>
                {applications?.map((application, index) => (
                    <div key={application.id} className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
                        <img className='w-full h-48 object-cover' src={application.dog?.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8apkf3HyDCU2zv3nUr0DibTcZ04eHRKOcurGB6y9l-2adXYbDdQegc2ORW_PFq76sUiw&usqp=CAU"} alt={`Dog ${index + 1}`} />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>{application.dog?.name}</div>
                            
                        </div>
                        <div className='px-6 pt-4 pb-2'>
                            {/* Example action button */}
                            
                            <button onClick={()=>navigate(`/applicationreview/${application.id}`)}  className="inline-block bg-blue-500 text-white px-4 py-2 rounded transition duration-150 ease-in-out transform hover:scale-110">
                                View Application
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
  }

